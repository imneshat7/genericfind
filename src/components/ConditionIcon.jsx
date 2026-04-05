const iconMap = {
  headache: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Head */}
      <circle cx="40" cy="35" r="20" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      {/* Pain lines */}
      <path d="M18 20L12 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 32L8 32" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 44L12 50" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 20L68 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 32L72 32" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 44L68 50" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      {/* Expression */}
      <circle cx="34" cy="32" r="2" fill="#059669" />
      <circle cx="46" cy="32" r="2" fill="#059669" />
      <path d="M35 42C35 42 37 40 40 40C43 40 45 42 45 42" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      {/* Zigzag pain indicator */}
      <path d="M28 18L32 12L36 18L40 12L44 18" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Body hint */}
      <path d="M30 55C30 55 35 60 40 60C45 60 50 55 50 55" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  cardiac: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Heart */}
      <path d="M40 65C40 65 12 48 12 30C12 20 20 14 28 14C33 14 37 17 40 21C43 17 47 14 52 14C60 14 68 20 68 30C68 48 40 65 40 65Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pulse line */}
      <path d="M15 38H28L32 28L37 48L42 33L46 42L50 38H65"
        stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  respiratory: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Trachea */}
      <rect x="36" y="8" width="8" height="22" rx="4" stroke="#059669" strokeWidth="2" fill="#ECFDF5" />
      {/* Left lung */}
      <path d="M36 28C36 28 14 32 14 50C14 64 24 70 32 70C36 70 38 66 38 62V28"
        stroke="#059669" strokeWidth="2.5" fill="#D1FAE5" strokeLinecap="round" />
      {/* Right lung */}
      <path d="M44 28C44 28 66 32 66 50C66 64 56 70 48 70C44 70 42 66 42 62V28"
        stroke="#059669" strokeWidth="2.5" fill="#D1FAE5" strokeLinecap="round" />
      {/* Bronchi lines */}
      <path d="M25 42C28 44 32 48 34 52" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M55 42C52 44 48 48 46 52" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M22 50C26 52 30 55 33 58" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M58 50C54 52 50 55 47 58" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  mental: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Brain outline */}
      <path d="M40 12C28 12 18 20 18 34C18 42 22 48 28 52C28 58 32 68 40 68C48 68 52 58 52 52C58 48 62 42 62 34C62 20 52 12 40 12Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      {/* Brain fold line */}
      <path d="M40 18V62" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Nodes */}
      <circle cx="30" cy="30" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="50" cy="30" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="35" cy="45" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="48" cy="42" r="3" fill="#10B981" opacity="0.7" />
      <circle cx="40" cy="55" r="2.5" fill="#10B981" opacity="0.7" />
      {/* Connections */}
      <line x1="30" y1="30" x2="35" y2="45" stroke="#A7F3D0" strokeWidth="1.5" />
      <line x1="50" y1="30" x2="48" y2="42" stroke="#A7F3D0" strokeWidth="1.5" />
      <line x1="35" y1="45" x2="40" y2="55" stroke="#A7F3D0" strokeWidth="1.5" />
      <line x1="48" y1="42" x2="40" y2="55" stroke="#A7F3D0" strokeWidth="1.5" />
      <line x1="30" y1="30" x2="50" y2="30" stroke="#A7F3D0" strokeWidth="1.5" />
    </svg>
  ),
  musculoskeletal: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Bone */}
      <path d="M25 15C22 15 19 18 19 22C19 25 21 27 24 28L28 40L24 52C21 53 19 55 19 58C19 62 22 65 25 65C28 65 30 63 30 60L32 52H48L50 60C50 63 52 65 55 65C58 65 61 62 61 58C61 55 59 53 56 52L52 40L56 28C59 27 61 25 61 22C61 18 58 15 55 15C52 15 50 17 50 20L48 28H32L30 20C30 17 28 15 25 15Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Joint circle */}
      <circle cx="40" cy="40" r="6" stroke="#10B981" strokeWidth="2" fill="#D1FAE5" />
      {/* Pain spark */}
      <path d="M40 30L42 34L46 32L43 36L47 38L43 39L44 43L40 40L36 43L37 39L33 38L37 36L34 32L38 34Z"
        fill="#10B981" opacity="0.3" />
    </svg>
  ),
  digestive: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Stomach */}
      <path d="M30 15C30 15 25 15 22 20C19 25 18 35 22 42C26 49 34 50 38 48C42 46 44 42 48 42C52 42 56 46 58 50C60 54 60 62 55 66C50 70 40 70 35 66C30 62 28 55 28 55"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      {/* Esophagus */}
      <path d="M35 8V15" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      {/* Acid bubbles */}
      <circle cx="30" cy="32" r="2.5" fill="#A7F3D0" />
      <circle cx="36" cy="28" r="2" fill="#D1FAE5" />
      <circle cx="26" cy="38" r="1.5" fill="#A7F3D0" />
      {/* Intestine hint */}
      <path d="M35 58C35 58 42 58 48 62" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Skin layers */}
      <rect x="10" y="15" width="60" height="50" rx="8" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
      {/* Layer lines */}
      <path d="M10 35H70" stroke="#A7F3D0" strokeWidth="1.5" />
      <path d="M10 50H70" stroke="#D1FAE5" strokeWidth="1.5" />
      {/* Pores/texture */}
      <circle cx="25" cy="25" r="3" stroke="#10B981" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="25" r="3" stroke="#10B981" strokeWidth="1.5" fill="none" />
      <circle cx="55" cy="25" r="3" stroke="#10B981" strokeWidth="1.5" fill="none" />
      {/* Hair follicle */}
      <path d="M25 35V42" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 35V44" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M55 35V40" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      {/* Dots in lower layer */}
      <circle cx="30" cy="56" r="2" fill="#D1FAE5" />
      <circle cx="45" cy="58" r="2" fill="#D1FAE5" />
      <circle cx="58" cy="55" r="2" fill="#D1FAE5" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Eye shape */}
      <path d="M8 40C8 40 20 18 40 18C60 18 72 40 72 40C72 40 60 62 40 62C20 62 8 40 8 40Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Iris */}
      <circle cx="40" cy="40" r="12" stroke="#10B981" strokeWidth="2" fill="#D1FAE5" />
      {/* Pupil */}
      <circle cx="40" cy="40" r="5" fill="#059669" />
      {/* Light reflection */}
      <circle cx="43" cy="37" r="2" fill="white" />
      {/* Eyelashes */}
      <path d="M18 30L14 24" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 23L24 16" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 18L40 10" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 23L56 16" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 30L66 24" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  infection: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Shield */}
      <path d="M40 8L14 20V40C14 56 25 68 40 72C55 68 66 56 66 40V20L40 8Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cross */}
      <rect x="35" y="26" width="10" height="28" rx="2" fill="#10B981" opacity="0.7" />
      <rect x="26" y="35" width="28" height="10" rx="2" fill="#10B981" opacity="0.7" />
    </svg>
  ),
  diabetes: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Glucose meter body */}
      <rect x="18" y="12" width="44" height="56" rx="8" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
      {/* Screen */}
      <rect x="24" y="20" width="32" height="20" rx="4" stroke="#10B981" strokeWidth="1.5" fill="#D1FAE5" />
      {/* Reading */}
      <text x="30" y="35" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12" fill="#059669">120</text>
      {/* Buttons */}
      <circle cx="32" cy="50" r="4" stroke="#10B981" strokeWidth="1.5" fill="none" />
      <circle cx="48" cy="50" r="4" stroke="#10B981" strokeWidth="1.5" fill="none" />
      {/* Strip slot */}
      <rect x="36" y="8" width="8" height="8" rx="2" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5" />
      {/* Drop */}
      <path d="M40 60L38 64C38 66 39 67 40 67C41 67 42 66 42 64L40 60Z" fill="#EF4444" opacity="0.5" />
    </svg>
  ),
  allergy: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Nose/face area */}
      <circle cx="40" cy="35" r="20" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      {/* Sneeze particles */}
      <circle cx="20" cy="50" r="2" fill="#A7F3D0" />
      <circle cx="14" cy="44" r="1.5" fill="#D1FAE5" />
      <circle cx="16" cy="56" r="2.5" fill="#A7F3D0" />
      <circle cx="10" cy="50" r="1.5" fill="#10B981" opacity="0.5" />
      <circle cx="60" cy="50" r="2" fill="#A7F3D0" />
      <circle cx="66" cy="44" r="1.5" fill="#D1FAE5" />
      <circle cx="64" cy="56" r="2.5" fill="#A7F3D0" />
      {/* Watery eyes */}
      <path d="M32 30C32 30 34 28 36 30" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 30C44 30 46 28 48 30" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 32L35 35" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M48 32L49 35" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nose */}
      <path d="M38 38C38 38 40 42 42 38" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      {/* Open mouth (sneezing) */}
      <ellipse cx="40" cy="48" rx="5" ry="3" stroke="#059669" strokeWidth="2" fill="#FEE2E2" opacity="0.5" />
    </svg>
  ),
  thyroid: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Neck */}
      <rect x="30" y="8" width="20" height="64" rx="10" stroke="#059669" strokeWidth="2" fill="#ECFDF5" />
      {/* Thyroid butterfly */}
      <path d="M22 35C22 28 28 25 34 28C38 30 40 34 40 34C40 34 42 30 46 28C52 25 58 28 58 35C58 42 52 48 46 45C42 43 40 40 40 40C40 40 38 43 34 45C28 48 22 42 22 35Z"
        stroke="#10B981" strokeWidth="2.5" fill="#D1FAE5" strokeLinecap="round" />
      {/* Center */}
      <circle cx="40" cy="36" r="3" fill="#10B981" opacity="0.6" />
    </svg>
  ),
  blood_pressure: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Meter body */}
      <circle cx="40" cy="40" r="28" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
      {/* Scale arc */}
      <path d="M22 52A22 22 0 0158 52" stroke="#D1FAE5" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M22 52A22 22 0 0140 18" stroke="#10B981" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M40 18A22 22 0 0152 24" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M52 24A22 22 0 0158 52" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Needle */}
      <line x1="40" y1="40" x2="48" y2="26" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="4" fill="#059669" />
      <circle cx="40" cy="40" r="2" fill="white" />
      {/* Reading */}
      <text x="30" y="58" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#059669">mmHg</text>
    </svg>
  ),
  cholesterol: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Blood vessel */}
      <path d="M10 40C10 40 20 20 40 20C60 20 70 40 70 40C70 40 60 60 40 60C20 60 10 40 10 40Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      {/* Plaque buildup */}
      <path d="M25 32C25 32 30 28 35 32C38 35 36 40 30 40C26 40 25 36 25 32Z" fill="#F59E0B" opacity="0.4" />
      <path d="M50 45C50 45 55 42 58 46C60 49 57 52 52 52C48 52 50 48 50 45Z" fill="#F59E0B" opacity="0.4" />
      {/* Blood cells */}
      <circle cx="40" cy="38" r="4" fill="#EF4444" opacity="0.3" />
      <circle cx="48" cy="36" r="3" fill="#EF4444" opacity="0.2" />
      <circle cx="35" cy="44" r="3" fill="#EF4444" opacity="0.25" />
      {/* Flow arrows */}
      <path d="M18 40L24 37M24 43L18 40" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M62 40L56 37M56 43L62 40" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  liver: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path d="M20 28C20 20 30 14 42 14C58 14 68 24 68 36C68 48 58 58 48 62C38 66 24 64 18 54C14 46 20 36 20 28Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" strokeLinecap="round" />
      <path d="M42 14V62" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
      <path d="M28 30C32 28 38 30 42 34" stroke="#A7F3D0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 26C50 30 46 34 42 34" stroke="#A7F3D0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  kidney: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Left kidney */}
      <path d="M18 25C18 18 24 12 30 12C36 12 40 18 40 25C40 30 38 32 38 36C38 40 40 44 40 50C40 58 36 66 30 66C24 66 18 58 18 50C18 44 20 40 20 36C20 32 18 30 18 25Z"
        stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
      {/* Right kidney */}
      <path d="M62 25C62 18 56 12 50 12C44 12 40 18 40 25C40 30 42 32 42 36C42 40 40 44 40 50C40 58 44 66 50 66C56 66 62 58 62 50C62 44 60 40 60 36C60 32 62 30 62 25Z"
        stroke="#059669" strokeWidth="2.5" fill="#D1FAE5" />
      {/* Connection */}
      <path d="M30 40H50" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="40" r="3" fill="#10B981" opacity="0.5" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      {/* Medical cross */}
      <circle cx="40" cy="40" r="28" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
      <rect x="35" y="22" width="10" height="36" rx="3" fill="#10B981" opacity="0.7" />
      <rect x="22" y="35" width="36" height="10" rx="3" fill="#10B981" opacity="0.7" />
      {/* Pulse */}
      <path d="M12 60L22 60L26 54L30 66L34 58L38 62L42 60L72 60" stroke="#A7F3D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ConditionIcon({ category, className = '' }) {
  const icon = iconMap[category] || iconMap.other;
  return (
    <div className={`${className}`}>
      {icon}
    </div>
  );
}
