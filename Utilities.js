var http = require('http');
var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;

module.exports={

postCompose:function(url)
{
console.log(url);
var re = /http:\/\/([^:]*):([^\/]*)([^$]*)/
var tokens = url.match(re);
var theWholeUrl = tokens[0];
var host = tokens[1];
var port = tokens[2];
var path = tokens[3];

return {
    host:host,
    path:path,
    port:port,
    method: "POST",
    headers: {
        'Cookie': "cookie",
        'Content-Type': 'text/xml',
    }
};
},
postrequest:function(post,body,callback){
var req = http.request( post, function( res )    {
   var buffer = "";
   res.on( "data", function( data ) { buffer = buffer + data; } );
   res.on( "end", function( data ) { 
	callback(buffer);
   } );
});
req.write( body );
req.end();
}



};