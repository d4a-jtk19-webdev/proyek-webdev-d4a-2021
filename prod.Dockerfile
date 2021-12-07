FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 14418

CMD ["npm", "run", "serve:production", "--workspace=backend"]
