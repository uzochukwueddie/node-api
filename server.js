//Load the request module
var http = require('http')
var server = http.createServer();

var request = require('request');

server.on('request', function(req, res){
    var query = require('url').parse(req.url, true).path;
    request({
        url: 'http://api.fixer.io'+query,
        method: 'GET',
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/json'
        }
    }, function(err, response, body){
        if(err){
            res.write('Unable to connect to server');
            res.end();
        }else if(response.statusCode === 400){
            res.write('Unable to find address');
            res.end();
        }else if(response.statusCode === 200){
            res.write(response.body);
            res.end();  
        }
        
    });
});


var port = process.env.port || 3000
server.listen(port, function(){
    console.log('Listening on port ' + port)
});

module.exports = server;
