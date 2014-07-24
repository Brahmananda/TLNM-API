var TestLinkAPI = require('./TestLinkAPI');

/* Declaring variables */

var devKey="f720ef21cfad53b6cfac1d67221a446c";
var RPCUrl="http://localhost:8081/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=1;
var testsuiteid=5;
var testplanid=2;
var testPlanId=2;
var testprojectname="Project1";
var testplanname="Testplan1";
var testcaseexternalid="123-1";
var testcaseid=6;
var filedownloadpath="C:/xampp/htdocs/pratice/";



var testlink=new TestLinkAPI(devKey,RPCUrl);

var version=1;

var uploadpath="C:/Users/brahmanandak/Documents/BKUP/New folder/";
var filename="my-feature.feature";

//testlink.uploadTestCaseAttachment(testcaseid,filename,uploadpath);


/* testlink.getTestCaseNames(testprojectid,testsuiteid,function(TestcaseNames){
TestcaseNames.map(function(testcasename){
console.log(testcasename);
	  });
}); 
*/	
/* testlink.getProjects(function(projects){

projects.map(function(project){

	console.log(project.getNote()+"First");
	console.log(project.getId()+"First");
	console.log(project.getName()+"First");
	console.log(project.isActive()+"First");
	console.log(project.isOptionReqs()+"First");
	console.log(project.isOptionPriority());
	console.log(project.getColor());

	console.log(project.isOptionAutomation());
	console.log(project.options());
	console.log(project.prefix());
	console.log(project.tcCounter());
	console.log(project.isPublic());
	console.log(project.isIssueTrackerEnabled());
	console.log(project.isReqmgrIntegrationEnabled());
	console.log(project.apiKey());


	console.log(project.getName());
	console.log(project.isRequirementsEnabled());
	console.log(project.isTestPriorityEnabled());
	console.log(project.isAutomationEnabled());
	console.log(project.isinventoryEnabled());

});
	
}); */
/*
testlink.getBuildsForTestPlan(testplanid,function(testcasename){
console.log(testcasename);
});


testlink.getTestPlanPlatforms(testplanid,function(testcasename){
console.log(testcasename);
});
*/
/* testlink.getProjectTestPlans(testprojectid,function(name){

console.log(name);
var object=JSON.parse(name);
console.log(object);
var sss=object.methodResponse.params[0].param[0].value[0].array.data.value[1].struct.member[0];//.value.string
console.log(sss);
}); */

/*
testlink.getTestSuitesForTestPlan(testplanid,function(name){
	name.map(function(suite){
	console.log(suite);
	});
});

testlink.getTestPlanByName(projectname,planname,function(name){

var notes=name.getNotes();
notes.map(function(note){
console.log(note);
});
});

testlink.getTestCase(testcaseid,testcaseextid,version,function(tcname){
	tcname.map(function(testcase){
	console.log(testcase);
	});
});*/

/* testlink.getTestCase(testcaseexternalid,function(tcname){
//	tcname.setParentId('2');
	//var newid=tcname.getParentId();
	//console.log(newid);
});  */



testlink.getBuildsForTestPlan(testPlanId,function(builds){

builds.map(function(build){

//var cacheObject=build.getCacheObject();

console.log(build.id);
console.log(build.name);
console.log(build.note);
console.log(build.isActive);
console.log(build.isOpen);
console.log(build.releaseDate);

/* console.log(build.getNote()+"First");
console.log(build.getId()+"First");
console.log(build.getName()+"First");
console.log(build.isActive()+"First");
console.log(build.isOpen()+"First");
console.log(build.releaseDate()+"First");
console.log(build.closedOnDate()+"First"); */


}); 

});
//	tcname.setParentId('2');
	//var newid=tcname.getParentId();
//	console.log(tcname);
//});
 

