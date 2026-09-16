import { proofPoints } from "@/content/resume";

export function ProofStrip() {
  return (
    <div className="proof-strip" aria-label="Career highlights from the resume">
      <div className="shell proof-grid">
        {proofPoints.map((point) => (
          <div className="proof" key={point.label}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
