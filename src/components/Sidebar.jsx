import { NavLink, useLocation } from 'react-router-dom'

// icon helper - keeps the nav item definitions cleaner
const Icon = ({ d }) => (
  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

// sidebar navigation items
const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <Icon d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /> },
  { label: 'Projects', path: '/projects', icon: <Icon d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /> },
  { label: 'Scans', path: '/scans', icon: <Icon d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> },
  { label: 'Schedule', path: '/schedule', icon: <Icon d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /> },
]

const secondaryItems = [
  { label: 'Notifications', path: '/notifications', icon: <Icon d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /> },
  { label: 'Settings', path: '/settings', icon: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )},
  { label: 'Support', path: '/support', icon: <Icon d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /> },
]

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  // check if a nav path is currently active
  const isActive = (path) => {
    if (path === '/scans') return location.pathname === '/scans' || location.pathname.startsWith('/scan/')
    return location.pathname === path
  }

  // figure out where a nav link should go.
  // only dashboard & scans have real routes, everything else goes back to dashboard
  const linkTo = (path) => {
    return (path === '/dashboard' || path === '/scans') ? path : '/dashboard'
  }

  const linkClasses = (path) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors
    ${isActive(path)
      ? 'bg-accent/10 text-accent dark:bg-accent dark:text-white'
      : 'text-[#374151] dark:text-[#93a3b8] hover:bg-light-surface dark:hover:bg-dark-surface hover:text-gray-900 dark:hover:text-white'
    }`

  return (
    <>
      {/* dark overlay when sidebar is open on mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[220px] bg-white dark:bg-dark-sidebar border-r border-light-border dark:border-dark-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* logo */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
          <span className="text-xl font-bold text-accent tracking-tight font-sans">aps</span>

          {/* close button (mobile only) */}
          <button onClick={onClose} className="ml-auto lg:hidden p-2 -mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-surface transition-colors" aria-label="Close navigation">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* nav links */}
        <nav className="flex flex-col px-3 pt-4" aria-label="Main navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink key={item.label} to={linkTo(item.path)} onClick={onClose} className={linkClasses(item.path)}>
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="my-5 mx-3 border-t border-light-border dark:border-dark-border" />

          <div className="flex flex-col gap-1">
            {secondaryItems.map((item) => (
              <NavLink key={item.label} to={linkTo(item.path)} onClick={onClose} className={linkClasses(item.path)}>
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* user info at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-light-border dark:border-dark-border">
          <div className="flex items-center gap-3 px-1 py-2 cursor-pointer hover:bg-light-surface dark:hover:bg-dark-card rounded-lg transition-colors">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin&backgroundColor=0CC8A8"
              alt="User avatar"
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] text-text-muted truncate">admin@edu.com</p>
              <p className="text-[13px] font-semibold text-gray-900 dark:text-white">Security Lead</p>
            </div>
            <svg className="w-4 h-4 text-gray-900 dark:text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </aside>
    </>
  )
}
