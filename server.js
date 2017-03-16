//Load the required modules 
//The http module comes with node. It doesn;t have to be installed
var http = require('http')

//This module allows us to parse url object
var url = require('url');

//Use whatever port is in the environment variable or port 3000
var port = process.env.PORT || 3000

//The createSever method creates a web server object
//The anonymous function or callback function is called a request handler
var httpServer = http.createServer(function(req, res){
    //This adds a path to the url
    var query = url.parse(req.url, true).path;
    
    http.get({
        host: 'api.fixer.io',
        path: query,
        headers: {
            'Content-Type': 'application/json'
        }
    }, function(response) {
        var body = '';
        
        //The data and end events are used to grab the data that is returned
        //The data returned is a buffer
        response.on('data', function(d) {
            body += d;
        });
        
        //This event handles errors
        response.on('error', function(err){
            if(err){
                res.write('Unable to connect to server');
                res.end();
            }else if(response.statusCode === 400){
                res.write('Unable to find address');
                res.end();
            }
        })
        
        response.on('end', function() {
            if(response.statusCode === 200){
                res.write(body); 
                res.end()
            }           
        });
    });
});


//The listen method is called on the server object in other to server requests
httpServer.listen(port, function(){
    console.log('Listening on port ' + port);
});

module.exports = httpServer;

