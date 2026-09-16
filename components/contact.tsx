import { LinkedInMark } from "@/components/linkedin-mark";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid">
        <h2>Let’s build something dependable.</h2>
        <div>
          <p>
            For forward-deployed and applied AI work, full-stack product delivery, and cloud
            platforms, reach Rupesh directly.
          </p>
          <div className="contact-meta">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span>{site.location}</span>
          </div>
          <a
            className="button linkedin"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rupesh Koirala on LinkedIn"
          >
            <LinkedInMark />
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
