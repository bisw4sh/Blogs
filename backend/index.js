import express from "express";
import cors from "cors"; 
import dotenv from 'dotenv'
import dataRoute from "./routes/getData.js";

dotenv.config()
const app = express();
app.use(cors()); 
app.use(express.json());
app.use(express.static("assets/img"));

app.use("/api", dataRoute);

app.listen(process.env.PORT, () => {
  console.log(`running @ http://localhost:${process.env.PORT}/api`);
});
