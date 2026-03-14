# backstage-containerization

`https://ghcr.io`

## Limits

- The Container registry has a 10 GB size limit for each layer.
- The Container registry has a 10 minute timeout limit for uploads.

## docker push

```bash
docker push ghcr.io/NAMESPACE/IMAGE_NAME:latest
```

## docker pull

```bash
docker pull ghcr.io/NAMESPACE/IMAGE_NAME
```

## docker images

```bash
docker images
```

## docker inspect

```bash
docker inspect ghcr.io/NAMESPACE/IMAGE_NAME
```

## packages/backend/package.json

```json
{
  "build-image": "docker build ../.. -f Dockerfile --tag backstage"
}
```

```json
{
  "name": "backend",
  "version": "0.0.0",
  "main": "dist/index.cjs.js",
  "types": "src/index.ts",
  "private": true,
  "scripts": {
    "start": "backstage-cli package start",
    "build": "backstage-cli package build",
    "lint": "backstage-cli package lint",
    "test": "backstage-cli package test",
    "clean": "backstage-cli package clean",
    "build-image": "docker build ../.. -f Dockerfile --tag backstage"
  },
  "dependencies": {
    "app": "link:../app"
  },
  "devDependencies": {
    "@backstage/cli": "^0.35.4"
  }
}
```

## sudo yarn build-image

```
rock@redmibook:~/workspace/devx$ sudo yarn build-image

[+] Building 456.6s (19/19) FINISHED                                                                                                                                        docker:default

 => [internal] load build definition from Dockerfile                                                                                                                                  0.0s
 => => transferring dockerfile: 3.15kB                                                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:24-trixie-slim                                                                                                              132.7s
 => [internal] load .dockerignore                                                                                                                                                     0.0s
 => => transferring context: 153B                                                                                                                                                     0.0s
 => [stage-0  1/13] FROM docker.io/library/node:24-trixie-slim@sha256:4fc981bf8dfc5e36e15e0cb73c5761a14cabff0932dcad1cf26cd3c3425db5d4                                               63.1s


...

 => exporting to image                                                                                                                                                                4.9s
 => => exporting layers                                                                                                                                                               4.9s
 => => writing image sha256:4f625e2874e2f63069f249490c48ef1a5e6e7b9730e1180d40f0b4f0ff3e030d                                                                                          0.0s
 => => naming to docker.io/library/backstage
```

```
rock@redmibook:~/workspace/devx$ sudo docker images | grep 'backstage'
backstage                                                                                latest             4f625e2874e2   8 minutes ago   1.18GB
```

> [!WARNING]  
> ERROR: failed to build: failed to solve: failed to compute cache key
> "/packages/backend/dist/bundle.tar.gz": not found 

```
 > [stage-0 12/13] COPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml ./:

Dockerfile:67
  65 |
  66 |     # Then copy the rest of the backend bundle, along with any other files we might want.
  67 | >>> COPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml ./
  68 |     RUN tar xzf bundle.tar.gz && rm bundle.tar.gz
  69 |
ERROR: failed to build: failed to solve: failed to compute cache key: failed to calculate checksum of ref d09189cb-1d3f-4984-a57a-14f8dab86177::ikqijctq2x7nn4dyaz7faprl4: "/packages/backend/dist/bundle.tar.gz": not found
Error: Process completed with exit code 1.
##[debug]Finishing: yarn build-image
```

> [!TIP]
> 

## packages/backend/Dockerfile

```docker
# This dockerfile builds an image for the backend package.
# It should be executed with the root of the repo as docker context.
#
# Before building this image, be sure to have run the following commands in the repo root:
#
# yarn install --immutable
# yarn tsc
# yarn build:backend
#
# Once the commands have been run, you can build the image using `yarn build-image`
#
# Alternatively, there is also a multi-stage Dockerfile documented here:
# https://backstage.io/docs/deployment/docker#multi-stage-build

FROM node:24-trixie-slim

# Set Python interpreter for `node-gyp` to use
ENV PYTHON=/usr/bin/python3

# Install isolate-vm dependencies, these are needed by the @backstage/plugin-scaffolder-backend.
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends python3 g++ build-essential && \
    rm -rf /var/lib/apt/lists/*

# Install sqlite3 dependencies. You can skip this if you don't use sqlite3 in the image,
# in which case you should also move better-sqlite3 to "devDependencies" in package.json.
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked \
    apt-get update && \
    apt-get install -y --no-install-recommends libsqlite3-dev && \
    rm -rf /var/lib/apt/lists/*

# From here on we use the least-privileged `node` user to run the backend.
USER node

# This should create the app dir as `node`.
# If it is instead created as `root` then the `tar` command below will fail: `can't create directory 'packages/': Permission denied`.
# If this occurs, then ensure BuildKit is enabled (`DOCKER_BUILDKIT=1`) so the app dir is correctly created as `node`.
WORKDIR /app

# Copy files needed by Yarn
COPY --chown=node:node .yarn ./.yarn
COPY --chown=node:node .yarnrc.yml ./
COPY --chown=node:node backstage.json ./

# This switches many Node.js dependencies to production mode.
ENV NODE_ENV=production

# This disables node snapshot for Node 20 to work with the Scaffolder
ENV NODE_OPTIONS="--no-node-snapshot"

# Copy repo skeleton first, to avoid unnecessary docker cache invalidation.
# The skeleton contains the package.json of each package in the monorepo,
# and along with yarn.lock and the root package.json, that's enough to run yarn install.
COPY --chown=node:node yarn.lock package.json packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

RUN --mount=type=cache,target=/home/node/.cache/yarn,sharing=locked,uid=1000,gid=1000 \
    yarn workspaces focus --all --production && rm -rf "$(yarn cache clean)"

# This will include the examples, if you don't need these simply remove this line
COPY --chown=node:node examples ./examples

# Then copy the rest of the backend bundle, along with any other files we might want.
COPY --chown=node:node packages/backend/dist/bundle.tar.gz app-config*.yaml ./
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]

```
