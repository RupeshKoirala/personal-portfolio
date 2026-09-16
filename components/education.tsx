import { resume } from "@/content/resume";

export function Education() {
  return (
    <section className="education" id="education">
      <div className="shell">
        <div className="section-head">
          <h2>Education</h2>
          <p>Formal engineering foundations paired with continuous technical learning.</p>
        </div>
        <div className="edu-grid">
          {resume.education.map((item) => (
            <article className="edu" key={item.school}>
              <h3>{item.school}</h3>
              <p>
                {item.credential} · {item.start.replace(".", "")}–{item.end.replace(".", "")}
                <br />
                {item.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
