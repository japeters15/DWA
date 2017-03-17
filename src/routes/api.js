// calling express function
module.exports = function (express) {
  // router setup
  const router = express.Router();
  const path = require("path");

  // url header
  router.post('/urls', function (req, res) {
    const origURL = req.body.originalUrl;

// source string to general form
    const sourceString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789';
    const totalChars = 8;

// blank string to build upon
    const builtURL = '';

    for (const i = 0; i < totalChars; i++) {
// add randomly picked characters to the builtURL
      builtURL += sourceString.charAt(Math.random() * sourceString.length);
    }

// return to the response the builtURL
    const urlPkg = {
      origURL: origURL,
      shortURL: builtURL,
    };

    res.json(urlPkg);
  });

  return router;
};
