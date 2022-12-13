const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares antes de las rutas
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(helmet());
app.use(cors());

// rutas
app.use("/", routes);

module.exports = app;
