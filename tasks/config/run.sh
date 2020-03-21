#!/usr/bin/env bash
tasks/config/pre-push.sh --install
chmod -R 777 .
git config core.fileMode false
