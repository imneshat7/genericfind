export default function Header({ onNavigateHome }) {
  return (
    <header className="w-full py-5 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none p-0 group"
          aria-label="Go to homepage"
        >
          {/* Logo — Pill capsule icon */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              {/* Capsule pill — tilted */}
              <rect x="6.5" y="3" width="11" height="18" rx="5.5" stroke="white" strokeWidth="1.6" transform="rotate(-15 12 12)" />
              <line x1="5.8" y1="12.8" x2="18.2" y2="9.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              {/* Fill top half */}
              <path d="M9.2 4.8C10.3 3.2 12.5 2.6 14.2 3.2C15.8 3.8 17.2 5.4 17.5 7.2L6.2 10.2C6 8.3 7.2 6 9.2 4.8Z" fill="rgba(255,255,255,0.35)" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight group-hover:opacity-80 transition-opacity">
              <span className="text-dark">Generic</span>
              <span className="text-primary-600">Find</span>
            </h1>
          </div>
        </button>
        <p className="hidden sm:block text-sm text-gray-text font-medium">
          Find affordable medicine alternatives
        </p>
      </div>
    </header>
  );
}
