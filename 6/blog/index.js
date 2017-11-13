

window.onload = function(){
	ob().getClass('center').hover(function(){
		ob(this).css('background', 'url(images/arrow2.png)no-repeat 55px center');;
		//ob().getClass('center').css('background', 'url(images/arrow2.png)no-repeat 55px center');
		ob().getTagName('ul').show();
	}, function(){
		ob(this).css('background', 'url(images/arrow.png)no-repeat 55px center');
		ob().getClass('center_ul').hide();
	});
	/*
	alert((document.documentElement.clientHeight-ob().getId('login').css('height'))/2);
	alert((document.documentElement.clientWidth-ob().getId('login').css('width'))/2);
	*/
	var login = ob().getId("login");

	login.center(250, 350).resize(function(){
		login.center(250,350);
	});
	ob().getClass("login").click(function(){
		login.css('display', 'block');
	});
	ob().getClass("close").click(function(){
		login.css('display', 'none');
	});
}