import { config } from "dotenv";
import express from "express";
config();

const app = express();

app.use("/", (req, res) => {
  console.log(
    "ip=>",
    req.socket.localAddress,
    req.connection.remoteAddress,
    req.headers.connection,
    req.headers.forwarded
  );
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listen on port", port);
});
