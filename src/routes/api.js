// calling express function
module.exports = function (express) {
  // router setup
  var router = express.Router();
  var path = require("path");

  // url header
  router.post('/urls', function (req, res) {
    var origURL = req.body.originalUrl;

// source string to general form
    var sourceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789';
    var totalChars = 8;

// blank string to build upon
    var builtURL = '';

    for (var i = 0; i < totalChars; i++) {
// add randomly picked characters to the builtURL
      builtURL += sourceString.charAt(Math.random() * sourceString.length);
    }

// return to the response the builtURL
    var urlPkg = {
      origURL: origURL,
      shortURL: builtURL,
    };

    res.json(urlPkg);
  });

return router;
}
