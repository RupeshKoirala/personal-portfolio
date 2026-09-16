import { resume, type ResumeData, type Role, type SkillGroup } from "@/content/resume";

export type Emphasis = "ai" | "fullstack";
export type ResumeFormat = "pdf" | "docx";

export type GenerateResumeInput = {
  targetRole: string;
  jobDescription?: string;
  emphasis?: Emphasis;
  format?: ResumeFormat;
};

export type TailoredResume = ResumeData & {
  targetRole: string;
  emphasis: Emphasis;
  notes: string[];
};

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "your",
  "you",
  "are",
  "was",
  "were",
  "will",
  "have",
  "has",
  "had",
  "into",
  "onto",
  "over",
  "under",
  "about",
  "into",
  "such",
  "than",
  "then",
  "them",
  "they",
  "their",
  "our",
  "out",
  "not",
  "but",
  "can",
  "using",
  "used",
  "use",
  "across",
  "including",
  "include",
  "plus",
  "via",
  "per",
  "within",
  "without",
  "role",
  "job",
  "team",
  "work",
  "working",
  "engineer",
  "engineering",
  "software",
  "developer",
  "experience",
  "years",
]);

const SYNONYMS: Record<string, string[]> = {
  react: ["frontend", "ui", "typescript", "redux", "hooks"],
  angular: ["frontend", "typescript"],
  java: ["spring", "backend", "junit"],
  spring: ["java", "backend", "microservices"],
  node: ["express", "backend", "typescript", "javascript"],
  kafka: ["event-driven", "microservices", "streaming"],
  aws: ["cloud", "lambda", "terraform", "devops"],
  kubernetes: ["devops", "docker", "cloud"],
  postgres: ["sql", "database", "data"],
  mongodb: ["database", "data"],
  python: ["ai-adjacent", "etl", "pipelines"],
  langchain: ["ai", "rag", "agents"],
  rag: ["ai", "retrieval", "langchain"],
  agent: ["ai", "agents", "langgraph"],
  observability: ["monitoring", "sre", "cloudwatch"],
  security: ["jwt", "oauth", "rbac"],
};

function tokenize(text: string): Set<string> {
  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9+.#/\s-]/g, " ")
    .split(/[\s,/|+]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));

  const expanded = new Set<string>();
  for (const token of tokens) {
    expanded.add(token);
    const extras = SYNONYMS[token];
    if (extras) {
      for (const extra of extras) expanded.add(extra);
    }
  }
  return expanded;
}

function scoreText(text: string, tags: string[], keywords: Set<string>): number {
  if (keywords.size === 0) return 0;
  const haystack = new Set([
    ...tokenize(text),
    ...tags.map((tag) => tag.toLowerCase()),
  ]);
  let score = 0;
  for (const keyword of keywords) {
    if (haystack.has(keyword)) score += 2;
    for (const item of haystack) {
      if (item.includes(keyword) || keyword.includes(item)) {
        score += 1;
        break;
      }
    }
  }
  return score;
}

function rankBullets(role: Role, keywords: Set<string>, emphasis: Emphasis): Role["bullets"] {
  const ranked = role.bullets.map((bullet, index) => {
    let score = scoreText(bullet.text, bullet.tags, keywords);
    if (emphasis === "ai" && bullet.tags.includes("ai-adjacent")) score += 4;
    if (emphasis === "ai" && (bullet.tags.includes("data") || bullet.tags.includes("python") || bullet.tags.includes("observability"))) {
      score += 2;
    }
    if (emphasis === "fullstack" && (bullet.tags.includes("frontend") || bullet.tags.includes("backend") || bullet.tags.includes("cloud"))) {
      score += 2;
    }
    return { bullet, index, score };
  });

  ranked.sort((a, b) => b.score - a.score || a.index - b.index);

  const keep = role.id === "blackrock" ? 7 : role.id === "firstbank" ? 6 : 5;
  return ranked.slice(0, keep).map((entry) => entry.bullet);
}

function rankSkills(groups: SkillGroup[], keywords: Set<string>, emphasis: Emphasis): SkillGroup[] {
  const ranked = groups.map((group, index) => ({
    group,
    index,
    score:
      scoreText(`${group.label} ${group.items.join(" ")}`, [], keywords) +
      (emphasis === "ai" && /python|data/i.test(group.label) ? 8 : 0),
  }));
  ranked.sort((a, b) => b.score - a.score || a.index - b.index);
  return ranked.map((entry) => entry.group);
}

function aiSummary(targetRole: string): string[] {
  return [
    ...resume.summary.slice(0, 3),
    `Recently practicing agentic AI (~6–7 months): LangChain, LangGraph, AutoGen, CrewAI, and the OpenAI SDK, including RAG chatbots and multi-agent workflows. This is current hands-on work, not multi-year AI production tenure.`,
    `Targeting ${targetRole} roles that combine a full-stack and cloud foundation with retrieval-augmented and agent-based systems.`,
  ];
}

function fullstackSummary(targetRole: string): string[] {
  const base = [...resume.summary];
  if (targetRole.trim() && targetRole.trim().toLowerCase() !== "software engineer") {
    base.push(
      `Prepared for ${targetRole} conversations using the same verified experience — no new employers, dates, or metrics added.`,
    );
  }
  return base;
}

export function tailorResume(input: GenerateResumeInput): TailoredResume {
  const emphasis: Emphasis = input.emphasis ?? "fullstack";
  const targetRole = input.targetRole.trim() || "Software Engineer";
  const keywords = tokenize(`${targetRole} ${input.jobDescription ?? ""} ${emphasis}`);

  const experience = resume.experience.map((role) => ({
    ...role,
    bullets: rankBullets(role, keywords, emphasis),
  }));

  const skills = rankSkills(resume.skills, keywords, emphasis);

  if (emphasis === "ai") {
    skills.unshift({
      label: "AI & agents (recent practice)",
      items: resume.aiPractice.stack,
    });
  }

  const certifications =
    emphasis === "ai"
      ? [
          ...resume.certifications.filter((cert) => /agentic|aws|spring/i.test(cert.name)),
          ...resume.certifications.filter((cert) => !/agentic|aws|spring/i.test(cert.name)),
        ]
      : resume.certifications;

  const projects = emphasis === "ai" ? resume.projects : resume.projects.filter((project) => project.kind === "capstone");

  return {
    ...resume,
    headline:
      emphasis === "ai"
        ? `${targetRole} | Full-Stack + Agentic AI`
        : targetRole.toLowerCase().includes("full") || targetRole.toLowerCase().includes("software")
          ? resume.headline
          : `${targetRole} | Full-Stack Software Engineer`,
    summary: emphasis === "ai" ? aiSummary(targetRole) : fullstackSummary(targetRole),
    skills,
    experience,
    certifications,
    projects,
    targetRole,
    emphasis,
    notes: [
      "Every bullet, employer, date, and metric is taken from the source resume or publicly verifiable GitHub/certification materials.",
      emphasis === "ai"
        ? "AI emphasis reorders facts and surfaces recent agent/RAG practice. It does not invent AI production tenure."
        : "Full-stack emphasis keeps the production engineering narrative and only includes the Analytics Vidhya capstone as a project.",
    ],
  };
}

export function slugifyRole(role: string) {
  return role
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "resume";
}

export function resumeFilename(input: { targetRole: string; emphasis: Emphasis; format: ResumeFormat }) {
  const role = slugifyRole(input.targetRole);
  const suffix = input.emphasis === "ai" ? "ai" : "fullstack";
  return `Rupesh_Koirala_${role}_${suffix}.${input.format}`;
}
