const { validateCard } = require("../validations/cardValidtionService");

const createCard = (rawCard) => {
  try {
    const { isValid, error } = validateCard(rawCard);
    if (!isValid) {
      return Promise.reject({ error });
    } else {
      return "success";
    }
  } catch (error) {
    return Promise.reject({ error: "An unexpected error occurred." });
  }
};

module.exports = { createCard };
