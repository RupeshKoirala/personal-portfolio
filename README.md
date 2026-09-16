# Rupesh Koirala — Personal Portfolio

Forward-deployed / applied AI / full-stack engineer portfolio: Next.js App Router, TypeScript, Tailwind CSS. Content lives in typed data shared by the site and resume exports. Ready for Vercel. No secrets required for the static site.

Live local URL after `npm run dev`: [http://localhost:3000](http://localhost:3000)

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Resume PDF via `pdfkit`, DOCX via `docx`
- Structured source: [`content/resume.ts`](content/resume.ts)

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

```bash
npm run lint
```

## Deploy on Vercel

1. Import [this GitHub repository](https://github.com/RupeshKoirala/personal-portfolio) in [Vercel](https://vercel.com/new).
2. Framework preset: Next.js. Build command: `npm run build`. Output: default.
3. Optional env: `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app` (canonical URL, Open Graph, sitemap). Not required for the site to run.
4. Deploy. No API keys, databases, or auth are needed.

Resume downloads hit `/api/resume/generate` as a Node.js serverless function.

## Resume downloads

Unified resume (full-stack emphasis by default):

- PDF: [`/api/resume/generate?format=pdf`](/api/resume/generate?format=pdf)
- DOCX: [`/api/resume/generate?format=docx`](/api/resume/generate?format=docx)

HTML preview + tailor form: [`/resume`](/resume)

LinkedIn: [linkedin.com/in/rupeshkoirala33](https://www.linkedin.com/in/rupeshkoirala33/)

## Job-tailored generate API

`POST /api/resume/generate`

Re-ranks the **same facts** from the unified resume for a target role. It does not invent employers, dates, or metrics. AI emphasis surfaces applied AI / agentic engineering and the Analytics Vidhya capstone. Full-stack emphasis keeps the production engineering narrative.

```json
{
  "targetRole": "Forward Deployed Engineer",
  "jobDescription": "Optional job description used only to re-rank bullets and skills.",
  "emphasis": "ai",
  "format": "pdf"
}
```

| Field | Required | Notes |
| --- | --- | --- |
| `targetRole` | yes (POST) | Headline / filename seed. GET defaults to `Software Engineer`. |
| `jobDescription` | no | Keyword overlap scoring only. |
| `emphasis` | no | `fullstack` (default) or `ai`. |
| `format` | no | `pdf` (default) or `docx`. |

`GET /api/resume/generate?format=pdf&emphasis=ai&targetRole=Applied%20AI%20Engineer` is the same generator for simple downloads.

Example:

```bash
curl -X POST http://localhost:3000/api/resume/generate \
  -H 'Content-Type: application/json' \
  -d '{"targetRole":"Forward Deployed Engineer","emphasis":"ai","format":"docx"}' \
  --output Rupesh_Koirala_resume.docx
```

## Content rules

Work history, metrics, education, and skills come from the unified resume. Public certifications and GitHub projects are linked only when verifiable.

- Employers: BlackRock, First Bank, YAJ Tech Pvt. Ltd.
- Applied AI practice + approved Agentic AI Pioneer Program capstone ([shopu-av](https://github.com/RupeshKoirala/shopu-av)).

## Project layout

```
app/                # App Router pages, SEO, resume API
components/         # Homepage sections
content/resume.ts   # Source of truth
lib/resume/         # Tailor + PDF/DOCX builders
public/             # Headshot and static assets
```
