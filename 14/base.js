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
//获取并返回节点
Base.prototype.getElement = function(num){
	return this.elements[num];
}

//获取节点，返回当前对象
Base.prototype.getEle = function(num){
	var element = this.elements[num];
	this.elements = [];
	this.elements.push(element);
	return this;
	
}

Base.prototype.css = function(attr, value){
	for(var i=0; i<this.elements.length;i++){
		if(arguments.length == 1){
			return getCSS(this.elements[i], attr)
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
		//this.elements[i].onclick = fn;
		addEvent(this.elements[i], 'click', fn);
	}
	return this;
}


Base.prototype.addClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
		if(!hasClass(this.elements[i], className)){
			this.elements[i].className +=" " + className;	
		}
	}
	return this;
}

Base.prototype.deleteClass = function(className){
	for(var i = 0; i < this.elements.length; i++){
		if(hasClass(this.elements[i], className)){
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)'+ className + '(\\s|$)'), ' ');	
		}

	}
	return this;
}

Base.prototype.addRule = function(ind, selectorText, cssText, position){
	var sheet = document.styleSheets[ind];
	insertRule(sheet, selectorText, cssText, position);
	return this;
}
 
Base.prototype.removeRule = function(ind, num){
	var sheet = document.styleSheets[ind];
	deleteRule(sheet, num);
	return this;
}

//鼠标移入移出方法
Base.prototype.hover = function(over, out){
	for(var i = 0; i < this.elements.length; i++){
			//this.elements[i].onmouseover = over;
			//this.elements[i].onmouseout = out;
			addEvent(this.elements[i], 'mouseover', over);
			addEvent(this.elements[i], 'mouseout', out);
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


//设置窗口居中
Base.prototype.center = function(height, width){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.top = (getInner().height - height)/2 + 30 + 'px';
		this.elements[i].style.left = (getInner().width - width) / 2 + 'px';
	}
	return this;
}

Base.prototype.resize = function(fn){
	for(var i = 0; i < this.elements.length; i++){
		var ele = this.elements[i];
		window.onresize = function(){
			fn();
			if(ele.offsetLeft >	(getInner().width - ele.offsetWidth))
			{
				ele.style.left = getInner().width - ele.offsetWidth + 'px';
			}
			if(ele.offsetTop > (getInner().height - ele.offsetHeight))
			{
				ele.style.top = getInner().height - ele.offsetHeight + 'px';
			}
		}
		
	}
	return this;
}

//锁屏
Base.prototype.lock = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "block";
		this.elements[i].style.width = getInner().width + 'px';
		this.elements[i].style.height = getInner().height + 'px';
		document.documentElement.style.overflow = "hidden";
	}
	return this;
}

//设置画布
Base.prototype.unlock = function(){
	for(var i = 0; i < this.elements.length; i++){
		this.elements[i].style.display = "none";
		document.documentElement.style.overflow = "auto";
	}
	return this;
}

Base.prototype.extend = function(name, fn){
	Base.prototype[name] = fn;
}
