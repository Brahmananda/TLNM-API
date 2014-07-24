var http 		= require('http');
var fs          = require('fs');
var utilites 	= require('./Utilities');
var xmlRequest	= require('./xmlRequest');
var xmlParser	= require('./xmlParser');
var GTPBN_Components = require('./Components/getTestPlanByName-components');
var GTC_Components = require('./Components/getTestCase-components');
var GBBP_Components = require('./Components/getBuildByPlan-components');
var GP_Components = require('./Components/getProjects-components');





var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
  
module.exports=TestLinkApi=function (devkey,rpcUrl){
	this.TestUrl=rpcUrl;
	this.devkey=devkey;					 
	}

TestLinkApi.prototype.hello=function(){
	console.log(this.TestUrl);
	 };
	 
	 /*To Get the Available Builds Created for Passing TestPlan ID*/
TestLinkApi.prototype.getBuildsForTestPlan=function(TestPlanId,callback){
		var post=utilites.postCompose(this.TestUrl);
		var body=xmlRequest.getBuildsForTestPlan(this.devkey,TestPlanId);
		utilites.postrequest(post,body,function(response){
		var doc = new dom().parseFromString(response) 
		var objects= xpath.select("//struct",doc);
		var Builds=[];
		objects.map(function(object){
		Builds.push(new GBBP_Components(object.toString()).getCacheObject());
		});
		callback(Builds);
		});
	 };
	
	/*To Get DevKey*/
TestLinkApi.prototype.getDevKey=function(){
	return this.devkey
	};
	
	/*To Get the Created Project Names*/
TestLinkApi.prototype.getProjects=function(callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjects(this.devkey);
	utilites.postrequest(post,body,function(response){
		//console.log(response);
		var doc = new dom().parseFromString(response) 
		var objects= xpath.select("//struct",doc);
		var Projects=[];
		objects.map(function(object){
		if(object.toString().indexOf("<name>name</name>") > -1){
		var xmlvalue=object.toString();
		Projects.push(new GP_Components(xmlvalue));
		}
		});
		callback(Projects);
		});
	};
	
	/*To Get the Available TestPlans for the Passing Project ID*/
TestLinkApi.prototype.getProjectTestPlans=function(ProjectId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getProjectTestPlans(this.devkey,ProjectId);
	utilites.postrequest(post,body,function(response){
		//console.log(response);
		var doc = new dom().parseFromString(response) 
		var objects= xpath.select("//struct",doc);
		var testPlans=[];
		objects.map(function(object){
		testPlans.push(new GBBP_Components(object.toString()));
		});
		callback(testPlans);
		});
};
	
	/*To Get the Available TestPlan Name*/
TestLinkApi.prototype.getTestPlanByName=function(TestProjectName,TestPlanName,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanByName(this.devkey,TestProjectName,TestPlanName);
	utilites.postrequest(post,body,function(response){
	var gtpbn_exts=new GTPBN_Components(response);
	callback(gtpbn_exts);
		});
};
	/*To Get the Available TestSuite Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestSuitesForTestPlan=function(TestPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestSuitesForTestPlan(this.devkey,TestPlanId);
	utilites.postrequest(post,body,function(response){
	var Suite_Plan= xmlParser.getTestSuitesForTestPlan(response);
	callback(Suite_Plan);
		});
};
	
	/*To Get the Available Platforms Names for the Passing TestPlan ID*/
TestLinkApi.prototype.getTestPlanPlatforms=function(TestPlanId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestPlanPlatforms(this.devkey,TestPlanId);
	utilites.postrequest(post,body,function(response){
	var Plan_Platform= xmlParser.getTestPlanPlatforms(response);
	callback(Plan_Platform);
	});
};

	/*To Get the URL*/
TestLinkApi.prototype.getUrl=function(){
	return this.TestUrl
};
	
	/*To Get the TestCase Names for the Passing TestCaseID and TestCase External ID*/
TestLinkApi.prototype.getTestCase=function(TestCaseExtId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCase(this.devkey,TestCaseExtId);
	utilites.postrequest(post,body,function(response){
	//console.log(response);
	var gtc_exts=new GTC_Components(response);
	callback(gtc_exts);
	});
};
	
	/*To Get the TestCase Names for the Passing TestProject ID and TestSuite ID*/
TestLinkApi.prototype.getTestCaseNames=function(TestProjectId,TestSuiteId,callback){
	var post=utilites.postCompose(this.TestUrl);
	var body=xmlRequest.getTestCaseNames(this.devkey,TestProjectId,TestSuiteId);
	utilites.postrequest(post,body,function(response){
	var TestCaseNames= xmlParser.getTestCaseNames(response);
	callback(TestCaseNames);
		});
};	

   /* Upload the attachment to test case  */
TestLinkApi.prototype.uploadTestCaseAttachment=function(testcaseid,filename,uploadpath){
	var post=utilites.postCompose(this.TestUrl);
	var bitmap = fs.readFileSync(uploadpath+filename);
	var content=new Buffer(bitmap).toString('base64');
	//console.log(content);
	var body=xmlRequest.uploadTestCaseAttachment(this.devkey,testcaseid,"text/plain",filename,content);
	utilites.postrequest(post,body,function(response){}); 
}; 


TestLinkApi.prototype.getTestCaseAttachments=function(testcaseexternalid,downloadpath){
	var post=utilites.postCompose(this.TestUrl);	
	var body=xmlRequest.getTestCaseAttachments(this.devkey,testcaseexternalid);
	utilites.postrequest(post,body,function(response){
	var components=new Components(response);
	var names=components.getNames(); //xmlParser.getNames(response);
	var contents=components.getContent();//xmlParser.getContent(response);
	var index=0;
		contents.map( function(content){
		var buf = new Buffer(content, 'base64'); 
			fs.writeFile(downloadpath+names[index++],buf, function (err) {
			if (err) throw err;
			console.log(' file been downloaded !!');
			});
		});
	});
};


