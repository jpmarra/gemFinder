const axios = require('axios');

module.exports = {
  getGem: (req, res) => {
    console.log(`request initiated for ${req.params.gem}`)
    axios.get(`https://rubygems.org/api/v1/gems/${req.params.gem}.json`)
    .then(results => res.send(results.data))
    .catch(err => console.error(err))
  }
}
