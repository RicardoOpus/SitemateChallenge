const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = Number(process.env.APP_PORT || 3000);
    this.configureRoutes();
  }

  configureRoutes() {
    this.app.get('/', (_req, res) => {
      res.send('Hello world!!!');
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log('the server is running at http://localhost:3000');
    });
  }
}

const server = new Server();
server.start();
