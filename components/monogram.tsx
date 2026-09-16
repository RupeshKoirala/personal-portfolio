export function Monogram() {
  return (
    <div className="portrait" role="img" aria-label="Geometric RK monogram for Rupesh Koirala">
      <svg viewBox="0 0 320 400" width="86%" height="86%" aria-hidden="true">
        <defs>
          <linearGradient id="rkGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#9de8ff" />
            <stop offset="100%" stopColor="#22c1f1" />
          </linearGradient>
        </defs>
        {Array.from({ length: 9 }, (_, index) => (
          <line
            key={`v-${index}`}
            x1={24 + index * 34}
            y1="18"
            x2={24 + index * 34}
            y2="382"
            stroke="rgba(157,232,255,.12)"
          />
        ))}
        {Array.from({ length: 11 }, (_, index) => (
          <line
            key={`h-${index}`}
            x1="18"
            y1={24 + index * 34}
            x2="302"
            y2={24 + index * 34}
            stroke="rgba(157,232,255,.12)"
          />
        ))}
        <circle cx="248" cy="72" r="46" fill="none" stroke="#ffb86b" strokeWidth="1.5" />
        <path
          d="M58 92v216M58 92h78c42 0 68 22 68 58 0 30-18 50-52 56L210 308"
          fill="none"
          stroke="url(#rkGlow)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M148 200h-90"
          fill="none"
          stroke="url(#rkGlow)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
