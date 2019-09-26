const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");

// GET, POST, PUT, DELETE

routes.post('/usuario', UsuarioController.store)
routes.get('/usuario/:email', UsuarioController.index)

module.exports = routes;