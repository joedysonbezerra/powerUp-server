import 'reflect-metadata';
import './src/shared/interfaces/di';
import app from './src/shared/interfaces/express/http-server';

(async function main() {
  const port: string = process.env.PORT || '3000';
  app.listen(port, () => console.log(`🚀 Server started on port ${port}`));
})();
