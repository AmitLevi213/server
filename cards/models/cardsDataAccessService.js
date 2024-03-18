// DAL
const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(
        "in the future, this will return cards from a MongoDB database. For now, it returns a string."
      );
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards not in mongoDB");
};

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ name: "card1" }, { name: "card2" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("find not in mongoDB");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve({ name: "card1", id });
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("findOne not in mongoDB");
};

const create = async (normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      normalizedCard._id = "123";
      return Promise.resolve(normalizedCard);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("create not in mongoDB");
};

const findMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`my cards ${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("findMyCards not in mongoDB");
};

const update = async (cardId, normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`${cardId} updated `);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("update not in mongoDB");
};

const like = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} liked!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("like not in mongoDB");
};

const remove = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} removed!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("remove not in mongoDB");
};

exports.getCards = getCards;
exports.find = find;
exports.findOne = findOne;
exports.create = create;
exports.findMyCards = findMyCards;
exports.update = update;
exports.like = like;
exports.remove = remove;
