var soap = require('soap');
var http = require('http');

var service = {
    ws: {
        calc: {
            sum : function(args) {
                var n = 1*args.a + 1*args.b;
                return { sumRes : n };
            },

            multiply : function(args) {
                var n = args.a * args.b;
                return { mulRes : n };
            }
        }
    }
};

var xml = require('fs').readFileSync('wscalc1.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
});

server.listen(8001);
soap.listen(server, '/wscalc1', service, xml);