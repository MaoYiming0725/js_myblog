

//浏览器检测
/*
function getState() {
	alert('');
};

getState();		//需要调用一下，比较多余
*/

//alert('');				//直接写到全局里，比较混乱

/*
(function getState() {			//闭包
	alert('');
})();
*/

(function () {
	
	window.sys = {};											//让外部可以访问，保存浏览器信息对象
	var ua = navigator.userAgent.toLowerCase();	//获取浏览器信息字符串
	var s;															//浏览器信息数组，浏览器名称+版本

	//alert(ua);
	//alert(ua.match(/msie ([\d.]+)/));			//msie 7.0,7.0
	//alert(ua.match(/firefox\/([\d.]+)/));		//firefox/3.6.28,3.6.28
	//alert(ua.match(/chrome\/([\d.]+)/));
	//alert(window.opera.version());
	//alert(ua.match(/opera\/.*version\/([\d.]+)/));
	//alert(ua.match(/version\/([\d.]+).*safari/));
	
	/*
	if ((/msie ([\d.]+)/).test(ua)) {
		s = ua.match(/msie ([\d.]+)/);
		sys.ie = s[1];
	}
	
	if ((/firefox\/([\d.]+)/).test(ua)) {
		s = ua.match(/firefox\/([\d.]+)/);
		sys.firefox = s[1];
	}
	
	if ((/chrome\/([\d.]+)/).test(ua)) {
		s = ua.match(/chrome\/([\d.]+)/);
		sys.chrome = s[1];
	}
	
	if ((/opera\/.*version\/([\d.]+)/).test(ua)) {
		s = ua.match(/opera\/.*version\/([\d.]+)/);
		sys.opera = s[1];
	}
	
	if ((/version\/([\d.]+).*safari/).test(ua)) {
		s = ua.match(/version\/([\d.]+).*safari/);
		sys.safari = s[1];
	}
	*/
	
	
	(s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
	(s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
	(s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] : 
	(s = ua.match(/opera\/.*version\/([\d.]+)/)) ? sys.opera = s[1] : 
	(s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
	
	
})();



alert(sys.safari);



//三元
//true ? s =1 : 0;

//(s = 1) ? b = 1 : (s = 2) ? b = 2 : (s = 3) ? b = 3 : 0;

//alert(b);













