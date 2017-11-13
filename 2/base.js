var ob = function(){
	return new Base();
};
function Base(){
	this.elements=[];
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;
	};
	this.getName = function(name){
		var names = document.getElementsByName(name);
		for(var i=0; i<ele.length;i++){
			this.elements.push(names[i]);
		 }
		return this;
	};
	this.getTagName = function(TagName){
		var tags = document.getElementsByTagName(TagName);
		for(var i=0; i<tags.length; i++){
			this.elements.push(tags[i]);
		}
		return this;
	};
	
}

Base.prototype.css = function(attr, value){
	for(var i=0; i<this.elements.length;i++){
		this.elements[i].style[attr]=value;
	}
	return this;
}

Base.prototype.html = function(text){
	for(var i = 0; i<this.elements.length; i++){
		this.elements[i].innerHTML = text;
	}
	return this;
}

Base.prototype.click = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].onclick = fn;
	}
	return this;
}