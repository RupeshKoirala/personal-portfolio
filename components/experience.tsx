import { resume } from "@/content/resume";

const selectedOutcomes: Record<string, string[]> = {
  blackrock: [
    "65% lower query latency and 2.3× higher batch throughput after API and PostgreSQL tuning.",
    "60% faster builds and zero-downtime Blue-Green delivery with GitHub Actions, Docker, and Terraform.",
    "Observability stack (CloudWatch, Sentry, Grafana Loki, Jaeger) cut MTTR by 42%.",
  ],
  firstbank: [
    "CRM and financial data APIs on Spring Boot, PostgreSQL, and MongoDB; ~250ms lower processing latency.",
    "AWS Fargate autoscaling cut about $1,200 in monthly infrastructure cost; critical endpoints 48% faster.",
    "JWT, RBAC, and OAuth 2.0 at API Gateway aligned to least privilege and Zero Trust.",
  ],
  yaj: [
    "REST APIs on Spring Boot and Express handling 12K+ requests/day.",
    "Multilingual React and Angular UI with RTL, i18n, and locale switching.",
    "RSS and third-party ingestion via Spring Batch, Node cron, and Python — 40% more reliable sync.",
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
