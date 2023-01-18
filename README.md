# UIX Base Project

This repository provides a simple UIX setup, including backend and frontend, a docker deployment configuration and a `.dx` configuration file.

# Project Structure

In the `src` directory, there are two directories. 

The `backend` directory contains the backend endpoint logic, initialized in `entrypoint.ts`. The backend endpoint runs locally with deno.

The `public` directory contains scripts and resources that are accessible by the backend endpoint as well as the frontend endpoints (running in the web browser / as standalone web apps).
There is also `entrypoint.ts` for the frontend endpoints.

# Cross realm imports

The backend endpoint has access to all modules in the `public` directory.

The frontend endpoint can also get access to modules in the `backend` directory:

Exported values, classes, and functions that are initialized as DATEX values (e.g. by using the @endpoint and @sync decorators or by creating new pointer references), 
can be imported like normal values in the `public` directory. 

Access to these values can be limited by settings DATEX permission filters.
The module source code is also not exposed to the frontend endpoints.

# Development

Compilation of the TS files is not required. The project can be deployed as is.

To run the project, you need deno v.1.21.3:
```bash
deno run --no-check --allow-all --unstable ./src/backend/entrypoint.ts --watch
```

The `--watch` option enables updates to the frontend code when a file is changed, which is useful for development, but should normally not be used in production.

This command starts the backend endpoint and also exposes a web server on port 80 for the frontend endpoint.


(The docker container is currently only working on the main server)