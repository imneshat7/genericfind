import { useState, useEffect } from 'react';

const statusMessages = [
  'Reading your prescription...',
  'Identifying medicine names...',
  'Looking up generic alternatives...',
  'Calculating potential savings...',
  'Checking availability in India...',
  'Analyzing side effects...',
  'Preparing your results...',
];

export default function LoadingAnimation() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % statusMessages.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Main Animation Container */}
        <div className="relative w-48 h-48 mb-10">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-primary-200/40 animate-capsule-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-400" />
          </div>

          {/* Center capsule */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-capsule-pulse">
              <svg viewBox="0 0 80 120" className="w-20 h-28" fill="none">
                {/* Capsule body */}
                <rect x="15" y="10" width="50" height="100" rx="25" fill="url(#capsuleGrad)" stroke="#059669" strokeWidth="2" />
                {/* Capsule line */}
                <line x1="15" y1="60" x2="65" y2="60" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
                {/* Top half color */}
                <path d="M40 10C26.2 10 15 21.2 15 35V60H65V35C65 21.2 53.8 10 40 10Z" fill="#10B981" opacity="0.85" />
                {/* Bottom half */}
                <path d="M15 60V85C15 98.8 26.2 110 40 110C53.8 110 65 98.8 65 85V60H15Z" fill="#D1FAE5" opacity="0.9" />
                {/* Shine */}
                <ellipse cx="30" cy="38" rx="6" ry="12" fill="white" opacity="0.3" transform="rotate(-15 30 38)" />
                <defs>
                  <linearGradient id="capsuleGrad" x1="15" y1="10" x2="65" y2="110" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10B981" />
                    <stop offset="1" stopColor="#D1FAE5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Floating pills */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute animate-float-up"
              style={{
                left: `${15 + i * 17}%`,
                bottom: '0%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.3}s`,
              }}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                {i % 2 === 0 ? (
                  // Round pill
                  <circle cx="10" cy="10" r="8" fill={i % 3 === 0 ? '#10B981' : '#A7F3D0'} stroke="#059669" strokeWidth="1.5" />
                ) : (
                  // Small capsule
                  <rect x="3" y="5" width="14" height="10" rx="5" fill={i % 3 === 1 ? '#6EE7B7' : '#D1FAE5'} stroke="#059669" strokeWidth="1.5" />
                )}
              </svg>
            </div>
          ))}

          {/* Prescription scan effect */}
          <div className="absolute -right-8 top-1/4 opacity-40">
            <svg viewBox="0 0 40 50" className="w-10 h-12" fill="none">
              <rect x="2" y="2" width="36" height="46" rx="4" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="10" y1="14" x2="30" y2="14" stroke="#A7F3D0" strokeWidth="2" />
              <line x1="10" y1="22" x2="26" y2="22" stroke="#A7F3D0" strokeWidth="2" />
              <line x1="10" y1="30" x2="28" y2="30" stroke="#A7F3D0" strokeWidth="2" />
              <line x1="10" y1="38" x2="20" y2="38" stroke="#A7F3D0" strokeWidth="2" />
              {/* Scan line */}
              <rect className="animate-scan-line" x="5" width="30" height="2" rx="1" fill="#10B981" opacity="0.6" style={{ position: 'relative' }} />
            </svg>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex items-center gap-1.5 mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-primary-500"
              style={{
                animation: 'dotPulse 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.16}s`,
              }}
            />
          ))}
        </div>

        {/* Status Message */}
        <p className="text-base sm:text-lg font-semibold text-dark text-center transition-all duration-300">
          {statusMessages[messageIndex]}
        </p>
        <p className="text-sm text-gray-text mt-2 text-center">
          This may take a few moments
        </p>
      </div>
    </section>
  );
}
