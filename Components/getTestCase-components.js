var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;

module.exports=GetTestCaseComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse) 			
	}
	
GetTestCaseComponents.prototype={
		
		getParentId:function(){
			var ParentId_xpath = xpath.select("//member[name[text()='id']]/value/string",this.doc)
				var ParentId=[];
					ParentId_xpath.map(function(node){ParentId.push(node.firstChild.data);});
						return ParentId;
		},
		
		
		setParentId:function(Id_value){
			var ParentId_value=[];
				ParentId_value.push(Id_value);
					this.getParentId=function(){
						return ParentId_value;
					};
		},
		
		getVersion:function(){
			var Version_xpath = xpath.select("//member[name[text()='version']]/value/string",this.doc)
				var version=[];
					Version_xpath.map(function(node){version.push(node.firstChild.data);});
						return version;
		}
		
		
		

};