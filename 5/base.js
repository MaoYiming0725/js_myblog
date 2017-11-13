var ob = function(_this){
	return new Base(_this);
};
function Base(_this){
	this.elements=[];
	if(_this != undefined){
		this.elements[0] = _this;
	}
}

Base.prototype.getId = function(id){
	this.elements.push(document.getElementById(id));
	return this;
}

Base.prototype.getName = function(name){
	var names = document.getElementsByName(name);
	for(var i=0; i<ele.length;i++){
		this.elements.push(names[i]);
	 }
	return this;
}

Base.prototype.getTagName = function(TagName){
	var tags = document.getElementsByTagName(TagName);
	for(var i=0; i<tags.length; i++){
		this.elements.push(tags[i]);
	}
	return this;
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

Base.prototype.getElement = function(num){
	var element = this.elements[num];
	this.elements = [];
	this.elements.push(element);
	return this;
	
}
Base.prototype.addClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
		if(! this.elements[i].className.match(new RegExp('(\\s|^)'+ className + '(\\s|$)'))){
			this.elements[i].className +=" " + className;	
		}

	}
	return this;
}

Base.prototype.deleteClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
		if(this.elements[i].className.match(new RegExp('(\\s|^)'+ className + '(\\s|$)'))){
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+ className + '(\\s|$)'), ' ');	
		}

	}
	return this;
}

Base.prototype.addRule = function(ind, selectorText, cssText, position){
	var sheet = document.styleSheets[ind];
	if(typeof sheet.insertRule != 'undefined'){//W3C
		sheet.insertRule(selectorText+'{'+cssText+'}', position);
	}else if(typeof sheet.insertRule != 'undefined'){//IE
		sheet.addRule(selectorText, cssText, position);	
	}
	return this;
}
 
Base.prototype.removeRule = function(ind, num){
	var sheet = document.styleSheets[ind];
	if(typeof sheet.deleteRule != 'undefined'){
		sheet.deleteRule(num);
	}else if(typeof sheet.removeRule != 'undefined'){
		sheet.removeRule(num);
	}
	return this;
}

//鼠标移入移出方法
Base.prototype.hover = function(over, out){
	for(var i = 0; i < this.elements.length; i++){
			this.elements[i].onmouseover = over;
			this.elements[i].onmouseout = out;
	}
	return this;
}

//显示
Base.prototype.show = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = 'block';
	}
	return this;
}

//隐藏
Base.prototype.hide = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = 'none';
	}
	return this;
}