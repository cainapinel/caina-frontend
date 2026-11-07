"use client";

import { useCallback, useRef, useState } from "react";
import { executarAoVivo, type PedidoAoVivo } from "@/lib/demo/aoVivo";
import type { Evento, Resultado } from "@/lib/demo/types";
import type { Estado } from "./PainelExecucao";

const PASSO_REPLAY_MS = 550;

/** Estado de um painel: toca um replay gravado (passo a passo) ou executa ao vivo. */
export function useExecucao() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [estado, setEstado] = useState<Estado>("parado");
  const [fonte, setFonte] = useState<"replay" | "ao vivo" | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const abort = useRef<AbortController | null>(null);

  const parar = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    abort.current?.abort();
    timer.current = null;
    abort.current = null;
  }, []);

  const limpar = useCallback(() => {
    parar();
    setEventos([]);
    setResultado(null);
    setEstado("parado");
    setFonte(null);
    setErro(null);
  }, [parar]);

  const replay = useCallback(
    (gravado: Resultado) => {
      parar();
      setEventos([]);
      setResultado(null);
      setErro(null);
      setFonte("replay");
      setEstado("rodando");
      let i = 0;
      timer.current = setInterval(() => {
        if (i < gravado.eventos.length) {
          const proximo = gravado.eventos[i++];
          setEventos((ev) => [...ev, proximo]);
          return;
        }
        if (timer.current) clearInterval(timer.current);
        timer.current = null;
        setResultado(gravado);
        setEstado("pronto");
      }, PASSO_REPLAY_MS);
    },
    [parar],
  );

  const aoVivo = useCallback(
    async (pedido: PedidoAoVivo, token: string): Promise<Resultado | null> => {
      parar();
      setEventos([]);
      setResultado(null);
      setErro(null);
      setFonte("ao vivo");
      setEstado("rodando");
      const ctrl = new AbortController();
      abort.current = ctrl;
      try {
        const r = await executarAoVivo(pedido, token, (e) => setEventos((ev) => [...ev, e]), ctrl.signal);
        setResultado(r);
        setEstado("pronto");
        return r;
      } catch (e) {
        if ((e as Error).name === "AbortError") return null;
        setErro((e as Error).message);
        setEstado("erro");
        return null;
      }
    },
    [parar],
  );

  return { eventos, resultado, estado, fonte, erro, replay, aoVivo, limpar };
}
