const express = require("express");
const app = express();
const chalk = require("chalk");

const PORT = process.env.PORT || 8181;
app.use(express.json());
app.use(express.text());
app.use(
  "/static",
  express.static("./public", {
    maxAge: 100 * 60 * 60 * 24 * 7,
  })
);

// Application-level middleware

// app.use((req, res, next) => {
//     console.log(chalk.italic.red(`First Middleware, first function`));
//     next();
// }, (req, res, next) => {
//     console.log(chalk.italic.red(`First Middleware, second function`));
//     next();
// });

// app.use((req, res, next) => {
//     console.log(chalk.italic.blue(`Second Middleware`));
//     next();
// });

app.use((req, res, next) => {
  const customUser = { id: 123, name: "john doe" };
  req["custom-user"] = customUser;
  console.log("user in request: ", req["custom-user"]);
  next();
});

// app.use((req, res, next) => {
//     console.log(chalk.red("request body"), req.body);
//     next();
// })

// app.use('/:id', (req, res, next) => {
//     console.log("req.headers = ", req.headers);
//     console.log("req.params = ", req.params);
//     next();

// });

// GET as middleware

// app.get('/', (req, res, next) => {
//     console.log(chalk.green('in get / middleware'));
//     next();
// });

// HTTP Actions

app.get("/", (req, res, next) => {
  try {
    console.log(chalk.magenta("in get / route"));
    res.status(200).send({ message: "hello from get" });
  } catch (error) {
    res.status(500).json({ error: `error ${res.status}` });
  }
  next();
});

app.get("/user", (req, res, next) => {
  try {
    console.log(chalk.magenta("in get /user route"));
    const user = {
      name: "user",
      age: 55,
    };
    res.status(200).json(user);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/headers", (req, res, next) => {
  try {
    res.status(200).json(req.headers);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.get("/params/:id", (req, res, next) => {
  try {
    res.status(200).json(req.params);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.get("/query", (req, res, next) => {
  try {
    res.status(200).json(req.query);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.get("/body", (req, res, next) => {
  try {
    res.status(200).json(req.body);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});
app.get("/custom", (req, res, next) => {
  try {
    res.status(200).json(req["custom-user"]);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/", (req, res, next) => {
  try {
    const user_1 = {
      name: "user",
      age: 55,
    };
    const user_2 = {
      name: "second",
      age: 3,
    };
    res.status(200).json([{ user_1, user_2 }]);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.delete("/1", (req, res, next) => {
  try {
    console.log(chalk.magenta("in delete /1 route"));
    res.json({ message: "user deleted" });
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.put("/2", (req, res, next) => {
  try {
    console.log(chalk.magenta("in put /2 route"));
    res.json({ message: "user was updated" });
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.patch("/3", (req, res, next) => {
  try {
    console.log(chalk.magenta("in patch /3 route"));
    res.json({ message: "user liked post" });
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => {
  console.log(chalk.green(`Node server listening on port ${PORT}`));
});
