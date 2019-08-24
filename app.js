var express = require('express');
var config  = require('./config/config');
var host =  '0.0.0.0'

app = express();

// set the port number based on the environment variable,
// if it exists. Otherwise, use port 5000
app.set('port', process.env.PORT || 5000);

app = config(app);

app.listen(app.get('port'), host, function(){
  console.log('Running on http://'+ host + ':%d/ (Press CTRL+C to quit)', app.get('port'));
});
