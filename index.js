"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const config = require("config");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const server = express();

//scaling nodejs application using cluster mode
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server

  //cors configuration
  server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  //compression and body parser for incoming post request
  server.use(compression());
  server.use(bodyParser.json());

  // Routes will always go here
  server.use("/api", require("./src/routes/routes"));

  //port number can be from env file, but i have hard coded here for deplpoyment purpose
  server.listen(8005, function () {
    console.log("Nodejs-Mongo-API Application listening on port 8005!");
  });

  console.log(`Worker ${process.pid} started`);
}
