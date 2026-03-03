// SVG-based circular progress ring
// when size is small (<=70px) we skip the "In Progress" label to save space
export default function CircularProgress({ value = 0, size = 120, strokeWidth = 8 }) {
  const radius = (size - strokeWidth) / 2
  const innerRadius = radius - strokeWidth / 2 - 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  const isSmall = size <= 70

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* dark circle fill in the center */}
        <circle cx={size / 2} cy={size / 2} r={innerRadius} fill="#1e2530" />

        {/* background track */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="currentColor" strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-dark-border"
        />

        {/* actual progress arc */}
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#0CC8A8" strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>

      {/* percentage text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${isSmall ? 'text-[15px]' : 'text-[22px] sm:text-2xl'} font-bold text-accent tabular-nums`}>
          {value}%
        </span>
        {!isSmall && (
          <span className="text-[10px] text-white font-semibold mt-0.5 tracking-wide">In Progress</span>
        )}
      </div>
    </div>
  )
}
