# Base image
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build && npm prune --production

WORKDIR /app/client

COPY client/package*.json ./

RUN npm ci && npm run build && npm prune --production

ENV NODE_ENV production

WORKDIR /app
CMD [ "node", "dist/main.js" ]
