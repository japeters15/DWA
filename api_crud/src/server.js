// dependences
const express = require('express');
const bodyParser = require('body-parser');
const util = require('../lib/util');

// declare express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extened: true,
}));

// base url
app.use('/api/v1', require('./routes/api.js')(express));

// config
const port = process.env.PORT || 3000;

exports.server = app.listen(port, () => {
  util.debug('Server Active on', port);
});
