import PDFDocument from "pdfkit";
import type { TailoredResume } from "@/lib/resume/tailor";

const NAVY = "#07131d";
const CYAN = "#0e7a96";
const INK = "#12202a";
const MUTED = "#4d6470";

function writeLines(doc: PDFKit.PDFDocument, lines: string[], options?: { indent?: number }) {
  const indent = options?.indent ?? 0;
  for (const line of lines) {
    doc.font("Helvetica").fontSize(9.5).fillColor(INK).text(line, {
      indent,
      paragraphGap: 4,
      lineGap: 1.2,
      align: "left",
    });
  }
}

function educationRange(item: { start: string; end: string }) {
  if (item.start.toLowerCase().includes("progress")) {
    return "In Progress (Current)";
  }
  return `${item.start} – ${item.end}`;
}

export function renderResumePdf(data: TailoredResume): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "LETTER",
      margin: 48,
      info: {
        Title: `${data.name} — ${data.headline}`,
        Author: data.name,
      },
    });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const pageWidth = doc.page.width;
    const left = doc.page.margins.left;
    const right = pageWidth - doc.page.margins.right;
    const width = right - left;

    doc.rect(0, 0, pageWidth, 96).fill(NAVY);
    doc.fillColor("#eaf7fb").font("Helvetica-Bold").fontSize(22).text(data.name.toUpperCase(), left, 18, {
      width,
    });
    doc.fillColor("#9de8ff").font("Helvetica").fontSize(10).text(data.headline, left, 46, { width });
    doc.fillColor("#91a6b5").fontSize(8).text(data.address, left, 62, { width });
    doc.fillColor("#91a6b5").fontSize(8).text(`${data.email}  ·  ${data.phone}  ·  `, left, 76, {
      width,
      continued: true,
    });
    doc.fillColor("#9de8ff").text("LinkedIn", {
      link: data.linkedin,
      underline: true,
      continued: true,
    });
    doc.fillColor("#91a6b5").text("  ·  ", { continued: true });
    doc.fillColor("#9de8ff").text("GitHub", {
      link: data.github,
      underline: true,
    });

    doc.y = 114;

    const section = (title: string) => {
      if (doc.y > 720) doc.addPage();
      doc.moveDown(0.35);
      doc.font("Helvetica-Bold").fontSize(11).fillColor(CYAN).text(title.toUpperCase(), { characterSpacing: 0.8 });
      doc.moveTo(left, doc.y + 2).lineTo(right, doc.y + 2).strokeColor("#c5d8e0").lineWidth(0.8).stroke();
      doc.moveDown(0.45);
    };

    section("Profile");
    writeLines(
      doc,
      data.summary.map((item) => (data.summary.length === 1 ? item : `•  ${item}`)),
    );

    section("Technical Skills");
    for (const group of data.skills.slice(0, 8)) {
      doc
        .font("Helvetica-Bold")
        .fontSize(9)
        .fillColor(INK)
        .text(`${group.label}: `, { continued: true });
      doc.font("Helvetica").fillColor(MUTED).text(group.items.join(", "));
      doc.moveDown(0.15);
    }

    section("Selected Applied AI / Agentic Engineering");
    writeLines(
      doc,
      data.appliedAI.map((item) => `•  ${item.title}: ${item.text}`),
    );

    section("Work Experience");
    for (const role of data.experience) {
      if (doc.y > 690) doc.addPage();
      doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(role.company, { continued: true });
      doc.font("Helvetica").fontSize(9).fillColor(MUTED).text(`  ·  ${role.location}`, { align: "left" });
      doc.font("Helvetica-Oblique").fontSize(9.5).fillColor(INK).text(role.title, { continued: true });
      doc.font("Helvetica").fontSize(9).fillColor(MUTED).text(`    ${role.start} – ${role.end}`);
      doc.moveDown(0.15);
      writeLines(
        doc,
        role.bullets.map((bullet) => `•  ${bullet.text}`),
      );
      doc.moveDown(0.2);
    }

    if (data.projects.length > 0) {
      section("Projects");
      for (const project of data.projects) {
        doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text(project.name, { continued: true });
        doc.font("Helvetica").fontSize(8.5).fillColor(MUTED).text(`  ·  ${project.timeframe}`);
        writeLines(doc, [`•  ${project.blurb}`, `•  ${project.stack.join(" · ")}  ·  ${project.href}`]);
      }
    }

    section("Education");
    for (const item of data.education) {
      if (item.location) {
        doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text(item.school, { continued: true });
        doc.font("Helvetica").fontSize(9).fillColor(MUTED).text(`  ·  ${item.location}`);
      } else {
        doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text(item.school);
      }
      doc.font("Helvetica").fontSize(9.5).fillColor(INK).text(`${item.credential}  ·  ${educationRange(item)}`);
      doc.moveDown(0.15);
    }

    section("Certifications");
    for (const cert of data.certifications) {
      const dates = cert.expires ? `${cert.issued} – ${cert.expires}` : cert.issued;
      doc.font("Helvetica").fontSize(9.5).fillColor(INK).text(`•  ${cert.name} — ${cert.issuer} (${dates})`);
    }

    if (data.notes.length > 0) {
      doc.moveDown(0.8);
      doc.font("Helvetica-Oblique").fontSize(8).fillColor(MUTED).text(data.notes.join(" "));
    }

    doc.end();
  });
}
