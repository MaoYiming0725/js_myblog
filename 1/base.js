var Base = {
	getId: function(id){
		return document.getElementById(id);
	},
	getName: function(name){
		return document.getElementsByName(name);
	},
	getTagName: function(TagName){
		return document.getElementsByTagName(TagName);
	}
	
}