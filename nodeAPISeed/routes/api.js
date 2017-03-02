module.exports = function (express) {
var router = express.Router();

   router.get('/', function(req, res){
      res.json({ hello: "world"});
   });

   router.get('/v1', function(req, res){
      res.json({ healthy: "true"});
   });

   router.get('/urls', function(req, res){
      res.json({ urls: {url: fakeUrl}});
   });

return router;
}
