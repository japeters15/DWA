//dependences
var express = require('express');
var bodyParser = require ('body-parser');

//declare express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extened: true,
}));

//base url
app.use('/api/v1', require('./routes/api.js')(express));

//config
var port = process.env.PORT || 3000;

exports.server = app.listen(port, () => {
  util.debug('Server Active on', port);
});
