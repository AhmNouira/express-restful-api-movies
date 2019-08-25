var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('../routes');


module.exports = function(app) {

  app.use('/public/',express.static(path.join(__dirname,'../public')))
  // {extended: true } option to avoid decrepted warning
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  routes.home(app);
  routes.external(app);
  routes.imdb(app);
  return app;

};
