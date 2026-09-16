import { resume } from "@/content/resume";

export function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="section-head">
          <h2>Applied AI, in practice.</h2>
          <p>{resume.aiPractice.summary}</p>
        </div>
        <p className="ai-note">{resume.aiPractice.timeframe}</p>
        <ul className="ai-points">
          {resume.appliedAI.map((item) => (
            <li key={item.title}>
              <strong>{item.title}.</strong> {item.text}
            </li>
          ))}
        </ul>
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
