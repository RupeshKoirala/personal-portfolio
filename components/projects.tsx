import { resume } from "@/content/resume";

export function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="section-head">
          <h2>AI practice, stated plainly.</h2>
          <p>
            Full-stack and cloud are the production center of gravity. Agentic AI is recent, serious
            practice — RAG chatbots, multi-agent workflows, and an approved Analytics Vidhya capstone
            — not years of AI production tenure.
          </p>
        </div>
        <p className="ai-note">{resume.aiPractice.timeframe}</p>
        <div className="project-grid">
          {resume.projects.map((project) => (
            <a
              className={project.kind === "capstone" ? "project featured" : "project"}
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="kicker">
                {project.kind === "capstone" ? "CAPSTONE" : "STUDY REPO"} · {project.timeframe}
              </div>
              <h3>{project.name}</h3>
              <p>{project.blurb}</p>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <div className="stack" style={{ marginTop: 28 }}>
          {resume.aiPractice.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
