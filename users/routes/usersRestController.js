const express = require("express");
const router = express.Router();
const { register, login } = require("../models/usersDataAccessData");
const handleError = require("../../utils/handleErros");

router.post("/login", async (req, res) => {
  try {
    const user = await login(req.body);
    res.send(user);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).send(user);
  } catch (error) {
    const { status } = error;
    handleError(res, status || 500, error.message);
  }
});

module.exports = router;
