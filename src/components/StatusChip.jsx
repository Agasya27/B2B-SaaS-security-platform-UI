// little colored pill that shows scan status
const configs = {
  completed: { bg: 'bg-emerald-500', text: 'text-white', label: 'Completed' },
  active:    { bg: 'bg-accent',       text: 'text-white', label: 'Active' },
  scheduled: { bg: 'bg-gray-200 dark:bg-gray-600', text: 'text-gray-600 dark:text-gray-200', label: 'Scheduled' },
  failed:    { bg: 'bg-severity-critical', text: 'text-white', label: 'Failed' },
}

export default function StatusChip({ status }) {
  const c = configs[status] || configs.scheduled
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  )
}
