/**
	Copyright © 2014 Imaginea Technologies Inc. All Rights Reserved.
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0
*/

var TestLinkAPI = require('./testlinkapi');
var jsonPath = require('JSONPath');

/* Declaring variables */

var devKey="5f5fa0d9eba136f28e45d1f8a17cbedd";
var RPCUrl="http://localhost:80/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var testprojectid=12;
var testsuiteid=5;
var testplanid=16;
var testPlanId=16;
var buildid=2;
var testlink=new TestLinkAPI(devKey,RPCUrl);




		testlink.getBuildsForTestPlan(testPlanId,function(builds){
		builds=builds.struct;
		var value=JSON.stringify(builds);
//		listener.sockets.emit('testlink1', value); 
		console.log("Methods 1 " + JSON.stringify(builds));
		});
 