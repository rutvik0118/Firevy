export const initialServices = [
  {
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Enterprise-grade web applications engineered for speed, security, and effortless scalability.",
    description: "We architect and deliver modern web platforms, progressive web apps (PWAs), and microfrontend architectures built on React, Next.js, and Node.js. Our applications handle millions of queries with sub-second performance.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"],
    features: ["Component-Driven Architecture", "Server-Side Rendering & ISR", "API Gateway Integration", "CI/CD Pipeline Setup", "Sub-second Page Load Speed"],
    benefits: ["Boost user engagement by 40%", "Reduce cloud hosting costs with optimized SSR", "Enterprise SOC2 ready security compliance"],
    process: [
      { step: 1, title: "Architecture Design", description: "Define system blueprints, data flows, and tech stack specification." },
      { step: 2, title: "Frontend & API Build", description: "Develop clean modular UI components and resilient backend microservices." },
      { step: 3, title: "QA & Performance Testing", description: "Automated end-to-end testing, load stress testing, and accessibility auditing." },
      { step: 4, title: "Production Deployment", description: "Zero-downtime deployment with CDN caching and server monitoring." }
    ],
    faq: [
      { question: "What technologies do you use for web development?", answer: "We leverage React, Next.js, Node.js, Express, TypeScript, and MongoDB or PostgreSQL depending on project requirements." },
      { question: "How long does a typical web application project take?", answer: "Typical timelines range from 6 to 12 weeks for an enterprise MVP, following 2-week agile sprints." }
    ],
    isActive: true
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    shortDescription: "High-performance native and cross-platform iOS & Android mobile applications.",
    description: "Deliver flawless mobile experiences across iOS and Android with React Native and Flutter. We build offline-first, feature-rich apps integrated with real-time analytics and push messaging.",
    icon: "Smartphone",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL"],
    features: ["Cross-Platform Code Reusability", "Biometric Authentication", "Offline-First Synchronization", "Real-Time Push Notifications"],
    benefits: ["Native 60fps UI performance", "Dual store deployment in 50% less time", "High app store rating standards"],
    process: [
      { step: 1, title: "UX Wireframing", description: "Design mobile-first user flows and interactive prototypes." },
      { step: 2, title: "App Engineering", description: "Build native native bridges and reactive state management." },
      { step: 3, title: "Device Matrix Testing", description: "Testing across 50+ real physical Android and iOS devices." },
      { step: 4, title: "App Store Publishing", description: "Complete submission, metadata optimization, and app store compliance." }
    ],
    faq: [
      { question: "Do you build native or cross-platform apps?", answer: "We build both. We recommend cross-platform (React Native / Flutter) for cost efficiency or native (Swift / Kotlin) for heavy hardware integrations." }
    ],
    isActive: true
  },
  {
    title: "Software Development",
    slug: "software-development",
    shortDescription: "Custom enterprise software solutions tailored to solve complex operational challenges.",
    description: "End-to-end bespoke software engineering services for enterprises and high-growth scale-ups. We modernize legacy monoliths into cloud-native microservices.",
    icon: "Code2",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "Python", "Java", "Go", "Docker", "Kubernetes"],
    features: ["Legacy Code Refactoring", "Microservices Migration", "Enterprise Security Architecture", "Custom CRM / ERP Building"],
    benefits: ["Streamline operational bottlenecks", "Seamless third-party integration", "Future-proof cloud infrastructure"],
    process: [
      { step: 1, title: "Business Analysis", description: "Deep dive into existing infrastructure and workflow constraints." },
      { step: 2, title: "System Architecture", description: "Define data models, API contracts, and domain-driven design." },
      { step: 3, title: "Incremental Sprints", description: "Bi-weekly sprint deliveries with continuous integration." },
      { step: 4, title: "Enterprise Rollout", description: "Phased deployment, team training, and SLAs." }
    ],
    faq: [
      { question: "Can you modernize our legacy desktop software?", answer: "Yes, we specialize in converting legacy desktop applications into secure web-based cloud solutions." }
    ],
    isActive: true
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    shortDescription: "Human-centric digital product design that drives conversion and brand preference.",
    description: "Crafting intuitive visual systems, wireframes, interaction animations, and design tokens that elevate digital products from functional to extraordinary.",
    icon: "Layout",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Figma", "Design Systems", "Prototyping", "Framer", "User Testing"],
    features: ["Comprehensive Design Systems", "High-Fidelity Interactive Prototypes", "Usability Testing & Heatmaps", "Design Tokens for Developers"],
    benefits: ["3x higher conversion rate", "Accelerated frontend development time", "Consistent multi-platform branding"],
    process: [
      { step: 1, title: "User Research", description: "Conduct interviews, competitor benchmarking, and user persona mapping." },
      { step: 2, title: "Wireframing", description: "Map information architecture and low-fidelity interaction flows." },
      { step: 3, title: "Visual Design", description: "Create high-fidelity screens, dark/light themes, and design tokens." },
      { step: 4, title: "Design Handoff", description: "Provide interactive Figma components and clean asset specs." }
    ],
    faq: [
      { question: "What deliverable do we receive?", answer: "Full Figma design system libraries, interactive prototypes, component guidelines, and ready-to-use SVG assets." }
    ],
    isActive: true
  },
  {
    title: "Prototype Development Services",
    slug: "prototype-development-services",
    shortDescription: "Interactive, clickable, and rapid prototype development to validate concepts before full-scale manufacturing.",
    description: "Transform innovative concepts into testable, market-ready prototypes using High-Velocity Agile development, clickable wireframes, and enterprise architecture.",
    icon: "Layers",
    image: "/images/prototype_hero_illustration.jpg",
    technologies: ["Figma", "React", "Node.js", "Wireframing", "Clickable Mockups", "Agile Sprints"],
    features: ["Prototype App Development", "Interactive Prototyping", "Rapid Agile Prototyping", "Extreme & Incremental Prototyping"],
    benefits: ["Substantially reduced financial risk", "Clear stakeholder communication", "High-velocity market entry"],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Clear documentation and stakeholder alignment." },
      { step: 2, title: "Wireframes & Mockups", description: "Interactive and visual product UI flows." },
      { step: 3, title: "Prototype Demo", description: "Clickable testable prototype demonstration." },
      { step: 4, title: "Refinement & Confirmation", description: "Iterate with user feedback and freeze production scope." }
    ],
    faq: [
      { question: "Can Sapphire develop clickable prototypes for mobile and web apps?", answer: "Yes, we create interactive prototypes for iOS, Android, and web platforms to demonstrate functionality and user journeys." }
    ],
    isActive: true
  },
  {
    title: "Cloud Development",
    slug: "cloud-development",
    shortDescription: "Scalable, secure, and resilient cloud application development and multi-cloud migration.",
    description: "Enterprise cloud application development, cloud-native architecture, microservices, AWS, Azure, Google Cloud, and 24/7 cloud infrastructure management.",
    icon: "Cloud",
    image: "/images/cloud_hero_illustration.jpg",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Microservices", "Terraform", "CI/CD"],
    features: ["Cloud App Development", "Cloud-Native Development", "Cloud Consulting Services", "Cloud Migration & Integration", "24/7 Cloud Monitoring"],
    benefits: ["99.99% infrastructure availability", "Substantial cloud operational cost reduction", "Rapid disaster recovery"],
    process: [
      { step: 1, title: "Cloud Architecture Audit", description: "Assess existing systems, security compliance, and workload suitability." },
      { step: 2, title: "Cloud-Native Strategy", description: "Architect containerized microservices and serverless workflows." },
      { step: 3, title: "Workload Migration", description: "Zero-downtime migration and database synchronization." },
      { step: 4, title: "Continuous Monitoring & SLAs", description: "24/7 observability, automated scaling, and cost governance." }
    ],
    faq: [
      { question: "Why choose Sapphire Solutions as your cloud application development partner?", answer: "Sapphire Software Solutions offers 23+ years' experience with 1,500+ projects across 30+ countries, of expertise in building scalable, secure, and high-performance cloud applications using AWS, Azure, and Google Cloud." }
    ],
    isActive: true
  },
  {
    title: "Cloud Computing Service",
    slug: "cloud-computing-service",
    shortDescription: "Enterprise cloud computing services, multi-cloud infrastructure, DevOps CI/CD, and 24/7 cloud monitoring.",
    description: "Architect, modernize, and manage enterprise cloud infrastructure across AWS, Microsoft Azure, and Google Cloud with guaranteed 99.9% uptime and proactive FinOps cost optimization.",
    icon: "Cloud",
    image: "/images/cloud_solutions_illustration.jpg",
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Ansible", "CI/CD"],
    features: ["Cloud Infrastructure Management", "Cloud Migration & Modernization", "Cloud-Native App Development", "DevOps & CI/CD Automation", "Cloud Security & Governance", "Cloud Cost Optimization (FinOps)"],
    benefits: ["99.9% guaranteed uptime", "Up to 40% reduction in cloud operational expenditure", "Zero-downtime microservices deployments"],
    process: [
      { step: 1, title: "Cloud Assessment & Audit", description: "In-depth review of infrastructure workload, security gaps, and FinOps benchmarks." },
      { step: 2, title: "Architecture Blueprint", description: "Designing multi-cloud, high-availability, containerized infrastructure." },
      { step: 3, title: "Deployment & Migration", description: "Automated provisioning with Terraform, CI/CD pipelines, and data sync." },
      { step: 4, title: "Continuous Monitoring & Governance", description: "24/7 SRE monitoring, automated incident response, and SLA guarantees." }
    ],
    faq: [
      { question: "Why partner with Firevy for cloud computing services?", answer: "We provide end-to-end multi-cloud advisory, certified AWS/Azure/GCP principal architects, and 24/7 infrastructure observability." }
    ],
    isActive: true
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    shortDescription: "Intelligent AI integrations, custom LLM solutions, and predictive analytics engines.",
    description: "Transform your business operations with artificial intelligence. We build custom RAG pipelines, fine-tuned LLM agents, automated document analysis, and predictive models.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Vector DBs"],
    features: ["Custom RAG Knowledge Bases", "Automated AI Workflow Agents", "Predictive Analytics Models", "Natural Language Processing (NLP)"],
    benefits: ["Automate 70% of repetitive operational tasks", "Extract real-time insights from unstructured data", "Enterprise privacy data protection"],
    process: [
      { step: 1, title: "Data Feasibility Audit", description: "Analyze your data sources, volume, and AI use cases." },
      { step: 2, title: "Model Selection & RAG Setup", description: "Implement vector databases, embeddings, and fine-tuned models." },
      { step: 3, title: "API Integration", description: "Connect AI endpoints into your existing web/mobile workflows." },
      { step: 4, title: "Continuous Monitoring", description: "Track accuracy metrics, hallucination rates, and latency." }
    ],
    faq: [
      { question: "Is our business data secure when using your AI solutions?", answer: "Absolutely. We build private instance deployments with strict data boundary encryption so your proprietary data is never shared or trained publicly." }
    ],
    isActive: true
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    shortDescription: "Scalable cloud architecture, cloud migration, and automated infrastructure optimization.",
    description: "Architecting resilient, elastic cloud infrastructures on AWS, Google Cloud, and Azure. We optimize compute costs and implement zero-trust cloud security.",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    technologies: ["AWS", "Google Cloud", "Azure", "Terraform", "Docker", "Kubernetes"],
    features: ["Infrastructure as Code (IaC)", "Serverless Architectures", "Cloud Cost Optimization", "Disaster Recovery Automation"],
    benefits: ["99.99% infrastructure uptime", "Up to 35% reduction in cloud monthly spend", "Instant auto-scaling under peak traffic load"],
    process: [
      { step: 1, title: "Cloud Audit", description: "Evaluate existing cloud architecture, security risks, and billing." },
      { step: 2, title: "Migration Planning", description: "Design cloud blueprints using Terraform IaC scripts." },
      { step: 3, title: "Cloud Provisioning", description: "Deploy containerized Kubernetes clusters and database replicas." },
      { step: 4, title: "24/7 Operations", description: "Continuous cloud health monitoring and incident response." }
    ],
    faq: [
      { question: "Can you help us reduce our AWS monthly bill?", answer: "Yes, our cloud cost optimization audit typically saves clients 20% to 40% on their existing infrastructure spend." }
    ],
    isActive: true
  },
  {
    title: "API Development",
    slug: "api-development",
    shortDescription: "Secure, high-throughput REST and GraphQL APIs for seamless system integration.",
    description: "Engineered for extreme performance and reliability. We design RESTful APIs, GraphQL endpoints, and WebSockets with strict rate-limiting, JWT authentication, and Swagger OpenAPI documentation.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "Express", "GraphQL", "Postman", "Swagger", "Redis"],
    features: ["OpenAPI Specification", "OAuth2 & JWT Auth", "Redis Caching Layer", "Webhook Notification Pipelines"],
    benefits: ["Sub-50ms API responses", "Seamless third-party integrations", "Comprehensive API documentation"],
    process: [
      { step: 1, title: "Contract Design", description: "Define endpoints, payloads, schema models, and status codes." },
      { step: 2, title: "API Development", description: "Build scalable routes, data caching, and rate limiting." },
      { step: 3, title: "Security Audit", description: "Penetration testing and payload sanitization check." },
      { step: 4, title: "Developer Portal", description: "Generate interactive Swagger docs and SDK boilerplate." }
    ],
    faq: [
      { question: "Do you provide API documentation?", answer: "Yes, all APIs include automated OpenAPI / Swagger documentation and Postman collections." }
    ],
    isActive: true
  },
  {
    title: "DevOps",
    slug: "devops",
    shortDescription: "Automated CI/CD deployment pipelines, containerization, and 24/7 monitoring.",
    description: "Accelerate software delivery cycles with robust DevOps practices. We build automated GitHub Actions pipelines, Kubernetes orchestration, and comprehensive Prometheus/Grafana monitoring.",
    icon: "Terminal",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    features: ["Automated Deployment Pipelines", "Zero-Downtime Blue-Green Releases", "Centralized Log Aggregation", "Infrastructure Monitoring"],
    benefits: ["Deploy code 10x faster", "99.9% build reliability", "Instant rollback capabilities"],
    process: [
      { step: 1, title: "Pipeline Audit", description: "Analyze deployment friction and build times." },
      { step: 2, title: "CI/CD Implementation", description: "Configure automated testing and container build steps." },
      { step: 3, title: "Monitoring Setup", description: "Set up telemetry dashboards and PagerDuty alerts." },
      { step: 4, title: "Team Enablement", description: "Train internal dev teams on GitOps deployment workflows." }
    ],
    faq: [
      { question: "What CI/CD platforms do you support?", answer: "We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, and AWS CodePipeline." }
    ],
    isActive: true
  },
  {
    title: "Software Testing",
    slug: "software-testing",
    shortDescription: "Rigorous automated, functional, security, and performance quality assurance.",
    description: "Ensure flawless reliability before going live. Our QA engineers execute automated regression suites, load stress tests, security penetration audits, and cross-browser testing.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Cypress", "Playwright", "Jest", "JMeter", "Postman", "Selenium"],
    features: ["End-to-End Automated Testing", "Load Stress & Capacity Testing", "OWASP Security Vulnerability Scans", "Cross-Browser & Matrix Verification"],
    benefits: ["Zero high-severity production bugs", "Reduced regression testing time from days to minutes", "Enhanced end-user trust"],
    process: [
      { step: 1, title: "Test Strategy", description: "Define test plans, acceptance criteria, and matrix coverage." },
      { step: 2, title: "Automation Scripts", description: "Write Cypress/Playwright suites for critical user journeys." },
      { step: 3, title: "Performance Stressing", description: "Simulate peak user load with Apache JMeter." },
      { step: 4, title: "QA Sign-off", description: "Detailed test execution reports and bug verification." }
    ],
    faq: [
      { question: "Do you offer automated QA testing?", answer: "Yes, we build comprehensive Cypress and Playwright suites integrated directly into your CI/CD pipeline." }
    ],
    isActive: true
  },
  {
    title: "Dedicated Developers",
    slug: "dedicated-developers",
    shortDescription: "Scale your engineering capability with top 1% senior full-stack & DevOps engineers.",
    description: "Hire pre-vetted senior software engineers, UI/UX designers, and cloud architects who integrate seamlessly into your internal sprint cycles.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "Python", "Mobile Native", "DevOps", "AWS"],
    features: ["Dedicated Full-Time Developers", "Direct Slack & Jira Integration", "Agile Sprint Management", "Flexible Scaling"],
    benefits: ["Onboard engineers in under 48 hours", "Zero recruitment & HR overhead", "Same timezone alignment"],
    process: [
      { step: 1, title: "Requirements Matching", description: "Identify technical stack, seniority, and soft skill requirements." },
      { step: 2, title: "Candidate Selection", description: "Interview pre-vetted engineers and assess live coding samples." },
      { step: 3, title: "Seamless Onboarding", description: "Integrate developers into your Slack, GitHub, and daily standups." },
      { step: 4, title: "Ongoing Support", description: "Dedicated Account Manager to ensure team satisfaction." }
    ],
    faq: [
      { question: "How quickly can dedicated developers join our team?", answer: "Our pre-vetted senior engineers can start within 48 to 72 hours." }
    ],
    isActive: true
  },
  {
    title: "DevOps Development Services",
    slug: "devops-development-services",
    shortDescription: "Automated CI/CD pipelines, Kubernetes container orchestration, and Infrastructure as Code.",
    description: "Accelerate your release cycles and enhance infrastructure reliability with enterprise DevOps automation, cloud governance, and site reliability engineering.",
    icon: "Cloud",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Prometheus", "GitHub Actions", "AWS"],
    features: ["Automated Multi-Branch CI/CD Pipelines", "Zero-Downtime Rolling & Blue-Green Deployments", "Declarative Infrastructure as Code (IaC)", "24/7 Observability & Site Reliability Engineering"],
    benefits: ["10x faster release deployment velocity", "99.99% system availability and auto-healing", "Reduced cloud infrastructure idle waste"],
    process: [
      { step: 1, title: "DevOps Assessment", description: "Audit current infrastructure, deployment bottlenecks, and security gaps." },
      { step: 2, title: "IaC & Architecture", description: "Provision repeatable cloud infrastructure with Terraform and Kubernetes." },
      { step: 3, title: "CI/CD Pipeline Automation", description: "Build automated test, lint, and deployment pipelines with GitHub Actions/Jenkins." },
      { step: 4, title: "SRE & Monitoring", description: "Set up real-time observability with Prometheus, Grafana, and automated alerts." }
    ],
    faq: [
      { question: "What CI/CD platforms do you support?", answer: "We support GitHub Actions, GitLab CI, Jenkins, AWS CodePipeline, and ArgoCD for GitOps." }
    ],
    isActive: true
  },
  {
    title: "AWS Cloud Services",
    slug: "aws-cloud-services",
    shortDescription: "Amazon Web Services consulting, cloud migration, serverless Lambda, and Well-Architected governance.",
    description: "Architecting secure, hyper-scalable cloud solutions on Amazon Web Services. Engineered with multi-AZ high availability, serverless Lambda computing, Amazon Aurora/DynamoDB, and 24/7 managed FinOps monitoring.",
    icon: "Cloud",
    image: "/images/aws_cloud_hero_architecture.jpg",
    technologies: ["AWS EC2", "AWS Lambda", "Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon EKS", "CloudFront", "Terraform"],
    features: ["End-to-End AWS Migration & Modernization", "Serverless & Event-Driven Architectures", "Multi-AZ High Availability & Auto-Scaling", "AWS Well-Architected Framework & FinOps"],
    benefits: ["Up to 60% cloud infrastructure cost optimization", "99.99% multi-region uptime and fault tolerance", "Rapid time-to-market with serverless acceleration"],
    process: [
      { step: 1, title: "AWS Cloud Assessment", description: "Audit current infrastructure, workload dependencies, and TCO cost savings." },
      { step: 2, title: "Well-Architected Blueprint", description: "Design VPC network topologies, security groups, and multi-AZ failovers." },
      { step: 3, title: "Migration & Automation", description: "Execute phased migration using AWS DMS/MGN with automated CI/CD pipelines." },
      { step: 4, title: "24/7 Monitoring & FinOps", description: "Continuous CloudWatch observability, cost rightsizing, and SRE management." }
    ],
    faq: [
      { question: "Can you help migrate our legacy database to Amazon RDS or Aurora?", answer: "Yes, we use AWS Database Migration Service (DMS) for zero-downtime database migrations to RDS PostgreSQL, MySQL, or Aurora." }
    ],
    isActive: true
  },
  {
    title: "Google Cloud Development",
    slug: "google-cloud-development",
    shortDescription: "Google Cloud Platform (GCP) development, GKE Kubernetes containerization, BigQuery, and Vertex AI.",
    description: "Architecting secure, hyper-scalable cloud solutions on Google Cloud Platform. Engineered with GKE Kubernetes container orchestration, serverless Cloud Run, BigQuery petabyte analytics, and 24/7 managed GCP FinOps monitoring.",
    icon: "Cloud",
    image: "/images/google_cloud_hero_architecture.jpg",
    technologies: ["Google Kubernetes Engine (GKE)", "BigQuery", "Cloud Run", "Vertex AI", "Cloud Spanner", "Cloud SQL", "Pub/Sub", "Terraform"],
    features: ["End-to-End GCP Cloud Migration & Re-platforming", "GKE Microservices Orchestration with Autopilot", "Serverless Containers with Cloud Run", "Enterprise BigQuery Analytics & Vertex AI"],
    benefits: ["Sub-second global analytics with serverless BigQuery", "99.999% multi-region database uptime with Cloud Spanner", "Up to 50% cloud infrastructure cost optimization with FinOps"],
    process: [
      { step: 1, title: "GCP Assessment & Architecture", description: "Audit current infrastructure, workload dependencies, and cost-benefit analysis." },
      { step: 2, title: "GKE & Cloud Run Engineering", description: "Containerize microservices, build declarative Terraform manifests, and configure VPC networks." },
      { step: 3, title: "Data Migration & Analytics", description: "Streamline data ingestion to BigQuery and configure automated Cloud Build CI/CD pipelines." },
      { step: 4, title: "24/7 SRE & Cloud Armor Security", description: "Enforce Google Cloud Armor DDoS protection, IAM least privilege, and continuous SRE monitoring." }
    ],
    faq: [
      { question: "What are Google Cloud Development Services, and why are they essential?", answer: "Google Cloud Development Services encompass cloud architecture design, application migration, container orchestration (GKE), serverless compute (Cloud Run), and data analytics (BigQuery) on Google Cloud Platform." }
    ],
    isActive: true
  },
  {
    title: "Cloud & DevOps Services",
    slug: "cloud-devops",
    shortDescription: "Multi-cloud infrastructure, CI/CD pipeline automation, Kubernetes, and 24/7 site reliability engineering.",
    description: "Architecting secure, hyper-scalable multi-cloud platforms and automated continuous delivery pipelines across AWS, Azure, and Google Cloud. Engineered with Infrastructure as Code (Terraform), Kubernetes containerization, and 24/7 SRE monitoring.",
    icon: "Cloud",
    image: "/images/cloud_devops_hero.jpg",
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "ArgoCD"],
    features: ["Enterprise Multi-Cloud Infrastructure & Migration", "Automated Multi-Branch CI/CD Release Pipelines", "Declarative Infrastructure as Code (Terraform/IaC)", "24/7 SRE Observability & Cloud FinOps Governance"],
    benefits: ["Up to 10x faster software release deployment velocity", "99.99% multi-region cloud uptime and automated self-healing", "Up to 50% cloud infrastructure cost optimization"],
    process: [
      { step: 1, title: "Cloud & DevOps Audit", description: "Assess current delivery pipelines, architecture bottlenecks, and security gaps." },
      { step: 2, title: "IaC & Multi-Cloud Architecture", description: "Design repeatable cloud environments with Terraform, Docker, and Kubernetes." },
      { step: 3, title: "CI/CD & GitOps Automation", description: "Build declarative pipelines with automated linting, testing, and zero-downtime deployment." },
      { step: 4, title: "24/7 SRE & Cloud FinOps", description: "Continuous observability with Prometheus/Grafana, proactive incident response, and cost governance." }
    ],
    faq: [
      { question: "What are Cloud & DevOps Services, and why are they essential?", answer: "Cloud & DevOps Services unite modern cloud computing architecture with automated DevOps release engineering to accelerate software delivery and eliminate downtime." }
    ],
    isActive: true
  },
  {
    title: "Healthcare App Development",
    slug: "health-care-app-development",
    shortDescription: "HIPAA & HITECH compliant telemedicine platforms, doctor appointment apps, and EHR/EMR integrations.",
    description: "Architecting secure, scalable healthcare mobile apps and web platforms. Engineered with WebRTC HD video consultation, HL7/FHIR interoperability, and 100% HIPAA regulatory compliance.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Flutter", "React.js", "Node.js", "Python", "WebRTC", "HL7/FHIR", "AWS MedTech"],
    features: [
      "100% HIPAA & HITECH Regulatory Compliance",
      "WebRTC Encrypted HD Video Consultation",
      "HL7 & FHIR Standard EHR Integration",
      "IoT Wearable Sync & Remote Patient Monitoring",
      "Digital e-Prescription & Pharmacy Dispatch"
    ],
    benefits: [
      "Reduce patient waiting time by 60%",
      "Eliminate clinical data silos with FHIR integration",
      "Zero security breach guarantee with end-to-end encryption"
    ],
    process: [
      { step: 1, title: "Discovery & HIPAA Blueprinting", description: "Map clinical workflows, patient journeys, and health security standards." },
      { step: 2, title: "UI/UX & Accessibility Design", description: "Design responsive, WCAG-compliant medical mobile interfaces." },
      { step: 3, title: "Agile Development & API Build", description: "Develop zero-trust backend microservices and mobile native apps." },
      { step: 4, title: "QA, Pen-Testing & Launch", description: "Rigorous OWASP vulnerability scans, HIPAA audits, and app store release." }
    ],
    faq: [
      { question: "How do you ensure HIPAA compliance?", answer: "We implement AES-256 data encryption at rest, TLS 1.3 in transit, role-based access control, and complete audit logging." },
      { question: "Can you integrate with existing EHR systems?", answer: "Yes, we support HL7 and FHIR standards for seamless integration with Epic, Cerner, Allscripts, and AthenaHealth." }
    ],
    isActive: true
  },
  {
    title: "Healthcare App Development",
    slug: "healthcare-app-development",
    shortDescription: "HIPAA & HITECH compliant telemedicine platforms, doctor appointment apps, and EHR/EMR integrations.",
    description: "Architecting secure, scalable healthcare mobile apps and web platforms. Engineered with WebRTC HD video consultation, HL7/FHIR interoperability, and 100% HIPAA regulatory compliance.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Flutter", "React.js", "Node.js", "Python", "WebRTC", "HL7/FHIR", "AWS MedTech"],
    features: [
      "100% HIPAA & HITECH Regulatory Compliance",
      "WebRTC Encrypted HD Video Consultation",
      "HL7 & FHIR Standard EHR Integration",
      "IoT Wearable Sync & Remote Patient Monitoring",
      "Digital e-Prescription & Pharmacy Dispatch"
    ],
    benefits: [
      "Reduce patient waiting time by 60%",
      "Eliminate clinical data silos with FHIR integration",
      "Zero security breach guarantee with end-to-end encryption"
    ],
    process: [
      { step: 1, title: "Discovery & HIPAA Blueprinting", description: "Map clinical workflows, patient journeys, and health security standards." },
      { step: 2, title: "UI/UX & Accessibility Design", description: "Design responsive, WCAG-compliant medical mobile interfaces." },
      { step: 3, title: "Agile Development & API Build", description: "Develop zero-trust backend microservices and mobile native apps." },
      { step: 4, title: "QA, Pen-Testing & Launch", description: "Rigorous OWASP vulnerability scans, HIPAA audits, and app store release." }
    ],
    faq: [
      { question: "How do you ensure HIPAA compliance?", answer: "We implement AES-256 data encryption at rest, TLS 1.3 in transit, role-based access control, and complete audit logging." },
      { question: "Can you integrate with existing EHR systems?", answer: "Yes, we support HL7 and FHIR standards for seamless integration with Epic, Cerner, Allscripts, and AthenaHealth." }
    ],
    isActive: true
  },
  {
    title: "Education App Development",
    slug: "education-app-development",
    shortDescription: "Custom eLearning mobile apps, Learning Management Systems (LMS), virtual classrooms, and interactive eBooks.",
    description: "Architecting white-label custom education mobile apps and Web platforms. Engineered with WebRTC live video classrooms, AR/VR gamified learning, automated online exam grading, and school ERP integration.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React.js", "Next.js", "Node.js", "Python", "React Native", "Flutter", "PostgreSQL", "AWS EdTech"],
    features: [
      "100% White Label & Customizable eLearning Apps",
      "WebRTC Real-time Virtual Classrooms & Whiteboards",
      "Automated Exam & Assignment Grading System",
      "Interactive eBooks & Gamified Brain Quizzes",
      "Offline Study Material Storage & Download Engine"
    ],
    benefits: [
      "Increase student course completion rates by 45%",
      "Automate 90% of school administrative tasks & fee collections",
      "Enable anywhere-anytime digital learning on iOS, Android & Web"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Define EdTech objectives, curriculum structures, and portal blueprints." },
      { step: 2, title: "UI/UX & Wireframing", description: "Design responsive, intuitive student, teacher, and admin interfaces." },
      { step: 3, title: "Agile Development", description: "Develop scalable backend microservices, mobile apps, and video streaming." },
      { step: 4, title: "QA & Production Launch", description: "Automated load testing for concurrent exam users and app store publication." }
    ],
    faq: [
      { question: "What characteristics should an education app possess?", answer: "Online live sessions, video recording repositories, automated exams, and instant chat." },
      { question: "Can you build custom LMS software for universities?", answer: "Yes, we build 100% custom Learning Management Systems tailored to institutional requirements." }
    ],
    isActive: true
  },
  {
    title: "Education App Development",
    slug: "education-app-development-company",
    shortDescription: "Custom eLearning mobile apps, Learning Management Systems (LMS), virtual classrooms, and interactive eBooks.",
    description: "Architecting white-label custom education mobile apps and Web platforms. Engineered with WebRTC live video classrooms, AR/VR gamified learning, automated online exam grading, and school ERP integration.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React.js", "Next.js", "Node.js", "Python", "React Native", "Flutter", "PostgreSQL", "AWS EdTech"],
    features: [
      "100% White Label & Customizable eLearning Apps",
      "WebRTC Real-time Virtual Classrooms & Whiteboards",
      "Automated Exam & Assignment Grading System",
      "Interactive eBooks & Gamified Brain Quizzes",
      "Offline Study Material Storage & Download Engine"
    ],
    benefits: [
      "Increase student course completion rates by 45%",
      "Automate 90% of school administrative tasks & fee collections",
      "Enable anywhere-anytime digital learning on iOS, Android & Web"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Define EdTech objectives, curriculum structures, and portal blueprints." },
      { step: 2, title: "UI/UX & Wireframing", description: "Design responsive, intuitive student, teacher, and admin interfaces." },
      { step: 3, title: "Agile Development", description: "Develop scalable backend microservices, mobile apps, and video streaming." },
      { step: 4, title: "QA & Production Launch", description: "Automated load testing for concurrent exam users and app store publication." }
    ],
    faq: [
      { question: "What characteristics should an education app possess?", answer: "Online live sessions, video recording repositories, automated exams, and instant chat." },
      { question: "Can you build custom LMS software for universities?", answer: "Yes, we build 100% custom Learning Management Systems tailored to institutional requirements." }
    ],
    isActive: true
  },
  {
    title: "Uber Like App Development",
    slug: "uber-like-app-development",
    shortDescription: "Custom white-label Uber clone apps, ride hailing platforms, parcel delivery dispatch, and on-demand mobility software.",
    description: "Architecting white-label custom Uber-like mobile apps for iOS & Android with sub-second WebSockets GPS tracking, automated driver dispatching, surge pricing heat maps, multi-payment gateways, and super admin portals.",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "Kotlin", "Swift", "Flutter", "React Native", "PostGIS PostgreSQL", "Firebase", "AWS"],
    features: [
      "100% Custom White-Label & Source Code Ownership",
      "Sub-Second Real-Time WebSockets GPS Tracking Engine",
      "Dynamic Surge Pricing & Heat Map Analytics",
      "Automated Driver Matching & Dispatch Algorithm",
      "Multi-Payment Gateways & In-App Driver Earnings Payout"
    ],
    benefits: [
      "Sub-30 second driver dispatch response times",
      "Zero monthly royalty or platform revenue fees",
      "Launch on-demand taxi, delivery, caregiver, or food apps in 10-12 weeks"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Map city locations, fleet sizes, pricing surge models, and payment gateways." },
      { step: 2, title: "UI/UX & Interactive Prototype", description: "Craft intuitive rider, driver, and admin wireframe flows." },
      { step: 3, title: "Agile Development", description: "Build spatial PostGIS databases, WebSockets engine, and mobile native apps." },
      { step: 4, title: "QA & App Store Release", description: "Execute GPS stress testing, payment security audits, and store publication." }
    ],
    faq: [
      { question: "How tailored will the app be to my business?", answer: "Every application we design is 100% customized to your brand image, color palette, logo, and business workflow." },
      { question: "Do you provide complete source code and documentation?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Uber Like App Development Services",
    slug: "uber-like-app-development-services",
    shortDescription: "Custom white-label Uber clone apps, ride hailing platforms, parcel delivery dispatch, and on-demand mobility software.",
    description: "Architecting white-label custom Uber-like mobile apps for iOS & Android with sub-second WebSockets GPS tracking, automated driver dispatching, surge pricing heat maps, multi-payment gateways, and super admin portals.",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "Kotlin", "Swift", "Flutter", "React Native", "PostGIS PostgreSQL", "Firebase", "AWS"],
    features: [
      "100% Custom White-Label & Source Code Ownership",
      "Sub-Second Real-Time WebSockets GPS Tracking Engine",
      "Dynamic Surge Pricing & Heat Map Analytics",
      "Automated Driver Matching & Dispatch Algorithm",
      "Multi-Payment Gateways & In-App Driver Earnings Payout"
    ],
    benefits: [
      "Sub-30 second driver dispatch response times",
      "Zero monthly royalty or platform revenue fees",
      "Launch on-demand taxi, delivery, caregiver, or food apps in 10-12 weeks"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Map city locations, fleet sizes, pricing surge models, and payment gateways." },
      { step: 2, title: "UI/UX & Interactive Prototype", description: "Craft intuitive rider, driver, and admin wireframe flows." },
      { step: 3, title: "Agile Development", description: "Build spatial PostGIS databases, WebSockets engine, and mobile native apps." },
      { step: 4, title: "QA & App Store Release", description: "Execute GPS stress testing, payment security audits, and store publication." }
    ],
    faq: [
      { question: "How tailored will the app be to my business?", answer: "Every application we design is 100% customized to your brand image, color palette, logo, and business workflow." },
      { question: "Do you provide complete source code and documentation?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Spotify Like App Development",
    slug: "spotify-like-app-development",
    shortDescription: "Custom white-label Spotify clone apps, audio streaming platforms, podcast hosting, and artist monetization.",
    description: "Architecting white-label custom Spotify-like audio streaming applications for iOS & Android with AI recommendation algorithms, encrypted offline music downloads, FLAC 320kbps audio streaming, and podcast hosting.",
    icon: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "Node.js", "Kotlin", "Swift", "Flutter", "MongoDB", "AWS CloudFront", "Redis"],
    features: [
      "AI Personalization & Machine Learning Music Mixes",
      "AES-256 Encrypted Offline Track Downloads",
      "High-Fidelity 320 kbps & Lossless Audio Streaming",
      "Freemium & Multi-Tier Subscription Payment Engine",
      "Direct Artist Community & Playlist Sharing"
    ],
    benefits: [
      "Sub-second audio buffering via AWS Edge CDN",
      "100% white-label customization & full source code ownership",
      "Monetize with subscriptions, audio ads, and artist tipping"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Map music catalogues, licensing models, and subscription tiers." },
      { step: 2, title: "UI/UX & Audio Player Design", description: "Craft interactive audio player, equalizer, and playlist wireframes." },
      { step: 3, title: "Agile Development", description: "Develop Python AI algorithms, Node.js WebSockets, and AWS CDN pipelines." },
      { step: 4, title: "QA & App Store Publication", description: "Perform audio DRM security audits and store releases." }
    ],
    faq: [
      { question: "What language is Spotify written in?", answer: "Python is the primary language for recommendation algorithms, along with C++, Java, and Node.js for audio streaming." },
      { question: "Do you provide NDAs?", answer: "Yes, we sign strict NDAs to safeguard your business concept." }
    ],
    isActive: true
  },
  {
    title: "Audio Streaming App Like Spotify",
    slug: "audio-streaming-app-like-spotify",
    shortDescription: "Custom white-label Spotify clone apps, audio streaming platforms, podcast hosting, and artist monetization.",
    description: "Architecting white-label custom Spotify-like audio streaming applications for iOS & Android with AI recommendation algorithms, encrypted offline music downloads, FLAC 320kbps audio streaming, and podcast hosting.",
    icon: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "Node.js", "Kotlin", "Swift", "Flutter", "MongoDB", "AWS CloudFront", "Redis"],
    features: [
      "AI Personalization & Machine Learning Music Mixes",
      "AES-256 Encrypted Offline Track Downloads",
      "High-Fidelity 320 kbps & Lossless Audio Streaming",
      "Freemium & Multi-Tier Subscription Payment Engine",
      "Direct Artist Community & Playlist Sharing"
    ],
    benefits: [
      "Sub-second audio buffering via AWS Edge CDN",
      "100% white-label customization & full source code ownership",
      "Monetize with subscriptions, audio ads, and artist tipping"
    ],
    process: [
      { step: 1, title: "Requirement Gathering", description: "Map music catalogues, licensing models, and subscription tiers." },
      { step: 2, title: "UI/UX & Audio Player Design", description: "Craft interactive audio player, equalizer, and playlist wireframes." },
      { step: 3, title: "Agile Development", description: "Develop Python AI algorithms, Node.js WebSockets, and AWS CDN pipelines." },
      { step: 4, title: "QA & App Store Publication", description: "Perform audio DRM security audits and store releases." }
    ],
    faq: [
      { question: "What language is Spotify written in?", answer: "Python is the primary language for recommendation algorithms, along with C++, Java, and Node.js for audio streaming." },
      { question: "Do you provide NDAs?", answer: "Yes, we sign strict NDAs to safeguard your business concept." }
    ],
    isActive: true
  },
  {
    title: "Zomato Like App Development",
    slug: "zomato-like-app-development",
    shortDescription: "Custom white-label food delivery app like Zomato & Swiggy, cloud kitchens, and real-time GPS dispatch engine.",
    description: "Building custom on-demand food delivery applications for iOS & Android connecting customers, local restaurants, cloud kitchens, and delivery partners with sub-second GPS live order tracking and auto-dispatch engines.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "React Native", "Flutter", "Kotlin", "Swift", "PostgreSQL", "PostGIS", "AWS Cloud"],
    features: [
      "Sub-Second Live GPS Order Tracking",
      "Multi-Restaurant Menu & Cooking Customization Notes",
      "Automated Driver Dispatch & Dispatch Engine",
      "Multi-Gateway Secure Payments & Cash on Delivery",
      "Restaurant Merchant Portal & Revenue Analytics"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Monetize via restaurant commission fees and delivery charges",
      "Support for multi-brand cloud kitchens and tiffin meal box subscriptions"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map multi-restaurant aggregators, delivery zones, and commission ledgers." },
      { step: 2, title: "UI/UX Ecosystem Design", description: "Design wireframe flows for Customer app, Driver app, and Merchant portal." },
      { step: 3, title: "Agile Engineering", description: "Develop PostGIS spatial databases, WebSockets tracking, and mobile apps." },
      { step: 4, title: "QA & App Store Release", description: "Execute GPS stress testing, payment security audits, and store publication." }
    ],
    faq: [
      { question: "How does the revenue model work for a Zomato clone app?", answer: "The platform generates revenue through restaurant commission fees (15-25%), customer delivery charges, and sponsored ads." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Food Delivery App Development",
    slug: "food-delivery-app-development",
    shortDescription: "Custom white-label food delivery app like Zomato & Swiggy, cloud kitchens, and real-time GPS dispatch engine.",
    description: "Building custom on-demand food delivery applications for iOS & Android connecting customers, local restaurants, cloud kitchens, and delivery partners with sub-second GPS live order tracking and auto-dispatch engines.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "React Native", "Flutter", "Kotlin", "Swift", "PostgreSQL", "PostGIS", "AWS Cloud"],
    features: [
      "Sub-Second Live GPS Order Tracking",
      "Multi-Restaurant Menu & Cooking Customization Notes",
      "Automated Driver Dispatch & Dispatch Engine",
      "Multi-Gateway Secure Payments & Cash on Delivery",
      "Restaurant Merchant Portal & Revenue Analytics"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Monetize via restaurant commission fees and delivery charges",
      "Support for multi-brand cloud kitchens and tiffin meal box subscriptions"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map multi-restaurant aggregators, delivery zones, and commission ledgers." },
      { step: 2, title: "UI/UX Ecosystem Design", description: "Design wireframe flows for Customer app, Driver app, and Merchant portal." },
      { step: 3, title: "Agile Engineering", description: "Develop PostGIS spatial databases, WebSockets tracking, and mobile apps." },
      { step: 4, title: "QA & App Store Release", description: "Execute GPS stress testing, payment security audits, and store publication." }
    ],
    faq: [
      { question: "How does the revenue model work for a Zomato clone app?", answer: "The platform generates revenue through restaurant commission fees (15-25%), customer delivery charges, and sponsored ads." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Amazon Like App Development",
    slug: "amazon-like-app-development",
    shortDescription: "Custom white-label multi-vendor e-commerce marketplace app like Amazon, seller portals, and 1-click checkout.",
    description: "Building scalable white-label custom Amazon-like e-commerce mobile applications for iOS & Android with AI predictive recommendations, multi-vendor commission ledgers, Elasticsearch product catalog search, and 1-click order checkout.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1556742049-0a674640c668?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "React Native", "Flutter", "Kotlin", "Swift", "PostgreSQL", "Elasticsearch", "AWS CloudFront"],
    features: [
      "AI Predictive Product Recommendations & Elasticsearch Search",
      "Multi-Vendor Seller Portals & Automated Payout Ledgers",
      "1-Click Accelerated Checkout & Saved Payment Tokens",
      "Real-Time Order Shipment Tracking & Return Workflows",
      "Flash Sale Banners, Coupon Codes, & B2B Wholesale Pricing"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Sub-second catalog loading powered by AWS Elastic CDN",
      "Monetize via seller commission fees, advertising banners, and Prime passes"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map product taxonomies, vendor payout ledgers, and shipping carriers." },
      { step: 2, title: "UI/UX & Storefront Design", description: "Design wireframes for Buyer Shopping app, Vendor portal, and Super Admin console." },
      { step: 3, title: "Agile Engineering", description: "Develop Elasticsearch search indices, Node.js payment gateways, and mobile apps." },
      { step: 4, title: "QA & App Store Release", description: "Perform PCI-DSS security audits, stress testing, and store publication." }
    ],
    faq: [
      { question: "How does the vendor commission model work in an Amazon clone app?", answer: "The platform administrator sets customized commission rates per product category. When an order completes, commissions are automatically deducted before vendor payouts." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "E-Commerce Mobile App Development Company",
    slug: "ecommerce-mobile-app-development-company",
    shortDescription: "Custom white-label multi-vendor e-commerce marketplace app like Amazon, seller portals, and 1-click checkout.",
    description: "Building scalable white-label custom Amazon-like e-commerce mobile applications for iOS & Android with AI predictive recommendations, multi-vendor commission ledgers, Elasticsearch product catalog search, and 1-click order checkout.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1556742049-0a674640c668?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Node.js", "React Native", "Flutter", "Kotlin", "Swift", "PostgreSQL", "Elasticsearch", "AWS CloudFront"],
    features: [
      "AI Predictive Product Recommendations & Elasticsearch Search",
      "Multi-Vendor Seller Portals & Automated Payout Ledgers",
      "1-Click Accelerated Checkout & Saved Payment Tokens",
      "Real-Time Order Shipment Tracking & Return Workflows",
      "Flash Sale Banners, Coupon Codes, & B2B Wholesale Pricing"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Sub-second catalog loading powered by AWS Elastic CDN",
      "Monetize via seller commission fees, advertising banners, and Prime passes"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map product taxonomies, vendor payout ledgers, and shipping carriers." },
      { step: 2, title: "UI/UX & Storefront Design", description: "Design wireframes for Buyer Shopping app, Vendor portal, and Super Admin console." },
      { step: 3, title: "Agile Engineering", description: "Develop Elasticsearch search indices, Node.js payment gateways, and mobile apps." },
      { step: 4, title: "QA & App Store Release", description: "Perform PCI-DSS security audits, stress testing, and store publication." }
    ],
    faq: [
      { question: "How does the vendor commission model work in an Amazon clone app?", answer: "The platform administrator sets customized commission rates per product category. When an order completes, commissions are automatically deducted before vendor payouts." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Visitor Management System",
    slug: "visitor-management-system",
    shortDescription: "Custom white-label visitor management system, QR gate passes, iPad check-in kiosks, and host alerts.",
    description: "Architecting custom enterprise visitor management systems for offices, factories, and residential gates with self-service iPad kiosks, instant QR code gate passes, facial recognition, and automated host alert notifications.",
    icon: "UserCheck",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    technologies: [".NET Core", "C#", "Node.js", "Python", "Swift", "Kotlin", "PostgreSQL", "AWS"],
    features: [
      "1-Tap Contactless QR Code Check-In & Gate Pass",
      "Real-Time Host Alerts via Slack, Teams, SMS, and WhatsApp",
      "Wireless Thermal Badge Printing with Visitor Photos",
      "Emergency Evacuation 1-Tap Real-Time Occupancy Roll Call",
      "SOC2 & OSHA Audit-Ready Visitor Access Compliance Logs"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Integrates with physical access control turnstiles and HID readers",
      "Pre-registration calendar invites and instant security desk blacklist alerts"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map facility entrance turnstiles, gate pass workflows, and host notifications." },
      { step: 2, title: "Kiosk & App UI Design", description: "Design wireframe flows for iPad self-registration kiosks and security admin portal." },
      { step: 3, title: "Agile Software Development", description: "Develop WebSockets host triggers, OCR document scanning, and database engines." },
      { step: 4, title: "QA & On-Site Rollout", description: "Execute hardware printer integration testing and corporate site deployment." }
    ],
    faq: [
      { question: "What is a Visitor Management System (VMS)?", answer: "A VMS automates guest registration, digital gate pass issuance, host notifications, and facility security compliance." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Warehouse Management System",
    slug: "warehouse-management-system",
    shortDescription: "AI-driven warehouse management system (WMS), barcode stock tracking, RFID, and SAP/Oracle ERP sync.",
    description: "Building scalable AI-driven warehouse management software (WMS) for 3PL logistics, retail, and manufacturing with handheld barcode/RFID scanning, AI pick-list optimization, and SAP/Oracle ERP integrations.",
    icon: "Boxes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    technologies: [".NET Core", "Java", "Python", "Android Native", "React Native", "PostgreSQL", "AWS"],
    features: [
      "Real-Time Barcode & RFID SKU Inventory Tracking",
      "AI Demand Forecasting & Machine Learning Auto Re-Orders",
      "Pick & Pack Route Optimization for Warehouse Workers",
      "Inbound Receiving, Dock-to-Stock, & Putaway Location Assignment",
      "Bi-Directional Real-Time Sync with SAP, Oracle, & NetSuite ERPs"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Eliminate annual inventory shutdowns via continuous mobile cycle counting",
      "Direct carrier shipping label integrations with FedEx, UPS, and DHL"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map warehouse bin locations, SKU velocity, and barcode scanner workflows." },
      { step: 2, title: "WMS Software Architecture", description: "Design Android handheld scanner apps and logistics web dashboards." },
      { step: 3, title: "Agile Development & ERP Sync", description: "Develop real-time inventory databases, SAP/Oracle API connectors, and AI models." },
      { step: 4, title: "QA & Warehouse Rollout", description: "Execute barcode scanner stress testing and live warehouse site deployment." }
    ],
    faq: [
      { question: "Does the WMS support Zebra/Honeywell barcode scanners?", answer: "Yes, we build native applications optimized for industrial Android handheld laser scanners." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  },
  {
    title: "Clover App Development",
    slug: "clover-app-development",
    shortDescription: "Custom Clover POS app development for Clover Station, Mini, & Flex hardware devices.",
    description: "Developing custom Clover App Market software solutions for Clover Station Duo, Solo, Mini, and Flex hardware POS devices with custom inventory sync, loyalty rewards, kitchen display systems, and REST API connectors.",
    icon: "CreditCard",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Clover REST API", "Clover Android SDK", "Node.js", "Java", "React", "PostgreSQL", "AWS"],
    features: [
      "Bespoke Clover POS Apps for Station, Mini, and Flex Hardware",
      "Real-Time Inventory & Barcode Sync between POS & E-Commerce",
      "Custom Customer Loyalty & Rewards Points Engine",
      "Kitchen Display System (KDS) & Automated Ticket Printing",
      "Offline Credit Transaction Mode with Encrypted Sync"
    ],
    benefits: [
      "100% white-label customization & full source code ownership",
      "Complete submission support for the official Clover App Market",
      "Multi-store POS management with centralized pricing and employee roles"
    ],
    process: [
      { step: 1, title: "Requirement Blueprinting", description: "Map POS transaction flows, inventory sync, and hardware devices." },
      { step: 2, title: "Clover SDK App Design", description: "Design UI wireframes optimized for Clover Station Duo 14\" and Flex 6\" screens." },
      { step: 3, title: "Agile Engineering", description: "Develop Clover Android SDK apps, REST API webhooks, and cloud databases." },
      { step: 4, title: "Clover Sandbox Testing & Release", description: "Perform Clover hardware sandbox testing and official App Market submission." }
    ],
    faq: [
      { question: "Can you submit our app to the official Clover App Market?", answer: "Yes, we manage the entire security compliance audit and App Market submission." },
      { question: "Do you provide complete source code?", answer: "Yes, we provide 100% source code ownership and technical documentation." }
    ],
    isActive: true
  }
];

export const initialPortfolio = [
  {
    title: "AI Recruitment & Talent Matching Platform",
    slug: "ai-recruitment-platform",
    shortDescription: "An intelligent talent acquisition platform powered by LLM resume analysis and semantic skill matching.",
    description: "Built for a global enterprise recruiting firm, this platform analyzes candidate profiles using natural language processing to rank applicants against complex job requirements with 94% accuracy.",
    industry: "Human Resources",
    category: "AI",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["React", "Node.js", "Python", "OpenAI API", "MongoDB", "Pinecone Vector DB"],
    challenge: "Traditional resume screeners relied on keyword matching that missed qualified non-standard candidates, resulting in 300+ manual hours spent per recruiter per month.",
    solution: "Engineered a custom vector embedding system using OpenAI models to evaluate contextual candidate expertise, soft skills, and career progression automatically.",
    results: [
      "75% reduction in candidate screening time",
      "3.2x increase in successful candidate placements",
      "Processed over 1.2 million resumes in the first 6 months"
    ],
    features: [
      "Automated Resume Parsing & Vectorization",
      "Semantic Job Description Matching",
      "Bias-free Anonymized Candidate Evaluation",
      "Real-time Recruiter Dashboard"
    ],
    isFeatured: true,
    isActive: true
  },
  {
    title: "Telehealth & Remote Care Healthcare System",
    slug: "healthcare-management-system",
    shortDescription: "HIPAA-compliant telemedicine platform with HD video consultations and real-time EHR integration.",
    description: "A secure healthcare portal connecting over 250,000 active patients with doctors, offering instant video consultations, digital prescription dispatch, and lab result tracking.",
    industry: "Healthcare",
    category: "Web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["React", "Node.js", "WebRTC", "Express", "MongoDB", "AWS MedTech"],
    challenge: "The client needed a HIPAA-compliant solution to conduct virtual patient visits with sub-100ms video latency while synchronizing data with legacy EHR databases.",
    solution: "Developed an end-to-end encrypted WebRTC video platform integrated with Node.js microservices and automated compliance audit logging.",
    results: [
      "99.99% video uptime across 50,000+ monthly visits",
      "Sub-100ms video latency globally",
      "100% HIPAA and SOC2 Type II compliance audit pass"
    ],
    features: [
      "Encrypted WebRTC HD Video Consultations",
      "Digital Prescription Generation",
      "Automated Appointment Reminders via SMS/Email",
      "Seamless EHR Integration"
    ],
    isFeatured: true,
    isActive: true
  },
  {
    title: "Global Multi-Vendor E-Commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "High-scale B2B/B2C marketplace handling over 100,000 daily transactions with dynamic multi-currency routing.",
    description: "Architected a modular headless e-commerce store with real-time inventory synchronization across 400 global vendors.",
    industry: "E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe Connect", "Tailwind CSS"],
    challenge: "High checkout abandonment caused by slow page rendering and complex multi-vendor checkout processes during peak seasonal sales events.",
    solution: "Built a headless Next.js frontend coupled with Redis caching and Stripe Connect multi-party payment splitting.",
    results: [
      "48% increase in mobile checkout conversion rate",
      "0.8s average page load speed worldwide",
      "$45M in annual gross merchandise volume processed"
    ],
    features: [
      "Multi-vendor Vendor Portal & Analytics",
      "Dynamic Multi-Currency & Tax Engine",
      "Headless Speed Optimization",
      "AI Product Recommendation Engine"
    ],
    isFeatured: true,
    isActive: true
  },
  {
    title: "PropTech Commercial Real Estate Platform",
    slug: "real-estate-platform",
    shortDescription: "Virtual 3D property marketplace with interactive map search and automated mortgage calculator.",
    description: "An intuitive property listing & investment portal enabling commercial buyers to explore immersive 3D virtual walkthroughs and perform financial yield modeling.",
    industry: "Real Estate",
    category: "Web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["React", "Express", "Mapbox GL", "Three.js", "MongoDB", "AWS S3"],
    challenge: "Inability for international buyers to evaluate physical property layouts remotely led to extended 60+ day sales cycles.",
    solution: "Created interactive WebGL property tours integrated with Mapbox spatial data layers and live mortgage comparison engines.",
    results: [
      "40% reduction in average property listing sales cycle",
      "2.5M property views per month",
      "Over $200M in transaction volume facilitated"
    ],
    features: [
      "Interactive 3D Walkthrough Viewer",
      "Geospatial Property Search Filters",
      "Financial ROI & Yield Calculator",
      "Instant Broker Messaging Portal"
    ],
    isFeatured: false,
    isActive: true
  },
  {
    title: "AI Itinerary & Travel Assistant App",
    slug: "ai-travel-assistant",
    shortDescription: "Personalized trip itinerary planner using real-time travel data and predictive flight delay alerts.",
    description: "A cross-platform mobile application that generates customized multi-city travel itineraries within seconds based on user preferences and budget.",
    industry: "Travel",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["React Native", "Node.js", "Python AI Engine", "Google Places API", "MongoDB"],
    challenge: "Travelers spent an average of 14 hours planning complex multi-city trips using multiple disjointed websites.",
    solution: "Engineered a React Native mobile app with a lightweight AI engine that generates optimized daily itineraries including transport, dining, and activities.",
    results: [
      "4.9/5 star app store rating with 500k+ downloads",
      "Itinerary generation time reduced from hours to 15 seconds",
      "88% 30-day user retention rate"
    ],
    features: [
      "Instant AI Itinerary Generation",
      "Offline Map & Ticket Storage",
      "Real-time Flight Delay & Gate Notifications",
      "Collaborative Group Trip Planning"
    ],
    isFeatured: false,
    isActive: true
  },
  {
    title: "Smart Supply Chain Logistics Platform",
    slug: "logistics-management-system",
    shortDescription: "Real-time IoT fleet tracking, automated route optimization, and digital bill of lading.",
    description: "An enterprise fleet management system tracking over 15,000 commercial vehicles in real time with telemetry, fuel efficiency insights, and predictive maintenance alerts.",
    industry: "Logistics",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    technologies: ["React", "Node.js", "MQTT / IoT", "MongoDB", "Docker", "AWS IoT Core"],
    challenge: "High fuel consumption costs and lack of visibility into driver delivery routes led to frequent delivery SLA misses.",
    solution: "Integrated IoT sensors transmitting location data via MQTT to a scalable Node.js event stream processing pipeline.",
    results: [
      "18% reduction in total fleet fuel expenditure",
      "99.4% on-time delivery SLA compliance",
      "Real-time tracking of 15,000+ active trucks"
    ],
    features: [
      "Live GPS & Telemetry Tracking Dashboard",
      "Automated AI Route Optimization",
      "Digital Electronic Proof of Delivery",
      "Predictive Maintenance Alerts"
    ],
    isFeatured: true,
    isActive: true
  }
];

export const initialTestimonials = [
  {
    name: "Marcus Vance",
    designation: "Chief Technology Officer",
    company: "Apex Global FinTech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "Firevy.co delivered our high-throughput trading API weeks ahead of schedule. Their engineering standards, proactive communication, and deep cloud expertise are outstanding.",
    isActive: true
  },
  {
    name: "Elena Rostova",
    designation: "VP of Product",
    company: "CarePulse Health Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "The HIPAA-compliant telehealth app Nexora built for us has handled over 50,000 video visits flawlessly. Our user retention and satisfaction scores hit an all-time high.",
    isActive: true
  },
  {
    name: "David Chen",
    designation: "Founder & CEO",
    company: "LogiTrack Global",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "From concept design to cloud scaling, Nexora acted as an extension of our core team. Their dedicated engineers brought unparalleled technical rigor.",
    isActive: true
  },
  {
    name: "Sophia Martinez",
    designation: "Director of Digital Transformation",
    company: "Urban Real Estate Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "Our new PropTech marketplace built by Nexora reduced our property sales cycle by 40%. The UI/UX animations and 3D walkthroughs blew our investors away.",
    isActive: true
  }
];

export const initialIndustries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "HIPAA-compliant telemedicine platforms, EHR integration, medical AI diagnostics, and patient portals.",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    services: ["Web Development", "Mobile App Development", "AI & Machine Learning", "Software Testing"],
    isActive: true
  },
  {
    name: "Finance",
    slug: "finance",
    description: "Secure payment gateways, fraud detection algorithms, algorithmic trading portals, and mobile banking apps.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    services: ["Software Development", "API Development", "Cloud Solutions", "DevOps"],
    isActive: true
  },
  {
    name: "Education",
    slug: "education",
    description: "Interactive LMS platforms, virtual classrooms, AI tutoring systems, and mobile learning applications.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    services: ["Web Development", "Mobile App Development", "UI/UX Design"],
    isActive: true
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "3D virtual tour property portals, automated valuation models, broker CRMs, and tenant portals.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    services: ["Web Development", "UI/UX Design", "Cloud Solutions"],
    isActive: true
  },
  {
    name: "E-commerce",
    slug: "e-commerce",
    description: "High-throughput multi-vendor marketplaces, headless storefronts, and automated inventory management.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=800&q=80",
    services: ["Web Development", "Mobile App Development", "API Development"],
    isActive: true
  },
  {
    name: "Logistics",
    slug: "logistics",
    description: "Real-time IoT fleet tracking, automated route optimization, and digital warehouse management.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    services: ["Software Development", "Cloud Solutions", "DevOps"],
    isActive: true
  },
  {
    name: "Travel & Hospitality",
    slug: "travel",
    description: "AI trip planners, flight & hotel booking engines, and contactless guest experiences.",
    icon: "Plane",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    services: ["Mobile App Development", "AI & Machine Learning"],
    isActive: true
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Smart factory IoT monitoring, predictive machine maintenance, and supply chain ERP systems.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    services: ["Software Development", "Cloud Solutions"],
    isActive: true
  }
];

export const initialTechnologies = [
  { name: "React", category: "Frontend", icon: "Atom", description: "Modern component library for fast UI rendering.", isActive: true },
  { name: "Next.js", category: "Frontend", icon: "Layers", description: "Fullstack React framework with SSR & ISR capabilities.", isActive: true },
  { name: "TypeScript", category: "Frontend", icon: "Code", description: "Typed JavaScript for scalable codebase maintainability.", isActive: true },
  { name: "Tailwind CSS", category: "Frontend", icon: "Palette", description: "Utility-first CSS framework for custom enterprise UI design.", isActive: true },

  { name: "Node.js", category: "Backend", icon: "Server", description: "Asynchronous event-driven runtime for high-concurrency APIs.", isActive: true },
  { name: "Express.js", category: "Backend", icon: "Cpu", description: "Minimalist web framework for building robust REST APIs.", isActive: true },
  { name: "Python", category: "Backend", icon: "FileCode", description: "Ideal language for AI, data processing, and backend automation.", isActive: true },
  { name: "Java", category: "Backend", icon: "Coffee", description: "Enterprise grade runtime for robust microservices architecture.", isActive: true },

  { name: "React Native", category: "Mobile", icon: "Smartphone", description: "Cross-platform mobile framework using unified React code.", isActive: true },
  { name: "Flutter", category: "Mobile", icon: "Tablet", description: "Google's UI toolkit for natively compiled mobile apps.", isActive: true },

  { name: "MongoDB", category: "Database", icon: "Database", description: "Document-oriented NoSQL database for modern flexible schemas.", isActive: true },
  { name: "PostgreSQL", category: "Database", icon: "HardDrive", description: "Advanced open-source relational database with JSON support.", isActive: true },
  { name: "Redis", category: "Database", icon: "Zap", description: "In-memory data store for ultra-fast caching and pub-sub.", isActive: true },

  { name: "AWS", category: "Cloud", icon: "Cloud", description: "Industry-leading cloud infrastructure and serverless solutions.", isActive: true },
  { name: "Google Cloud", category: "Cloud", icon: "CloudRain", description: "High-performance compute and AI engine infrastructure.", isActive: true },
  { name: "Azure", category: "Cloud", icon: "Box", description: "Microsoft enterprise cloud ecosystem.", isActive: true },

  { name: "Docker", category: "DevOps", icon: "Container", description: "Containerization platform for seamless dev-to-prod parity.", isActive: true },
  { name: "Kubernetes", category: "DevOps", icon: "Compass", description: "Container orchestration for automated deployment scaling.", isActive: true },
  { name: "GitHub Actions", category: "DevOps", icon: "GitBranch", description: "Automated CI/CD workflows integrated into source repositories.", isActive: true },

  { name: "PyTorch & TensorFlow", category: "AI", icon: "Brain", description: "Deep learning frameworks for building custom neural networks.", isActive: true },
  { name: "OpenAI & LangChain", category: "AI", icon: "Sparkles", description: "Generative AI APIs and agent execution frameworks.", isActive: true }
];

export const initialJobs = [
  {
    _id: "job_1",
    title: "Business Development Executive",
    slug: "business-development-executive",
    department: "Sales & Marketing",
    location: "Ahmedabad, India / Hybrid",
    type: "Full-time",
    experience: "1 - 4 Years",
    openings: 4,
    urgent: false,
    order: 0,
    status: "published",
    description: "Identify and generate new business leads, cultivate client relationships across international markets, and drive revenue growth for enterprise tech solutions.",
    requirements: [
      "1-4 years of experience in IT business development / B2B software sales.",
      "Proven track record of generating qualified leads from international markets (USA, UK, Europe).",
      "Excellent written, verbal, and presentation communication skills.",
      "Experience with CRM tools like HubSpot or Salesforce."
    ],
    responsibilities: [
      "Prospect and engage C-level decision-makers and enterprise prospects.",
      "Conduct introductory discovery calls and align client requirements with technical solutions.",
      "Collaborate with solution architects to draft proposals and RFP responses.",
      "Achieve monthly and quarterly business development quotas."
    ],
    isActive: true
  },
  {
    _id: "job_2",
    title: "MERN Stack Developer",
    slug: "mern-stack-developer",
    department: "Engineering",
    location: "Ahmedabad, India / Remote",
    type: "Full-time",
    experience: "4 - 5 Years",
    openings: 1,
    urgent: true,
    order: 1,
    status: "published",
    description: "We are seeking a seasoned MERN Stack Developer with deep expertise in React.js, Node.js, Express, and MongoDB to build resilient web applications.",
    requirements: [
      "4+ years building commercial applications with React, Node.js, Express, and MongoDB.",
      "Hands-on experience with TypeScript, Next.js, and modern state management (Zustand/Redux).",
      "Strong understanding of RESTful API architecture, JWT authentication, and WebSockets.",
      "Experience optimizing database queries and MongoDB aggregations."
    ],
    responsibilities: [
      "Architect modular, high-performance UI components and resilient backend microservices.",
      "Implement secure authentication, role-based permissions, and third-party integrations.",
      "Participate in code reviews and enforce best practices in unit and integration testing.",
      "Collaborate closely with UI/UX designers and product managers in agile sprints."
    ],
    isActive: true
  },
  {
    _id: "job_3",
    title: "Accounts Executive",
    slug: "accounts-executive",
    department: "Finance & Accounts",
    location: "Ahmedabad, India / On-site",
    type: "Full-time",
    experience: "1 - 3 Years",
    openings: 1,
    urgent: false,
    order: 2,
    status: "published",
    description: "Manage day-to-day corporate financial accounts, vendor invoicing, tax compliance (GST, TDS), and financial reporting.",
    requirements: [
      "1-3 years of experience in corporate accounting / financial record keeping.",
      "Proficiency in Tally Prime, QuickBooks, or equivalent ERP software.",
      "Solid understanding of GST filings, TDS, balance sheets, and bank reconciliations.",
      "Bachelor's / Master's degree in Commerce or Accounting."
    ],
    responsibilities: [
      "Prepare and maintain accurate financial ledgers, vouchers, and reconciliations.",
      "Handle accounts receivable/payable and coordinate client billing cycles.",
      "Ensure timely statutory tax filings and compliance reporting.",
      "Assist senior management with monthly cash flow statements."
    ],
    isActive: true
  },
  {
    _id: "job_4",
    title: "Senior Full-Stack MERN Engineer",
    slug: "senior-fullstack-mern-engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    experience: "5+ Years",
    openings: 2,
    urgent: false,
    order: 3,
    status: "published",
    description: "We are seeking a Senior Full-Stack Engineer with expert-level proficiency in React, Node.js, Express, and MongoDB. You will architect scalable enterprise microservices and lead key client product initiatives.",
    requirements: [
      "5+ years building commercial React and Node.js applications.",
      "Deep understanding of MongoDB schema design, indexing, and aggregation pipelines.",
      "Experience with state management, Framer Motion, and Tailwind CSS.",
      "Familiarity with AWS, Docker, and CI/CD automated deployments."
    ],
    responsibilities: [
      "Architect clean, scalable frontend UI and RESTful backend APIs.",
      "Mentor mid-level engineers and enforce strict code review standards.",
      "Collaborate directly with product design and client solution architects.",
      "Optimize web application load performance and database query latency."
    ],
    isActive: true
  },
  {
    _id: "job_5",
    title: "AI & Machine Learning Solutions Architect",
    slug: "ai-solutions-architect",
    department: "AI & Innovation",
    location: "Remote",
    type: "Full-time",
    experience: "4+ Years",
    openings: 1,
    urgent: true,
    order: 4,
    status: "published",
    description: "Join our fast-growing AI team building custom RAG architectures, LLM fine-tuning pipelines, and predictive analytics engines for Fortune 500 clients.",
    requirements: [
      "4+ years experience with Python, PyTorch, TensorFlow, and OpenAI APIs.",
      "Hands-on experience with Vector DBs (Pinecone, Weaviate, Qdrant).",
      "Strong understanding of RAG architectures, prompt engineering, and agentic workflows.",
      "BS/MS in Computer Science, AI, or equivalent field."
    ],
    responsibilities: [
      "Design custom enterprise generative AI solutions for client workflows.",
      "Implement vector search pipelines and fine-tune open-weight models.",
      "Conduct technical feasibility evaluations for client AI projects."
    ],
    isActive: true
  },
  {
    _id: "job_6",
    title: "Lead UI/UX Product Designer",
    slug: "lead-ui-ux-designer",
    department: "Design",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    experience: "5+ Years",
    openings: 1,
    urgent: false,
    order: 5,
    status: "published",
    description: "Lead digital product design initiatives for modern SaaS and mobile platforms. Craft high-converting visual interfaces, Figma component systems, and fluid micro-interactions.",
    requirements: [
      "5+ years UI/UX design experience for web and mobile software products.",
      "Mastery of Figma, interactive prototyping, and design tokens.",
      "Strong portfolio demonstrating web application UI, typography, and motion design.",
      "Ability to translate complex user journeys into simple intuitive screens."
    ],
    responsibilities: [
      "Establish scalable design systems and visual standards.",
      "Conduct user research, wireframing, and interactive usability testing.",
      "Partner closely with React frontend developers for pixel-perfect implementation."
    ],
    isActive: true
  }
];

export const initialCareerPageData = {
  pageKey: "careers_main",
  meta: {
    title: "Build your Future with us | Careers at firevy.co",
    description: "Explore open software engineering, mobile development, and UI/UX design positions at firevy.co. Build impactful global products.",
    canonical: "/careers"
  },
  hero: {
    title: "Build your Future with us",
    description: "Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.",
    image: "",
    badge: "",
    isActive: true
  },
  tabs: [
    { id: "who-we-are", label: "Who we are", order: 0, isActive: true },
    { id: "why-firevy", label: "Why firevy.co", order: 1, isActive: true },
    { id: "benefits", label: "Benefits / What we offer", order: 2, isActive: true },
    { id: "life-at-firevy", label: "Life at firevy.co", order: 3, isActive: true },
    { id: "hiring-process", label: "Hiring Process", order: 4, isActive: true },
    { id: "current-openings", label: "Current Openings", order: 5, isActive: true }
  ],
  whoWeAre: [
    {
      id: "who_1",
      title: "Our Heritage & Vision",
      paragraphs: [
        "firevy.co, an ISO 27001:2013 certified Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2002. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups.",
        "Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 23+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success."
      ],
      image: "",
      order: 0,
      isActive: true
    },
    {
      id: "who_2",
      title: "Excellence in Delivery",
      paragraphs: [
        "We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.",
        "Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success."
      ],
      image: "",
      order: 1,
      isActive: true
    }
  ],
  whyFirevy: [
    {
      id: "why_1",
      title: "Impact:",
      subtitle: "Driving success through innovation",
      quote: "By harnessing creativity and strategic insight, we enable our teams to develop transformative solutions that foster meaningful progress and prove that with the right support, limitless possibilities can be realized.",
      image: "",
      order: 0,
      isActive: true
    },
    {
      id: "why_2",
      title: "Development:",
      subtitle: "Lifelong growth",
      quote: "We equip our associates with extensive knowledge and learning opportunities, fostering innovation and adaptability. This empowers them to stay at the forefront of industry trends and drive impactful transformation.",
      image: "",
      order: 1,
      isActive: true
    },
    {
      id: "why_3",
      title: "Support:",
      subtitle: "Empowering our people",
      quote: "By fostering a culture of continuous upskilling and reskilling, along with diverse career opportunities across the organization, we enable our people—at every stage of their journey—to unlock their potential and evolve into the professionals they strive to become.",
      image: "",
      order: 2,
      isActive: true
    },
    {
      id: "why_4",
      title: "Progress:",
      subtitle: "Partners in success",
      quote: "We see our people as lifelong partners in success, fostering relationships that grow and evolve. By continuously investing in their development, we cultivate a culture of continuous growth, empowering them to strive for new achievements at every stage of their careers.",
      image: "",
      order: 3,
      isActive: true
    }
  ],
  benefits: [
    { id: "b_1", title: "Collaborative Culture", icon: "Users", description: "Inclusive team environment that values every voice and idea.", order: 0, isActive: true },
    { id: "b_2", title: "Opportunities for Growth", icon: "TrendingUp", description: "Clear progression paths and leadership development.", order: 1, isActive: true },
    { id: "b_3", title: "Innovative Projects", icon: "Sparkles", description: "Work with modern AI, cloud, and enterprise technology stacks.", order: 2, isActive: true },
    { id: "b_4", title: "Work Life Balance", icon: "Heart", description: "Flexible hours and mental wellness support initiatives.", order: 3, isActive: true },
    { id: "b_5", title: "Celebrations & Outing", icon: "PartyPopper", description: "Quarterly team outings, festival celebrations, and sports events.", order: 4, isActive: true },
    { id: "b_6", title: "Rewards & Recognition", icon: "Award", description: "Performance bonuses, spotlight awards, and peer appreciation.", order: 5, isActive: true },
    { id: "b_7", title: "5 Days work week", icon: "Calendar", description: "Balanced Monday to Friday schedule with weekends off.", order: 6, isActive: true },
    { id: "b_8", title: "Continuous learning", icon: "BookOpen", description: "Funded certifications, hackathons, and technical workshops.", order: 7, isActive: true },
    { id: "b_9", title: "CSR Activities", icon: "Globe", description: "Opportunities to give back to the community and environment.", order: 8, isActive: true },
    { id: "b_10", title: "Professional Development", icon: "Briefcase", description: "Executive coaching, soft skills training, and mentorship.", order: 9, isActive: true },
    { id: "b_11", title: "Competency Building", icon: "ShieldCheck", description: "Domain mastery programs tailored for technical excellence.", order: 10, isActive: true },
    { id: "b_12", title: "Health Insurance", icon: "HeartPulse", description: "Comprehensive medical and family health coverage.", order: 11, isActive: true }
  ],
  lifeAtFirevy: [
    {
      id: "life_1",
      title: "Team Trophy Celebration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 0,
      isActive: true
    },
    {
      id: "life_2",
      title: "Team Outing Arch",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 1,
      isActive: true
    },
    {
      id: "life_3",
      title: "Holi Festival Color Celebration",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      order: 2,
      isActive: true
    },
    {
      id: "life_4",
      title: "Office Cake Celebration",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 3,
      isActive: true
    },
    {
      id: "life_5",
      title: "Office Reception Gathering",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 4,
      isActive: true
    },
    {
      id: "life_6",
      title: "Office Corridor Team",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 5,
      isActive: true
    },
    {
      id: "life_7",
      title: "Diwali Festival Group Photo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      isFeatured: false,
      order: 6,
      isActive: true
    }
  ],
  hiringProcess: [
    {
      id: "step_1",
      stepNumber: 1,
      title: "1. Application",
      description: "Our intuitive career portal provides a seamless application experience, allowing you to explore and apply for opportunities that align with your expertise. Submit your updated resume and provide detailed insights into your professional experience to enhance your candidacy for the desired role.",
      order: 0,
      isActive: true
    },
    {
      id: "step_2",
      stepNumber: 2,
      title: "2. Screening & Shortlisting:",
      description: "Our recruitment team, including our technical panel, will carefully review your application. If your qualifications and skills align with our requirements, we will reach out to you for further discussion.",
      order: 1,
      isActive: true
    },
    {
      id: "step_3",
      stepNumber: 3,
      title: "3. Technical Interview",
      description: "The technical interview presents a valuable opportunity to showcase your expertise and problem-solving abilities. The questions will cover a range of disciplines and may include critical situation, analytical challenges, and unconventional problem-solving scenarios to assess your technical proficiency and critical thinking skills.",
      order: 2,
      isActive: true
    },
    {
      id: "step_4",
      stepNumber: 4,
      title: "4. HR Interview",
      description: "This is a great opportunity for us to get to know each other better. We aim to understand your career aspirations, skills, strengths, and passions. Likewise, we encourage you to engage with our recruiter and ask any questions you may have about the role or firevy.co as an organization.",
      order: 3,
      isActive: true
    },
    {
      id: "step_5",
      stepNumber: 5,
      title: "5. Decision & Onboarding",
      description: "Upon successfully completing the selection process, If you are successful then we will call you for joining formalities, including details of the compensation structure and employment terms at firevy.co.",
      order: 4,
      isActive: true
    }
  ],
  visionSection: {
    title: "Crafting a Vision, Shaping the Future",
    slides: [
      {
        id: "vis_1",
        title: "Health & Wellbeing",
        quote: "We place the health and mental well-being of our associates at the core of our values. Through initiatives that promote a culture of fitness and wellness, such as yoga sessions and marathons, we encourage holistic growth and a balanced lifestyle. These programs foster a sense of community, resilience, and overall well-being, empowering our associates to lead healthier, more fulfilling lives.",
        image: "",
        order: 0,
        isActive: true
      },
      {
        id: "vis_2",
        title: "Continuous Learning & Upskilling",
        quote: "We invest heavily in the professional expansion of our team members. Through funded tech certifications, quarterly hackathons, hands-on workshops, and dedicated mentorship programs, we ensure our associates stay at the forefront of emerging AI and enterprise technologies.",
        image: "",
        order: 1,
        isActive: true
      },
      {
        id: "vis_3",
        title: "Diversity & Inclusive Workplace",
        quote: "We thrive on diverse perspectives and inclusive collaboration. By creating an environment of equal opportunity and psychological safety, every team member is empowered to share ideas, innovate boldly, and lead transformative client outcomes.",
        image: "",
        order: 2,
        isActive: true
      }
    ],
    isActive: true
  },
  stats: [
    { id: "stat_1", value: "200+", label: "IT Professionals", order: 0, isActive: true },
    { id: "stat_2", value: "20+", label: "Fortune 500 Companies", order: 1, isActive: true },
    { id: "stat_3", value: "95%", label: "Client Retention", order: 2, isActive: true },
    { id: "stat_4", value: "2800+", label: "Satisfied Clients", order: 3, isActive: true },
    { id: "stat_5", value: "23+", label: "Years of Experience", order: 4, isActive: true }
  ],
  peopleTestimonials: [
    {
      id: "p_1",
      name: "Ankit Morasiya",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 0,
      isActive: true
    },
    {
      id: "p_2",
      name: "Umang Barot",
      role: "Technical Support Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 1,
      isActive: true
    },
    {
      id: "p_3",
      name: "Galav Shukla",
      role: "Business Development Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 2,
      isActive: true
    },
    {
      id: "p_4",
      name: "Parthiv Trivedi",
      role: "Business Development Manager",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 3,
      isActive: true
    },
    {
      id: "p_5",
      name: "Daxesh Prajapati",
      role: "Team Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 4,
      isActive: true
    },
    {
      id: "p_6",
      name: "Mehul Gajjar",
      role: "Team Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      order: 5,
      isActive: true
    }
  ],
  socialMedia: {
    title: "Social Media",
    subtitle: "We follow a very simple, straight forward, and transparent process",
    links: [
      { platform: "Facebook", url: "https://facebook.com", icon: "Facebook", isActive: true },
      { platform: "X", url: "https://twitter.com", icon: "Twitter", isActive: true },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", isActive: true },
      { platform: "Instagram", url: "https://instagram.com", icon: "Instagram", isActive: true },
      { platform: "YouTube", url: "https://youtube.com", icon: "Youtube", isActive: true }
    ],
    isActive: true
  },
  ctaBanner: {
    title: "Ready To Take Challenge?",
    description: "If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, please send your resume to careers@firevy.co",
    email: "careers@firevy.co",
    buttonText: "Apply Here",
    isActive: true
  },
  generalSettings: {
    notFindingJobTitle: "Not finding the right opening as per your profile & skillset?",
    notFindingJobDesc: "If you are interested to work with us but are unable to find a suitable opportunity, submit your profile & we will reach out to you!!!",
    notFindingJobButtonText: "Apply here"
  }
};
