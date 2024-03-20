FROM node:16.14-alpine

WORKDIR /app

COPY package* ./
COPY src ./src/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]