// simple pulsing placeholder block
export function Skeleton({ className = '' }) {
  return <div className={`animate-pulse bg-gray-200 dark:bg-dark-surface rounded ${className}`} />
}

// loading placeholder for the dashboard page
export function DashboardSkeleton() {
  return (
    <div className="p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-5 animate-in fade-in duration-300">
      {/* Org Info + Severity Stats skeleton */}
      <div className="bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border">
        {/* Org bar */}
        <div className="px-3 sm:px-6 py-3 sm:py-4 border-b border-light-border dark:border-dark-border">
          <div className="flex items-center gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-20 sm:w-24" />
            ))}
          </div>
        </div>
        {/* Severity stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 px-1 sm:px-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="px-3 sm:px-5 py-4 sm:py-5 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-10 w-10 rounded-lg" />
              </div>
              <Skeleton className="h-9 w-16" />
              <Skeleton className="h-3 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* Toolbar skeleton */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border px-3 sm:px-4 py-3 flex gap-3 items-center">
        <Skeleton className="h-10 flex-1 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>

      {/* Table skeleton */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden">
        <div className="px-5 py-3 border-b border-light-border dark:border-dark-border flex gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-3 w-20" />
          ))}
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="px-5 py-3.5 border-b border-light-border dark:border-dark-border flex items-center gap-8">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-5 w-16 rounded" />
            <Skeleton className="h-2 w-32 rounded-full" />
            <div className="flex gap-1">
              <Skeleton className="h-7 w-7 rounded-md" />
              <Skeleton className="h-7 w-7 rounded-md" />
              <Skeleton className="h-7 w-7 rounded-md" />
            </div>
            <Skeleton className="h-4 w-14" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScanDetailSkeleton() {
  return (
    <div className="p-2 sm:p-4 lg:p-5 space-y-3 sm:space-y-4 lg:space-y-5 animate-in fade-in duration-300">
      {/* Progress + Steps + Metadata */}
      <div className="bg-white dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border">
        <div className="flex flex-col sm:flex-row">
          <div className="shrink-0 flex items-center justify-center px-8 py-6 border-b sm:border-b-0 sm:border-r border-light-border dark:border-dark-border">
            <Skeleton className="w-[110px] h-[110px] rounded-full" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="px-7 py-5 flex items-center gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))}
            </div>
            <div className="border-t border-light-border dark:border-dark-border px-7 py-4">
              <div className="grid grid-cols-6 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-1.5">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Console + Findings */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border overflow-hidden">
        <div className="px-5 py-3 border-b border-light-border dark:border-dark-border flex items-center gap-3">
          <Skeleton className="w-2.5 h-2.5 rounded-full" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,320px]">
          <div className="p-5 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </div>
            ))}
          </div>
          <div className="hidden lg:block w-px bg-light-border dark:bg-dark-border" />
          <div className="p-3 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-light-border dark:border-dark-border rounded-lg p-4 space-y-2">
                <Skeleton className="h-5 w-16 rounded" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-light-border dark:border-dark-border px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-20" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
      </div>
    </div>
  )
}
