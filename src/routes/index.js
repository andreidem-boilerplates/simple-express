const express = require('express');
const routes = express.Router();
const path = require("path");

routes.get("/", (req, res) => {
    res.send("Welcome to express")
});

module.exports = routes;
