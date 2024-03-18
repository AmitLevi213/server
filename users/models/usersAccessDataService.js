const DB = process.env.DB || "MONGODB";

const register = async normalizedUser => {
  if (DB === "MONGODB") {
    try {
      normalizedUser._id = "123456";
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(normalizedUser);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("register new user not in mongodb");
};

const login = async user => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve("in login");
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("login user not in mongodb");
};

const find = async () => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve([{ user: "David Yakin" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const findOne = async userId => {
  if (DB === "MONGODB") {
    try {
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(`get user no: ${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const update = async (userId, normalizedUser) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} updated!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const changeIsBizStatus = async userId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} change his business status!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in mongodb");
};

const remove = async userId => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${userId} deleted!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.register = register;
exports.login = login;
exports.find = find;
exports.findOne = findOne;
exports.update = update;
exports.changeIsBizStatus = changeIsBizStatus;
exports.remove = remove;
