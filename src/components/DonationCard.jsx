export default function DonationCard({ ngo }) {
  return (
    <div className="donation-card p-5 sm:p-6 flex flex-col items-center text-center">
      {/* Coin/Money SVG */}
      <div className="w-16 h-16 mb-4">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          {/* Coin stack */}
          <ellipse cx="32" cy="48" rx="20" ry="6" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5" />
          <ellipse cx="32" cy="42" rx="20" ry="6" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5" />
          <ellipse cx="32" cy="36" rx="20" ry="6" fill="#6EE7B7" stroke="#059669" strokeWidth="1.5" />
          {/* Top coin */}
          <ellipse cx="32" cy="30" rx="20" ry="6" fill="#10B981" stroke="#059669" strokeWidth="1.5" />
          {/* Rupee symbol */}
          <text x="27" y="34" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10" fill="white">₹</text>
          {/* Sparkle */}
          <path d="M50 18L52 14L54 18L58 20L54 22L52 26L50 22L46 20L50 18Z" fill="#F59E0B" opacity="0.6" />
          <path d="M14 12L15 9L16 12L19 13L16 14L15 17L14 14L11 13L14 12Z" fill="#F59E0B" opacity="0.5" />
          {/* Hand hint */}
          <path d="M8 44C8 44 10 38 16 38" stroke="#A7F3D0" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M56 44C56 44 54 38 48 38" stroke="#A7F3D0" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* NGO Info */}
      <h4 className="font-bold text-dark text-sm mb-1.5">{ngo.name}</h4>
      <p className="text-xs text-gray-text leading-relaxed mb-4 flex-1">{ngo.description}</p>

      {/* Donate Button */}
      <a
        href={ngo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Donate
      </a>
    </div>
  );
}
