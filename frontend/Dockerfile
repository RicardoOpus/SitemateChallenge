FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package* ./
COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
