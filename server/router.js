const Controller = require('./controller');
const express = require('express');

const app = express.Router();

app.get('/gems/:gem', Controller.getGem);
app.post('/create', Controller.addFavorite);

module.exports = app;
