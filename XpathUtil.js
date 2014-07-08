var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;

module.exports=XpathUtil=function (doc){
    this.doc = doc;			
	}
	
	XpathUtil.prototype={
	
		getStringValueByLabelName:function(label)
		{
		return xpath.select("//member[name[text()='"+label+"']]/value/string/text()",this.doc).toString();
		},
		
		getIntValueByLabelName:function(label)
		{
		return xpath.select("//member[name[text()='"+label+"']]/value/int/text()",this.doc).toString();
		},
		
		GetValueByXpath:function()
		{}
	
	};