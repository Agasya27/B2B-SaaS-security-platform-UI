import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { activeScanData } from '../data/activeScan'
import CircularProgress from '../components/CircularProgress'
import StepTracker from '../components/StepTracker'
import FindingCard from '../components/FindingCard'
import { ScanDetailSkeleton } from '../components/SkeletonLoader'

// detail page for an active scan — shows progress, console, and findings
export default function ScanDetail() {
  const navigate = useNavigate()
  const scan = activeScanData
  const [activeTab, setActiveTab] = useState('activity')
  const [showActionToast, setShowActionToast] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <ScanDetailSkeleton />

  const tabs = [
    { id: 'activity', label: 'Activity Log' },
    { id: 'verification', label: 'Verification Loops' },
  ]

  function handleAction(action) {
    setShowActionToast(action)
    setTimeout(() => setShowActionToast(''), 3000)
  }

  // ---- console message parser ----
  // supports: {hl}highlight{/hl}, {b}bold{/b}, {url}link{/url}, {block}quote{/block}
  // also picks up [HH:MM:SS] timestamps automatically
  function renderConsoleMessage(msg) {
    let keyCounter = 0
    const nextKey = (prefix) => `${prefix}-${keyCounter++}`

    // parse {tag}...{/tag} markers
    function parseRich(text) {
      const result = []
      const re = /\{(hl|b|url|block)\}([\s\S]*?)\{\/\1\}/g
      let last = 0
      let m

      while ((m = re.exec(text)) !== null) {
        if (m.index > last) result.push(...parseTimestamps(text.slice(last, m.index)))

        const tag = m[1]
        const inner = m[2]
        if (tag === 'hl')    result.push(<span key={nextKey('hl')} className="bg-accent/20 text-accent px-1 py-0.5 rounded text-[11px]">{inner}</span>)
        if (tag === 'b')     result.push(<span key={nextKey('b')} className="font-bold text-accent">{inner}</span>)
        if (tag === 'url')   result.push(<span key={nextKey('u')} className="text-accent underline decoration-accent/50">{inner}</span>)
        if (tag === 'block') result.push(
          <div key={nextKey('bl')} className="ml-2 pl-3 border-l-2 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 my-1">
            {inner}
          </div>
        )
        last = m.index + m[0].length
      }

      if (last < text.length) result.push(...parseTimestamps(text.slice(last)))
      return result
    }

    // highlight [HH:MM:SS] timestamps
    function parseTimestamps(text) {
      const parts = []
      const re = /(\[\d{2}:\d{2}:\d{2}\])/g
      let last = 0
      let m
      while ((m = re.exec(text)) !== null) {
        if (m.index > last) parts.push(<span key={nextKey('t')}>{text.slice(last, m.index)}</span>)
        parts.push(<span key={nextKey('ts')} className="text-text-muted font-semibold">{m[1]}</span>)
        last = m.index + m[0].length
      }
      if (last < text.length) parts.push(<span key={nextKey('r')}>{text.slice(last)}</span>)
      return parts
    }

    return parseRich(msg)
  }

  // metadata fields shown below the step tracker
  const metadata = [
    { label: 'Scan Type', value: scan.type },
    { label: 'Targets', value: scan.target },
    { label: 'Started At', value: scan.startedAt },
    { label: 'Credentials', value: scan.credentials },
    { label: 'Files', value: scan.files },
    { label: 'Checklists', value: scan.checklists, accent: true },
  ]

  return (
    <div className="p-2 sm:p-4 lg:p-5 space-y-3 sm:space-y-4 lg:space-y-5 animate-in fade-in duration-500">
      {/* action toast */}
      {showActionToast && (
        <div className="fixed top-4 right-4 z-50 bg-accent text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          {showActionToast}
        </div>
      )}

      {/* top card — progress circle + steps + metadata */}
      <div className="bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border">
        <div className="flex flex-col sm:flex-row">
          {/* progress circle — compact on mobile */}
          <div className="shrink-0 flex items-center sm:justify-center px-4 sm:px-8 py-3 sm:py-6 border-b sm:border-b-0 sm:border-r border-light-border dark:border-dark-border">
            <div className="sm:hidden flex items-center gap-4">
              <CircularProgress value={scan.progress} size={64} strokeWidth={5} />
              <div>
                <p className="text-[14px] font-bold text-gray-900 dark:text-white">Scan In Progress</p>
                <p className="text-[12px] text-text-muted mt-0.5">Running security checks...</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <CircularProgress value={scan.progress} size={110} strokeWidth={7} />
            </div>
          </div>

          {/* step tracker + metadata */}
          <div className="flex-1 min-w-0">
            {/* steps */}
            <div className="px-3 sm:px-7 py-4 sm:py-5 overflow-x-auto">
              <StepTracker steps={scan.steps} />
            </div>

            {/* metadata row */}
            <div className="border-t border-light-border dark:border-dark-border px-3 sm:px-7 py-3 sm:py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-3 gap-x-3 sm:gap-x-6">
                {metadata.map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] sm:text-[12px] text-text-muted font-medium uppercase tracking-wide mb-0.5 sm:mb-1">{item.label}</p>
                    <p className={`text-[13px] sm:text-[14px] font-bold ${item.accent ? 'text-accent' : 'text-gray-900 dark:text-white'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* console + findings panel */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden">
        {/* console header */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-3 border-b border-light-border dark:border-dark-border">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
            <h3 className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">Live Scan Console</h3>
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-text-muted bg-gray-100 dark:bg-dark-surface px-2.5 py-1 rounded-full shrink-0">
              <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
              </svg>
              Running...
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-text-muted hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <button className="p-1 text-text-muted hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,320px]">
          {/* left: live console */}
          <div>
            {/* tab selector */}
            <div className="flex gap-0 border-b border-light-border dark:border-dark-border px-3 sm:px-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-3 text-[12px] sm:text-[13px] font-medium transition-colors cursor-pointer relative
                    ${activeTab === tab.id
                      ? 'text-accent'
                      : 'text-text-muted hover:text-gray-700 dark:hover:text-gray-300'
                    }
                  `}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
            {/* console output */}
            <div className="font-mono text-[12px] sm:text-[13px] p-3 sm:p-5 overflow-y-auto max-h-[350px] sm:max-h-[440px] console-scroll space-y-3 sm:space-y-4">
              {(activeTab === 'activity' ? scan.consoleLogs : scan.verificationLogs).map((log, i) => (
                <div key={i} className="leading-relaxed text-[12px] sm:text-[13px] text-gray-700 dark:text-[#c5d1de] whitespace-pre-wrap break-words">
                  {renderConsoleMessage(log.message)}
                </div>
              ))}
            </div>
          </div>

          {/* divider */}
          <div className="hidden lg:block w-px bg-light-border dark:bg-dark-border" />

          {/* right: findings */}
          <div className="border-t lg:border-t-0 border-light-border dark:border-dark-border">
            <div className="px-4 py-3 border-b border-light-border dark:border-dark-border">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Finding Log</h3>
            </div>
            <div className="p-3 space-y-3 max-h-[350px] sm:max-h-[440px] overflow-y-auto console-scroll">
              {scan.findings.map((finding) => (
                <FindingCard key={finding.id} finding={finding} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom status bar */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border px-2 sm:px-4 py-2">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-2 text-[11px] sm:text-[12px]">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <StatusDot label="Sub-Agents" value={scan.statusBar.subAgents} />
            <StatusDot label="Parallel Executions" value={scan.statusBar.parallelExecutions} />
            <StatusDot label="Operations" value={scan.statusBar.operations} />
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span><span className="text-severity-critical font-semibold">Critical:</span> <span className="text-gray-900 dark:text-white font-semibold tabular-nums">{scan.statusBar.critical}</span></span>
            <span><span className="text-severity-high font-semibold">High:</span> <span className="text-gray-900 dark:text-white font-semibold tabular-nums">{scan.statusBar.high}</span></span>
            <span><span className="text-severity-medium font-semibold">Medium:</span> <span className="text-gray-900 dark:text-white font-semibold tabular-nums">{scan.statusBar.medium}</span></span>
            <span><span className="text-severity-low font-semibold">Low:</span> <span className="text-gray-900 dark:text-white font-semibold tabular-nums">{scan.statusBar.low}</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

// little colored dot + label for the status bar
function StatusDot({ label, value }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
      <span className="text-text-muted">{label}:</span>
      <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
    </div>
  )
}
