FROM node:alpine

RUN npm install -g nodemon

ENV TERM xterm-256color
ENV TZ=Europe/Brussels

WORKDIR /app

RUN apk add curl

CMD npm i; npm start
