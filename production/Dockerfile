# Base image
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

RUN npm prune --production

WORKDIR /app/client

COPY client/package*.json ./

RUN npm ci

RUN npm run build

ENV NODE_ENV production

RUN npm prune --production

WORKDIR /app
CMD [ "node", "dist/main.js" ]
