import express from "express";
import dataRoute from "./routes/getData.js";

const app = express();
app.use(express.json());

app.use("/api", dataRoute);

app.listen(process.env.PORT, () => {
  console.log(`running @ http://localhost:${process.env.PORT}`);
});
