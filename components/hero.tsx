import { Monogram } from "@/components/monogram";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div>
          <div className="availability">Senior engineer · cloud-native systems · {site.location}</div>
          <h1 className="hero-title">
            Rupesh
            <br />
            Koirala
            <span>builds for scale.</span>
          </h1>
          <p className="hero-copy">
            Full-stack software engineer with 6+ years designing and scaling secure, cloud-native
            platforms across finance and enterprise systems—from event-driven services and real-time
            data tools to fast, resilient web interfaces.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">
              View work
            </a>
            <a className="button secondary" href="/api/resume/generate?format=pdf">
              Download resume
            </a>
            <a className="button secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <Monogram />
          <div className="portrait-caption">
            <span>SOFTWARE ENGINEER</span>
            <span>CENTREVILLE, VA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
