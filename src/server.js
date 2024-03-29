const express = require('express');
const mongoose = require('mongoose');

const server = express();
server.use(express.json());
mongoose.connect('mongodb://localhost:27017/dw2-tuts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const routes = require("./routes");
server.use(routes);
server.listen(3333);