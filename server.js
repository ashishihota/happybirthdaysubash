var http = require('http');
const express = require('express');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 8080;

const app = express();


// app.listen(port, function() {
//   console.log('app started at port : ' + port);
// });
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/Public'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
