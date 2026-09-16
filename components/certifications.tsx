"use client";

import { useMemo, useState } from "react";
import { resume } from "@/content/resume";

const filters = [
  { id: "all", label: "All credentials" },
  { id: "engineering", label: "Engineering & AI" },
  { id: "business", label: "Business & automation" },
] as const;

export function Certifications() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const certs = useMemo(
    () => resume.certifications.filter((cert) => filter === "all" || cert.group === filter),
    [filter],
  );

  return (
    <section className="certs" id="certifications">
      <div className="shell">
        <div className="section-head">
          <h2>Credentials with range.</h2>
          <p>
            Cloud engineering, Spring development, agentic AI, automation, web foundations, and
            business fluency — linked to public credential pages.
          </p>
        </div>
        <div className="cert-toolbar" aria-label="Filter certifications">
          {filters.map((item) => (
            <button
              key={item.id}
              className="filter"
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="cert-grid" aria-live="polite">
          {certs.map((cert) => (
            <a
              className="cert"
              data-group={cert.group}
              href={cert.href}
              key={cert.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${cert.name} credential`}
            >
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <div className="date">
                {cert.expires ? `${cert.issued.toUpperCase()} — ${cert.expires.toUpperCase()}` : `ISSUED ${cert.issued.toUpperCase()}`}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
