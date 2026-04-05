import { useState } from 'react';

export default function SearchCard({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  }

  return (
    <div className="card-glass rounded-2xl p-6 sm:p-8 flex flex-col">
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-dark text-base">Search Medicine</h3>
          <p className="text-xs text-gray-text">Type any branded medicine name</p>
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="relative flex-1 flex flex-col justify-center min-h-[160px]">
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 flex items-center" style={{ top: '28px' }}>
            <svg className="w-5 h-5 text-gray-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Crocin Advance 500mg"
            className="input-search"
            id="medicine-search-input"
          />

          {/* Suggested medicines */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Crocin', 'Dolo 650', 'Azithromycin', 'Pantop'].map((med) => (
              <button
                key={med}
                type="button"
                onClick={() => setQuery(med)}
                className="text-xs px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 font-medium hover:bg-primary-100 transition-colors cursor-pointer border border-primary-200/50"
              >
                {med}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!query.trim()}
          className={`btn-primary mt-5 w-full flex items-center justify-center gap-2 ${!query.trim() ? 'opacity-40 cursor-not-allowed' : ''}`}
        >
          Find Alternatives
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
    </div>
  );
}
