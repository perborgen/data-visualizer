var Hapi    = require("hapi"),
	server  = new Hapi.Server(),
	Path = require("path");
	index = Path.resolve("./public/index.html");


server.connection({
  port:  Number(process.env.PORT) || 8080
});


server.route([
	{
		path: "/",
		method: "GET",
		handler: function(request,reply){
			reply.file(index);
		}
	},{
		path: "/public/{param*}",
		method: "GET",
		handler: {
	  		directory: {
	    		path: Path.resolve(__dirname + '/../public'),
	    		index: true
	  		}
		}
	}
])

module.exports = server;

