
var api = require('../api/movies.json'); // 'movies.json' file
var _ = require('underscore');

module.exports = {

  // GET
  get: function(req, res) {
    res.json(api);
  },

  // POST
  post: function(req, res) {
    //console.log(req.body);
    if(req.body.Id && req.body.Title && req.body.Year && req.body.Director && req.body.Rating ) {
      api.push(req.body);
      res.json(api);
    } else {
      res.status(500).json({error: 'There was an error!, POST request '});
    }
  },

  // PUT
  put: function(req, res){
    if(req.params.Id && req.body.Title && req.body.Year && req.body.Director && req.body.Rating) {
      // use 'underscore' module to look throught the collection of movies
      _.each(api, function(elem, index){
        // find and update
        if (elem.Id === req.params.Id) {
          elem.Title = req.body.Title;
          elem.Director = req.body.Director;
          elem.Year = req.body.Year;
          elem.Rating = req.body.Rating;
        }
      });
      res.json(api);
    } else {
      res.status(500).json({error: 'There was an error!, PUT request'});
    }
  },

  //delete
  delete: function(req, res){
    var indexToDel = -1;
    _.each(api, function(elem, index){
      if(elem.Id === req.params.Id) {
        //console.log(elem);
        //console.log(index);
        indexToDel = index;
      }
    });

    // -(indexToDel + 1 )
    if(~indexToDel) {
      api.splice(indexToDel,1);   // remove api at specific index
    }
    res.json(api);
  }

  }
