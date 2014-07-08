var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
var XpathUtil=require('../XpathUtil');


module.exports=GetTestBuildComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse) 	;	
    this.oXpathUtil=new XpathUtil(this.doc);	
	}
	
GetTestBuildComponents.prototype={
		
		id:function(){
		return this.oXpathUtil.getStringValueByLabelName("id");
		},
		name:function(){
		return this.oXpathUtil.getStringValueByLabelName("name");
		},
		
		note:function(){
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
	       var cacheObject={};
			for (var key in this) {
				if (!(this.hasOwnProperty(key) || key=='getCacheObject')) {
				 cacheObject[key]=this[key]();
				}
			}
			return cacheObject;
		}
		
		
		

};