const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const {
  getCards,
  getMyCards,
  getCard,
  createCard,
  updateCard,
  likeCard,
  deleteCard,
  bizNumber: changeBizNubmer,
} = require("../models/cardsAccessDataService");
const validateCard = require("../validations/cardValidationService");
const { auth } = require("../../auth/authService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/my-cards", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const card = await getMyCards(userId);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { isBusiness } = req.user;
    if (!isBusiness) return handleError(res, 403, "Access denied");
    let card = req.body;
    const user = req.user;
    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    card = await normalizeCard(card, user._id);
    card = await createCard(card);
    return res.status(201).send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    let card = req.body;
    const cardId = req.params.id;
    const userId = req.user._id;
    const isAdmin = req.user.isAdmin;
    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
    const cardFromDb = await getCard(cardId);
    if (userId != cardFromDb.user_id && !isAdmin) {
      const message =
        "Authorization Error: Only the user who created the business card or admin can update its details";
      return handleError(res, 403, message);
    }
    card = await normalizeCard(card);
    let resCard = await updateCard(cardId, card);
    return res.send(resCard);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const user = req.user;
    const card = await likeCard(cardId, user._id);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const user = req.user;
    const card = await deleteCard(cardId, user);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

router.patch("/bizNumber/:id", auth, async (req, res) => {
  try {
    const cardId = req.params.id;
    const { _id, isAdmin } = req.user;
    const { bizNumber } = req.body;
    if (!isAdmin)
      return handleError(
        res,
        403,
        "Authorization Error: You must be an admin type user to update a card"
      );

    const card = await changeBizNubmer(cardId, _id, bizNumber);
    return res.send(card);
  } catch (error) {
    return handleError(res, error.status || 500, error.message);
  }
});

module.exports = router;
