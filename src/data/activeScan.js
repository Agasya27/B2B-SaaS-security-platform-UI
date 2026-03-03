// mock data for the active scan detail page
// includes progress steps, console logs, findings, and status bar

export const activeScanData = {
  id: 'scan-003',
  name: 'Web App Servers',
  target: 'google.com',
  type: 'Grey Box',
  status: 'active',
  progress: 0,
  startedAt: 'Nov 22, 09:00AM',
  credentials: '2 Active',
  files: 'Control.pdf',
  checklists: '40/350',

  // scan phases shown in the step tracker
  steps: [
    { label: 'Spidering', status: 'active', icon: 'spider' },
    { label: 'Mapping', status: 'pending', icon: 'mapping' },
    { label: 'Testing', status: 'pending', icon: 'testing' },
    { label: 'Validating', status: 'pending', icon: 'validating' },
    { label: 'Reporting', status: 'pending', icon: 'reporting' },
  ],

  // main console output — uses {hl}, {b}, {url}, {block} markers
  consoleLogs: [
    { message: "[09:00:00] I'll begin a systematic penetration test on {url}helpdesk.democorp.com{/url}. Let me start with reconnaissance and enumeration." },
    { message: "[09:01:00] Good! target is online. Now let me perform port scanning to identify running services." },
    { message: "[09:02:00] Excellent reconnaissance results:\n{block}  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server){/block}\nLet me probe the web server on target first to understand its structure." },
    { message: "[09:03:00] Great! I found a login page for a Help Desk Platform. I can see a useful comment: \"TODO: Delete the testing account (test:test)\". Let me test this credential. The login redirects to {hl}/password/test{/hl}. Let me follow that path and explore it." },
    { message: "[09:04:00] The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to {hl}'#'{/hl} which means the current page. Let me try a different approach." },
    { message: "[09:05:00] It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the {hl}test:test{/hl} password directly on other endpoints." },
    { message: "[09:06:00] Great! I can access the dashboard using the {hl}'X-UserId: 10032'{/hl} header. The dashboard shows \"Welcome, John Doe\". This suggests an {b}**IDOR vulnerability**{/b} - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..." },
  ],

  // verification loop output (second tab)
  verificationLogs: [
    { message: "[09:07:00] Beginning verification loop for IDOR vulnerability finding..." },
    { message: "[09:07:15] Attempting to access other user dashboards with sequential X-UserId headers..." },
    { message: "[09:07:30] Confirmed: X-UserId: 10033 returns \"Welcome, Jane Smith\" - different user data exposed." },
    { message: "[09:07:45] Attempting to access admin panel with X-UserId: 1..." },
    { message: "[09:08:00] Confirmed: Admin dashboard accessible. Verification confidence: HIGH" },
  ],

  // findings panel on the right side
  findings: [
    {
      id: 'f-001',
      severity: 'critical',
      title: 'SQL Injection in Authentication Endpoint',
      endpoint: '/api/users/profile',
      time: '10:45:23',
      description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.',
    },
    {
      id: 'f-002',
      severity: 'high',
      title: 'Unauthorized Access to User Metadata',
      endpoint: '/api/auth/login',
      time: '10:45:23',
      description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.',
    },
    {
      id: 'f-003',
      severity: 'medium',
      title: 'Broken Authentication Rate Limiting',
      endpoint: '/api/search',
      time: '10:45:23',
      description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.',
    },
  ],

  // bottom status bar counters
  statusBar: {
    subAgents: 0,
    parallelExecutions: 2,
    operations: 1,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  },
}
