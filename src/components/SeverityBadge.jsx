// color mapping for each severity level
const colors = {
  critical: 'bg-severity-critical',
  high: 'bg-severity-high',
  medium: 'bg-severity-medium',
  low: 'bg-severity-low',
}

// two modes:
//  showDot = true -> pill label (used in finding cards)
//  default -> small square with count (used in table rows)
export default function SeverityBadge({ severity, count, showDot = false }) {
  const bg = colors[severity] || colors.low
  const label = severity.charAt(0).toUpperCase() + severity.slice(1)

  if (showDot) {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${bg} text-white`}>
        {label}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-[11px] font-bold ${bg} text-white`}>
      {count !== undefined ? count : label}
    </span>
  )
}
