import { config } from "dotenv";
import express from "express";
import { getClientIp } from "request-ip";
config();

const app = express();

app.set("trust proxy", true);

app.use("/", (req, res) => {
  console.log(
    "ip=>",
    req.header("x-forwarded-for"),
    "socket port=>",
    req.socket.remoteAddress,
    "requestIp",
    getClientIp(req)
  );
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listen on port", port);
});
