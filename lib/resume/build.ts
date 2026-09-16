import {
  resumeFilename,
  tailorResume,
  type Emphasis,
  type ResumeFormat,
} from "@/lib/resume/tailor";
import { renderResumeDocx } from "@/lib/resume/docx";
import { renderResumePdf } from "@/lib/resume/pdf";

const EMPHASIS = new Set<Emphasis>(["ai", "fullstack"]);
const FORMATS = new Set<ResumeFormat>(["pdf", "docx"]);

export class ResumeRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

export type ParsedGenerateInput = {
  targetRole: string;
  jobDescription?: string;
  emphasis: Emphasis;
  format: ResumeFormat;
};

export function parseGenerateInput(raw: unknown): ParsedGenerateInput {
  if (!raw || typeof raw !== "object") {
    throw new ResumeRequestError("Expected a JSON object body.", 400);
  }

  const body = raw as Record<string, unknown>;
  const targetRole = typeof body.targetRole === "string" ? body.targetRole.trim() : "";
  if (!targetRole) {
    throw new ResumeRequestError("`targetRole` is required.", 400);
  }
  if (targetRole.length > 160) {
    throw new ResumeRequestError("`targetRole` is too long.", 400);
  }

  const jobDescription =
    body.jobDescription === undefined || body.jobDescription === ""
      ? undefined
      : typeof body.jobDescription === "string"
        ? body.jobDescription
        : null;
  if (jobDescription === null) {
    throw new ResumeRequestError("`jobDescription` must be a string when provided.", 400);
  }
  if (jobDescription && jobDescription.length > 20000) {
    throw new ResumeRequestError("`jobDescription` is too long.", 400);
  }

  const emphasis = body.emphasis === undefined ? "fullstack" : body.emphasis;
  if (typeof emphasis !== "string" || !EMPHASIS.has(emphasis as Emphasis)) {
    throw new ResumeRequestError("`emphasis` must be `ai` or `fullstack`.", 400);
  }

  const format = body.format === undefined ? "pdf" : body.format;
  if (typeof format !== "string" || !FORMATS.has(format as ResumeFormat)) {
    throw new ResumeRequestError("`format` must be `pdf` or `docx`.", 400);
  }

  return {
    targetRole,
    jobDescription,
    emphasis: emphasis as Emphasis,
    format: format as ResumeFormat,
  };
}

export function parseQueryInput(searchParams: URLSearchParams): ParsedGenerateInput {
  return parseGenerateInput({
    targetRole: searchParams.get("targetRole") ?? "Software Engineer",
    jobDescription: searchParams.get("jobDescription") ?? undefined,
    emphasis: searchParams.get("emphasis") ?? "fullstack",
    format: searchParams.get("format") ?? "pdf",
  });
}

export async function buildResumeFile(input: ParsedGenerateInput) {
  const tailored = tailorResume(input);
  const bytes =
    input.format === "docx" ? await renderResumeDocx(tailored) : await renderResumePdf(tailored);
  const filename = resumeFilename({
    targetRole: tailored.targetRole,
    emphasis: tailored.emphasis,
    format: input.format,
  });
  const contentType =
    input.format === "docx"
      ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      : "application/pdf";

  return { bytes, filename, contentType, tailored };
}
