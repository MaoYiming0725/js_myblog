var ob = function(_this){
	return new Base(_this);
};
function Base(args){
	this.elements=[];
	if(args != undefined){
		if(typeof args == 'string'){
			//css模式下的层次结构
			if(args.indexOf(' ') != -1){
				ele = args.split(' ');
				//alert(ele);
				var child = [];
				var parent = [];
				for(var i=0; i<ele.length;i++){
					if(parent.length == 0){
						parent.push(document);
						//alert('aaa');
					}
					switch(ele[i].charAt(0)){
						case '#':
							child = [];
							child.push(this.getId(ele[i].substring(1)));
							parent = child;
							break;
						case '.':
							child = [];
							alert(parent.length);
							for(var j = 0; j < parent.length; j++){
								tmp = this.getClass(ele[i].substring(1), parent[j]);
								//alert(child.length);
								for(var k = 0; k < tmp.length; k++)
									child.push(tmp[k]);
							}
							parent = child;
							break;
						default:
							child = [];
							for(var j = 0; j < parent.length; j++){
								tmp = this.getTagName(ele[i], parent[j]);
								for(var k = 0; k < tmp.length; k++)
									child.push(tmp[k]);
							}
							parent = child;
					}
				}
				//alert(child.length);
				this.elements = child;
				
				
			}else{//find模式下的层次结构
				switch(args.charAt(0)){
				case '#':
					this.elements.push(this.getId(args.substring(1)));
					break;
				case '.':
					this.elements = this.getClass(args.substring(1));
					break;
				default:
					this.elements = this.getTagName(args.substring(0));
					
				}
			}
			
		}else if(typeof args == 'object'){
			this.elements[0] = args;
		}else if(typeof args == 'function'){
			this.ready(args);
		}
	}
	
}

Base.prototype.ready = function(fn){
		addDomLoaded(fn);
}

Base.prototype.find = function(str){
	var child = [];
	//alert(this.elements.length);
	for(var i=0; i<this.elements.length;i++){
		switch(str.charAt(0)){
			case '#':
				child.push(this.getId(str.substring(1)));
				break;
			case '.':
				tmp = this.getClass(str.substring(1), this.elements[i]);
				//alert(tmp.length);
				for(var j=0; j<tmp.length;j++){
					child.push(tmp[j]);
				}
				break;
			default:
				tmp = this.getTagName(str.substring(0), this.elements[i]);
				for(var j=0; j<tmp.length;j++){
					child.push(tmp[j]);
				}
		}
		
		
	}
	this.elements = child;
	return this;
	
}

Base.prototype.getId = function(id){
	return document.getElementById(id);
}

Base.prototype.getName = function(name){
	var names = document.getElementsByName(name);
	for(var i=0; i<ele.length;i++){
		this.elements.push(names[i]);
	 }
	return this;
}

Base.prototype.getTagName = function(TagName, parentName){
	var node = null;
	if(arguments.length == 2){
		node = parentName;
	}else{
		node = document;
	}
	return node.getElementsByTagName(TagName);
}

Base.prototype.getClass = function(className, idName){
	var node = null;
	if(arguments.length == 2){
		node = idName;
	}else{
		node = document;
	}
	var all = node.getElementsByTagName('*');
	var tmpClass = [];
	for(var i = 0; i<all.length; i++){
		if(all[i].className == className){
			tmpClass.push(all[i]);
		}
	}
	return tmpClass;
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
//获取首个节点
Base.prototype.first = function(){
	return this.elements[0];
}

//获取末尾节点
Base.prototype.last = function(){
	return this.elements[this.elements.length-1];
}

Base.prototype.css = function(attr, value){
	for(var i=0; i<this.elements.length;i++){
		if(arguments.length == 1){
			return getStyle(this.elements[i], attr)+'px'
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

//最简单的运动
Base.prototype.animate = function(obj){
	//alert(11);
	for(var i = 0; i < this.elements.length; i++){
		var ele = this.elements[i];
		
		var attr = obj['attr'] =='x' ? 'left' : obj['attr'] == 'y'? 'top' : obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' : 'left';
		var start = obj['start'] != undefined ? obj['start']:getStyle(ele, attr);
		var step = obj['step'] != undefined ? obj['step']:10;
		var speed = obj['speed'] != undefined ? obj['speed'] : 6;
		var type = obj['type'] == 0? 'constant' : obj['type'] == 1 ? 'buffer' : 'constant';
		var t = obj['t'] != undefined ? obj['t']:50;
		var alter = obj['alter'];
		var target = obj['target'];
		if(alter != undefined && target == undefined){
			target = alter + start;
		}else if(alter == undefined && target == undefined){
			throw new Error('alter或target至少指定其中一个！');
		}
		if(target < getStyle(ele, attr))step = -step;
		ele.style[attr] = start + 'px';
		clearInterval(window.timer);
		var timer = setInterval(function(){
			if(type == 'buffer'){
				tmp = (target - getStyle(ele, attr)) / speed ; 
				step = tmp > 0 ? Math.ceil(tmp) : Math.floor(tmp);
			}
			
			tmp = getStyle(ele, attr) + step;
			if((step > 0 && tmp >= target) || (step < 0 && tmp <= target)){
				ele.style[attr] = target + 'px';
				clearInterval(timer);
			}else{
				ele.style[attr] = tmp + 'px';
			}
			//document.getElementById('back').innerHTML +=  step + '<br />';
		
		},t)
	}
	return this;
	
}