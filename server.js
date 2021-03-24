var http = require('http');
const express = require('express');
var fs = require('fs');
var path = require('path');

const PORT=8080;

const app = express();


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'index.html');
});
