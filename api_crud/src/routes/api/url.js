var url = require('../../models/url.js')

module.exports = (express) => {
  var router = express.Router();

  router.get('/urls', (req, res) => {
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

// Read One
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
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
