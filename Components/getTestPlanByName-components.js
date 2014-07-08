var xpath 	= require('xpath');
var dom 	= require('xmldom').DOMParser;
	  

module.exports=GetTestPlanByNameComponents=function (xmlresponse){
    this.doc = new dom().parseFromString(xmlresponse) 			
	}	

GetTestPlanByNameComponents.prototype={
		/*To Verify the Public Status of TestPlan*/
		isPublic:function(){  
			var PublicNode_xpath = xpath.select("//member[name[text()='is_public']]/value/string",this.doc)
				var Public_Status_Values=[];
					PublicNode_xpath.map(function(node){Public_Status_Values.push(node.firstChild.data);});
						var Public_Status=Public_Status_Values[0];
							if (Public_Status=='1')
								return true;
							else
								return false;
	},
		/*To Modify the Public Status of TestPlan*/
		setPublic:function(status){
			this.isPublic=function(){
				return status;
			};
	},
		/*To Verify the Active Status of TestPlan*/
		isActive:function(){  
			var ActiveNode_xpath = xpath.select("//member[name[text()='active']]/value/string",this.doc)
				var IsActive_Status_Values=[];
					ActiveNode_xpath.map(function(node){IsActive_Status_Values.push(node.firstChild.data);});
						var IsActive_Status=IsActive_Status_Values[0];
							if (IsActive_Status=='1')
								return true;
							else
								return false;
	},
		/*To Modify the Active Status of TestPlan*/
		setActive:function(status){
			this.isActive=function(){
				return status;
			};
	},
		/*To get the Notes written for TestPlan*/
		getNotes:function(){  
			var Notes_xpath = xpath.select("//member[name[text()='notes']]/value/string",this.doc)
				var Notes=[];
					Notes_xpath.map(function(node){Notes.push(node.firstChild.data);});
						return Notes;	
	},
		/*To Modify the Notes written for TestPlan*/
		setNotes:function(Notes_Value){
			var valueofNotes=[];
				valueofNotes.push(Notes_Value);
					this.getNotes=function(){
						return valueofNotes;
					};
	},
		/*To get the ID for TestPlan*/
		getId:function(){  
			var Id_xpath = xpath.select("//member[name[text()='id']]/value/string",this.doc)
				var Id=[];
					Id_xpath.map(function(node){Id.push(node.firstChild.data);});
						return Id;	
	},	
		/*To Modify the ID for TestPlan*/
		setId:function(Idvalue){
			var TempID=[];
				TempID.push(Idvalue);
					this.getId=function(){
						return TempID;
			};
	},
		/*To get the Names of TestPlan*/
		getNames:function(){  
			var Names_xpath = xpath.select("//member[name[text()='name']]/value/string",this.doc)
				var Names=[];
					Names_xpath.map(function(node){Names.push(node.firstChild.data);});
						return Names;	
	},
		/*To Modify the Name of TestPlan*/
		setName:function(Namevalue){
			var TempName=[];
				TempName.push(Namevalue);
					this.getNames=function(){
						return TempName;
					};
	},
		/*Example Component*/
		helloWorld:function(){
			console.log(this.TestUrl);
		}
		
};
		