

function addDomLoaded(fn){
	var flag = false;
	var timer = null;
	function doReady(){
		//alert(flag);
		if(flag == true){
			if(timer){
			clearInterval(timer);
			}
			return;
		}
		fn();
		flag = true;	
	}
	if((sys.opera && sys.opera < 9) || (sys.firefox && sys.firefox < 3) || (sys.webkit && sys.webkit <525)){//低版本浏览器
		timer = setInterval(function(){
		if(/loaded|complete/.test(document.readyState)){
			doReady();	
			}
		}, 1);
	}else if(document.addEventListener){//W3C
		addEvent(document, 'DOMContentLoaded', function(){
		fn();
		});
	}else if(sys.ie && sys.ie < 9){//IE6 7 8 
		var timer = setInterval(function(){
			try{
				document.documentElement.doScroll('left');
				fn();
			}catch(error){};
		});
	};
	
};

(function(){
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	//alert(ua);
	var s;
	(s = ua.match(/msie\s([\d\.]+)/))?window.sys.ie = s[1]:((s = ua.match(/firefox\/([\d\.]+)/))?window.sys.firefox  = s[1]:((s = ua.match(/chrome\/([\d\.]+)/))?window.sys.chrome  = s[1]:((s = ua.match(/opr\/([\d\.]+)/))?window.sys.opera  = s[1]:0)))
	if(s = ua.match(/webkit\/([\d\.]+)/)){
		window.sys.webkit = s[1];
		//alert(sys.webkit);
	}
})()

DomLoaded(function(){
	var box = document.getElementById('box');
	alert(box.innerHTML);
	
});



