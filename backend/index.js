import express from "express";
import dataRoute from "./routes/getData.js";
import getMarkdown from "./routes/getMarkdown.js";

const app = express();
app.use(express.json());

app.use("/api", dataRoute);
app.use("/api/:id", getMarkdown);
// app.use("/api/:id", (req, res) => {
//   res.json( {
//     msg : req.params.id
//   })
// });

app.listen(process.env.PORT, () => {
  console.log(`running @ http://localhost:${process.env.PORT}`);
});
