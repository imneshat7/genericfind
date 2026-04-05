import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LoadingAnimation from './components/LoadingAnimation';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import { analyzePrescription, searchMedicine, getIsDemoMode } from './utils/api';

export default function App() {
  const [appState, setAppState] = useState('idle'); // 'idle' | 'loading' | 'results' | 'error'
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [demoMode, setDemoMode] = useState(false);

  async function handleUpload(file) {
    setAppState('loading');
    setError('');
    try {
      const data = await analyzePrescription(file);
      setDemoMode(getIsDemoMode());
      setResults(data);
      setAppState('results');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setAppState('error');
    }
  }

  async function handleSearch(medicineName) {
    setAppState('loading');
    setError('');
    try {
      const data = await searchMedicine(medicineName);
      setDemoMode(getIsDemoMode());
      setResults(data);
      setAppState('results');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setAppState('error');
    }
  }

  function handleReset() {
    setAppState('idle');
    setResults(null);
    setError('');
    setDemoMode(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigateHome={handleReset} />

      {/* Demo Mode Banner */}
      {demoMode && appState === 'results' && (
        <div className="w-full bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200 px-4 py-2.5">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 text-sm">
            <svg className="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-amber-800 font-medium">
              Demo Mode — Showing sample data. Results will be live once your Gemini API key is activated.
            </span>
          </div>
        </div>
      )}

      <main className="flex-1">
        {appState === 'idle' && (
          <HeroSection onUpload={handleUpload} onSearch={handleSearch} />
        )}

        {appState === 'loading' && <LoadingAnimation />}

        {appState === 'results' && (
          <ResultsSection results={results} onReset={handleReset} />
        )}

        {appState === 'error' && (
          <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-danger-500/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-danger-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Something went wrong</h3>
              <p className="text-sm text-gray-text mb-6">{error}</p>
              <button onClick={handleReset} className="btn-primary">
                Try Again
              </button>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
