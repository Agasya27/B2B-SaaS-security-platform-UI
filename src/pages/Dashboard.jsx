import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { scans, severityStats, severityTrends, orgInfo } from '../data/scans'
import SeverityBadge from '../components/SeverityBadge'
import StatusChip from '../components/StatusChip'
import Button from '../components/Button'
import { DashboardSkeleton } from '../components/SkeletonLoader'

// main dashboard — shows org stats, severity cards, and the scan table
export default function Dashboard() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [showNewScanToast, setShowNewScanToast] = useState(false)
  const [loading, setLoading] = useState(true)

  // brief skeleton while "loading" data
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <DashboardSkeleton />

  // filter by search text + status dropdown
  const filtered = scans.filter((s) => {
    const q = search.toLowerCase()
    const matchesText = s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
    const matchesStatus = filterStatus === 'all' || s.status === filterStatus
    return matchesText && matchesStatus
  })

  function handleNewScan() {
    setShowNewScanToast(true)
    setTimeout(() => setShowNewScanToast(false), 3000)
  }

  const handleRowClick = (scan) => navigate(`/scan/${scan.id}`)

  // severity stat cards — one per level
  const statCards = [
    {
      label: 'Critical Severity',
      count: severityStats.critical,
      trend: severityTrends.critical,
      trendUp: true,
      trendColor: 'text-emerald-500',
      numColor: 'text-severity-critical',
      iconBg: 'bg-severity-critical/15',
      iconColor: 'text-severity-critical',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      label: 'High Severity',
      count: severityStats.high,
      trend: severityTrends.high,
      trendUp: true,
      trendColor: 'text-emerald-500',
      numColor: 'text-severity-high',
      iconBg: 'bg-severity-high/15',
      iconColor: 'text-severity-high',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      label: 'Medium Severity',
      count: severityStats.medium,
      trend: severityTrends.medium,
      trendUp: false,
      trendColor: 'text-severity-critical',
      numColor: 'text-severity-medium',
      iconBg: 'bg-severity-medium/15',
      iconColor: 'text-severity-medium',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      label: 'Low Severity',
      count: severityStats.low,
      trend: severityTrends.low,
      trendUp: true,
      trendColor: 'text-emerald-500',
      numColor: 'text-[#2e61fb]',
      iconBg: 'bg-[#2e61fb]/15',
      iconColor: 'text-[#2e61fb]',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-5 animate-in fade-in duration-500">
      {/* toast when "new scan" is clicked */}
      {showNewScanToast && (
        <div className="fixed top-4 right-4 z-50 bg-accent text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2 toast-animate" role="alert">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          New scan created successfully!
        </div>
      )}

      {/* org info bar + severity stat cards */}
      <div className="bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border">
        {/* org info row */}
        <div className="px-3 sm:px-6 py-3 sm:py-4 border-b border-light-border dark:border-dark-border">
            {/* desktop: inline row */}
          <div className="hidden sm:flex flex-wrap items-center gap-y-2">
            <InfoPair label="Org:" value={orgInfo.org} />
            <Divider />
            <InfoPair label="Owner:" value={orgInfo.owner} />
            <Divider />
            <InfoPair label="Total Scans:" value={orgInfo.totalScans} />
            <Divider />
            <InfoPair label="Scheduled:" value={orgInfo.scheduled} />
            <Divider />
            <InfoPair label="Rescans:" value={orgInfo.rescans} />
            <Divider />
            <InfoPair label="Failed Scans:" value={orgInfo.failedScans} />
            <div className="flex items-center gap-1.5 ml-auto">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[13px] text-text-muted">{orgInfo.lastUpdated}</span>
            </div>
          </div>
          {/* mobile: 2-col grid */}
          <div className="sm:hidden space-y-2.5">
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              <InfoPair label="Org:" value={orgInfo.org} />
              <InfoPair label="Owner:" value={orgInfo.owner} />
              <InfoPair label="Total Scans:" value={orgInfo.totalScans} />
              <InfoPair label="Scheduled:" value={orgInfo.scheduled} />
              <InfoPair label="Rescans:" value={orgInfo.rescans} />
              <InfoPair label="Failed Scans:" value={orgInfo.failedScans} />
            </div>
            <div className="flex items-center gap-1.5 px-1 pt-0.5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[12px] text-text-muted">{orgInfo.lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* severity stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 px-1 sm:px-2">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="px-3 sm:px-5 py-4 sm:py-5"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="text-[11px] sm:text-[13px] font-medium text-text-secondary dark:text-[#93a3b8] tracking-wide uppercase">{card.label}</p>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                  {card.icon}
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <p className={`text-[28px] sm:text-[36px] font-bold tabular-nums ${card.numColor} leading-none shrink-0`}>{card.count}</p>
                <p className={`text-[10px] sm:text-[11px] ${card.trendColor} flex items-start gap-0.5 pt-1 leading-tight`}>
                  <span className="shrink-0">{card.trendUp ? '↑' : '↓'}</span>
                  <span>{card.trend}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* toolbar — search, filter, new scan */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border px-3 sm:px-4 py-3 space-y-3 sm:space-y-0 sm:flex sm:flex-row sm:gap-3 sm:items-center">
        {/* search input */}
        <div className="relative flex-1 w-full">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search scans"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-white placeholder-text-muted text-[13px] focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
          />
        </div>
        {/* action buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setFilterStatus(filterStatus === 'all' ? 'completed' : 'all')}>
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625v-1.5c0-.621-.504-1.125-1.125-1.125m0 0h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125a1.125 1.125 0 00-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125" />
            </svg>
            Column
          </Button>
          <Button onClick={handleNewScan} className="whitespace-nowrap">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            New scan
          </Button>
        </div>
      </div>

      {/* scan table */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden">
        <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
          <table className="w-full min-w-[680px]">
            <thead>
              <tr className="border-b border-light-border dark:border-dark-border">
                <th className="text-left px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Scan Name</th>
                <th className="text-left px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Type</th>
                <th className="text-left px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Status</th>
                <th className="text-left px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Progress</th>
                <th className="text-center px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Vulnerability</th>
                <th className="text-right px-3 sm:px-5 py-3 text-[12px] font-medium text-text-muted">Last Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light-border dark:divide-dark-border">
              {filtered.map((scan) => (
                <tr
                  key={scan.id}
                  onClick={() => handleRowClick(scan)}
                  className="hover:bg-light-surface/50 dark:hover:bg-dark-surface/20 cursor-pointer transition-colors"
                >
                  <td className="px-3 sm:px-5 py-3">
                    <span className="text-[13px] font-medium text-gray-900 dark:text-white whitespace-nowrap">{scan.name}</span>
                  </td>
                  <td className="px-3 sm:px-5 py-3">
                    <span className="text-[13px] text-text-secondary dark:text-[#93a3b8] whitespace-nowrap">{scan.type}</span>
                  </td>
                  <td className="px-3 sm:px-5 py-3">
                    <StatusChip status={scan.status} />
                  </td>
                  <td className="px-3 sm:px-5 py-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-24 sm:w-32 h-2 bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            scan.status === 'failed' ? 'bg-severity-critical' : 'bg-accent'
                          }`}
                          style={{ width: `${scan.progress}%` }}
                        />
                      </div>
                      <span className="text-[12px] text-text-muted tabular-nums w-8">{scan.progress}%</span>
                    </div>
                  </td>
                  <td className="px-3 sm:px-5 py-3">
                    <div className="flex items-center justify-center gap-1">
                      {scan.critical > 0 && <SeverityBadge severity="critical" count={scan.critical} />}
                      {scan.high > 0 && <SeverityBadge severity="high" count={scan.high} />}
                      {scan.medium > 0 && <SeverityBadge severity="medium" count={scan.medium} />}
                      {scan.low > 0 && <SeverityBadge severity="low" count={scan.low} />}
                    </div>
                  </td>
                  <td className="px-3 sm:px-5 py-3 text-right text-[13px] text-text-muted whitespace-nowrap">
                    {scan.lastScan}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-text-muted text-sm">
                    No scans found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="px-3 sm:px-5 py-3 border-t border-light-border dark:border-dark-border flex items-center justify-between">
          <p className="text-[12px] text-text-muted tabular-nums">Showing {filtered.length} of 100 Scans</p>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded border border-light-border dark:border-dark-border flex items-center justify-center text-text-muted hover:bg-light-surface dark:hover:bg-dark-surface transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-7 h-7 rounded border border-light-border dark:border-dark-border flex items-center justify-center text-text-muted hover:bg-light-surface dark:hover:bg-dark-surface transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// label + bold value pair for the org info bar
function InfoPair({ label, value }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-1 sm:px-4">
      <span className="text-[12px] sm:text-[13px] text-text-muted whitespace-nowrap">{label}</span>
      <span className="text-[13px] sm:text-[14px] font-bold text-gray-900 dark:text-white whitespace-nowrap">{value}</span>
    </div>
  )
}

function Divider() {
  return <div className="hidden sm:block w-px h-5 bg-gray-300 dark:bg-dark-border" />
}
