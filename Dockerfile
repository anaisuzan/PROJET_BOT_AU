FROM node:20-alpine
# rep de travbail
WORKDIR /usr/app

COPY back/package*.json ./
RUN npm install

COPY back/ /back/
COPY front/ /front/

EXPOSE 80

CMD ["node", "/back/server.js"]