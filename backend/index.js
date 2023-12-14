import express from "express";
import dataRoute from "./routes/getData.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://blogs-frontend-t58e.onrender.com");
  next();
});

app.use(express.json());

app.use("/api", dataRoute);

app.listen(PORT, () => {
  console.log(`running @ https://blogs-backend-zjta.onrender.com`);
});
