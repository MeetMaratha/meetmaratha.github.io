FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
