"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#projects", label: "AI / Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="nav" aria-label="Primary navigation">
      <div className="shell nav-inner">
        <Link className="brand" href="/#top" aria-label={`${site.name} home`}>
          RK<span>/</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a className="nav-cta" href="/api/resume/generate?format=pdf">
            Download resume
          </a>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {open ? (
        <div className="drawer" id={drawerId} role="dialog" aria-modal="true" aria-label="Site menu">
          <button className="drawer-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
            ×
          </button>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="/api/resume/generate?format=pdf" onClick={() => setOpen(false)}>
            Download PDF
          </a>
          <a href="https://www.linkedin.com/in/rupeshkoirala33/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      ) : null}
    </nav>
  );
}
