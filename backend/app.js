const express = require('express');
const cors = require('cors');

const items = [
  { id: 1, title: 'John', description: 'This is a description of John' },
  { id: 2, title: 'Maria', description: 'This is a description of Maria' },
  { id: 3, title: 'Alan', description: 'This is a description of José' },
];

class Server {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.port = Number(process.env.APP_PORT || 3000);
    this.configureRoutes();
  }

  configureRoutes() {
    this.app.get('/', (_req, res) => {
      res.send('Hello world!!!');
    });

    this.app.get('/items', (_req, res) => {
      res.json(items);
    });

    this.app.get('/items/:id', (req, res) => {
      const itemId = parseInt(req.params.id, 10);
      const itemFiltred = items.find((item) => item.id === itemId);

      if (!itemFiltred) {
        return res.status(404).json({ message: 'Item not found' });
      }

      return res.status(200).json(itemFiltred);
    });

    this.app.post('/items', (req, res) => {
      const newItem = req.body;
      if (!newItem.title || !newItem.description) {
        return res.status(400).json({ message: 'Item title and description are mandatory' });
      }

      newItem.id = items.length + 1;
      items.push(newItem);
      return res.status(201).json(newItem);
    });

    this.app.put('/items/:id', (req, res) => {
      const itemId = parseInt(req.params.id, 10);
      const updateItem = req.body;
      const existingItem = items.find((item) => item.id === itemId);

      if (!existingItem) {
        return res.status(404).json({ message: 'Item not found' });
      }

      if (!updateItem.title) {
        return res.status(400).json({ message: 'Item title and description are mandatory' });
      }

      existingItem.title = updateItem.title;
      existingItem.description = updateItem.description;

      return res.status(200).json(existingItem);
    });

    this.app.delete('/items/:id', (req, res) => {
      const itemId = parseInt(req.params.id, 10);
      const index = items.findIndex((item) => item.id === itemId);

      if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
      }

      items.splice(index, 1);
      return res.status(200).json({ message: 'Item deleted sucessfully!' });
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
