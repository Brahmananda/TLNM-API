

module.exports=testlinkxmlRequest={

getTestCaseNames:function(devKey,testprojectid,testsuiteid)
{ return  '<?xml version="1.0"?>'+
'<methodCall>'+
'<methodName>tl.getTestCasesForTestSuite</methodName>'+
'<params>'+
'<param><value><struct>'+
 ' <member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
  '<member><name>testprojectid</name><value><int>'+testprojectid+'</int></value></member>'+
  '<member><name>testsuiteid</name><value><int>'+testsuiteid+'</int></value></member>'+
  '<member><name>deep</name><value><boolean>1</boolean></value></member>'+
  '<member><name>details</name><value><string>full</string></value></member>'+
  '<member><name>getkeywords</name><value><boolean>1</boolean></value></member>'+
'</struct></value></param>'+
'</params></methodCall>';
},

getBuildsForTestPlan:function(devKey,testPlanId)
{ return  '<?xml version="1.0"?>'+
'<methodCall>'+
'<methodName>tl.getBuildsForTestPlan</methodName>'+
'<params>'+
'<param><value><struct>'+
  '<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
  '<member><name>testplanid</name><value><int>'+testPlanId+'</int></value></member>'+
'</struct></value></param>'+
'</params></methodCall>';
},

getProjects:function(dev01)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getProjects</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},
getTestPlanPlatforms:function(dev01,testPlanId)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestPlanPlatforms</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testPlanId+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getProjectTestPlans:function(dev01,projectID)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getProjectTestPlans</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+dev01+'</string></value></member>'+
	'<member><name>testprojectid</name><value><int>'+projectID+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestPlanByName:function(devKey,testprojectname,testplanname)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestPlanByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testprojectname</name><value><string>'+testprojectname+'</string></value></member>'+
	'<member><name>testplanname</name><value><string>'+testplanname+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestSuitesForTestPlan:function(devKey,testplanid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestSuitesForTestPlan</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testplanid</name><value><int>'+testplanid+'</int></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCase:function(devKey,testcaseexternalid)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCase</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcaseexternalid</name><value><string>'+testcaseexternalid+'</string></value></member>'+
	'</struct></value></param>'+
	'</params></methodCall>';
},

getTestCaseIDByName:function(devKey,testcasename)
{ return '<?xml version="1.0"?>'+
	'<methodCall>'+
	'<methodName>tl.getTestCaseIDByName</methodName>'+
	'<params>'+
	'<param><value><struct>'+
	'<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
	'<member><name>testcasename</name><value><string>'+testcasename+'</string></value></member>'+
	'</struct></value></param>'
	'</params></methodCall>';
},

uploadTestCaseAttachment:function(devKey,testcaseid,title,filename,content)
{ return '<?xml version="1.0"?>'+
'<methodCall>'+
'<methodName>tl.uploadTestCaseAttachment</methodName>'+
'<params>'+
'<param><value><struct>'+
  '<member><name>devKey</name><value><string>'+devKey+'</string></value></member>'+
  '<member><name>testcaseid</name><value><int>'+testcaseid+'</int></value></member>'+
  '<member><name>title</name><value><string></string></value></member>'+
  '<member><name>filename</name><value><string>'+filename+'</string></value></member>'+
  '<member><name>content</name><value><string>'+content+'</string></value></member>'+
'</struct></value></param>'+
'</params></methodCall>';
}

};