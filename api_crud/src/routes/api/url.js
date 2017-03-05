var url = require('../../models.url.js')

module.exports = (express) => {
  var router = express.Router();

  router.post('/urls', (req, res) => {
    console.log("route hit", req.body);
    res.json({
      healthy: true,
    })
  });

//create
router.post('/urls', (req, res) => {
  url.create(req.body, (err) => {
    res.status(500).json(err);
  }), (data) => {
    res.status(200).json(data);
  }
});

  return router;
}
