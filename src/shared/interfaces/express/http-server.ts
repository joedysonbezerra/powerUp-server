import express from 'express';
import setupRoutes from './routes';

import { bodyParser, crossOriginResourceSharing } from './middlewares';

class App {
  readonly server: express.Application;

  constructor() {
    this.server = express();
    this.setupMiddlewares();
    setupRoutes(this.server);
  }

  setupMiddlewares() {
    this.server.use(bodyParser);
    this.server.use(crossOriginResourceSharing);
  }
}

export default new App().server;
