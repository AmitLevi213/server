const {
  loginValidation,
  registerValidation,
} = require("./validations/userValidationService");

const registerUser = (rawUser) => {
  try {
    const { error } = registerValidation(rawUser);
    if (error) {
      return Promise.reject({ error: error.details[0].message });
    } else {
      return Promise.resolve("success");
    }
  } catch (error) {
    return Promise.reject({ error: "An unexpected error occurred." });
  }
};

const loginUser = (rawUser) => {
  try {
    const { error } = loginValidation(rawUser);
    if (error) {
      return Promise.reject({ error: error.details[0].message });
    } else {
      return Promise.resolve("success");
    }
  } catch (error) {
    return Promise.reject({ error: "An unexpected error occurred." });
  }
};

module.exports = { registerUser, loginUser };
