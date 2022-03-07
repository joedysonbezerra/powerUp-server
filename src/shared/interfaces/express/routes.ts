import { Router, Response, Application } from "express";
import fg from "fast-glob";

export default (app: Application): void => {
  const router = Router();
  app.use(router);

  router.get("/healthCheck", (_, response: Response) => {
    return response.json({
      Version: "0.0.1",
      Status: "Online",
    });
  });
  const routesDir = "src/**/interfaces/express/routes/**routes.ts";
  fg.sync(routesDir).map(async (file: string) => {
    (await import(`../../../../${file}`)).default(router);
  });
};
