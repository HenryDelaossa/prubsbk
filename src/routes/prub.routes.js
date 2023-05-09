import { Router } from "express";
import { getClientIp } from "request-ip";
getClientIp;

const router = Router();

router.get("/ip", (req, res) => {
  try {
    const ip = getClientIp(req);
    res.status(200).send({ message: ip });
  } catch (error) {
    console.log("error.message=>", error.message, "error=>", error);
  }
});

router.get("/finger", (req, res) => {
  try {
    console.log("finger", req.headers.idDevice);
    res.status(200).send({ message: req.headers.idDevice });
  } catch (error) {
    console.log("error.message=>", error.message, "error=>", error);
  }
});

export default router;
