var express = require('express');
var router = express.Router();

var imdb = require('../controllers/imdb')

module.exports = function(app){
  router.get('/imdb', imdb.get);
  app.use(router);
  }
