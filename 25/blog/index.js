

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
	
	//�����������ڴ��������
	var share = ob("#share");
	//alert((parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	share.css('left', '-211px').css('top', (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	
	//�����ڵ������Ƴ�

	ob("#share").hover(function(){
		ob(this).animate({
			attr:'x',
			target:0
		});
		//document.getElementById('record').innerHTML +=  'over' + '<br />';
	}, function(){
		ob(this).animate({
			attr:'x',
			target:-211
		});
		//document.getElementById('record').innerHTML +=  'out' + '<br />';
	});

});