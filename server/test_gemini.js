import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function test() {
  const models = ['gemini-2.5-flash', 'gemini-2.0-flash-lite', 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-pro'];
  let output = `Running test at ${new Date().toISOString()}\n`;
  output += `Using key: ${process.env.GEMINI_API_KEY.substring(0, 10)}...\n`;
  for (const name of models) {
    try {
      const model = genAI.getGenerativeModel({ model: name });
      const result = await model.generateContent("Hello!");
      output += `✅ Success with ${name}\n`;
    } catch (e) {
      output += `❌ Failed with ${name}: ${e.status} ${e.message}\n`;
    }
  }
  fs.writeFileSync('test_output.txt', output);
}
test();
