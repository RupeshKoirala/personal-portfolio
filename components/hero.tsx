import { LinkedInMark } from "@/components/linkedin-mark";
import { Portrait } from "@/components/portrait";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div>
          <div className="availability">
            Forward deployed · applied AI · full-stack · {site.location}
          </div>
          <h1 className="hero-title">
            Rupesh
            <br />
            Koirala
            <span>builds for scale.</span>
          </h1>
          <p className="hero-copy">
            AI-focused software engineer with 6+ years building production distributed systems, APIs,
            cloud platforms, and full-stack products across financial and enterprise environments —
            including RAG, agentic workflows, and human-in-the-loop automation.
          </p>
          <div className="hero-actions">
            <a
              className="button primary linkedin"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rupesh Koirala on LinkedIn"
            >
              <LinkedInMark />
              LinkedIn
            </a>
            <a className="button secondary" href="#experience">
              View work
            </a>
            <a className="button secondary" href="/api/resume/generate?format=pdf">
              Download resume
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <Portrait />
          <div className="portrait-caption">
            <span>APPLIED AI · FULL-STACK</span>
            <span>CENTREVILLE, VA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
