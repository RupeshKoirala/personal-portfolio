# Rupesh Koirala — Personal Portfolio

Senior full-stack engineer portfolio: Next.js App Router, TypeScript, Tailwind CSS. Content lives in typed data shared by the site and resume exports. Ready for Vercel. No secrets required for the static site.

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

Base resume (full-stack emphasis):

- PDF: [`/api/resume/generate?format=pdf`](/api/resume/generate?format=pdf)
- DOCX: [`/api/resume/generate?format=docx`](/api/resume/generate?format=docx)

HTML preview + tailor form: [`/resume`](/resume)

## Job-tailored generate API

`POST /api/resume/generate`

Re-ranks and rephrases the **same facts** for a target role. It does not invent employers, dates, or metrics. AI emphasis surfaces ~6–7 months of agent/RAG practice (LangChain, LangGraph, AutoGen, CrewAI, OpenAI SDK) and the Analytics Vidhya capstone. Full-stack emphasis keeps the production engineering narrative.

```json
{
  "targetRole": "Senior Full-Stack Engineer",
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

`GET /api/resume/generate?format=pdf&emphasis=ai&targetRole=AI%20Engineer` is the same generator for simple downloads.

Example:

```bash
curl -X POST http://localhost:3000/api/resume/generate \
  -H 'Content-Type: application/json' \
  -d '{"targetRole":"Senior AI Engineer","emphasis":"ai","format":"docx"}' \
  --output Rupesh_Koirala_resume.docx
```

Next iteration ideas (not in this version): LLM rewriting behind a key, persisting tailored copies, or A/B section templates per company.

## Content rules

Work history, metrics, education, and skills come from the source resume. Public certifications and GitHub projects are linked only when verifiable.

- Roles: BlackRock, First Bank, YAJ Tech Pvt. Ltd.
- AI: recent practice + approved Agentic AI Pioneer Program capstone ([shopu-av](https://github.com/RupeshKoirala/shopu-av)). Study forks are labeled as study repos.

## Project layout

```
app/                # App Router pages, SEO, resume API
components/         # Homepage sections
content/resume.ts   # Source of truth
lib/resume/         # Tailor + PDF/DOCX builders
```
