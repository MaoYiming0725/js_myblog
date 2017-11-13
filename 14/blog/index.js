

window.onload = function(){
	ob().getClass('center').hover(function(){
		ob(this).css('background', 'url(images/arrow2.png)no-repeat 55px center');;
		//ob().getClass('center').css('background', 'url(images/arrow2.png)no-repeat 55px center');
		ob().getTagName('ul').show();
	}, function(){
		ob(this).css('background', 'url(images/arrow.png)no-repeat 55px center');
		ob().getClass('center_ul').hide();
	});
	var login = ob().getId("login");
	var screen = ob().getId("screen");

	login.center(250, 350).resize(function(){
		if(login.css('display') == "block")
		{
			screen.lock();
		}
	});
	
	ob().getClass("login").click(function(){
		login.center(250, 350);
		login.css('display', 'block');
		screen.lock();
	});
	ob().getClass("close").click(function(){
		login.css('display', 'none');
		screen.unlock();
	});
	login.drag([ob().getTagName('h2').getElement(0), ob().getTagName('span').getElement(0)]);

}
/*
window.onload = function(){
	alert(document.getElementById('login').innerHTML.length);
	alert(document.getElementById('login').innerHTML.length);
}*/