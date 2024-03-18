const Joi = require("joi");

const validateCardWithJoi = (card) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    phone: Joi.string()
      .ruleset.pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
      .rule({
        message: "Please enter a valid phone number",
      })
      .required(),

    web: Joi.string().uri().allow(""),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({
        message: 'user "mail" must be a valid mail',
      })
      .required(),
    image: Joi.object({
      url: Joi.string().uri().required(),
      alt: Joi.string().min(2).max(256).allow(""),
    }).required(),
    address: Joi.object({
      state: Joi.string().min(2).max(256).allow(""),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.string().required(),
      zip: Joi.string().min(4).allow(""),
    }).required(),
    bizNumber: Joi.string().allow(""),
    user_id: Joi.string().allow(""),
  });

  const { error, value } = schema.validate(card);

  return {
    isValid: !error,
    errors: error ? error.details.map((detail) => detail.message) : [],
  };
};

module.exports = validateCardWithJoi;
