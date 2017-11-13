




//闭包， 内部变量不可被外部获取
/*
(fu+-nction(){
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	var s ;
	if(s = ua.match(/msie\s([\d\.]+)/)){//ie
	//()为分组，指定想要重复的部分
	//[\d\.]指匹配方括号中的任意字符
		alert(s);
		window.sys.ie = s[1];
	}
	if(s = ua.match(/firefox\/([\d\.]+)/)){//firefox
		window.sys.firefox  = s[1];
	}
		
	alert(ua);
	//s = ua.match(/firefox\/([\d\.]+)/);
	//alert(s);
	if(s = ua.match(/chrome\/([\d\.]+)/)){//chrome
		window.sys.chrome  = s[1];
	}
	if(s = ua.match(/opr\/([\d\.]+)/)){//opera
		window.sys.opera  = s[1];
	}
})();
*/ 
(function(){
	window.sys = {};
	var ua = navigator.userAgent.toLowerCase();
	alert(ua);
	var s;
	(s = ua.match(/msie\s([\d\.]+)/))?window.sys.ie = s[1]:((s = ua.match(/firefox\/([\d\.]+)/))?window.sys.firefox  = s[1]:((s = ua.match(/chrome\/([\d\.]+)/))?window.sys.chrome  = s[1]:((s = ua.match(/opr\/([\d\.]+)/))?window.sys.opera  = s[1]:0)))
	//alert(s[1]);
})()













