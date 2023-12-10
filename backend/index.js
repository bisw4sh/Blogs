import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import dataRoute from "./routes/getData.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// app.use(
//   cors({
//     origin: [
//       "https://api.render.com",
//       "http://api.render.com",
//       "https://blogs-frontend-t58e.onrender.com",
//     ],
//   })
// );

app.use(express.json());
app.use(express.static("assets/img"));

app.use("/api", dataRoute);

app.listen(PORT, () => {
  console.log(`running @ https://blogs-backend-zjta.onrender.com`);
});
