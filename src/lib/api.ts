import type { ApiErrorBody, Report } from "./types";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export class ApiError extends Error {
  code: string;
  messagePt: string;
  retryAfter?: number;

  constructor(code: string, messagePt: string, retryAfter?: number) {
    super(messagePt);
    this.code = code;
    this.messagePt = messagePt;
    this.retryAfter = retryAfter;
  }
}

async function handle(response: Response): Promise<Report> {
  if (response.ok) {
    return (await response.json()) as Report;
  }
  let body: ApiErrorBody | null = null;
  try {
    body = (await response.json()) as ApiErrorBody;
  } catch {
    // resposta sem corpo JSON (ex.: proxy)
  }
  throw new ApiError(
    body?.error?.code ?? "error",
    body?.error?.message_pt ??
      "Não foi possível completar a análise. Tente novamente em instantes.",
    body?.error?.retry_after,
  );
}

export async function analyzeText(text: string): Promise<Report> {
  let response: Response;
  try {
    response = await fetch(`${API}/api/v1/analyze/text`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch {
    throw new ApiError("network", "Não foi possível conectar ao serviço de análise.");
  }
  return handle(response);
}

export async function analyzeFile(file: File): Promise<Report> {
  const form = new FormData();
  form.append("file", file);
  let response: Response;
  try {
    response = await fetch(`${API}/api/v1/analyze/file`, {
      method: "POST",
      body: form,
    });
  } catch {
    throw new ApiError("network", "Não foi possível conectar ao serviço de análise.");
  }
  return handle(response);
}
