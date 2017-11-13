/*
//传统加载
window.onload = function(){
	var box = document.getElementById('box');
	alert(box.innerHTML);
}

//DOMContentLoaded事件加载 
addEvent(document, 'DOMContentLoaded', function(){
	var box = document.getElementById('box');
	alert(box.innerHTML);
});



//IE浏览器加载 
//documen.write中 外单引号内单引号-错误 外单引号内双引号-正确
document.write('<script id = "ie_domloaded" defer = "defer" src = "javascript:void(0)"></script>');
var script = document.getElementById('ie_domloaded');
script.onreadystatechange = function(){
	if(this.readyState == 'complete'){
		var box = document.getElementById('box');
		alert(box.innerHTML);
	}
}


//调用doScroll()判断DOM是否加载完成
//IE浏览器中，当DOM树没有建成时，调用doScroll()会报错；
var timer = setInterval(function(){
	try{
		var box = document.getElementById('box');
		alert(box.innerHTML);
	}catch(error){};
});
*/


function addDomLoaded(fn){
	if(document.addEventListener){
	addEvent(document, 'DOMContentLoaded', function(){
	fn();
	});
	}else{
		var timer = setInterval(function(){
			try{
				document.documentElement.doScroll('left');
				fn();
			}catch(error){};
		});
	};
}

DomLoaded(function(){
	var box = document.getElementById('box');
	alert(box.innerHTML);
});
