const validateCardWithJoi = require("./joi/validateCardWithJoi");

const validator = "Joi" || undefined;

const validateCard = ({ card }) => {
  if (validator === "Joi") {
    return validateCardWithJoi(card);
  }
};

module.exports = { validateCard };
