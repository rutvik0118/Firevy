// Storage service for maintaining admin state, pipeline status, simulated items and history

const STORAGE_KEYS = {
  INQUIRIES: 'firevy_admin_inquiries',
  APPLICATIONS: 'firevy_admin_applications',
  ACTIVITY_LOGS: 'firevy_admin_activity_logs',
  SETTINGS: 'firevy_admin_settings_override',
  AUTH: 'firevy_admin_auth'
};

const defaultInquiries = [
  {
    _id: 'inq_101',
    name: 'Sarah Jenkins',
    email: 'sjenkins@innovatehealth.io',
    phone: '+1 (415) 890-2134',
    company: 'InnovateHealth Technologies',
    service: 'AI & Machine Learning',
    budget: '$50,000 - $100,000',
    message: 'We are seeking an enterprise partner to engineer a HIPAA-compliant medical document summarization pipeline using LLMs.',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    _id: 'inq_102',
    name: 'Robert Tanaka',
    email: 'rtanaka@globalfin.co.jp',
    phone: '+81 3 5555 0192',
    company: 'GlobalFin Trading Systems',
    service: 'API Development',
    budget: '$100,000+',
    message: 'Need high-throughput REST & WebSocket order routing microservices with sub-10ms execution latency.',
    status: 'In Progress',
    createdAt: new Date(Date.now() - 3600000 * 26).toISOString()
  },
  {
    _id: 'inq_103',
    name: 'Amara Okafor',
    email: 'amara@logixscale.ng',
    phone: '+234 802 123 4567',
    company: 'LogixScale Logistics',
    service: 'Cloud Solutions',
    budget: '$25,000 - $50,000',
    message: 'Looking to migrate our legacy PostgreSQL database and Docker services onto automated AWS Kubernetes clusters.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

const defaultApplications = [
  {
    _id: 'app_201',
    name: 'Alexander Wright',
    email: 'alex.wright@devmail.com',
    phone: '+1 (555) 234-5678',
    position: 'Senior Full-Stack MERN Engineer',
    resume: 'https://linkedin.com/in/alexander-wright-fullstack',
    message: 'Over 6 years of production experience architecting React 18 frontends and Node.js microservices with Redis caching.',
    stage: 'Interview',
    appliedAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    _id: 'app_202',
    name: 'Maya Lin',
    email: 'maya.lin@designer.io',
    phone: '+1 (555) 789-0123',
    position: 'Lead UI/UX Product Designer',
    resume: 'https://dribbble.com/mayalin-design',
    message: 'Passionate about building scalable design systems, token architectures, and high-fidelity Framer prototypes.',
    stage: 'Screening',
    appliedAt: new Date(Date.now() - 3600000 * 30).toISOString()
  },
  {
    _id: 'app_203',
    name: 'Devon Vance',
    email: 'devon.vance@ai-labs.org',
    phone: '+1 (555) 456-7890',
    position: 'AI & Machine Learning Solutions Architect',
    resume: 'https://github.com/devonvance-ai',
    message: 'Built multiple enterprise RAG pipelines with Pinecone and fine-tuned Llama-3 models for financial sentiment analysis.',
    stage: 'Offer',
    appliedAt: new Date(Date.now() - 3600000 * 72).toISOString()
  }
];

const defaultActivityLogs = [
  { id: 1, action: 'API Health Check', user: 'System Telemetry', timestamp: 'Just now', type: 'info' },
  { id: 2, action: 'New Contact Inquiry received', user: 'Sarah Jenkins', timestamp: '2 hours ago', type: 'success' },
  { id: 3, action: 'Candidate status updated to Interview', user: 'Admin Master', timestamp: '5 hours ago', type: 'warning' },
  { id: 4, action: 'Case Study Telehealth Portal updated', user: 'Admin Master', timestamp: '1 day ago', type: 'info' }
];

export const storageService = {
  getInquiries: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return stored ? JSON.parse(stored) : defaultInquiries;
    } catch {
      return defaultInquiries;
    }
  },
  saveInquiry: (inquiry) => {
    const list = storageService.getInquiries();
    const updated = [{ ...inquiry, _id: inquiry._id || `inq_${Date.now()}`, createdAt: new Date().toISOString(), status: inquiry.status || 'New' }, ...list];
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
    storageService.addActivityLog(`Inquiry added for ${inquiry.company || inquiry.name}`, 'Admin');
    return updated;
  },
  updateInquiryStatus: (id, status) => {
    const list = storageService.getInquiries();
    const updated = list.map(item => item._id === id ? { ...item, status } : item);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
    return updated;
  },

  getApplications: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
      return stored ? JSON.parse(stored) : defaultApplications;
    } catch {
      return defaultApplications;
    }
  },
  saveApplication: (application) => {
    const list = storageService.getApplications();
    const updated = [{ ...application, _id: application._id || `app_${Date.now()}`, appliedAt: new Date().toISOString(), stage: application.stage || 'Screening' }, ...list];
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
    storageService.addActivityLog(`Application submitted by ${application.name} for ${application.position}`, 'Admin');
    return updated;
  },
  updateApplicationStage: (id, stage) => {
    const list = storageService.getApplications();
    const updated = list.map(item => item._id === id ? { ...item, stage } : item);
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(updated));
    return updated;
  },

  getActivityLogs: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ACTIVITY_LOGS);
      return stored ? JSON.parse(stored) : defaultActivityLogs;
    } catch {
      return defaultActivityLogs;
    }
  },
  addActivityLog: (action, user = 'Admin', type = 'info') => {
    const logs = storageService.getActivityLogs();
    const newLog = { id: Date.now(), action, user, timestamp: 'Just now', type };
    const updated = [newLog, ...logs.slice(0, 15)];
    localStorage.setItem(STORAGE_KEYS.ACTIVITY_LOGS, JSON.stringify(updated));
    return updated;
  }
};

export default storageService;
