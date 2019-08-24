var express = require('express');
var router = express.Router();

var home = require('../controllers/home');

module.exports = function(app){
  router.get('/', home.get);
  router.post('/', home.post);
  router.put('/:Id', home.put);
  router.delete('/:Id', home.delete);
  app.use(router);
}
