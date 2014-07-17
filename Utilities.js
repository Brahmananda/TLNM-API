var http = require('http');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;
var SimpleConvertXML = require('simpleConvert-XML');

module.exports={

postCompose:function(url){
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
   }};
},
postrequest:function(post,body,callback){
var req = http.request( post, function( res ){
  var buffer = "";
  res.on( "data", function( data ) { buffer = buffer + data; } );
  res.on( "end", function( data ) { 
callback(buffer);
  });
});
req.write( body );
req.end();
},

getJsObjectByXmlResponse:function(response){

   var parser=new dom().parseFromString(response);
   if(xpath.select("//data",parser).length>0)
   response=xpath.select("//data",parser)[0].toString();
   parser=new dom().parseFromString(response);
   if(xpath.select("//param",parser).length>0)
   response=xpath.select("//param",parser)[0].toString();
   var changeAttrToTag=/<member><name>(.*)<\/name><value><(string|int)>((.|[\r\n])*?)<\/\2><\/value><\/member>/;
   var nullyfy=/<member><name>.*?<string\/>.*?<\/member>/;
if(nullyfy.test(response))
   response=response.replace(/<member><name>.*?<string\/>.*?<\/member>/g,'');
   var flag=changeAttrToTag.test(response);
   var changedTagResponse="";
   if(flag)
   {
       response=response.replace(/<member><name>(.*)<\/name><value><(string|int)>((.|[\r\n])*?)<\/\2><\/value><\/member>/g, "<$1>$3</$1>");
       var recusiveRegx=/<member><name>(.*)?<\/name><value><struct>(((.|[\r\n])(?!<struct>))*?)<\/struct><\/value><\/member>/;
       var recursiveflag=recusiveRegx.test(response);
           while(recursiveflag){
             response=response.replace(/<member><name>(.*)?<\/name><value><struct>(((.|[\r\n])(?!<struct>))*?)<\/struct><\/value><\/member>/, "<_$1>$2</_$1>");
             recursiveflag=recusiveRegx.test(response);
           }
       response=response.replace(/<member><name>(.*)?<\/name><value><struct>(((.|[\r\n])(?!<struct>))*?)<\/struct><\/value><\/member>/, "<$1>$2</$1>");
   }

var xmlNode = new dom().parseFromString(response);
var json=SimpleConvertXML.getXMLAsObj(xmlNode);
   var returnObject;
   if(json.data)
   {
   returnObject=json.data.value;
   }else{
     if(json.param)
     {
       returnObject=json.param.value;
     }
   }

return returnObject;
}



};