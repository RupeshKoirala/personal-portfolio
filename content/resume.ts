export type SkillGroup = {
  label: string;
  items: string[];
};

export type Bullet = {
  text: string;
  tags: string[];
};

export type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  startSort: string;
  summary: string;
  bullets: Bullet[];
};

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  group: "engineering" | "business";
  href?: string;
};

export type EducationItem = {
  school: string;
  credential: string;
  location: string;
  start: string;
  end: string;
};

export type Project = {
  name: string;
  timeframe: string;
  href: string;
  blurb: string;
  stack: string[];
  kind: "capstone" | "study";
};

export type ResumeData = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string[];
  skills: SkillGroup[];
  experience: Role[];
  education: EducationItem[];
  certifications: Certification[];
  projects: Project[];
  aiPractice: {
    timeframe: string;
    summary: string;
    stack: string[];
  };
};

export const resume: ResumeData = {
  name: "Rupesh Koirala",
  headline: "Senior Software Engineer | Full-Stack Developer",
  location: "Centreville, VA",
  email: "rupeshkoirala17@gmail.com",
  phone: "+1 (412) 413-1351",
  linkedin: "https://www.linkedin.com/in/rupeshkoirala33/",
  github: "https://github.com/RupeshKoirala",
  summary: [
    "Full-Stack Software Engineer with 6+ years of experience designing and scaling secure, cloud-native platforms across finance and enterprise systems, delivering resilient microservices, real-time data tools, and self-service web applications for firms like BlackRock and Fiserv.",
    "Deep technical foundation across backend frameworks (Spring Boot, Express.js), frontend libraries (React.js, Angular), cloud and infrastructure tools (AWS Lambda, Fargate, EC2, S3), databases (PostgreSQL, MongoDB, DynamoDB), and CI/CD pipelines (GitHub Actions, Docker) and testing (Jest, JUnit).",
    "Specialist of scalable system design, API security (JWT, RBAC), query optimization, serverless deployments, and observability, using engineering principles such as modular architecture, domain-driven design, and event-driven patterns.",
    "Highly collaborative partner to cross-functional teams, including PMs, designers, and QA, while working in Agile environments to reduce sprint friction, drive down rework, and deliver stable features through thorough code reviews.",
    "Trusted technical lead on initiatives involving refactoring, performance tuning, CI/CD ownership, and mentoring junior developers, while proactively contributing to knowledge-sharing through peer reviews and documentation.",
  ],
  skills: [
    {
      label: "Programming Languages",
      items: [
        "Java 8/11/17",
        "JavaScript (ES6+)",
        "TypeScript",
        "Python 3.x",
        "SQL",
        "Bash/Shell",
      ],
    },
    {
      label: "Frontend",
      items: [
        "React.js",
        "React Hooks",
        "Redux",
        "Next.js",
        "Angular (4/6/13/15)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI",
        "Storybook",
        "Webpack",
        "Vite",
      ],
    },
    {
      label: "Backend",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Node.js (Express.js, NestJS)",
        "Flask",
        "RESTful APIs",
        "GraphQL",
        "gRPC",
        "WebSockets",
        "Microservices",
        "Serverless (AWS Lambda)",
        "Event-Driven Architecture (Kafka, SNS/SQS)",
        "JWT/OAuth2",
        "Resilience4j",
        "Circuit Breaker Pattern",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "AWS (Lambda, ECS, EC2, EKS, S3, CloudWatch, Fargate, DynamoDB, RDS, API Gateway, Step Functions, Glue, SNS, CloudFormation)",
        "Terraform",
        "Docker",
        "Jenkins",
        "GitHub Actions",
        "Kubernetes",
        "Helm",
        "ArgoCD",
        "Prometheus",
        "Grafana",
        "Blue-Green Deployments",
        "CI/CD Pipelines",
        "Secrets Manager",
        "KMS",
      ],
    },
    {
      label: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "Oracle",
        "Redis",
        "Elasticsearch",
        "Cassandra",
        "Sybase ASE",
      ],
    },
    {
      label: "Web Services & APIs",
      items: ["REST", "SOAP (SOAPUI, JAX-WS)", "GraphQL", "OpenAPI", "AsyncAPI", "gRPC"],
    },
    {
      label: "Testing & QA",
      items: ["JUnit", "Mockito", "TDD", "BDD", "Jest"],
    },
    {
      label: "Monitoring & Observability",
      items: [
        "Amazon CloudWatch",
        "Sentry",
        "Grafana Loki",
        "Jaeger",
        "Prometheus",
        "OpenTelemetry",
        "Datadog",
        "Splunk",
        "PagerDuty",
        "New Relic",
      ],
    },
    {
      label: "Architecture & Design",
      items: [
        "Domain-Driven Design (DDD)",
        "Event-Driven Architecture (EDA)",
        "CQRS",
        "Saga Pattern",
        "SOLID Principles",
        "Clean Architecture",
        "Design Patterns",
        "High Availability",
        "Load Balancing",
        "Distributed Systems",
      ],
    },
    {
      label: "Security & Compliance",
      items: [
        "OAuth2.0",
        "OpenID Connect",
        "JWT",
        "RBAC",
        "Zero Trust",
        "API Gateway Authorization",
        "OWASP",
        "SonarQube",
        "Vulnerability Scanning",
      ],
    },
  ],
  experience: [
    {
      id: "blackrock",
      company: "BlackRock",
      title: "Software Developer",
      location: "New York, NY",
      start: "Mar. 2024",
      end: "Present",
      startSort: "2024-03",
      summary:
        "Delivered event-driven microservices and high-performance React interfaces for a trading platform. Reduced query latency by 65%, lifted batch throughput 2.3×, and accelerated zero-downtime delivery through automated infrastructure and CI/CD.",
      bullets: [
        {
          text: "Delivered scalable event-driven microservices and high-performance React.js interfaces for a full-stack trading platform, enabling real-time trade processing and optimized query execution for faster, more reliable user experiences.",
          tags: ["backend", "frontend", "react", "microservices", "event-driven", "trading"],
        },
        {
          text: "Built and maintained dynamic React.js, TypeScript, and Redux web applications with reusable Hooks and components, driving UX consistency and improving interaction speed by 40%.",
          tags: ["frontend", "react", "typescript", "redux", "performance"],
        },
        {
          text: "Led integration efforts for CI/CD pipelines using GitHub Actions, Docker, and monorepo patterns, streamlining deployment and reducing build time by 60%.",
          tags: ["devops", "cicd", "github-actions", "docker", "leadership"],
        },
        {
          text: "Refactored API layer using Express.js, PostgreSQL indexing, Query Execution Plan Analysis, and AWS CloudWatch Profiler with Flamegraph, achieving 65% lower query latency and 2.3× higher batch throughput.",
          tags: ["backend", "api", "postgres", "aws", "performance", "observability"],
        },
        {
          text: "Developed shared frontend modules by collaborating with product and design teams, enabling code reuse and uniform features across multiple React.js web apps.",
          tags: ["frontend", "react", "collaboration", "design"],
        },
        {
          text: "Standardized infrastructure provisioning with Terraform and AWS CloudFormation, and accelerated CI/CD automation through GitHub Actions, reducing deployment time by 60% and implementing Blue-Green deployment for zero downtime.",
          tags: ["cloud", "aws", "terraform", "cicd", "devops"],
        },
        {
          text: "Implemented an observability stack with Amazon CloudWatch, Sentry, Grafana Loki, and Jaeger, reducing mean time to resolution by 42% and improving detection latency.",
          tags: ["observability", "aws", "monitoring", "sre"],
        },
        {
          text: "Built automated test suites with JUnit and Mockito, achieving 90% code coverage and proactively detecting critical regressions.",
          tags: ["testing", "java", "quality"],
        },
        {
          text: "Conducted thorough pull request reviews to ensure code quality, scalability, and compliance standards, providing clear feedback and mentoring junior engineers in best practices.",
          tags: ["leadership", "mentoring", "quality"],
        },
        {
          text: "Delivered technical presentations on system designs, emerging trends, and integration strategies to senior stakeholders using visualization tools and narrative storytelling.",
          tags: ["leadership", "communication", "architecture"],
        },
      ],
    },
    {
      id: "firstbank",
      company: "First Bank",
      title: "Full Stack Developer",
      location: "Lakewood, CO",
      start: "Mar. 2021",
      end: "Feb. 2024",
      startSort: "2021-03",
      summary:
        "Built internal CRM tools and secure APIs across Spring Boot, Node.js, React, Angular, PostgreSQL, and MongoDB. Improved critical endpoint performance while lowering monthly infrastructure costs through autoscaling.",
      bullets: [
        {
          text: "Developed internal CRM tools and backend APIs to automate customer service workflows and enhanced financial data analysis, employing Spring Boot and PostgreSQL and MongoDB for microservice orchestration and complex data management, reducing data processing latency by approximately 250ms.",
          tags: ["backend", "java", "spring", "postgres", "mongodb", "microservices", "finance"],
        },
        {
          text: "Crafted aesthetically pleasing UI components with React and Angular, incorporating SOLID and DRY principles along with virtual DOM diffing, memoization, and lazy loading, which improved overall application speed by 40%.",
          tags: ["frontend", "react", "angular", "performance"],
        },
        {
          text: "Optimized backend services for high scalability using Spring Boot and Node.js, cutting $1,200 in monthly infrastructure costs via AWS Fargate autoscaling, while improving traffic flow with NGINX and deploying microservices through Amazon ECS and Kubernetes to support the Event-Driven Pattern, reducing response times to under 150ms.",
          tags: ["backend", "spring", "node", "aws", "kubernetes", "event-driven", "performance"],
        },
        {
          text: "Enforced scalable and secure APIs using JWT-based authentication and Role-Based Access Control, integrating OAuth 2.0 with Amazon API Gateway to align with the Principle of Least Privilege and Zero Trust Architecture, reducing latency by approximately 120ms.",
          tags: ["security", "api", "aws", "oauth", "jwt"],
        },
        {
          text: "Boosted query performance in MongoDB and PostgreSQL with Read/Write Splitting and CQRS, reducing response times by 48% across critical high-traffic endpoints.",
          tags: ["data", "postgres", "mongodb", "performance", "architecture"],
        },
        {
          text: "Developed an alerting pipeline with AWS SNS, CloudWatch, and Slack, integrating CloudWatch Metrics and New Relic, orchestrated through PagerDuty and Splunk On-Call, incorporating auto remediation workflows and blameless postmortems, achieving response initiation latency under 60 seconds.",
          tags: ["observability", "aws", "sre", "monitoring"],
        },
        {
          text: "Collaborated with product managers, developers, and QA engineers to streamline Agile processes, achieving a 40% reduction in sprint handoffs and rework through enhanced communication and iterative feedback loops.",
          tags: ["collaboration", "agile", "leadership"],
        },
      ],
    },
    {
      id: "yaj",
      company: "YAJ Tech Pvt. Ltd.",
      title: "Software Developer",
      location: "Kathmandu, Nepal",
      start: "Jan. 2017",
      end: "Jul. 2018",
      startSort: "2017-01",
      summary:
        "Built localized full-stack features handling 12K+ daily API requests and automated data pipelines that improved sync reliability by 40%.",
      bullets: [
        {
          text: "Developed RESTful APIs using Java (Spring Boot) and Node.js (TypeScript + Express) for calendar, news, and astrology modules, handling 12K+ requests/day.",
          tags: ["backend", "java", "spring", "node", "typescript", "api"],
        },
        {
          text: "Built responsive, multilingual frontend components with React.js, Angular 13, and Tailwind CSS, implementing RTL, i18n, and dynamic locale switching.",
          tags: ["frontend", "react", "angular", "i18n"],
        },
        {
          text: "Integrated PostgreSQL, MongoDB, and Firebase Realtime DB for structured and semi-structured content delivery, using query optimization and caching.",
          tags: ["data", "postgres", "mongodb", "firebase"],
        },
        {
          text: "Automated daily data ingestion from RSS feeds and third-party APIs using Spring Batch, Node.js cron jobs, and Python scripts, improving sync reliability by 40%.",
          tags: ["data", "python", "etl", "pipelines", "ai-adjacent"],
        },
        {
          text: "Deployed services on AWS EC2 and Lambda, used S3 for static content hosting, and applied alerting with SNS + CloudWatch Alarms.",
          tags: ["cloud", "aws", "devops", "observability"],
        },
        {
          text: "Wrote unit and integration tests using JUnit, Mockito, PyTest, and Jest, ensuring coverage across backend modules and ETL pipelines.",
          tags: ["testing", "python", "java", "quality"],
        },
        {
          text: "Managed local dev environments using Docker Compose, Git, and Postman, and collaborated through JIRA, Confluence, and daily Agile stand-ups.",
          tags: ["devops", "docker", "collaboration"],
        },
      ],
    },
  ],
  education: [
    {
      school: "Robert Morris University",
      credential: "Bachelor of Science in Engineering",
      location: "Moon Township, PA",
      start: "Aug. 2018",
      end: "May 2023",
    },
    {
      school: "Gyandarpan Academy",
      credential: "Diploma in Computer Information Systems",
      location: "Itahari, Nepal",
      start: "Mar. 2015",
      end: "May 2016",
    },
  ],
  certifications: [
    {
      name: "The Augment MBA",
      issuer: "Augment.org",
      issued: "Apr 2026",
      group: "business",
      href: "https://drive.google.com/file/d/1Aouvy4dmGBN1AexNS4I3xgzJRW7fNzld/view",
    },
    {
      name: "Agentic AI Pioneer Program",
      issuer: "Analytics Vidhya",
      issued: "Dec 2025",
      group: "engineering",
      href: "https://www.credential.net/5be23e5f-5538-4c5c-9797-f7ecff6925a6#acc.2Ou9GhMV",
    },
    {
      name: "Make Advanced",
      issuer: "Make",
      issued: "Jun 2025",
      group: "business",
      href: "https://www.credly.com/earner/earned/badge/2c81895f-c96a-47b2-bf53-9087edf0f950",
    },
    {
      name: "Make Intermediate",
      issuer: "Make",
      issued: "Jun 2025",
      group: "business",
      href: "https://www.credly.com/earner/earned/badge/c2c8d5d5-1e7a-499b-b333-8478976e03ed",
    },
    {
      name: "Spring Certified Professional 2024 [v2]",
      issuer: "Broadcom",
      issued: "Mar 2025",
      group: "engineering",
      href: "https://www.credly.com/badges/36e14047-fbb0-4c1a-8775-28fc94b587a5/linked_in_profile",
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      issued: "Mar 2025",
      expires: "Mar 2028",
      group: "engineering",
      href: "https://www.credly.com/badges/a656c142-bb43-4ae6-8dcd-466129a478e5",
    },
    {
      name: "Make Basics",
      issuer: "Make",
      issued: "Aug 2024",
      group: "business",
      href: "https://www.credly.com/earner/earned/badge/05cea627-e8dd-43bf-9b59-ab33f74af616",
    },
    {
      name: "Make Foundation",
      issuer: "Make",
      issued: "Aug 2024",
      group: "business",
      href: "https://www.credly.com/earner/earned/badge/bc708823-ac6a-4397-a262-303e17480664",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issued: "Nov 2022",
      group: "engineering",
      href: "https://www.freecodecamp.org/certification/fcc139bcdb0-4c2a-428c-afce-f8e5eabfe4d5/responsive-web-design",
    },
  ],
  projects: [
    {
      name: "ShopUNow Agentic AI Assistant",
      timeframe: "2025 · Analytics Vidhya capstone",
      href: "https://github.com/RupeshKoirala/shopu-av",
      blurb:
        "Approved capstone for the Agentic AI Pioneer Program: a retrieval-augmented retail assistant that detects sentiment, routes questions to Customer / Product / HR / IT, answers from a Chroma vector store via LangChain, and escalates negative queries to a human.",
      stack: ["LangChain", "LangGraph", "Chroma", "OpenAI", "Flask", "TextBlob"],
      kind: "capstone",
    },
    {
      name: "awesome-ai-apps",
      timeframe: "Hands-on study collection",
      href: "https://github.com/RupeshKoirala/awesome-ai-apps",
      blurb:
        "Public study fork of RAG, agent, workflow, and MCP app patterns — used for practice, not claimed as original product work.",
      stack: ["RAG", "Agents", "MCP", "Workflows"],
      kind: "study",
    },
    {
      name: "awesome-llm-apps",
      timeframe: "Hands-on study collection",
      href: "https://github.com/RupeshKoirala/awesome-llm-apps",
      blurb:
        "Public study fork of LLM apps with agents and RAG across OpenAI, Anthropic, Gemini, and open-source models.",
      stack: ["LLM apps", "RAG", "Agents"],
      kind: "study",
    },
  ],
  aiPractice: {
    timeframe: "Recent practice · ~6–7 months",
    summary:
      "Building RAG chatbots and multi-agent workflows on top of a full-stack foundation. This is current, hands-on practice — not multi-year AI production tenure.",
    stack: ["LangChain", "LangGraph", "AutoGen", "CrewAI", "OpenAI SDK", "RAG", "AI agents"],
  },
};

export const proofPoints = [
  { value: "6+ years", label: "Production engineering" },
  { value: "65% lower", label: "Query latency" },
  { value: "2.3×", label: "Batch throughput" },
  { value: "60% faster", label: "CI/CD delivery" },
] as const;

export const capabilityCards = [
  {
    title: "Architecture & cloud delivery",
    copy: "Microservices, event-driven systems, serverless workloads, infrastructure as code, and production observability designed as one coherent delivery system.",
    stack: ["AWS", "Terraform", "Docker", "Kubernetes", "Kafka", "CloudWatch"],
    wide: true,
  },
  {
    title: "Backend systems",
    copy: "Secure, testable service layers with pragmatic data access and resilient integrations.",
    stack: ["Java", "Spring Boot", "Node.js", "Python"],
    wide: false,
  },
  {
    title: "Product interfaces",
    copy: "Responsive application experiences tuned for clarity, speed, and maintainability.",
    stack: ["React", "Angular", "TypeScript", "Next.js"],
    wide: false,
  },
  {
    title: "Data foundations",
    copy: "Query optimization, hybrid storage, ETL workflows, and scalable access patterns.",
    stack: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
    wide: false,
  },
  {
    title: "Quality & leadership",
    copy: "Testing strategy, reviews, mentoring, documentation, and calm cross-functional delivery.",
    stack: ["JUnit", "Jest", "Mockito", "TDD"],
    wide: false,
  },
] as const;
