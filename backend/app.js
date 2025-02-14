const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const aiRoutes = require("./src/router/ai.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi");
});
app.use("/ai", aiRoutes);

app.listen(3000, () => {
  console.log("Server is listening to port : 3000");
});
