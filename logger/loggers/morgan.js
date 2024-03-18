const chalk = require("chalk");
const morgan = require("morgan");

const logger = morgan((tokens, req, res) => {
  const status = res.status;
  const color = status >= 400 ? "red" : "cyanBright";

  const logLine = [
    chalk[color](new Date().toISOString()),
    chalk[color](req.method),
    chalk[color](req.url),
    chalk[color](status),
    chalk[color](res.responseTime + "ms"),
  ].join(" ");

  return logLine;
});

module.exports = logger;
