import "reflect-metadata";
import "dotenv/config";
import express from "express";
import setupRoutes from "./routes";

import {
  bodyParser,
  crossOriginResourceSharing,
  staticFile,
} from "./middlewares";

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
    this.server.use(staticFile.endpoint, express.static(staticFile.path));
  }
}

export default new App().server;
