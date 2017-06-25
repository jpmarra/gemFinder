const Controller = require('./controller');
const express = require('express');

const app = express.Router();

app.get('/gems/:gem', Controller.getGem);
app.post('/create', Controller.addFavorite);
app.get('/favorites', Controller.getFavorites);
app.get('/favorite/:name', Controller.checkFavorite);
module.exports = app;
