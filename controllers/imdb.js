var request = require('request');
var _ = require('underscore');

var api_imdb_word_aliens = 'http://sg.media-imdb.com/suggests/a/aliens.json'

var api_imdb_word_wars = 'https://sg.media-imdb.com/suggests/w/wars.json'



module.exports = {
  get : function(req, res) {
    request({
       method: 'GET',
       uri: api_imdb_word_wars }, function(error, response, body) {
         if (error) {throw error;}
        var data = body.substring(body.indexOf('(')+1);
        data = JSON.parse(data.substring(0, data.length -1 ));
        var related = []
        _.each(data.d, function(movie, index){
          related.push({
            Title: movie.l,
            Year: movie.y,
            Poster: movie.i ? movie.i[0] : ''

          });
        });
        res.json(related);
});

  }
}
