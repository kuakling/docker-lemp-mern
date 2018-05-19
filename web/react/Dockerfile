FROM node:8-alpine

RUN apk update

WORKDIR /app

RUN npm i -g npm

ADD ./package.json /app

RUN npm install

ADD . .

CMD npm start