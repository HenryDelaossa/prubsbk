import app from "./app.js";
import config from "./config/index.js";

const puerto = config.PORT;
app.listen(puerto, () => console.log("run on port", puerto));
