var url = require('../../models/url.js')
var util = require('../../../lib/util.js')

module.exports = (express) => {
  var router = express.Router();

//create
router.get('/urls', (req, res) => {
  url.findAll( ((err) => {
      util.debug("Error: Someone tried accessing all urls", err, 'error');
    res.status(500).json(err);
  }), (data) => {
    util.debug("Someone accessed all urls", data, 'success');
    res.status(200).json(data);
  })
});

// Read One
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      util.debug("Someone accessed one url", data);
      res.status(200).json(data);
    })
  });


  // Delete
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
