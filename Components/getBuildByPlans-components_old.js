var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetTestBuildComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse) 	;	
    this.oXpathUtil=new XpathUtil(this.doc);	
	}
	
GetTestBuildComponents.prototype={
		
		getId:function(){
		return this.oXpathUtil.getStringValueByLabelName("id");
		},
		getName:function(){
		return this.oXpathUtil.getStringValueByLabelName("name");
		},
		
		getNote:function(){
		return this.oXpathUtil.getStringValueByLabelName("notes");
		},
		
		isActive:function(){  
		return (this.oXpathUtil.getStringValueByLabelName("active")=='1')? true:false;
		},
		
		isOpen:function(){  
		return (this.oXpathUtil.getStringValueByLabelName("is_open")=='1')? true:false;
		},
		
		releaseDate:function(){  
		return this.oXpathUtil.getStringValueByLabelName("release_date");
		},
		
		closedOnDate:function(){  
		return this.oXpathUtil.getStringValueByLabelName("closed_on_date");
		},
		getCacheObject:function()
		{
		
		console.log("Brahma");
/* 			for each (variable in this) {
			console.log(variable);
			} */
		
		}
		
		
		
		
		

};