# Development commands wrapper

# Configuration
PROJECT_NAME=family-tree-builder
DOCKER_IMAGE=$(PROJECT_NAME)

# Docker 'run' command wrapper
DOCKER_RUN=docker run\
	--network=host \
	-u $(shell id -u):$(shell id -g) \
	-v $(shell pwd):/opt/share \
	-w /opt/share
ifndef CI
DOCKER_RUN:=$(DOCKER_RUN) -t
endif

all: help
help: ## Display help message
help:
	@echo Usage: 	make [target ...]
	@echo
	@echo Targets:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

clean: ## Remove temporary directories and files from the repository
	rm -rf dist/

docker_build: ## Build docker image
docker_build: Dockerfile
	docker build -t $(DOCKER_IMAGE) .

_docker_build: # Check that given docker image exists or build it
ifeq ($(shell docker image list -q $(DOCKER_IMAGE)),)
	@make docker_build
else
	@echo $(DOCKER_IMAGE) is ready.
endif

it: interactive
interactive: ## Start an interactive prompt with docker
interactive: _docker_build
	$(DOCKER_RUN) -it $(DOCKER_IMAGE) bash

node_modules: install
i: install
install: ## Install required libraries
install: _docker_build
	$(DOCKER_RUN) $(DOCKER_IMAGE) npm install

start: ## Starts the app without other services
start: _docker_build
	$(DOCKER_RUN) -it $(DOCKER_IMAGE) npm start \
		| sed "s|/opt/share|$(shell pwd)|g"
