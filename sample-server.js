 

var fs = require('fs'),
    http = require('http'),
    socket = require("socket.io");
 var testLinkApi		= 	require('./testlinkapi'),
	jsonPath	 	= 	require('JSONPath'),
	async			=	require('async');
var devKey="f720ef21cfad53b6cfac1d67221a446c";
var rpcUrl="http://localhost:8081/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testLink=new testLinkApi(devKey,rpcUrl);
var testProjectId=1;
var testPlanId=2; 
var port=1000;
var extid="123-1"
var uri="/sample-page.html";
var page = fs.readFileSync(__dirname + uri);

function handler(request, response){
  response.write(page); 
  response.end(); 
}

var app = http.createServer(function(request, response,page,rep){ 
handler(request,response); 
});
app.listen(port);
console.log("Server Started on Port " + port);
var listener = socket.listen(app, { log: false });

function start(socket) 
{
  socket.emit('notification', 'TestLink Node Server is Ready');


function sampleTestLink(){
		testLink.getBuildsForTestPlan(2,function(builds){
			console.log(builds);
		builds=builds.struct;
		var value=JSON.stringify(builds);
		listener.sockets.emit('testlink1', value); 
		console.log("Brahma " + JSON.stringify(builds));
		console.log("Methods 1 " + JSON.stringify(builds));
		});
		} 
sampleTestLink();

    console.log("Brahma");
	socket.on('called', function (callback) {
	async.series([	
		function sampleTestLink(){
		testLink.getBuildsForTestPlan(2,function(builds){
			console.log(builds);
		builds=builds.struct;
		var value=JSON.stringify(builds);
		listener.sockets.emit('testlink1', value); 
		console.log("Brahma " + JSON.stringify(builds));
		console.log("Methods 1 " + JSON.stringify(builds));
		});
		} ,	 
		function sampleTestLink2(){
		testLink.getProjectTestPlans(testProjectId,function(plan){
		plan=plan.struct;
		var value1=JSON.stringify(plan);
		listener.sockets.emit('testlink2', value1); 
		console.log("Methods 2 " + JSON.stringify(plan));
		}); 
		},
		function sampleTestLink3(){
		  testLink.getTestCase(extid,function(projects){
		projects=projects.struct;
		var value3=JSON.stringify(projects);
		listener.sockets.emit('testlink3', value3); 
		console.log("Methods 3 " + JSON.stringify(projects));
		}); 
		},
		function sampleTestLink4(){
			 testLink.getTestCasesForTestPlan(testPlanId,function(testcases){
			testcases=testcases.struct;
			var value3=JSON.stringify(testcases);
			listener.sockets.emit('testlink4', value3);
			console.log("Methods 4 " + JSON.stringify(testcases));
			});  
		}
	])
    listener.sockets.emit('notification', 'See the Below Response from TestLink');
  });    
}


listener.sockets.on('connection', function (socket) { 
	start(socket);
});

