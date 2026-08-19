"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const MAX_BYTES = 10 * 1024 * 1024;
const ACCEPT = {
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "application/pdf": [".pdf"],
  "text/plain": [".txt"],
  "text/markdown": [".md"],
};

export function FileTab({
  file,
  onSelect,
  disabled,
}: {
  file: File | null;
  onSelect: (file: File | null) => void;
  disabled: boolean;
}) {
  const [rejection, setRejection] = useState<string | null>(null);

  const onDrop = useCallback(
    (accepted: File[]) => {
      setRejection(null);
      if (accepted[0]) onSelect(accepted[0]);
    },
    [onSelect],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected: (rejections) => {
      const first = rejections[0]?.errors[0];
      if (first?.code === "file-too-large") {
        setRejection("Arquivo grande demais — o máximo é 10 MB.");
      } else if (first?.code === "file-invalid-type") {
        setRejection("Tipo não suportado — envie .docx, .pdf, .txt ou .md.");
      } else {
        setRejection("Não foi possível usar esse arquivo.");
      }
      onSelect(null);
    },
    accept: ACCEPT,
    maxSize: MAX_BYTES,
    multiple: false,
    disabled,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`flex h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
          isDragActive
            ? "border-accent bg-accent-soft"
            : "border-edge bg-night/60 hover:border-accent/50"
        } ${disabled ? "pointer-events-none opacity-60" : ""}`}
      >
        <input {...getInputProps()} />
        {file ? (
          <>
            <p className="font-mono text-sm text-accent">{file.name}</p>
            <p className="mt-1 text-xs text-muted">
              {(file.size / 1024).toFixed(1)} KB · clique para trocar
            </p>
          </>
        ) : (
          <>
            <p className="text-3xl">📄</p>
            <p className="mt-3 text-sm">
              Arraste um arquivo ou <span className="text-accent">clique para escolher</span>
            </p>
            <p className="mt-1 text-xs text-muted">.docx · .pdf · .txt · .md — até 10 MB</p>
          </>
        )}
      </div>
      {rejection && <p className="mt-2 text-xs text-sev-high">{rejection}</p>}
    </div>
  );
}
