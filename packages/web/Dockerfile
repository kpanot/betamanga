FROM node:16-alpine as build

WORKDIR /web

# Context is the project's root
COPY package.json .
COPY yarn.lock .
COPY .pnp* .
COPY .yarnrc.yml .
COPY .yarn/releases .yarn/releases
COPY .yarn/cache .yarn/cache

COPY packages/web packages/web

RUN yarn
RUN yarn workspace @betamanga/web build

FROM nginx:alpine
COPY --from=build /web/packages/web/dist /usr/share/nginx/html