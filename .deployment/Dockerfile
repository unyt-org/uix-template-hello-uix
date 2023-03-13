FROM denoland/deno:1.21.3

WORKDIR /usr/app
COPY . .

CMD ["deno", "run", "--no-check", "--allow-all", "--unstable", "-q", "--import-map=importmap.dev.json", "https://cdn.unyt.org/uix@dev/run.ts"]