

ob(function(){
	//��������
	ob('.center').hover(function(){
		ob(this).css('background', 'url(images/arrow2.png)no-repeat 55px center');;
		//ob().getClass('center').css('background', 'url(images/arrow2.png)no-repeat 55px center');
		ob('ul').show();
	}, function(){
		ob(this).css('background', 'url(images/arrow.png)no-repeat 55px center');
		ob('.center_ul').hide();
	});
	
	//��¼
	var login = ob("#login");
	var screen = ob("#screen");

	login.center(250, 350).resize(function(){
		if(login.css('display') == "block")
		{
			screen.lock();
		}
	});
	
	ob(".login").click(function(){
		login.center(250, 350);
		login.css('display', 'block');
		screen.lock();
	});
	ob(".close").click(function(){
		login.css('display', 'none');
		screen.unlock();
	});
	//��ק
	login.drag(ob('h2').last());

});