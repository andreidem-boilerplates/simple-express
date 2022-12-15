const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Welcome to express")
});

module.exports = routes;
