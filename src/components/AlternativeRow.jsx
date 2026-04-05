import { getPharmacyForIndex } from '../utils/pharmacyLinks';

export default function AlternativeRow({ alternative, index, drugName }) {
  const pharmacy = getPharmacyForIndex(index);
  const buyUrl = pharmacy.buildUrl(alternative.name || drugName);
  const LogoBadge = pharmacy.LogoComponent;

  const matchScore = alternative.matchScore || 0;
  let badgeClass, badgeLabel;
  if (matchScore >= 85) {
    badgeClass = 'badge-recommended';
    badgeLabel = 'Recommended';
  } else if (matchScore >= 70) {
    badgeClass = 'badge-acceptable';
    badgeLabel = 'Acceptable';
  } else {
    badgeClass = 'badge-consult';
    badgeLabel = 'Consult Doctor';
  }

  return (
    <div className="p-3 sm:p-4 rounded-xl bg-primary-50/40 border border-primary-100/60 hover:border-primary-300 transition-all group">
      <div className="flex flex-col gap-2">
        {/* Top row: Name + Manufacturer */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-dark truncate">{alternative.name}</p>
            {alternative.manufacturer && (
              <p className="text-xs text-gray-text mt-0.5">{alternative.manufacturer}</p>
            )}
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2">
              <span className={badgeClass}>
                {matchScore}% — {badgeLabel}
              </span>
              {alternative.savingsPercent > 0 && (
                <span className="badge-savings">
                  Save {alternative.savingsPercent}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom row: Price + Logo badge + Buy button */}
        <div className="flex items-center justify-between gap-3 mt-1">
          <p className="text-sm font-medium text-primary-700">
            {alternative.priceRange}
          </p>

          {/* Logo + Buy button side by side */}
          <div className="flex items-center gap-2">
            {/* Separated pharmacy logo badge */}
            <LogoBadge />

            {/* Buy button (no logo inside) */}
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-semibold transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              style={{ background: pharmacy.color }}
            >
              Buy Now
              <svg className="w-3 h-3 opacity-80 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
