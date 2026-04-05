import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '20mb' }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Models to try in order of preference (fallback chain)
const MODEL_CHAIN = ['gemini-2.5-flash', 'gemini-2.0-flash-lite'];

async function tryGenerateContent(contentArgs) {
  let lastError;
  for (const modelName of MODEL_CHAIN) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(contentArgs);
      console.log(`✅ Success with model: ${modelName}`);
      return result;
    } catch (err) {
      console.warn(`⚠️ Model ${modelName} failed: ${err.status || err.message}`);
      lastError = err;
      // Only retry on quota/not-found errors
      if (err.status !== 429 && err.status !== 404) throw err;
    }
  }
  throw lastError;
}

const SYSTEM_PROMPT = `You are a pharmaceutical assistant. The user has either uploaded a prescription image or typed a medicine name. Extract each medicine name and dosage. For each medicine, identify the active salt/generic name, the medical condition it treats, list 2-3 affordable Indian generic brand alternatives with approximate INR price range, calculate % savings, generate a match score for each generic alternative, list common side effects of both branded and generic, identify the dominant medical condition if multiple medications exist, and provide 4-5 non-medicine lifestyle recovery tips for the dominant condition.

You MUST return ONLY a valid JSON object with NO markdown formatting, NO code fences, and NO explanation. The JSON must follow this exact schema:

{
  "dominantCondition": "string - the primary medical condition being treated",
  "medications": [
    {
      "brandName": "string - the branded medicine name",
      "dosage": "string - dosage info e.g. 500mg",
      "genericName": "string - active ingredient / salt name",
      "condition": "string - medical condition it treats, e.g. Pain & Inflammation",
      "conditionCategory": "one of: headache, cardiac, respiratory, mental, musculoskeletal, digestive, skin, eye, infection, diabetes, allergy, thyroid, liver, kidney, blood_pressure, cholesterol, other",
      "alternatives": [
        {
          "name": "string - generic brand name available in India",
          "manufacturer": "string - manufacturer name",
          "priceRange": "string - e.g. ₹15-25 for a strip of 10",
          "savingsPercent": 65,
          "matchScore": 92
        }
      ],
      "sideEffects": {
        "branded": ["string - side effect 1", "string - side effect 2"],
        "generic": ["string - side effect 1", "string - side effect 2"]
      }
    }
  ],
  "recoveryTips": [
    "string - lifestyle tip 1",
    "string - lifestyle tip 2",
    "string - lifestyle tip 3",
    "string - lifestyle tip 4",
    "string - lifestyle tip 5"
  ]
}

Important rules:
- matchScore should be a number between 50-99
- savingsPercent should be a realistic number between 20-90
- Always provide 2-3 alternatives per medicine
- Side effects should have 3-5 items each for branded and generic
- Recovery tips should be 4-5 practical lifestyle recommendations
- Prices should be realistic for Indian market in INR
- conditionCategory must be one of the listed values
- Return ONLY the JSON, nothing else`;

// Parse Gemini response - handle potential markdown formatting
function parseGeminiResponse(text) {
  let cleaned = text.trim();
  
  // Remove markdown code fences if present
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '');
  }
  
  // Try to extract JSON from the response
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }
  
  return JSON.parse(cleaned);
}

// Endpoint: Analyze prescription image
app.post('/api/analyze-prescription', async (req, res) => {
  try {
    const { imageData, mimeType } = req.body;

    if (!imageData || !mimeType) {
      return res.status(400).json({ error: 'Image data and mime type are required' });
    }

    const result = await tryGenerateContent([
      SYSTEM_PROMPT,
      {
        inlineData: {
          data: imageData,
          mimeType: mimeType,
        },
      },
    ]);

    const response = result.response;
    const text = response.text();

    const parsed = parseGeminiResponse(text);
    res.json(parsed);
  } catch (error) {
    console.error('Error analyzing prescription:', error);
    res.status(500).json({
      error: 'Failed to analyze prescription. Please try again.',
      details: error.message,
    });
  }
});

// Endpoint: Search medicine by name
app.post('/api/search-medicine', async (req, res) => {
  try {
    const { medicineName } = req.body;

    if (!medicineName || !medicineName.trim()) {
      return res.status(400).json({ error: 'Medicine name is required' });
    }

    const prompt = `${SYSTEM_PROMPT}\n\nThe user is searching for this medicine: "${medicineName.trim()}"`;

    const result = await tryGenerateContent(prompt);
    const response = result.response;
    const text = response.text();

    const parsed = parseGeminiResponse(text);
    res.json(parsed);
  } catch (error) {
    console.error('Error searching medicine:', error);
    res.status(500).json({
      error: 'Failed to search for medicine. Please try again.',
      details: error.message,
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root route
app.get('/', (req, res) => {
  res.send('GenericFind API is running! 🚀<br><br>Please open the React frontend in your browser (usually http://localhost:5173) to view the application.');
});

app.listen(PORT, () => {
  console.log(`GenericFind server running on http://localhost:${PORT}`);
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
    console.warn('⚠️  WARNING: GEMINI_API_KEY is not set. Please update server/.env with your actual API key.');
  }
});
