import {
  AlignmentType,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";
import type { TailoredResume } from "@/lib/resume/tailor";

function heading(text: string) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 220, after: 80 },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        color: "0E7A96",
        size: 22,
        font: "Calibri",
      }),
    ],
  });
}

function bullet(text: string) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Calibri", size: 20, color: "12202A" })],
  });
}

function educationRange(item: { start: string; end: string }) {
  if (item.start.toLowerCase().includes("progress")) {
    return "In Progress (Current)";
  }
  return `${item.start} – ${item.end}`;
}

export async function renderResumeDocx(data: TailoredResume): Promise<Buffer> {
  const children: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [
        new TextRun({
          text: data.name,
          bold: true,
          size: 40,
          font: "Calibri",
          color: "07131D",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: data.headline,
          italics: true,
          size: 22,
          font: "Calibri",
          color: "0E7A96",
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: `${data.location}  ·  ${data.email}  ·  ${data.phone}  ·  `,
          size: 18,
          font: "Calibri",
          color: "4D6470",
        }),
        new ExternalHyperlink({
          link: data.linkedin,
          children: [
            new TextRun({
              text: data.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
              size: 18,
              font: "Calibri",
              color: "0E7A96",
              underline: {},
            }),
          ],
        }),
        new TextRun({
          text: "  ·  ",
          size: 18,
          font: "Calibri",
          color: "4D6470",
        }),
        new ExternalHyperlink({
          link: data.github,
          children: [
            new TextRun({
              text: data.github.replace(/^https?:\/\/(www\.)?/, ""),
              size: 18,
              font: "Calibri",
              color: "0E7A96",
              underline: {},
            }),
          ],
        }),
      ],
    }),
    heading("Profile"),
    ...data.summary.map((item) =>
      data.summary.length === 1
        ? new Paragraph({
            spacing: { after: 80 },
            children: [new TextRun({ text: item, font: "Calibri", size: 20, color: "12202A" })],
          })
        : bullet(item),
    ),
    heading("Technical Skills"),
    ...data.skills.slice(0, 8).map(
      (group) =>
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: `${group.label}: `, bold: true, font: "Calibri", size: 20 }),
            new TextRun({ text: group.items.join(", "), font: "Calibri", size: 20, color: "4D6470" }),
          ],
        }),
    ),
    heading("Selected Applied AI / Agentic Engineering"),
    ...data.appliedAI.map((item) => bullet(`${item.title}: ${item.text}`)),
    heading("Work Experience"),
  ];

  for (const role of data.experience) {
    children.push(
      new Paragraph({
        spacing: { before: 120, after: 20 },
        children: [
          new TextRun({ text: role.company, bold: true, font: "Calibri", size: 24 }),
          new TextRun({ text: `  ·  ${role.location}`, font: "Calibri", size: 20, color: "4D6470" }),
        ],
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: role.title, italics: true, font: "Calibri", size: 20 }),
          new TextRun({
            text: `    ${role.start} – ${role.end}`,
            font: "Calibri",
            size: 20,
            color: "4D6470",
          }),
        ],
      }),
      ...role.bullets.map((item) => bullet(item.text)),
    );
  }

  if (data.projects.length > 0) {
    children.push(heading("Projects"));
    for (const project of data.projects) {
      children.push(
        new Paragraph({
          spacing: { before: 80, after: 20 },
          children: [
            new TextRun({ text: project.name, bold: true, font: "Calibri", size: 22 }),
            new TextRun({
              text: `  ·  ${project.timeframe}`,
              font: "Calibri",
              size: 18,
              color: "4D6470",
            }),
          ],
        }),
        bullet(project.blurb),
        bullet(`${project.stack.join(" · ")}  ·  ${project.href}`),
      );
    }
  }

  children.push(heading("Education"));
  for (const item of data.education) {
    children.push(
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: item.school, bold: true, font: "Calibri", size: 22 }),
          ...(item.location
            ? [new TextRun({ text: `  ·  ${item.location}`, font: "Calibri", size: 20, color: "4D6470" })]
            : []),
        ],
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({
            text: `${item.credential}  ·  ${educationRange(item)}`,
            font: "Calibri",
            size: 20,
          }),
        ],
      }),
    );
  }

  children.push(heading("Certifications"));
  for (const cert of data.certifications) {
    const dates = cert.expires ? `${cert.issued} – ${cert.expires}` : cert.issued;
    children.push(bullet(`${cert.name} — ${cert.issuer} (${dates})`));
  }

  children.push(
    new Paragraph({
      spacing: { before: 280 },
      children: [
        new TextRun({
          text: data.notes.join(" "),
          italics: true,
          font: "Calibri",
          size: 16,
          color: "4D6470",
        }),
      ],
    }),
  );

  const document = new Document({
    creator: data.name,
    title: `${data.name} Resume`,
    description: data.headline,
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, bottom: 720, left: 720, right: 720 },
          },
        },
        children,
      },
    ],
  });

  return Packer.toBuffer(document);
}
