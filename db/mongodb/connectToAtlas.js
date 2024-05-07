const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const userName = config.get("DB_NAME");
const userPassword = config.get("DB_PASSWORD");
 async function connect() {
  return mongoose
    .connect(
      `mongodb+srv://${userName}:${userPassword}@hackeru.uc6cda8.mongodb.net/`
    )
    .then(() => console.log(chalk.magentaBright("connected to MongoDB Atlas!")))
    .catch((error) =>
      console.log(
        chalk.redBright.bold(`could not connect to mongoDb: ${error}`)
      )
    );
}

module.exports = connect
