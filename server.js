var express = require('express');
var app = express();

var port = process.env.PORT || 9090;

app.use(express.static('public'));

app.listen(port, function(){
  console.log('listening on', port);
});
