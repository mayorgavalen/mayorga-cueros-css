#!/bin/bash
# Publica mayorga.css a la tienda. Uso: ./publicar.sh "que cambie"
set -e
cd "$(dirname "$0")"
MSG="${1:-actualizacion de diseno}"
git add -A
git commit -q -m "$MSG" || { echo "sin cambios para publicar"; exit 0; }
git push -q origin main
echo "publicado: $MSG"
echo "tarda ~1 minuto en verse. para verlo ya: recarga con Cmd+Shift+R"
