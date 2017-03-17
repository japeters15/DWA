// dependences
const express = require('express');
const bodyParser = require('body-parser');
const utilityDebugTool = require('utility_debug_tool');

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

const server = app.listen(port, function(){
  console.log('Server Active on', port);
});

module.exports = server;
