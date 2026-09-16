import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { ResumeGenerator } from "@/components/resume-generator";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Base and job-tailored resume exports for Rupesh Koirala, generated from structured content.",
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <main id="main" className="resume-sheet">
        <p className="mono" style={{ color: "#0e7a96", fontWeight: 700 }}>
          {resume.location} · {resume.email} · {resume.phone}
        </p>
        <h1>{resume.name}</h1>
        <p style={{ color: "#4d6470", marginTop: 0 }}>{resume.headline}</p>
        <div className="hero-actions" style={{ marginTop: 18 }}>
          <a className="button primary" href="/api/resume/generate?format=pdf">
            Download PDF
          </a>
          <a className="button secondary" href="/api/resume/generate?format=docx" style={{ color: "#07131d", borderColor: "#bed6df" }}>
            Download DOCX
          </a>
          <Link className="button secondary" href="/" style={{ color: "#07131d", borderColor: "#bed6df" }}>
            Back to site
          </Link>
        </div>
        <h2>Summary</h2>
        <ul>
          {resume.summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Experience</h2>
        {resume.experience.map((role) => (
          <article key={role.id}>
            <h3 style={{ marginBottom: 4 }}>
              {role.company} — {role.title}
            </h3>
            <p className="mono" style={{ color: "#4d6470" }}>
              {role.start} – {role.end} · {role.location}
            </p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet.text}>{bullet.text}</li>
              ))}
            </ul>
          </article>
        ))}
        <h2>Education</h2>
        <ul>
          {resume.education.map((item) => (
            <li key={item.school}>
              {item.school} — {item.credential} ({item.start} – {item.end})
            </li>
          ))}
        </ul>
        <h2>Certifications</h2>
        <ul>
          {resume.certifications.map((cert) => (
            <li key={cert.name}>
              {cert.name} — {cert.issuer} ({cert.issued}
              {cert.expires ? ` – ${cert.expires}` : ""})
            </li>
          ))}
        </ul>
      </main>
      <ResumeGenerator />
      <Footer />
    </div>
  );
}
