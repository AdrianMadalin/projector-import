#!/usr/bin/env bash
APP_DIR=$(dirname "$(dirname $(readlink -f "$0"))/../../..")
APP_DIR=`cd $APP_DIR; pwd`

if [[ "$1" == "install" ||  "$1" == "--install" ]]; then
  thisScriptName=$(realpath $0)
  chmod ug+x "$thisScriptName"
  ln -f --relative -s "$thisScriptName" "$APP_DIR/.git/hooks/pre-push" && \
  echo -e "Git pre-push hook set" && exit 0 || echo "Failed to set git pre-push hook" && exit 10
fi

cd $APP_DIR
make build
