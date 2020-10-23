const express = require("express");
const html = express.Router();
// const db = require("../models");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/exercise/:id", (req, res) => {
    res.render("exercise");
  });

  app.get("/stats/:id", (req, res) => {
    res.render("stats");
  });
};