import express from "express";

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
const port = 5400;
app.listen(port, () => {
  console.log("listen on port", port);
});
