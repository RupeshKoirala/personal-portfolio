import { resume } from "@/content/resume";

const selectedOutcomes: Record<string, string[]> = {
  blackrock: [
    "65% lower query latency and 2.3× higher batch throughput after API and PostgreSQL tuning.",
    "60% faster builds and zero-downtime blue-green delivery with Terraform, CloudFormation, GitHub Actions, and Docker.",
    "Observability with CloudWatch, Sentry, Grafana Loki, and Jaeger cut MTTR by 42%.",
  ],
  firstbank: [
    "CRM tools and APIs on Spring Boot, Node.js, PostgreSQL, MongoDB, React, and Angular; ~250ms lower data-processing latency.",
    "AWS ECS/Fargate and Kubernetes autoscaling cut about $1,200/month; high-traffic responses under 150ms.",
    "JWT, OAuth 2.0, RBAC, and API Gateway with least-privilege / Zero Trust patterns.",
  ],
  yaj: [
    "REST APIs on Spring Boot and Node.js/TypeScript handling 12K+ requests/day.",
    "Multilingual React and Angular UI with RTL and i18n.",
    "RSS and third-party ingestion via Spring Batch, Node.js jobs, and Python — 40% more reliable sync.",
  ],
};

export function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="section-head">
          <h2>Systems that hold up under pressure.</h2>
          <p>
            Three engineering chapters across trading, banking, and product delivery — connecting
            software architecture to measurable operational results from the resume, not a stitched
            extra employer list.
          </p>
        </div>
        <div className="work-layout">
          <aside className="work-index">
            <strong>03</strong>
            <p>
              BlackRock, First Bank, and YAJ Tech. Cloud platforms, full-stack delivery,
              infrastructure, performance, and mentoring.
            </p>
          </aside>
          <div className="roles">
            {resume.experience.map((role) => (
              <article className="role" key={role.id}>
                <div className="role-time">
                  {role.start.toUpperCase()} — {role.end.toUpperCase()}
                  <br />
                  {role.location.toUpperCase()}
                </div>
                <div>
                  <h3>{role.company}</h3>
                  <div className="role-title">{role.title}</div>
                  <p>{role.summary}</p>
                  <ul className="outcomes">
                    {(selectedOutcomes[role.id] ?? []).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
