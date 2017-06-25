const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();
mongoose.connect('mongodb://gemsearch:rubygem@ds137882.mlab.com:37882/gem-search',(err) => {
  if (err){
    console.error(err)
  } else {
    console.log('MongoDB connected')
  }
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.use('/api', router);

app.listen(port);
console.log(`Listening on ${port}`);
