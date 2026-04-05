import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');

    // Build mailto link to send to Neshat's email
    const subject = encodeURIComponent(`GenericFind Feedback from ${name || 'Anonymous User'}`);
    const body = encodeURIComponent(
      `Name: ${name || 'Anonymous'}\n\nFeedback:\n${message}\n\n---\nSent from GenericFind`
    );
    window.location.href = `mailto:neshat306@gmail.com?subject=${subject}&body=${body}`;

    // Show success state
    setTimeout(() => {
      setStatus('sent');
      setName('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  }

  return (
    <div className="mt-14 sm:mt-18">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      </div>

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-dark mb-2">
          Share Your Feedback
        </h3>
        <p className="text-sm text-gray-text max-w-md mx-auto">
          Help us improve GenericFind! Your suggestions and ideas are valuable.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="feedback-input"
          id="feedback-name"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback, suggestion, or bug report..."
          rows={4}
          required
          className="feedback-input resize-none"
          id="feedback-message"
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={status === 'sending' || !message.trim()}
            className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            id="feedback-submit"
          >
            {status === 'sending' ? (
              <>
                <svg className="w-4 h-4 animate-capsule-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Opening mail…
              </>
            ) : status === 'sent' ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Thank you! 🎉
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
