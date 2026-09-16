import { resume } from "@/content/resume";

function educationDates(item: { start: string; end: string }) {
  if (item.start.toLowerCase().includes("progress")) {
    return "In Progress (Current)";
  }
  return `${item.start.replaceAll(".", "")}–${item.end.replaceAll(".", "")}`;
}

export function Education() {
  return (
    <section className="education" id="education">
      <div className="shell">
        <div className="section-head">
          <h2>Education</h2>
          <p>Formal engineering foundations paired with graduate AI study and continuous technical learning.</p>
        </div>
        <div className="edu-grid">
          {resume.education.map((item) => (
            <article className="edu" key={item.school}>
              <h3>{item.school}</h3>
              <p>
                {item.credential} · {educationDates(item)}
                {item.location ? (
                  <>
                    <br />
                    {item.location}
                  </>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
