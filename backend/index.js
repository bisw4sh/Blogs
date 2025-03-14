import express from "express";
import dataRoute from "./routes/getData.js";
import path from "node:path";
import url from "node:url"

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

app.use("/api", dataRoute);

app.listen(process.env.PORT, () => {
  console.log(`running @ http://localhost:${process.env.PORT}`);
});
