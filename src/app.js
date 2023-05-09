import express from "express";
import cors from "cors";
import routerApi from "./routes/_index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routerApi(app);

export default app;
