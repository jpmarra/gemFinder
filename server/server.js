const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.use('/api', router);
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(port);
console.log(`Listening on ${port}`);
