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

export type AppliedAIItem = {
  title: string;
  text: string;
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
  appliedAI: AppliedAIItem[];
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
  headline: "Forward Deployed Engineer | Applied AI Engineer | Full-Stack",
  location: "Centreville, VA",
  email: "rupeshkoirala17@gmail.com",
  phone: "+1 (412) 413-1351",
  linkedin: "https://www.linkedin.com/in/rupeshkoirala33/",
  github: "https://github.com/RupeshKoirala",
  summary: [
    "AI-focused software engineer with 6+ years building production distributed systems, APIs, cloud platforms, and full-stack products across financial and enterprise environments. Hands-on with LLM applications, RAG, agentic workflows, tool calling, structured outputs, retrieval, evaluation, and human-in-the-loop automation — backed by strong Python, TypeScript, React, Node.js, Spring Boot, AWS, PostgreSQL, Docker, event-driven architecture, observability, and CI/CD. Best suited to forward-deployed and applied AI work where customer problems, rapid prototyping, architecture, integration, and production delivery meet.",
  ],
  skills: [
    {
      label: "AI / LLM",
      items: [
        "LLM APIs",
        "RAG",
        "AI agents",
        "Tool/function calling",
        "Prompt & context engineering",
        "Structured outputs",
        "Embeddings",
        "Vector search",
        "Reranking",
        "MCP concepts",
        "Evals",
        "Guardrails",
        "HITL",
      ],
    },
    {
      label: "AI stack",
      items: [
        "Python",
        "FastAPI",
        "Pydantic",
        "LangChain/LangGraph-style orchestration",
        "OpenAI/Anthropic-compatible APIs",
        "PostgreSQL/pgvector",
        "Redis",
        "REST",
        "WebSockets",
      ],
    },
    {
      label: "Full-stack",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Redux",
        "Angular",
        "Node.js (Express/NestJS)",
        "Java",
        "Spring Boot",
        "GraphQL",
      ],
    },
    {
      label: "Cloud / platform",
      items: [
        "AWS (Lambda, ECS/Fargate, EC2, EKS, S3, API Gateway, Step Functions, DynamoDB, RDS, SNS/SQS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      label: "Data / architecture",
      items: [
        "Distributed systems",
        "Event-driven/microservices",
        "PostgreSQL",
        "MongoDB",
        "DynamoDB",
        "Redis",
        "Elasticsearch",
        "SQL",
        "Caching",
        "Query optimization",
      ],
    },
    {
      label: "Reliability / security",
      items: [
        "OpenTelemetry",
        "CloudWatch",
        "Splunk",
        "Grafana",
        "Jaeger",
        "Datadog",
        "CI/CD",
        "OAuth2/JWT/RBAC",
        "Testing (JUnit, Jest, Mockito)",
      ],
    },
  ],
  appliedAI: [
    {
      title: "Agentic workflow systems",
      text: "Multi-step LLM workflows with APIs, tools, state, validation, retries, structured outputs, and human approval for business-process automation.",
    },
    {
      title: "Enterprise RAG assistants",
      text: "Ingestion, chunking, embeddings, semantic retrieval, grounded generation, citations, access-aware retrieval, and retrieval/evaluation tuning.",
    },
    {
      title: "AI-native full-stack products",
      text: "Model-backed Python/FastAPI or Node services connected to React/TypeScript UIs with streaming, tool execution, session state, persistence, and telemetry.",
    },
    {
      title: "LLM reliability",
      text: "Prompt/version testing, schema validation, fallback/retry, regression checks, latency/cost tracking, hallucination-reduction patterns, and observability.",
    },
    {
      title: "AI-assisted delivery",
      text: "Architecture exploration, implementation, debugging, tests, refactoring, and rapid prototyping with engineering review retained.",
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
        "Built and scaled event-driven backend services and React/TypeScript interfaces for a full-stack trading platform supporting real-time transaction workflows.",
      bullets: [
        {
          text: "Built and scaled event-driven backend services and React/TypeScript interfaces for a full-stack trading platform supporting real-time transaction workflows.",
          tags: ["backend", "frontend", "react", "typescript", "microservices", "event-driven", "trading"],
        },
        {
          text: "Built and maintained React.js, TypeScript, and Redux applications with reusable Hooks and components, improving interaction speed by 40%.",
          tags: ["frontend", "react", "typescript", "redux", "performance"],
        },
        {
          text: "Refactored API and data-access layers using Express.js, PostgreSQL indexing, query-plan analysis, and AWS profiling, achieving 65% lower query latency and 2.3× higher batch throughput.",
          tags: ["backend", "api", "postgres", "aws", "performance", "observability"],
        },
        {
          text: "Created reusable service and frontend modules across applications; partnered with product and design for shared patterns.",
          tags: ["frontend", "react", "collaboration", "design"],
        },
        {
          text: "Standardized infrastructure and CI/CD with Terraform, CloudFormation, GitHub Actions, Docker, and blue-green deployment, reducing deployment/build time by 60% with zero-downtime releases.",
          tags: ["cloud", "aws", "terraform", "cicd", "devops"],
        },
        {
          text: "Implemented CloudWatch, Sentry, Grafana Loki, and Jaeger observability, reducing mean time to resolution by 42%.",
          tags: ["observability", "aws", "monitoring", "sre"],
        },
        {
          text: "Partnered with product, design, QA, and senior stakeholders; reviewed code and mentored junior engineers.",
          tags: ["leadership", "mentoring", "quality", "collaboration"],
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
        "Developed internal CRM tools, backend APIs, and automation workflows using Spring Boot, Node.js, PostgreSQL, MongoDB, React, and Angular.",
      bullets: [
        {
          text: "Developed internal CRM tools, backend APIs, and automation workflows using Spring Boot, Node.js, PostgreSQL, MongoDB, React, and Angular, reducing operational rework and data-processing latency by approximately 250ms.",
          tags: ["backend", "frontend", "java", "spring", "node", "postgres", "mongodb", "react", "angular", "finance"],
        },
        {
          text: "Designed scalable microservices on AWS ECS/Fargate and Kubernetes; autoscaling reduced infrastructure cost by ~$1,200/month while keeping high-traffic responses under 150ms.",
          tags: ["backend", "aws", "kubernetes", "cloud", "performance", "microservices"],
        },
        {
          text: "Implemented JWT, OAuth 2.0, RBAC, and Amazon API Gateway with least-privilege / Zero Trust patterns.",
          tags: ["security", "api", "aws", "oauth", "jwt"],
        },
        {
          text: "Improved PostgreSQL and MongoDB performance via indexing, caching, and CQRS-style separation, reducing response times by 48% on critical endpoints.",
          tags: ["data", "postgres", "mongodb", "performance", "architecture"],
        },
        {
          text: "Built alerting/incident workflows with AWS SNS, CloudWatch, Slack, New Relic, PagerDuty, and Splunk (sub-60-second response initiation).",
          tags: ["observability", "aws", "sre", "monitoring"],
        },
        {
          text: "Collaborated across product, engineering, and QA to reduce sprint handoffs and rework by 40%.",
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
          text: "Developed Java/Spring Boot and Node.js/TypeScript REST APIs for calendar, news, and astrology modules handling 12K+ requests/day.",
          tags: ["backend", "java", "spring", "node", "typescript", "api"],
        },
        {
          text: "Built multilingual React/Angular interfaces (RTL, i18n); integrated PostgreSQL, MongoDB, and Firebase.",
          tags: ["frontend", "react", "angular", "i18n", "data", "postgres", "mongodb"],
        },
        {
          text: "Automated ingestion from RSS and third-party APIs with Spring Batch, Node.js jobs, and Python, improving sync reliability by 40%; deployed on AWS EC2/Lambda with Docker-based development and automated testing.",
          tags: ["data", "python", "etl", "pipelines", "aws", "docker", "testing", "ai-adjacent"],
        },
      ],
    },
  ],
  education: [
    {
      school: "Indiana Wesleyan University",
      credential: "Graduate studies in Artificial Intelligence & Machine Learning",
      location: "",
      start: "In Progress",
      end: "Current",
    },
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
  ],
  aiPractice: {
    timeframe: "Selected applied AI / agentic engineering",
    summary:
      "Hands-on with LLM applications, RAG, agentic workflows, tool calling, structured outputs, retrieval, evaluation, and human-in-the-loop automation — on a production full-stack and cloud foundation.",
    stack: [
      "LLM APIs",
      "RAG",
      "AI agents",
      "LangChain/LangGraph",
      "Python",
      "FastAPI",
      "pgvector",
      "Structured outputs",
      "Evals",
      "HITL",
    ],
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
    title: "Applied AI & agents",
    copy: "LLM applications, RAG assistants, agentic workflows, tool calling, structured outputs, retrieval, evaluation, and human-in-the-loop automation connected to real product surfaces.",
    stack: ["RAG", "Agents", "LangChain/LangGraph", "Python", "FastAPI", "pgvector"],
    wide: true,
  },
  {
    title: "Full-stack products",
    copy: "TypeScript and Java services with React, Next.js, Angular, and Node interfaces that stay fast and maintainable.",
    stack: ["TypeScript", "React", "Next.js", "Spring Boot", "Node.js"],
    wide: false,
  },
  {
    title: "Cloud platforms",
    copy: "AWS delivery with containers, infrastructure as code, and CI/CD designed as one coherent system.",
    stack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    wide: false,
  },
  {
    title: "Data & architecture",
    copy: "Distributed systems, event-driven services, and query-conscious access across SQL and document stores.",
    stack: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch"],
    wide: false,
  },
  {
    title: "Reliability & security",
    copy: "Observability, CI/CD, OAuth2/JWT/RBAC, and testing as part of production delivery — not afterthoughts.",
    stack: ["OpenTelemetry", "CloudWatch", "Grafana", "OAuth2/JWT", "Jest/JUnit"],
    wide: false,
  },
] as const;
