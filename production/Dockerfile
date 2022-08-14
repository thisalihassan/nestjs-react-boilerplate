# Base image
FROM node:16-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

ENV NODE_ENV production

RUN npm prune --production

CMD [ "node", "dist/main.js" ]