import { Router } from "express";
import routesPr from "./prub.routes.js";

const routerApi = (app) => {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/", routesPr);
};

export default routerApi;
