var http = require('http');
var fs = require('fs');

const PORT=8080; 

const serveCSS = function (req, res) {
    if (req.url.indexOf('css') !== -1) {
        const css = fs.createReadStream(__dirname + req.url, 'utf8');
        css.pipe(res);
    }
};


fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
