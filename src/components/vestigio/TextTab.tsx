"use client";

export function TextTab({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        spellCheck={false}
        autoCorrect="off"
        placeholder="Cole aqui o texto a analisar (Ctrl+V preserva os caracteres invisíveis)…"
        className="h-56 w-full resize-y rounded-xl border border-edge bg-night/60 p-4 font-sans text-sm leading-6 outline-none transition-colors placeholder:text-muted/60 focus:border-accent/60"
      />
      <p className="mt-1.5 text-xs text-muted">
        Máximo de 200 mil caracteres · não digite por cima do texto colado — a
        análise depende dos caracteres originais.
      </p>
    </div>
  );
}
