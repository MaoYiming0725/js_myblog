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
		if(arguments.length == 1){
			
			if(typeof window.getComputedStyle != 'undefined')
			{
				return window.getComputedStyle(this.elements[i], null)[attr];
			}else if(typeof this.elements[i].currentStyle != 'undefined'){
				return this.elements[i].currentStyle[attr];
			}
			
			//return this.elements[i].style[attr];
			
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}

Base.prototype.html = function(text){
	for(var i = 0; i<this.elements.length; i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
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

Base.prototype.getClass = function(className, idName){
	var node = null;
	if(arguments.length == 2){
		node = document.getElementById(idName);
	}else{
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for(var i = 0; i<all.length; i++){
		if(all[i].className == className){
			this.elements.push(all[i]);
		}
	}
	return this;
}

Base.prototype.getElement = function(num){
	var element = this.elements[num];
	this.elements = [];
	this.elements.push(element);
	return this;
	
}