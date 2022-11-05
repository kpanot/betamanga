FROM node:lts-alpine as build

WORKDIR /backend

# Context is the project's root
COPY package.json .
COPY yarn.lock .
COPY .pnp* .
COPY .yarnrc.yml .
COPY .yarn/releases .yarn/releases
COPY .yarn/cache .yarn/cache

COPY packages/backend packages/backend

RUN yarn
RUN yarn workspace @betamanga/backend build


FROM node:lts-alpine

WORKDIR /usr/src

# Context is the project's root
COPY package.json .
COPY yarn.lock .
COPY .pnp* .
COPY .yarnrc.yml .
COPY .yarn/releases .yarn/releases
COPY .yarn/cache .yarn/cache

COPY packages/backend ./packages/backend

RUN yarn
COPY --from=build /backend/packages/backend/dist ./packages/backend/dist

CMD ["yarn", "workspace", "@betamanga/backend", "start:prod"]
