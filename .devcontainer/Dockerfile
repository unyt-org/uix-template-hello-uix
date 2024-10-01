ARG VARIANT=ubuntu-20.04
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}
USER vscode

RUN curl -fsSL https://unyt.land/install.sh | bash
RUN export DENO_INSTALL=/home/vscode/.uix
RUN export PATH=${DENO_INSTALL}/bin:${PATH}