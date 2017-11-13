
//跨浏览器获取视口大小
function getInner(){
	if(typeof window.innerWidth != "undefined"){
		return{
			width: window.innerWidth,
			height: window.innerHeight
		}
	}else{
		return{
			width: document.documentElement.clientWidth,
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

