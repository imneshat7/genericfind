import DonationCard from './DonationCard';

const ngos = [
  {
    name: 'Médecins Sans Frontières India',
    description: 'Providing emergency medical aid to communities affected by conflict, epidemics, and disasters across India and South Asia.',
    url: 'https://www.msfindia.in/donate/',
  },
  {
    name: 'HelpAge India',
    description: 'Supporting elderly citizens with healthcare services, livelihood programs, and protection from abuse across India.',
    url: 'https://www.helpageindia.org/donate/',
  },
  {
    name: 'iCall — TISS',
    description: 'Offering free, professional mental health counseling services to individuals and communities in need.',
    url: 'https://icallhelpline.org/donate/',
  },
];

export default function DonationBanner() {
  return (
    <div className="mt-12 sm:mt-16">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-dark mb-2">
          Help someone afford their medicine
        </h3>
        <p className="text-sm text-gray-text max-w-lg mx-auto">
          Support these trusted Indian health organizations working to make healthcare accessible for everyone.
        </p>
      </div>

      {/* NGO Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ngos.map((ngo, i) => (
          <DonationCard key={i} ngo={ngo} />
        ))}
      </div>
    </div>
  );
}
