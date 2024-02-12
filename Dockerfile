# Dockerfile to use in development only
#
# Usage of it is easier through `make` commands. Check `Makefile` file.

# Use a sha to avoid useless rebuild. This points to a node v18 docker image
# See https://hub.docker.com/layers/library/node/18.16.0-bullseye/images/sha256-703f55ba456220f4c1350caa4416224f396d1cf3edc03f24d9caf3909ae38522
FROM node@sha256:703f55ba456220f4c1350caa4416224f396d1cf3edc03f24d9caf3909ae38522
# FROM node:18.16.0-bullseye
