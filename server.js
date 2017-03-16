////Load the required modules
//var http = require('http')
//var server = http.createServer();
//
//var request = require('request');
//var url = require('url');
//
//server.on('request', function(req, res){
//    var query = url.parse(req.url, true).path;
//    request({
//        url: 'http://api.fixer.io'+query,
//        method: 'GET',
//        headers: {
//            'User-Agent': 'request',
//            'Content-Type': 'application/json'
//        }
//    }, function(err, response, body){
//        if(err){
//            res.write('Unable to connect to server');
//            res.end();
//        }else if(response.statusCode === 400){
//            res.write('Unable to find address');
//            res.end();
//        }else if(response.statusCode === 200){
//            res.write(response.body);
//            res.end();  
//        }
//        
//    });
//});
//
//
//var port = process.env.port || 3000
//server.listen(port);
//console.log('Listening on port ' + port);
//
//module.exports = server;
//

var http = require('http')
var server = http.createServer();

server.on('request', function(request, response){
  response.writeHead(200, {'Content-Type': 'application/json'});
  var query = require('url').parse(request.url, true).path;
  http.get('http://api.fixer.io' + query, function(res){
    var buffer = "";
    res.on('data', function(chunk) {
      buffer += chunk;
    });

    res.on('end', function(){
      response.write(buffer);
      response.end();
    });
  });
});
var port = process.env.PORT || 8080;
server.listen(port);
console.log("Listening on port " + port + "......")

module.exports = serve
