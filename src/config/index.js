import { config } from "dotenv";
config();

export default {
  PORT: process.env.PORT || 3001,
};
