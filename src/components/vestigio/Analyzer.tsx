"use client";

import { useState } from "react";
import { analyzeFile, analyzeText, ApiError } from "@/lib/api";
import type { Report } from "@/lib/types";
import { FileTab } from "./FileTab";
import { ReportView } from "./ReportView";
import { TextTab } from "./TextTab";

type Tab = "text" | "file";
type Status = "idle" | "loading" | "done" | "error";

export function Analyzer() {
  const [tab, setTab] = useState<Tab>("text");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [report, setReport] = useState<Report | null>(null);
  const [submittedText, setSubmittedText] = useState<string | null>(null);
  const [error, setError] = useState<ApiError | null>(null);

  const canSubmit =
    status !== "loading" && (tab === "text" ? text.trim().length > 0 : file !== null);

  async function submit() {
    setStatus("loading");
    setError(null);
    setReport(null);
    try {
      let result: Report;
      if (tab === "text") {
        setSubmittedText(text);
        result = await analyzeText(text);
      } else {
        setSubmittedText(null);
        result = await analyzeFile(file!);
      }
      setReport(result);
      setStatus("done");
    } catch (e) {
      setError(
        e instanceof ApiError
          ? e
          : new ApiError("error", "Erro inesperado durante a análise."),
      );
      setStatus("error");
    }
  }

  const tabClass = (t: Tab) =>
    `rounded-t-lg px-5 py-2.5 text-sm font-medium transition-colors ${
      tab === t
        ? "border border-b-0 border-edge bg-surface text-accent"
        : "text-muted hover:text-ink"
    }`;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="flex gap-1">
        <button type="button" className={tabClass("text")} onClick={() => setTab("text")}>
          Colar texto
        </button>
        <button type="button" className={tabClass("file")} onClick={() => setTab("file")}>
          Enviar arquivo
        </button>
      </div>

      <div className="rounded-b-2xl rounded-tr-2xl border border-edge bg-surface p-6">
        {tab === "text" ? (
          <TextTab value={text} onChange={setText} disabled={status === "loading"} />
        ) : (
          <FileTab file={file} onSelect={setFile} disabled={status === "loading"} />
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted">
            🔒 Nada é armazenado — a análise acontece em memória e é descartada.
          </p>
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            className="rounded-lg bg-accent px-6 py-2.5 font-medium text-night transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "loading" ? "Analisando…" : "Analisar"}
          </button>
        </div>
      </div>

      {status === "error" && error && (
        <div className="mt-6 rounded-xl border border-sev-high/40 bg-sev-high/10 p-4">
          <p className="text-sm text-sev-high">{error.messagePt}</p>
          {error.code === "rate_limited" && error.retryAfter !== undefined && (
            <p className="mt-1 text-xs text-muted">
              Tente novamente em ~{Math.ceil(error.retryAfter)} segundo(s).
            </p>
          )}
        </div>
      )}

      {status === "done" && report && (
        <div className="mt-8">
          <ReportView report={report} submittedText={submittedText} />
        </div>
      )}
    </div>
  );
}
