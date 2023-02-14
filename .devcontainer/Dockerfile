FROM mcr.microsoft.com/vscode/devcontainers/base:debian-10

# curl -fsSL https://deno.land/x/install/install.sh | sh -s 'v1.21.3' && export PATH=$PATH:/home/node/.deno/bin",
RUN mkdir -p /deno/latest

ENV DENO_INSTALL=/deno/latest
RUN curl -fsSL https://deno.land/x/install/install.sh | sh \
	&& chown -R vscode $DENO_INSTALL

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno


# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
