import { config } from "dotenv";
import express from "express";
config();

const app = express();

app.set("trust proxy", true);

app.use("/", (req, res) => {
  console.log("ip=>", req.header("x-forwarded-for"), req.headers.forwarded);
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listen on port", port);
});
