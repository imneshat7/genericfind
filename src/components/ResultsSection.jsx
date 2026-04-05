import ConditionIcon from './ConditionIcon';
import MedicineCard from './MedicineCard';
import RecoveryTips from './RecoveryTips';
import DonationBanner from './DonationBanner';
import FeedbackForm from './FeedbackForm';

export default function ResultsSection({ results, onReset }) {
  if (!results) return null;

  const { medications = [], recoveryTips = [], dominantCondition = '' } = results;

  // Get the primary condition category for the hero illustration
  const primaryCategory = medications.length > 0
    ? medications[0].conditionCategory || 'other'
    : 'other';

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <div className="max-w-3xl mx-auto">
        {/* Results Header — Centered with condition illustration */}
        <div className="text-center mb-10 animate-fade-in-up">
          {/* Condition illustration */}
          <div className="mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 p-3 shadow-sm">
            <ConditionIcon category={primaryCategory} className="w-full h-full" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-capsule-pulse" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Analysis Complete
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-2">
            Your Results
          </h2>
          {dominantCondition && (
            <p className="text-base text-gray-text">
              Primary condition: <span className="font-semibold text-primary-600">{dominantCondition}</span>
            </p>
          )}
          <p className="text-sm text-gray-text mt-1">
            {medications.length} medication{medications.length !== 1 ? 's' : ''} analyzed
          </p>

          <button onClick={onReset} className="btn-secondary flex items-center gap-2 cursor-pointer mx-auto mt-5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Search Again
          </button>
        </div>

        {/* Medicine Cards — Stacked, centered */}
        <div className="space-y-6">
          {medications.map((med, i) => (
            <MedicineCard key={i} medication={med} index={i} />
          ))}
        </div>

        {/* Recovery Tips */}
        <RecoveryTips tips={recoveryTips} />

        {/* Donation Banner */}
        <DonationBanner />

        {/* Feedback Form */}
        <FeedbackForm />
      </div>
    </section>
  );
}
