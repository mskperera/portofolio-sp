const express = require("express");
const path = require("path");
const next = require("next");

const routes = require("../routes");

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = routes.getRequestHandler(app);

//SERVICE
const authService = require("./services/auth");

const mongoose = require("mongoose");
const config = require("./config");

const bodyPharser = require("body-parser");

const bookRoutes = require("./routes/book");
const portfolioRoutes = require("./routes/portfolio");

const robotsOptions = {
  root: path.join(__dirname, "../static"),
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
};

const secretData = [
  { title: "Secret Data 1", description: "Plans how to build spaceship" },
  { title: "Secret Data 2", description: "My secret password" },
];

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyPharser.json());

    server.use("/api/v1/books", bookRoutes);
    server.use("/api/v1/portfolios", portfolioRoutes);

    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get(
      "/api/v1/onlysiteowner",
      authService.checkJWT,
      authService.checkRole("siteOwner"),
      (req, res) => {
        return res.json(secretData);
      }
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function (err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", details: "Unauthorized access!" });
      }
    });

    ////////////////////////////////
    // With express
    // app.prepare().then(() => {
    //   server.use(handle).listen(3000);
    // });

    // Without express
    // const { createServer } = require("http");
    // app.prepare().then(() => {
    //   createServer(handle).listen(3000);
    // });
    //////////////////////////////////////////////////////////

    const PORT = process.env.PORT || 3000;
    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
      console.log(">Ready on port" + PORT);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
