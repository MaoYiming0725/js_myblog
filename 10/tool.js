
//跨浏览器获取视口大小
function getInner(){
	if(typeof window.innerWidth != "undefined"){//DOM
		return{
			width: window.innerWidth,
			height: window.innerHeight
		}
	}else{//IE
		return{
			width: document.documentElement.cilentWidth,
			height: document.documentElement.clientHeight
		}
	}
	
}

//跨浏览器设置css规则
function insertRule(sheet, selectorText, cssText, position){
	if(typeof sheet.insertRule != 'undefined'){//W3C
		sheet.insertRule(selectorText+'{'+cssText+'}', position);
	}else if(typeof sheet.insertRule != 'undefined'){//IE
		sheet.addRule(selectorText, cssText, position);	
	}
}

function deleteRule(sheet, num){
	if(typeof sheet.deleteRule != 'undefined'){
		sheet.deleteRule(num);
	}else if(typeof sheet.removeRule != 'undefined'){
		sheet.removeRule(num);
	}
}

//判断class是否存在
function hasClass(ele, className){
	return ele.className.match(new RegExp('(\\s|^)'+ className + '(\\s|$)'));

}

//获取css属性值
function getCSS(ele, attr){
	if(typeof window.getComputedStyle != 'undefined'){
			return window.getComputedStyle(ele, null)[attr];
		}else if(typeof this.elements[i].currentStyle != 'undefined'){
			return ele.currentStyle[attr];
		}
}

//获取事件对象
function getEvent(event){
	return event ? event : window.event;
}

function preDefa(e){
	if(typeof e.preventDefault != 'undefined'){//W3C
		e.preventDefault();
	}else{//IE
		e.returnValue = false;
	}
}

//绑定事件
function addEvent(ob, e, fn){
	if(typeof addEventListener != "undefined"){//DOM
		//alert("DOM");
		ob.addEventListener(e, fn, false);
	}else if (typeof attachEvent != "undefined"){//IE
		//alert("IE");
		if(!ob.events)ob.events = {};
		//第一次执行
		if(!ob.events[e]){
			ob.events[e] = [];
			if(ob['on' + e]){
				ob.events[e][0] = ob['on'+e];
			}
		}else if(addEvent.equal(ob.events[e], fn)){
				//alert(addEvent.equal(ob.events[e], fn));
				return false;
		}
		ob.events[e][addEvent.id++] = fn;
		ob['on' + e] = addEvent.exec;	
	}

		/*
		ob.attachEvent('on' + e , function(){
			fn.call(ob, window.event);
		});
		*///attachEvent函数可直接接收事件对象e, 无需window.event

}
addEvent.id = 1;

addEvent.equal = function(es, fn){
	for(var i in es){
		if(es[i] == fn){
			return true;
		}
	}
	return false;
}

addEvent.exec = function(event){
	event = event || addEvent.fix(window.event);//event的兼容
	//alert(this);
	es = this.events[event.type];
	for(var i in es){
		es[i].call(this, event);//this的兼容
	}
}

addEvent.fix = function(e){
	e.preventDefault = addEvent.fix.preventDefault;
	e.stopPropogation = addEvent.fix.stopPropogation;
	return e;
}

addEvent.fix.preventDefault = function(){
	this.returnValue = false;
	
}

addEvent.fix.stopPropogation = function(){
	this.cancelBubble = true;
}
//解除绑定事件
function removeEvent(ob, e, fn){
	if (typeof ob.detachEvent != "undefined"){//IE
		for(var i in ob.events[e]){
			if(ob.events[e][i] == fn){
				delete ob.events[e][i]
			}
		}
		/*
		ob['on' + e] = function(){
			for(var i in ob.events[e]){
				ob.events[e][i]();
			}	
		}
		*/
	}else if(typeof ob.removeEventListener != "undefined"){//DOM
		ob.removeEventListener(e, fn, false);
	}
		/*
		for(var i in ob.events[e]){
			alert(i);
		}
		*/
}
