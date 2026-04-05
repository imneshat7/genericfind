import ConditionIcon from './ConditionIcon';
import AlternativeRow from './AlternativeRow';
import SideEffects from './SideEffects';

export default function MedicineCard({ medication, index }) {
  return (
    <div
      className="card-medicine rounded-2xl p-5 sm:p-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Card Header: Condition + Icon */}
      <div className="flex items-start gap-4 mb-4">
        <ConditionIcon
          category={medication.conditionCategory}
          className="w-14 h-14 sm:w-16 sm:h-16 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">
            {medication.condition}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-dark leading-snug">
            {medication.brandName}
            {medication.dosage && (
              <span className="text-sm font-medium text-gray-text ml-2">{medication.dosage}</span>
            )}
          </h3>
          <p className="text-sm text-gray-text mt-0.5">
            Generic: <span className="font-semibold text-primary-700">{medication.genericName}</span>
          </p>
        </div>
      </div>

      {/* Alternatives */}
      <div className="space-y-2.5 mb-3">
        <h4 className="text-xs font-bold text-gray-text uppercase tracking-wider">
          Generic Alternatives
        </h4>
        {(medication.alternatives || []).map((alt, i) => (
          <AlternativeRow
            key={i}
            alternative={alt}
            index={i}
            drugName={medication.genericName || medication.brandName}
          />
        ))}
      </div>

      {/* Side Effects */}
      <SideEffects sideEffects={medication.sideEffects} />

      {/* Disclaimer */}
      <div className="mt-4 pt-3 border-t border-gray-border/40">
        <p className="text-[11px] text-gray-text/60 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Always consult your doctor before switching medicines
        </p>
      </div>
    </div>
  );
}
