import { capabilityCards } from "@/content/resume";

export function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="shell">
        <div className="section-head">
          <h2>Wide stack. Clear center.</h2>
          <p>
            The work spans product surface area, but the center of gravity stays consistent: reliable
            systems, observable behavior, secure interfaces, and clean handoffs.
          </p>
        </div>
        <div className="cap-grid">
          {capabilityCards.map((card) => (
            <article className={card.wide ? "cap wide" : "cap"} key={card.title}>
              <div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
              <div className="stack">
                {card.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
