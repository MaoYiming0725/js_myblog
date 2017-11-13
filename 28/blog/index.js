

ob(function(){
	//个人中心
	ob('.test1').click(function(){
		ob('.test1').animate({
			mul: {
				width: 300,
				height: 101
			}
		});
	});
	//alert(ob('.test1').getElement(0));
	ob('.center').hover(function(){
		ob(this).css('background', 'url(images/arrow2.png)no-repeat 55px center');
		//ob().getClass('center').css('background', 'url(images/arrow2.png)no-repeat 55px center');
		ob('.center_ul').show().animate({
			mul: {
				'o': 100,
				'h': 120
			}
		});
	}, function(){
		ob(this).css('background', 'url(images/arrow.png)no-repeat 55px center');
		ob('.center_ul').animate({
			mul: {
				'o': 0,
				'h': 0
			},
			fn: function(){
				ob('.center_ul').hide();
				//screen.unlock();
			}
		});
	});
	
	//登录
	var login = ob("#login");
	var screen = ob("#screen");

	login.center(250, 350).resize(function(){
		if(login.css('display') == "block")
		{
			screen.lock();
		}
	});
	
	ob(".login").click(function(){
		//alert(screen.css('opacity'));
		login.center(250, 350);
		login.css('display', 'block');
		screen.lock();
		/*
		.animate({
			attr: 'o',
			target:30
		});*/
	});
	ob(".close").click(function(){
		login.css('display', 'none');
		screen.unlock();
		//alert(screen.css('opacity'));
		/*
		screen.animate({
			attr: 'o',
			target:0,
			fn: function(){
				//alert(this);
				screen.unlock();
			}
		});*/
	});
	//拖拽
	login.drag(ob('h2').last());
	
	//将分享窗口置于窗口最左侧
	var share = ob("#share");
	//alert((parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	share.css('left', '-211px').css('top', (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	
	addEvent(window, 'scroll', function(){
		share.animate({
			attr: 'y',
			target: getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2
		});
		//share.css('top', getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	});
	//分享窗口的移入移出
	
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