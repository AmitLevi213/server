const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:8181"],
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

module.exports = cors;
