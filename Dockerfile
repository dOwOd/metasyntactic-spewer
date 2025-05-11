FROM node:24-alpine

WORKDIR /app

ARG NAME
ARG EMAIL

COPY package.json .
RUN npm install

RUN apk add git openssh
RUN git config --global user.name ${NAME}
RUN git config --global user.email ${EMAIL}
