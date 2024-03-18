const register = async (normalizedUser) => {
  try {
    normalizedUser._id = "123456";
    return Promise.resolve(normalizedUser);
  } catch (error) {
    normalizedUser.status = 400;
    return Promise.reject(error);
  }
};

const login = async (user) => {
  try {
    return Promise.resolve("in login");
  } catch (error) {
    user.status = 400;
    return Promise.reject(error);
  }
};

module.exports = { register, login };
