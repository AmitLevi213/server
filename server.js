const express = require("express");
const router = require("./routes/router");
const app = express();
const cors = require("./cors/cors");
const logger = require("./logger/loggerAdapter");

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.text());
app.use(
  "/static",
  express.static("./public", {
    maxAge: 100 * 60 * 60 * 24 * 7,
  })
);
app.use(router);

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
