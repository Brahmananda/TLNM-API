var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetProjects=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse) 	;	
    this.oXpathUtil=new XpathUtil(this.doc);	
	}
	
GetProjects.prototype={
		
			getId:function(){
			return this.oXpathUtil.getStringValueByLabelName("id");
			},

			getNote:function(){
			return this.oXpathUtil.getStringValueByLabelName("notes");
			},

			getColor:function(){
			return this.oXpathUtil.getStringValueByLabelName("color");
			},

			isActive:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("active")=='1')? true:false;
			},

			isOptionReqs:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("option_reqs")=='1')? true:false;
			},
			
			isOptionPriority:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("option_priority")=='1')? true:false;
			},

			isOptionAutomation:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("option_automation")=='1')? true:false;
			},

			options:function(){
			return this.oXpathUtil.getStringValueByLabelName("options");
			},

			prefix:function(){
			return this.oXpathUtil.getStringValueByLabelName("prefix");
			},

			tcCounter:function(){
			return this.oXpathUtil.getStringValueByLabelName("tc_counter");
			},

			isPublic:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("is_public")=='1')? true:false;
			},

			isIssueTrackerEnabled:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("issue_tracker_enabled")=='1')? true:false;
			},

			isReqmgrIntegrationEnabled:function(){  
			return (this.oXpathUtil.getStringValueByLabelName("reqmgr_integration_enabled")=='1')? true:false;
			},

			apiKey:function(){
			return this.oXpathUtil.getStringValueByLabelName("api_key");
			},	

			getName:function(){
			return this.oXpathUtil.getStringValueByLabelName("name");
			},

			isRequirementsEnabled:function(){  
			return (this.oXpathUtil.getIntValueByLabelName("requirementsEnabled")=='1')? true:false;
			},
			
			isTestPriorityEnabled:function(){  
			return (this.oXpathUtil.getIntValueByLabelName("testPriorityEnabled")=='1')? true:false;
			},
			
			isAutomationEnabled:function(){  
			return (this.oXpathUtil.getIntValueByLabelName("automationEnabled")=='1')? true:false;
			},
			
			isinventoryEnabled:function(){  
			return (this.oXpathUtil.getIntValueByLabelName("inventoryEnabled")=='1')? true:false;
			}
		
};