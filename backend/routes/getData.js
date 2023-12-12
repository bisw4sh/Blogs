import express from "express";
import parseData from "../controllers/parseData.js";

const router = express.Router();

router.get("/", async(req, res) => {
  const parsedData = await parseData();
  res.json(parsedData);
});

export default router;
