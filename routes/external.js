var express = require('express');
var router = express.Router();

var external = require('../controllers/external');


module.exports= function(app) {
  router.get('/external', external.get);
  app.use(router);

}
