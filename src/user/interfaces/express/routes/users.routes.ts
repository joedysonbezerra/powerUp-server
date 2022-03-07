import { Router } from "express";
import { adapterRoute } from "../../../../shared/interfaces/express/adapters/expressRouteAdapter";
import userFactory from "../../../userFactory";

export default (router: Router): void => {
  router.post("/users", adapterRoute(userFactory(), "store"));
};
