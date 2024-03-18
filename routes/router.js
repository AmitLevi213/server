const express = require("express");
const router = express.Router();
const cardsRouter = require("../cards/routes/cardsRestController");
const usersRouter = require("../users/routes/usersRestController");
const handleError = require("../utils/handleErros");

router.use("/cards", cardsRouter);
router.use("/users", usersRouter);

router.use((req, res) => handleError(res, 404, "Not Found"));

module.exports = router;
