
// custom the API representaion

var _ = require('underscore');
var request  = require('request');

module.exports =  {
  get: function(req, res){

   request({
      method: 'GET',
      uri: 'http://localhost:' + app.get('port')}, function(error, response, body) {
        if (error) {throw error;}
        console.log(body);
        var movies = [];
        // x = JSON.parse(body);
        _.each(JSON.parse(body), function(elem, index){
          movies.push({
            Title: elem.Title,
            Rating: elem.Rating
          });
        });
        res.json(_.sortBy(movies, 'Rating').reverse());

      }
    )

}
}
