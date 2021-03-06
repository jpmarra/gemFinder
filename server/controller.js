const axios = require('axios');

module.exports = {
  getGem: (req, res) => {
    axios.get(`https://rubygems.org/api/v1/gems/${req.params.gem}.json`)
    .then(results => {
    console.log(results);
      let gem = {
        name: results.data.name,
        info: results.data.info,
        url: results.data.gem_uri,
        dependencies: results.data.dependencies.development
      };
      res.send(gem)
    })
    .catch(err => res.send('not found'));
  },
}
