require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.port || 6002;
require("./db/conn");
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", function (req, res) {
  res.status(200).json("server started");
});

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
