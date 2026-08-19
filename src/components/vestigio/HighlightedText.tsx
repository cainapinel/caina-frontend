"use client";

/**
 * Renderiza o texto analisado com chips inline nas posições dos achados.
 *
 * CONTRATO CRÍTICO: as posições do backend são offsets de CODEPOINT.
 * Indexamos via Array.from(text) — nunca .charAt/.slice (UTF-16), que
 * deslocariam todos os highlights após o primeiro emoji.
 */

import { useMemo, useState } from "react";
import { SEVERITY_CLASSES, SEVERITY_LABEL_PT } from "@/lib/severity";
import type { UnicodeFinding } from "@/lib/types";

const EXCERPT_THRESHOLD = 20_000;
const EXCERPT_WINDOW = 80;

/** Categorias renderizadas como caixa ⟨U+XXXX⟩ (o caractere é invisível). */
const BOXED_CATEGORIES = new Set([
  "invisible",
  "atypical_space",
  "bidi_control",
  "variation_selector",
  "tag",
]);

interface Segment {
  kind: "plain" | "finding" | "gap";
  text?: string;
  finding?: UnicodeFinding;
  key: string;
}

function buildSegments(
  chars: string[],
  findings: UnicodeFinding[],
  excerpt: boolean,
): Segment[] {
  const byPos = new Map<number, UnicodeFinding>();
  for (const f of findings) {
    if (f.position < chars.length) byPos.set(f.position, f);
  }

  let ranges: Array<[number, number]>;
  if (!excerpt) {
    ranges = [[0, chars.length]];
  } else {
    const windows = [...byPos.keys()]
      .sort((a, b) => a - b)
      .map((p): [number, number] => [
        Math.max(0, p - EXCERPT_WINDOW),
        Math.min(chars.length, p + EXCERPT_WINDOW),
      ]);
    ranges = [];
    for (const [start, end] of windows) {
      const last = ranges[ranges.length - 1];
      if (last && start <= last[1]) {
        last[1] = Math.max(last[1], end);
      } else {
        ranges.push([start, end]);
      }
    }
    if (ranges.length === 0) ranges = [[0, Math.min(chars.length, 600)]];
  }

  const segments: Segment[] = [];
  let prevEnd = 0;
  ranges.forEach(([start, end], r) => {
    if (excerpt && start > prevEnd) {
      segments.push({ kind: "gap", key: `gap-${r}` });
    }
    let plain: string[] = [];
    for (let i = start; i < end; i++) {
      const finding = byPos.get(i);
      if (finding) {
        if (plain.length) {
          segments.push({ kind: "plain", text: plain.join(""), key: `p-${r}-${i}` });
          plain = [];
        }
        segments.push({ kind: "finding", finding, text: chars[i], key: `f-${i}` });
      } else {
        plain.push(chars[i]);
      }
    }
    if (plain.length) {
      segments.push({ kind: "plain", text: plain.join(""), key: `p-${r}-end` });
    }
    prevEnd = end;
  });
  if (excerpt && prevEnd < chars.length) {
    segments.push({ kind: "gap", key: "gap-final" });
  }
  return segments;
}

function FindingChip({ finding, char }: { finding: UnicodeFinding; char: string }) {
  const boxed = BOXED_CATEGORIES.has(finding.category);
  return (
    <span className="group relative inline">
      <mark
        className={`inline rounded border px-0.5 font-mono text-[0.8em] ${SEVERITY_CLASSES[finding.severity]} cursor-help bg-clip-padding`}
      >
        {boxed ? `⟨${finding.codepoint}⟩` : char}
      </mark>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-72 -translate-x-1/2 rounded-lg border border-edge bg-surface2 p-3 text-left shadow-xl shadow-black/50 group-hover:block">
        <span className="block font-mono text-xs text-accent">
          {finding.codepoint} · {finding.name}
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-wide text-muted">
          sinal {SEVERITY_LABEL_PT[finding.severity]} · linha {finding.line}, coluna{" "}
          {finding.column}
        </span>
        <span className="mt-2 block text-xs leading-relaxed text-ink/90">
          {finding.explanation_pt}
        </span>
      </span>
    </span>
  );
}

export function HighlightedText({
  text,
  findings,
}: {
  text: string;
  findings: UnicodeFinding[];
}) {
  const chars = useMemo(() => Array.from(text), [text]);
  const isLong = chars.length > EXCERPT_THRESHOLD;
  const [showAll, setShowAll] = useState(false);
  const excerpt = isLong && !showAll;

  const segments = useMemo(
    () => buildSegments(chars, findings, excerpt),
    [chars, findings, excerpt],
  );

  if (findings.length === 0) {
    return (
      <p className="text-sm text-muted">
        Nenhum caractere suspeito para destacar neste texto.
      </p>
    );
  }

  return (
    <div>
      <div className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl border border-edge bg-night/60 p-4 font-sans text-sm leading-7">
        {segments.map((segment) => {
          if (segment.kind === "gap") {
            return (
              <span key={segment.key} className="mx-1 select-none font-mono text-xs text-muted">
                [...]
              </span>
            );
          }
          if (segment.kind === "finding") {
            return (
              <FindingChip
                key={segment.key}
                finding={segment.finding!}
                char={segment.text!}
              />
            );
          }
          return <span key={segment.key}>{segment.text}</span>;
        })}
      </div>
      {isLong && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-2 text-xs text-accent hover:underline"
        >
          {showAll ? "Mostrar só os trechos com achados" : "Mostrar o texto completo"}
        </button>
      )}
    </div>
  );
}
