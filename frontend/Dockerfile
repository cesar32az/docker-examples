FROM node:alpine

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "dev" ]