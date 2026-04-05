// Realistic demo data for testing the UI without a working API key
const DEMO_DATA = {
  'dolo 650': {
    dominantCondition: 'Pain & Fever',
    medications: [
      {
        brandName: 'Dolo 650',
        dosage: '650mg',
        genericName: 'Paracetamol (Acetaminophen)',
        condition: 'Pain & Fever',
        conditionCategory: 'headache',
        alternatives: [
          {
            name: 'Calpol 650',
            manufacturer: 'GlaxoSmithKline',
            priceRange: '₹15-22 for strip of 15',
            savingsPercent: 45,
            matchScore: 95,
          },
          {
            name: 'P-500',
            manufacturer: 'Micro Labs',
            priceRange: '₹8-12 for strip of 10',
            savingsPercent: 72,
            matchScore: 90,
          },
          {
            name: 'Pyrigesic 650',
            manufacturer: 'East India Pharma',
            priceRange: '₹10-15 for strip of 10',
            savingsPercent: 65,
            matchScore: 88,
          },
        ],
        sideEffects: {
          branded: [
            'Nausea or vomiting in some cases',
            'Allergic skin rash (rare)',
            'Liver damage with overdose',
            'Loss of appetite',
          ],
          generic: [
            'Nausea or stomach discomfort',
            'Allergic reactions (rare)',
            'Liver toxicity with prolonged high-dose use',
            'Mild dizziness',
          ],
        },
      },
    ],
    recoveryTips: [
      'Stay well hydrated — drink at least 8-10 glasses of water daily to help your body fight fever and flush toxins.',
      'Get adequate rest — allow your body to recover by sleeping 7-8 hours and avoiding strenuous activity.',
      'Use a cool compress on your forehead to naturally reduce fever without medication.',
      'Eat light, nutritious meals — focus on soups, fruits, and easily digestible foods.',
      'Monitor your temperature regularly and consult a doctor if fever persists beyond 3 days.',
    ],
  },
  'crocin': {
    dominantCondition: 'Pain & Fever',
    medications: [
      {
        brandName: 'Crocin Advance',
        dosage: '500mg',
        genericName: 'Paracetamol',
        condition: 'Pain & Fever',
        conditionCategory: 'headache',
        alternatives: [
          {
            name: 'Dolo 650',
            manufacturer: 'Micro Labs',
            priceRange: '₹26-32 for strip of 15',
            savingsPercent: 35,
            matchScore: 94,
          },
          {
            name: 'P-500',
            manufacturer: 'Micro Labs',
            priceRange: '₹8-12 for strip of 10',
            savingsPercent: 70,
            matchScore: 91,
          },
          {
            name: 'Pacimol 650',
            manufacturer: 'Ipca Labs',
            priceRange: '₹12-18 for strip of 15',
            savingsPercent: 58,
            matchScore: 89,
          },
        ],
        sideEffects: {
          branded: [
            'Nausea and vomiting',
            'Skin rash or allergic reaction',
            'Liver damage on overdose',
            'Stomach pain',
          ],
          generic: [
            'Mild nausea',
            'Allergic skin reactions (uncommon)',
            'Hepatotoxicity with chronic overuse',
            'Dizziness or lightheadedness',
          ],
        },
      },
    ],
    recoveryTips: [
      'Keep yourself hydrated with warm water, herbal tea, and clear soups.',
      'Rest adequately — your body heals faster when well-rested.',
      'Apply cold packs to the forehead for natural fever relief.',
      'Avoid alcohol and caffeine which can dehydrate the body.',
      'Eat vitamin C-rich fruits like oranges and lemons to boost immunity.',
    ],
  },
  'azithromycin': {
    dominantCondition: 'Bacterial Infection',
    medications: [
      {
        brandName: 'Azithral 500',
        dosage: '500mg',
        genericName: 'Azithromycin',
        condition: 'Bacterial Infection',
        conditionCategory: 'infection',
        alternatives: [
          {
            name: 'Azee 500',
            manufacturer: 'Cipla',
            priceRange: '₹65-80 for strip of 3',
            savingsPercent: 42,
            matchScore: 93,
          },
          {
            name: 'ATM 500',
            manufacturer: 'Hetero',
            priceRange: '₹45-60 for strip of 3',
            savingsPercent: 58,
            matchScore: 88,
          },
          {
            name: 'Azibact 500',
            manufacturer: 'Mankind Pharma',
            priceRange: '₹55-70 for strip of 3',
            savingsPercent: 48,
            matchScore: 91,
          },
        ],
        sideEffects: {
          branded: [
            'Diarrhea or loose stools',
            'Nausea and abdominal pain',
            'Headache and dizziness',
            'Rare: liver enzyme elevation',
            'Allergic reactions in sensitive individuals',
          ],
          generic: [
            'Stomach upset and diarrhea',
            'Nausea or vomiting',
            'Mild headache',
            'Skin rash (rare)',
            'Temporary hearing changes (very rare)',
          ],
        },
      },
    ],
    recoveryTips: [
      'Complete the full course of antibiotics even if you feel better — stopping early promotes resistance.',
      'Eat probiotic-rich foods like curd/yogurt to restore gut bacteria affected by antibiotics.',
      'Stay hydrated with water, coconut water, and clear broths.',
      'Avoid dairy products within 2 hours of taking the medicine as they can reduce absorption.',
      'Get plenty of rest and avoid exertion to help your immune system fight the infection.',
    ],
  },
  'pantop': {
    dominantCondition: 'Acid Reflux & Gastric Issues',
    medications: [
      {
        brandName: 'Pantop 40',
        dosage: '40mg',
        genericName: 'Pantoprazole',
        condition: 'Acid Reflux & GERD',
        conditionCategory: 'digestive',
        alternatives: [
          {
            name: 'Pan 40',
            manufacturer: 'Alkem Labs',
            priceRange: '₹45-60 for strip of 15',
            savingsPercent: 52,
            matchScore: 94,
          },
          {
            name: 'Pantodac 40',
            manufacturer: 'Zydus Cadila',
            priceRange: '₹50-65 for strip of 15',
            savingsPercent: 45,
            matchScore: 92,
          },
          {
            name: 'Panlip 40',
            manufacturer: 'Cipla',
            priceRange: '₹40-55 for strip of 15',
            savingsPercent: 55,
            matchScore: 87,
          },
        ],
        sideEffects: {
          branded: [
            'Headache and dizziness',
            'Diarrhea or constipation',
            'Nausea and abdominal pain',
            'Flatulence and bloating',
            'Vitamin B12 deficiency with long-term use',
          ],
          generic: [
            'Headache and nausea',
            'Stomach pain or discomfort',
            'Diarrhea',
            'Joint pain (uncommon)',
            'Risk of bone fractures with prolonged use',
          ],
        },
      },
    ],
    recoveryTips: [
      'Eat smaller, more frequent meals instead of large heavy ones. Avoid eating 2-3 hours before bedtime.',
      'Avoid trigger foods: spicy food, citrus, tomatoes, caffeine, carbonated drinks, and fried items.',
      'Elevate the head of your bed by 6 inches to prevent nighttime acid reflux.',
      'Manage stress through yoga, meditation, or breathing exercises — stress worsens acid reflux.',
      'Maintain a healthy weight — excess belly fat increases pressure on the stomach.',
    ],
  },
};

// Default demo data for any medicine not in the predefined list
const DEFAULT_DEMO = {
  dominantCondition: 'General Health',
  medications: [
    {
      brandName: 'Requested Medicine',
      dosage: 'Standard dose',
      genericName: 'Active Ingredient (Generic)',
      condition: 'General Health',
      conditionCategory: 'other',
      alternatives: [
        {
          name: 'Generic Alternative A',
          manufacturer: 'Cipla',
          priceRange: '₹30-50 for strip of 10',
          savingsPercent: 55,
          matchScore: 90,
        },
        {
          name: 'Generic Alternative B',
          manufacturer: 'Sun Pharma',
          priceRange: '₹25-40 for strip of 10',
          savingsPercent: 62,
          matchScore: 85,
        },
      ],
      sideEffects: {
        branded: ['Nausea', 'Headache', 'Dizziness', 'Stomach upset'],
        generic: ['Mild nausea', 'Headache', 'Drowsiness', 'Dry mouth'],
      },
    },
  ],
  recoveryTips: [
    'Stay hydrated by drinking 8-10 glasses of water daily.',
    'Maintain a balanced diet rich in fruits, vegetables, and whole grains.',
    'Get regular exercise — at least 30 minutes of walking daily.',
    'Ensure 7-8 hours of quality sleep every night.',
    'Practice stress management through meditation or deep breathing.',
  ],
};

export function getDemoData(medicineName) {
  const key = medicineName.toLowerCase().trim();
  
  // Check for exact or partial match
  for (const [demoKey, data] of Object.entries(DEMO_DATA)) {
    if (key.includes(demoKey) || demoKey.includes(key)) {
      // Update brand name to match what user typed
      const result = JSON.parse(JSON.stringify(data));
      if (result.medications[0] && key !== demoKey) {
        result.medications[0].brandName = medicineName;
      }
      return result;
    }
  }

  // Return default with user's medicine name
  const result = JSON.parse(JSON.stringify(DEFAULT_DEMO));
  result.medications[0].brandName = medicineName;
  return result;
}

export default DEMO_DATA;
