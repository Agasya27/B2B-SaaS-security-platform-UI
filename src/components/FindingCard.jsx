import SeverityBadge from './SeverityBadge'

// card for displaying a single vulnerability finding
export default function FindingCard({ finding }) {
  return (
    <div className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg p-4 hover:border-accent/40 transition-colors">
      {/* header row - severity + timestamp */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <SeverityBadge severity={finding.severity} showDot />
        {finding.time && (
          <span className="text-[11px] text-text-muted font-mono shrink-0">{finding.time}</span>
        )}
      </div>

      <h4 className="text-[13px] font-bold text-gray-900 dark:text-white leading-tight mb-1">
        {finding.title}
      </h4>
      <p className="text-[11px] text-accent font-mono italic mb-1.5">{finding.endpoint}</p>
      <p className="text-[11px] text-text-secondary dark:text-[#93a3b8] leading-relaxed">
        {finding.description}
      </p>
    </div>
  )
}
