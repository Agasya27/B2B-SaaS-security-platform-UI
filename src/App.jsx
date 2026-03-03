import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ScanDetail from './pages/ScanDetail'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white font-sans">
      <Routes>
        {/* auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* main app - wrapped in sidebar + topbar layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans" element={<Dashboard />} />
          <Route path="/scan/:id" element={<ScanDetail />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
