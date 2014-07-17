var TestLinkAPI = require('./TestLinkAPI');
var jsonPath = require('JSONPath');

/* Declaring variables */

var devKey="f720ef21cfad53b6cfac1d67221a446c";
var RPCUrl="http://localhost:8081/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=1;
var testsuiteid=5;
var testplanid=2;
var testPlanId=2;
var buildid=2;
var testprojectname="Project1";
var testplanname="Testplan1";
var testcaseexternalid="123-1";
var testcaseid=6;
var filedownloadpath="C:/xampp/htdocs/pratice/";

var custonfiledname="customfield1";
var custonfiledvalue="updated Value";
var summary="Summary";

var testlink=new TestLinkAPI(devKey,RPCUrl);

var version=1;

var uploadpath="C:/Users/brahmanandak/Documents/BKUP/New folder/";
var filename="my-feature.feature";
var notes="it is my note ghhggh";
var status="f";
var platformname="platform1";

var overwrite="FALSE";
var user="admin"


/*
testlink.reportTCResult(testplanid,"6",buildid,notes,status,platformname,user,function(testcasename){
	
//var kk=jsonPath.eval(testcasename, "$..name").map(function(id){

console.log(JSON.stringify(testcasename));

});*/

testlink.getTestCaseAttachments(testcaseexternalid,filedownloadpath);
testlink.uploadTestCaseAttachment(testcaseid,filename,uploadpath);


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

testlink.getBuildsForTestPlan(testplanid,function(testcasename){
console.log(testcasename);
});


/*testlink.getTestProjectByName(testprojectname,function(testcasename){

console.log(testcasename);
});
*/
/*testlink.getProjectPlatforms(testprojectid,function(testcasename){
	
var kk=jsonPath.eval(testcasename, "$..name").map(function(id){

console.log(id);

});


});*/
/*
testlink.getLastExecutionResult(testplanid,testcaseexternalid,function(testcasename){
	
//var kk=jsonPath.eval(testcasename, "$..name").map(function(id){

console.log(JSON.stringify(testcasename));




});


testlink.updateTestCaseCustomFieldDesignValue(testprojectid,testcaseexternalid,version,custonfiledname,custonfiledvalue,function(testcasename){
	
//var kk=jsonPath.eval(testcasename, "$..name").map(function(id){

console.log(JSON.stringify(testcasename));

});
*/


/*testlink.updateTestCase("123-3",version,summary,function(testcasename){
	
//var kk=jsonPath.eval(testcasename, "$..name").map(function(id){

console.log(JSON.stringify(testcasename));

});

*/








/*
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


/*
testlink.getBuildsForTestPlan(testPlanId,function(builds){

builds.map(function(build){

//var cacheObject=build.getCacheObject();

console.log(build.id);
console.log(build.name);
console.log(build.note);
console.log(build.isActive);
console.log(build.isOpen);
console.log(build.releaseDate);*/

/* console.log(build.getNote()+"First");
console.log(build.getId()+"First");
console.log(build.getName()+"First");
console.log(build.isActive()+"First");
console.log(build.isOpen()+"First");
console.log(build.releaseDate()+"First");
console.log(build.closedOnDate()+"First"); */

//}); 

//});
//	tcname.setParentId('2');
	//var newid=tcname.getParentId();
//	console.log(tcname);
//});
 
/*
testlink.getProjectPlatforms(testprojectid,function(platforms){

	platforms.map(function(platform){


	console.log(platform.id);
	console.log(platform.name);

	});


});*/

var customfieldname="customfield1";
var details="details";
var version=1;
/*testlink.getTestCaseCustomFieldDesignValue(testprojectid,testcaseexternalid,customfieldname,details,version,function(customvalues){

		customvalues.map(function(customvalues){

		console.log(customvalues.value);
		});
			
});
*/
/*
testlink.getTestCasesForTestPlan(testPlanId,function(testCases){




  testCases.map(function(testCase){

console.log(testCase.name);
console.log(testCase.id);
console.log(testCase.tcVersionId);
console.log(testCase.version);
console.log(testCase.externalId);
console.log(testCase.executionType);
console.log(testCase.featureId);
console.log(testCase.platformId);
console.log(testCase.platformName);
console.log(testCase.executionOrder);
console.log(testCase.execStatus);
console.log(testCase.executionDuration);
console.log(testCase.fullExternalId);


	});



});
*/




/*
testlink.getTestCasesForTestSuite(testprojectid,testsuiteid,function(testCases){




  testCases.map(function(testCase){

testCase=testCase.struct;
console.log(JSON.stringify(testCase));

console.log(testCase.name||"reasult not found");
console.log(testCase.id);
console.log(testCase.parent_id);
console.log(testCase.node_type_id);
console.log(testCase.node_order);
console.log(testCase.node_table);
console.log(testCase.external_id);
console.log(testCase.tc_external_id);
console.log(testCase.version);
console.log(testCase.layout);
console.log(testCase.status);
console.log(testCase.summary);
console.log(testCase.importance);
console.log(testCase.author_id);
console.log(testCase.creation_ts);
console.log(testCase.updater_id);
console.log(testCase.modification_ts);
console.log(testCase.active);
console.log(testCase.is_open);
console.log(testCase.execution_type);
console.log(testCase.tcversion_id);
console.log(testCase.tsuite_name);


if(testCase._keywords)
{
	if(testCase._keywords._1)
	{

		console.log(testCase._keywords._1.keyword);
		console.log(testCase._keywords._1.notes);
		console.log(testCase._keywords._1.testcase_id);
	}

		if(testCase._keywords._2)
	{

		console.log(testCase._keywords._2.keyword);
		console.log(testCase._keywords._2.notes);
		console.log(testCase._keywords._2.testcase_id);
	}



}
	});
});*/



/*testlink.getTestCasesForTestSuite
      getsuites.map(function(suite){
	        console.log(suite.struct.id);
			});*/




/*var devKey="f720ef21cfad53b6cfac1d67221a446c";
var RPCUrl="http://localhost:8081/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=1;
var testsuiteid=5;
var testplanid=2;
var testPlanId=2;
var testprojectname="Project1";
var testplanname="Testplan1";
var testcaseexternalid="123-1";
var testcaseid=6;
var filedownloadpath="C:/xampp/htdocs/pratice/";*/