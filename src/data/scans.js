// mock scan list for the dashboard table
// each scan has basic info + vuln counts per severity

export const scans = [
  { id: 'scan-001', name: 'Production API Gateway', type: 'Greybox', status: 'completed', progress: 100, critical: 5, high: 12, medium: 23, low: 18, lastScan: '2h ago' },
  { id: 'scan-002', name: 'Customer Portal v2', type: 'Blackbox', status: 'completed', progress: 100, critical: 2, high: 8, medium: 15, low: 22, lastScan: '5h ago' },
  { id: 'scan-003', name: 'Web App Servers', type: 'Greybox', status: 'active', progress: 34, critical: 1, high: 3, medium: 7, low: 4, lastScan: '1d ago' },
  { id: 'scan-004', name: 'Internal Admin Panel', type: 'Whitebox', status: 'completed', progress: 100, critical: 8, high: 14, medium: 19, low: 11, lastScan: '1d ago' },
  { id: 'scan-005', name: 'Payment Microservice', type: 'Greybox', status: 'completed', progress: 100, critical: 3, high: 6, medium: 12, low: 9, lastScan: '2d ago' },
  { id: 'scan-006', name: 'Mobile API Backend', type: 'Blackbox', status: 'completed', progress: 100, critical: 1, high: 5, medium: 18, low: 25, lastScan: '2d ago' },
  { id: 'scan-007', name: 'Staging Environment', type: 'Greybox', status: 'completed', progress: 100, critical: 0, high: 2, medium: 8, low: 14, lastScan: '3d ago' },
  { id: 'scan-008', name: 'Auth Service Cluster', type: 'Whitebox', status: 'completed', progress: 100, critical: 4, high: 9, medium: 11, low: 7, lastScan: '3d ago' },
  { id: 'scan-009', name: 'CDN Edge Nodes', type: 'Blackbox', status: 'completed', progress: 100, critical: 0, high: 1, medium: 5, low: 12, lastScan: '4d ago' },
  { id: 'scan-010', name: 'Data Warehouse ETL', type: 'Greybox', status: 'completed', progress: 100, critical: 2, high: 7, medium: 16, low: 20, lastScan: '4d ago' },
  { id: 'scan-011', name: 'Partner Integration API', type: 'Greybox', status: 'completed', progress: 100, critical: 1, high: 4, medium: 9, low: 15, lastScan: '5d ago' },
  { id: 'scan-012', name: 'Kubernetes Cluster', type: 'Whitebox', status: 'scheduled', progress: 0, critical: 0, high: 0, medium: 0, low: 0, lastScan: 'Scheduled' },
  { id: 'scan-013', name: 'CI/CD Pipeline', type: 'Greybox', status: 'scheduled', progress: 0, critical: 0, high: 0, medium: 0, low: 0, lastScan: 'Scheduled' },
  { id: 'scan-014', name: 'IoT Device Firmware', type: 'Blackbox', status: 'failed', progress: 12, critical: 2, high: 4, medium: 8, low: 1, lastScan: '3d ago' },
  { id: 'scan-015', name: 'Legacy SOAP Services', type: 'Blackbox', status: 'failed', progress: 8, critical: 1, high: 2, medium: 5, low: 3, lastScan: '6d ago' },
]

// org-level info shown in the top bar
export const orgInfo = {
  org: 'Project X',
  owner: 'Nammagiri',
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdated: '10 mins ago',
}

// aggregate severity counts for the stat cards
export const severityStats = {
  critical: 86,
  high: 16,
  medium: 26,
  low: 16,
}

// trend labels shown under each stat card
export const severityTrends = {
  critical: '+2% increase than yesterday',
  high: '+0.9% increase than yesterday',
  medium: '+0.9% decrease than yesterday',
  low: '+0.9% increase than yesterday',
}
