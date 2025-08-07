FROM node:20-alpine
# rep de travbail
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY back/ ./src/
COPY front/ ./front/
COPY github/workflows/deploy.yml ./github/workflows/deploy.yml

EXPOSE 80

RUN node src/index.js