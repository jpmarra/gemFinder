const axios = require('axios');
const model = require('./model');

module.exports = {
  getGem: (req, res) => {
    axios.get(`https://rubygems.org/api/v1/gems/${req.params.gem}.json`)
    .then(results => {
      let gem = {
        name: results.data.name,
        info: results.data.info,
        url: results.data.gem_uri,
        dependencies: results.data.dependencies.development
      };
      res.send(gem)
    })
    .catch(err => console.error(err))
  },
  addFavorite: (req, res) => {
    model.insertFavorite(req.body);
    res.sendStatus(201);
  },
  getFavorites: (req, res) => {
    model.getFavorites((results) => {
      res.send(results);
    })
  },
  checkFavorite: (req, res) => {
    model.checkFavorite(req.params.name, (result) => {
      res.send(result);
    })
  }
}
