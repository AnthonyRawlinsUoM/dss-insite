#!/usr/bin/env bash
git pull
docker build -t anthonyrawlinsuom/dssplay .
docker push
