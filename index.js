import { config } from "dotenv";
import express from "express";
import { getClientIp } from "request-ip";
config();

const app = express();
const router = express.Router();

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

router.use("/api", router);
router.get("/ex", () => console.log("algo"));
const port = process.env.PORT;
app.listen(port, () => {
  console.log("listen on port", port);
});
