var xpath = require('xpath');
var dom = require('xmldom').DOMParser;

module.exports=testlinkxmlparser={

getTestCaseNames:function(response){
    var TCNameResponse = new dom().parseFromString(response)    
    var TCName_Xpath = xpath.select("//member[name[text()='name']]/value/string", TCNameResponse)
	var TestCase_Names=[];
	TCName_Xpath.map( function(node){TestCase_Names.push(node.firstChild.data);});
	return TestCase_Names;	
},

getBuildsForTestPlan:function(response){
    var BTPResponse = new dom().parseFromString(response)    
    var BuildTP_Xpath = xpath.select("//member[name[text()='name']]/value/string", BTPResponse)
	var Build_Plan=[];
	BuildTP_Xpath.map( function(node){Build_Plan.push(node.firstChild.data);});
	return Build_Plan;	
},

getNames:function(response){
    var NameResponse = new dom().parseFromString(response)    
    var Names_Xpath = xpath.select("//member[name[text()='name']]/value/string", NameResponse)
	var Names=[];
	Names_Xpath.map( function(node){Names.push(node.firstChild.data);});
	return Names;	
},

getProjects:function(response){
	var ProjectResponse=new dom().parseFromString(response)
	var Proejcts_Xpath= xpath.select("//member[name[text()='name']]/value/string",ProjectResponse)
	var Projects=[];
	Proejcts_Xpath.map( function(node){Projects.push(node.firstChild.data);});
	return Projects;
},

getTestPlanPlatforms:function(response){
	var PlatformResponse=new dom().parseFromString(response)
	var Platforms_Xpath= xpath.select("//member[name[text()='name']]/value/string",PlatformResponse)
	var Platform=[];
	Platforms_Xpath.map( function(node){Platform.push(node.firstChild.data);});
	return Platform;
},

getProjectTestPlans:function(response){
	var TPResponse=new dom().parseFromString(response)
	var TP_Xpath= xpath.select("//member[name[text()='name']]/value/string",TPResponse)
	var Project_Plan=[];
	TP_Xpath.map( function(node){Project_Plan.push(node.firstChild.data);});
	return Project_Plan;
},

getTestPlanByName:function(response){
	var TPNameResponse=new dom().parseFromString(response)
	var TPName_Xpath= xpath.select("//member[name[text()='name']]/value/string",TPNameResponse)
	var Plan_Name=[];
	TPName_Xpath.map( function(node){Plan_Name.push(node.firstChild.data);});
	return Plan_Name;
},

getTestSuitesForTestPlan:function(response){
	var TSResponse=new dom().parseFromString(response)
	var TS_Xpath= xpath.select("//member[name[text()='name']]/value/string",TSResponse)
	var Suite_Plan=[];
	TS_Xpath.map( function(node){Suite_Plan.push(node.firstChild.data);});
	return Suite_Plan;
},

getTestCase:function(response){
	var TCResponse=new dom().parseFromString(response)
	var TC_Xpath= xpath.select("//member[name[text()='name']]/value/string",TCResponse)
	var TestCase=[];
	TC_Xpath.map( function(node){TestCase.push(node.firstChild.data);});
	return TestCase;
},

getContent:function(response){
    var ContentResponse = new dom().parseFromString(response)    
    var Content_Xpath = xpath.select("//member[name[text()='content']]/value/string", ContentResponse)
	var Content=[];
	Content_Xpath.map( function(node){Content.push(node.firstChild.data);});
	return Content;	
}

};