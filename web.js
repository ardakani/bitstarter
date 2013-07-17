var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var encoding ='utf-8'
app.use(express.static(__dirname + '/'));
app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html',encoding);
  response.send(buffer.toString(encoding));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
