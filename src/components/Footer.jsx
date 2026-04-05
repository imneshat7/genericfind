export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-12 border-t border-gray-border relative z-10">
      <div className="max-w-[1200px] mx-auto text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-text">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
            <path d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2m-4 0c0-1.1.9-2 2-2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>Powered by AI</span>
        </div>
        <p className="text-xs text-gray-text/70 max-w-lg mx-auto leading-relaxed">
          GenericFind provides information for educational purposes only. This is not medical advice.
          Always consult your doctor or pharmacist before changing your medication.
        </p>
        <p className="text-xs text-gray-text/60 pt-1">
          Designed &amp; Built by <span className="font-semibold text-primary-600">Neshat</span>
        </p>
        <p className="text-xs text-gray-text/50">
          &copy; {new Date().getFullYear()} GenericFind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
