#!/usr/bin/env bash
# Gera os PDFs de download dos cursos (apostila, slides, pedidos prontos e projeto final) a partir das
# páginas do site, com o Chrome headless. Os arquivos vão para public/downloads e são
# commitados junto com o conteúdo.
#
# Uso:  npm run build && npx next start -p 3100     (em outro terminal)
#       scripts/pdf-materiais.sh ia-no-dia-a-dia [http://localhost:3100]
set -euo pipefail
curso="${1:?informe o slug do curso}"
base="${2:-http://localhost:3100}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p public/downloads

gerar() { # $1 = caminho da página, $2 = arquivo de saída, $3 = opções extras do Chrome
  # O Chrome headless às vezes sai com erro sem motivo aparente: tenta até três vezes.
  for tentativa in 1 2 3; do
    if "$chrome" --headless=new --disable-gpu --no-pdf-header-footer --hide-scrollbars \
      --virtual-time-budget=20000 --run-all-compositor-stages-before-draw ${3:-} \
      --print-to-pdf="public/downloads/$2" "$base$1" 2>/dev/null; then
      echo "gerado: public/downloads/$2"
      return
    fi
    echo "falhou ($tentativa/3): $2"
  done
  return 1
}

gerar "/cursos/$curso/roteiro"          "$curso-apostila.pdf"
# Slides: janela do tamanho de uma A4 deitada, para o layout usar as colunas de tela larga.
gerar "/cursos/$curso/slides/impressao" "$curso-slides.pdf" "--window-size=1123,794"
gerar "/cursos/$curso/pedidos"          "$curso-pedidos-prontos.pdf"

# Projeto final: só nos cursos que têm um.
if [ "$(curl -s -o /dev/null -w '%{http_code}' "$base/cursos/$curso/projeto")" = 200 ]; then
  gerar "/cursos/$curso/projeto"        "$curso-projeto-final.pdf"
fi
