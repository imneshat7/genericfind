import { getDemoData } from './demoData';

let isDemoMode = false;

export function getIsDemoMode() {
  return isDemoMode;
}

const BASE_URL = import.meta.env.VITE_API_URL || '';

export async function analyzePrescription(file) {
  try {
    const base64 = await fileToBase64(file);
    const mimeType = file.type || 'image/jpeg';

    const response = await fetch(`${BASE_URL}/api/analyze-prescription`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData: base64, mimeType }),
    });

    if (!response.ok) {
      throw new Error('API error');
    }

    isDemoMode = false;
    return response.json();
  } catch (err) {
    // Fallback to demo data for prescription uploads
    console.warn('API unavailable, using demo mode:', err.message);
    isDemoMode = true;
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    return getDemoData('Dolo 650');
  }
}

export async function searchMedicine(medicineName) {
  try {
    const response = await fetch(`${BASE_URL}/api/search-medicine`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ medicineName }),
    });

    if (!response.ok) {
      throw new Error('API error');
    }

    isDemoMode = false;
    return response.json();
  } catch (err) {
    // Fallback to demo data
    console.warn('API unavailable, using demo mode:', err.message);
    isDemoMode = true;
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    return getDemoData(medicineName);
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
}
