import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

// top navigation bar with breadcrumb, theme toggle, and action buttons
export default function TopBar({ onMenuClick }) {
  const [toast, setToast] = useState('')

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-dark-sidebar border-b border-light-border dark:border-dark-border">
      {/* toast notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 bg-accent text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2 toast-animate" role="alert">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          {toast}
        </div>
      )}

      <div className="flex items-center justify-between px-3 sm:px-6 lg:px-8 h-14 sm:h-16">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
          {/* mobile hamburger */}
          <button
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="lg:hidden p-1.5 rounded-lg hover:bg-light-surface dark:hover:bg-dark-card text-text-secondary shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[14px] min-w-0">
            <span className="font-semibold text-[14px] sm:text-[16px] text-gray-900 dark:text-white shrink-0 tracking-tight">Scan</span>
            <svg className="w-4 h-4 text-text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="text-text-muted shrink-0">/</span>
            <span className="text-text-muted hidden sm:inline truncate">Private Assets</span>
            <span className="text-text-muted hidden sm:inline shrink-0">/</span>
            <span className="text-accent font-medium shrink-0">New Scan</span>
          </nav>
        </div>

        {/* right side actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <ThemeToggle />
          <button
            onClick={() => showToast('Report exported successfully!')}
            aria-label="Export report"
            className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium rounded-lg border border-gray-300 dark:border-[#93a3b8] text-gray-700 dark:text-white dark:bg-dark-surface hover:bg-gray-50 dark:hover:bg-dark-card transition-colors cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </button>
          <button
            onClick={() => showToast('Scan stopped successfully.')}
            aria-label="Stop current scan"
            className="px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[13px] font-medium rounded-lg border border-severity-critical text-severity-critical dark:bg-severity-critical/15 hover:bg-severity-critical/10 transition-colors cursor-pointer whitespace-nowrap"
          >
            Stop Scan
          </button>
        </div>
      </div>
    </header>
  )
}
