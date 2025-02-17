import express from "express";
import parseData from "../controllers/parseData.js";
import singleMarkdown from "../controllers/singleMarkdown.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const parsedData = await parseData();
  res.json(parsedData);
});

router.get("/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid parameter provided." });
  }

  const response = await singleMarkdown(id);
  console.log(response);
  res.json(response);
});

export default router;
