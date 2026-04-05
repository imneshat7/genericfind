import { useState } from 'react';

export default function SideEffects({ sideEffects }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!sideEffects) return null;

  return (
    <div className="mt-5 border border-amber-200 bg-amber-50/60 rounded-xl p-3 sm:p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 transition-colors w-full cursor-pointer"
      >
        <svg className="w-5 h-5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Important Side Effects Information
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[11px] font-medium text-amber-700/70 bg-amber-200/50 px-2 py-0.5 rounded-full">
            {isOpen ? 'Close' : 'View Details'}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-amber-200/50">
          {/* Branded Side Effects */}
          <div>
            <h5 className="text-xs font-bold text-gray-text uppercase tracking-wider mb-2">Branded</h5>
            <ul className="space-y-1.5">
              {(sideEffects.branded || []).map((effect, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-text">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-warning-400 shrink-0" />
                  {effect}
                </li>
              ))}
            </ul>
          </div>
          {/* Generic Side Effects */}
          <div>
            <h5 className="text-xs font-bold text-gray-text uppercase tracking-wider mb-2">Generic</h5>
            <ul className="space-y-1.5">
              {(sideEffects.generic || []).map((effect, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-text">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                  {effect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
