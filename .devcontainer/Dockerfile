FROM mcr.microsoft.com/vscode/devcontainers/base:debian-10

RUN mkdir -p /deno/latest

ENV DENO_INSTALL=/deno/latest
RUN curl -fsSL https://deno.land/x/install/install.sh | sh \
	&& chown -R vscode $DENO_INSTALL

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

RUN curl -s https://dev.cdn.unyt.org/uix/install.sh | sh