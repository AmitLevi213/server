const { handleJoiError } = require("../../utils/handleErrors");
const {
  find,
  findOne,
  create,
  update,
  like,
  remove,
  findMyCards,
} = require("../models/cardsDataAccessService");
const validateCard = require("../validations/cardValidationService");

const getCards = async () => {
  try {
    const cards = await find();
    return Promise.resolve(cards);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getMyCards = async userId => {
  try {
    const card = await findMyCards(userId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getCard = async cardId => {
  try {
    const card = await findOne(cardId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createCard = async rawCard => {
  const { error } = validateCard(rawCard);
  if (error) return handleJoiError(error);

  try {
    let card = { ...rawCard };
    card.createdAt = new Date();
    card = await create(card);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateCard = async (cardId, rawCard) => {
  try {
    let card = { ...rawCard };
    card = await update(cardId, card);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const likeCard = async (cardId, userId) => {
  try {
    const card = await like(cardId, userId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteCard = async cardId => {
  try {
    const card = await remove(cardId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.deleteCard = deleteCard;
