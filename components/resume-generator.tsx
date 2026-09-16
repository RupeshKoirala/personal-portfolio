"use client";

import { useState, type FormEvent } from "react";

export function ResumeGenerator() {
  const [status, setStatus] = useState<string>("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("");
    const form = new FormData(event.currentTarget);
    const payload = {
      targetRole: String(form.get("targetRole") ?? "").trim(),
      jobDescription: String(form.get("jobDescription") ?? "").trim() || undefined,
      emphasis: String(form.get("emphasis") ?? "fullstack"),
      format: String(form.get("format") ?? "pdf"),
    };

    try {
      const response = await fetch("/api/resume/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const error = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(error?.error ?? "Could not generate resume.");
      }
      const blob = await response.blob();
      const disposition = response.headers.get("Content-Disposition") ?? "";
      const match = disposition.match(/filename="([^"]+)"/);
      const filename = match?.[1] ?? `Rupesh_Koirala_resume.${payload.format}`;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus(`Downloaded ${filename}. Facts were re-ranked, not invented.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="generator" onSubmit={onSubmit}>
      <h2>Tailor a copy</h2>
      <p>
        Re-ranks the same verified experience for a target role. AI emphasis surfaces recent
        agent/RAG practice; it does not add fake tenure or employers.
      </p>
      <label>
        Target role
        <input name="targetRole" required maxLength={160} placeholder="Staff Full-Stack Engineer" />
      </label>
      <label>
        Job description (optional)
        <textarea name="jobDescription" placeholder="Paste a job description to re-rank bullets by keyword overlap." />
      </label>
      <label>
        Emphasis
        <select name="emphasis" defaultValue="fullstack">
          <option value="fullstack">Full-stack / cloud</option>
          <option value="ai">AI / agents (honest recent practice)</option>
        </select>
      </label>
      <label>
        Format
        <select name="format" defaultValue="pdf">
          <option value="pdf">PDF</option>
          <option value="docx">DOCX</option>
        </select>
      </label>
      <button className="button primary" type="submit" disabled={pending}>
        {pending ? "Generating…" : "Generate tailored resume"}
      </button>
      {status ? <p role="status">{status}</p> : null}
    </form>
  );
}
