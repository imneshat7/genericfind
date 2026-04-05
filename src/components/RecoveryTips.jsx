import { useState } from 'react';

const tipIcons = [
  // Exercise
  <svg key="exercise" viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#059669" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M4 17L8 13L12 17L16 13L20 17" />
    <path d="M12 7V13" />
  </svg>,
  // Diet
  <svg key="diet" viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#059669" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2C6 2 4 8 4 12C4 18 8 22 12 22C16 22 20 18 20 12C20 8 18 2 12 2Z" />
    <path d="M12 2V22" />
    <path d="M4 12H20" />
  </svg>,
  // Sleep
  <svg key="sleep" viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#059669" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>,
  // Stress
  <svg key="stress" viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#059669" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22C17.523 22 22 17.523 22 12S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
  </svg>,
  // Hydration
  <svg key="hydration" viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="#059669" strokeWidth="2" strokeLinecap="round">
    <path d="M12 2L6 10C4 13 4 16 6 18.5C8 21 10 22 12 22C14 22 16 21 18 18.5C20 16 20 13 18 10L12 2Z" />
  </svg>,
];

export default function RecoveryTips({ tips }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!tips || tips.length === 0) return null;

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary flex items-center gap-2 mx-auto cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Recovery Tips — Lifestyle Recommendations
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-primary-100 hover:border-primary-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                {tipIcons[i % tipIcons.length]}
              </div>
              <p className="text-sm text-dark leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
