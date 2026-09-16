import { NextRequest } from "next/server";
import { buildResumeFile, parseGenerateInput, parseQueryInput, ResumeRequestError } from "@/lib/resume/build";

export const runtime = "nodejs";

function asDownload(bytes: Buffer, filename: string, contentType: string) {
  return new Response(new Uint8Array(bytes), {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function asError(error: unknown) {
  if (error instanceof ResumeRequestError) {
    return Response.json({ error: error.message }, { status: error.status });
  }
  console.error(error);
  return Response.json({ error: "Failed to generate resume." }, { status: 500 });
}

export async function GET(request: NextRequest) {
  try {
    const input = parseQueryInput(request.nextUrl.searchParams);
    const file = await buildResumeFile(input);
    return asDownload(file.bytes, file.filename, file.contentType);
  } catch (error) {
    return asError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();
    const input = parseGenerateInput(raw);
    const file = await buildResumeFile(input);
    return asDownload(file.bytes, file.filename, file.contentType);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ error: "Invalid JSON body." }, { status: 400 });
    }
    return asError(error);
  }
}
