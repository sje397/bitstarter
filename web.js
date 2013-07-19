var express = require('express'),
    fs = require('fs'),
    path = require('path');

var app = express.createServer(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  response.sendfile('index.html', {root: __dirname});
});

var port = process.env.PORT || 8080; 
app.listen(port, function() {
  console.log("Listening on " + port);
});
