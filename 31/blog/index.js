

ob(function(){
	
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
	
	//µÇÂ¼
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
		login.show();
		screen.lock();
		screen.animate({
			attr: 'o',
			target:30
		});
	});
	ob(".close").click(function(){
		login.hide();
		screen.animate({
			attr: 'o',
			target:0,
			fn: function(){
				screen.unlock();
			}
		});
	});
	//ÍÏ×§
	login.drag(ob('h2').last());
	
	//½«·ÖÏí´°¿ÚÖÃÓÚ´°¿Ú×î×ó²à
	var share = ob("#share");
	share.css('left', '-211px').css('top', (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	
	addEvent(window, 'scroll', function(){
		share.animate({
			attr: 'y',
			target: getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2
		});
		//share.css('top', getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	});
	//·ÖÏí´°¿ÚµÄÒÆÈëÒÆ³ö
	
	
	//菜单栏
	ob("#nav .about li").hover(function(){
		var target = ob(this).first().offsetLeft; 
		//alert(ob('#nav .nav_bg').innerHTML);
		//alert('start');
		ob('#nav .nav_bg').animate({
			attr : 'x',
			target : target + 20,
			fn: function(){
				//alert('start1');
				ob("#nav .white").animate({ 
 					attr: 'x',
 					t:10,
 					target: -target
				});
			}
		});
	}, function(){
		ob('#nav .nav_bg').animate({
			attr : 'x',
			target : 20,
			fn: function(){
				ob("#nav .white").animate({ 
 					attr: 'x',
 					t:10,
 					target: 0
				});

			}		
		});
	});

	ob("#main .sidebar h2").toggle(function(){
		ob(this).next().animate({
			mul: {
				'o': 0,
				'h': 0 
			}
		});
	}, function(){
		ob(this).next().animate({
			mul: {
				'o':100,
				'h':150
			}
		});
	});

	ob("#share").hover(function(){
		ob(this).animate({
			attr:'x',
			target:0
		});
	}, function(){
		ob(this).animate({
			attr:'x',
			target:-211
		});
		//document.getElementById('record').innerHTML +=  'out' + '<br />';
	});

});

