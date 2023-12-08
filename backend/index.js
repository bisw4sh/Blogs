import express from "express";
import dataRoute from "./routes/getData.js";

const app = express();
app.use(express.json());
app.use(express.static("assets/img"));

app.use("/api", dataRoute);

app.listen(8080, () => {
  console.log("running @ http://localhost:8080/api");
});
