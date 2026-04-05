import UploadCard from './UploadCard';
import SearchCard from './SearchCard';

export default function HeroSection({ onUpload, onSearch }) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark leading-tight mb-4">
            Stop overpaying for{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              medicine
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-text max-w-2xl mx-auto leading-relaxed">
            Upload your prescription or search any medicine name — we'll instantly find affordable 
            generic alternatives available in India with real savings.
          </p>
        </div>

        {/* Dual Input Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          <UploadCard onUpload={onUpload} />
          <SearchCard onSearch={onSearch} />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-gray-text/70">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>No Login Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
