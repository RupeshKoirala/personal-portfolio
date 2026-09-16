import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid">
        <h2>Let’s build something dependable.</h2>
        <div>
          <p>
            For full-stack product work, cloud platforms, and conversations that also want recent
            agentic AI practice, reach Rupesh directly.
          </p>
          <div className="contact-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span>{site.location}</span>
          </div>
          <a className="button" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="button" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="button" href="/api/resume/generate?format=pdf">
            Download PDF
          </a>
          <a className="button" href="/api/resume/generate?format=docx">
            Download DOCX
          </a>
        </div>
      </div>
    </section>
  );
}
