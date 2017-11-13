

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
	
	//鐧诲綍
	var login = ob("#login");
	var screen = ob("#screen");

	login.center(250, 350).resize(function(){
		if(login.css('display') == "block")
		{
			screen.lock();
		}
	});
	ob("#header .login").click(function(){
		//alert(screen.css('opacity'));
		login.center(250, 350);
		login.show();
		screen.lock();
		screen.animate({
			attr: 'o',
			target:30
		});
	});
	ob("#login .close").click(function(){
		login.hide();
		screen.animate({
			attr: 'o',
			target:0,
			fn: function(){
				screen.unlock();
			}
		});
	});

	//娉ㄥ唽
	var reg = ob("#reg");

	reg.center(600, 550).resize(function(){
		if(reg.css('display') == "block")
		{
			screen.lock();
		}
	});
	
	ob("#header .reg").click(function(){
		//alert(screen.css('opacity'));
		reg.center(600, 550);
		reg.show();
		screen.lock();
		screen.animate({
			attr: 'o',
			target:30
		});
	});
	ob("#reg .close").click(function(){
		reg.hide();
		screen.animate({
			attr: 'o',
			target:0,
			fn: function(){
				screen.unlock();
			}
		});
	});
	//
	ob('form').form('user').bind('focus', function(){
		ob('#reg dl dd  .info_user').show();
		ob('#reg dl dd .error_user').hide();
		ob('#reg dl dd .succ_user').hide();

	}).bind('blur', function(){
		//alert(ob(this).value());
		if(trim(ob(this).value()).length == 0){//绌
			ob('#reg dl dd  .info_user').hide();
		}else if(! check_user()){//閿欒
			ob('#reg dl dd  .info_user').hide();
			ob('#reg dl dd .error_user').show();
		}else{//鎴愬姛
			ob('#reg dl dd  .info_user').hide();
			ob('#reg dl dd .succ_user').show();
		}
	});

	function check_user(){
		if(/[\w]{2,20}/.test(ob('form').form('user').value()))return true;
		else return false;
	}

	//
	ob('form').form('pass').bind('focus', function(){
		ob('#reg dl dd  .info_pass').show();
		ob('#reg dl dd .error_pass').hide();
		ob('#reg dl dd .succ_pass').hide();
		check_pass();
	}).bind('blur', function(){
		//alert(ob(this).value());
		if(trim(ob(this).value()).length == 0){//绌
			ob('#reg dl dd  .info_pass').hide();
		}
		else{
			if(check_pass()){//閿欒
				ob('#reg dl dd .info_pass').hide();
				ob('#reg dl dd .succ_pass').show();
			}else{//鎴愬姛
				ob('#reg dl dd .info_pass').hide();
				ob('#reg dl dd .error_pass').show();
			}
		}
	});


	ob('form').form('pass').bind('keyup', function(){
		check_pass();

	})


	function check_pass(){
		var value = trim(ob('form').form('pass').value());
		var length = value.length;
		var num = 0;
		//
		if(length >= 6 && length <= 20){
			ob('#reg .info_pass .p1').html('●').css('color', 'green');
		}else{
			ob('#reg .info_pass .p1').html('○').css('color', '#666');
		}
		//
		if(length > 0 && ! /\s/.test(value)){
			ob('#reg .info_pass .p2').html('●').css('color', 'green');
		}else{
			ob('#reg .info_pass .p2').html('○').css('color', '#666');
		}
		//
		if(/[0-9]/.test(value)){
			num++;
		}
		if(/[a-z]/.test(value)){
			num++;
		}
		if(/[A-Z]/.test(value)){
			num++;
		}
		if(/[^0-9a-zA-Z]/.test(value)){
			num++;
		}
		if(num >= 2){
			ob('#reg .info_pass .p3').html('●').css('color', 'green');
		}else{
			ob('#reg .info_pass .p3').html('○').css('color', '#666');			
		}

		//security level
		if(length >= 10 && num >=3){
			ob('#reg .info_pass .s1').css('color', 'green');
			ob('#reg .info_pass .s2').css('color', 'green');
			ob('#reg .info_pass .s3').css('color', 'green');
			ob('#reg .info_pass .s4').html('高').css('color', 'green');

		}else if(length >= 8 && num >=2){
			ob('#reg .info_pass .s1').css('color', '#f60');
			ob('#reg .info_pass .s2').css('color', '#f60');
			ob('#reg .info_pass .s3').css('color', '#ccc');
			ob('#reg .info_pass .s4').html('中').css('color', '#f60');
		}else if(length >= 1){
			ob('#reg .info_pass .s1').css('color', 'maroon');
			ob('#reg .info_pass .s2').css('color', '#ccc');
			ob('#reg .info_pass .s3').css('color', '#ccc');
			ob('#reg .info_pass .s4').html('低').css('color', 'maroon');
		}else{
			ob('#reg .info_pass .s1').css('color', '#ccc');
			ob('#reg .info_pass .s2').css('color', '#ccc');
			ob('#reg .info_pass .s3').css('color', '#ccc');
			ob('#reg .info_pass .s4').html('').css('color', '#666');

		}

		if((length >= 6 && length <= 20) && (! /\s/.test(value)) && (num >= 2))return true;
		else return false;
	}

	//pass2
	ob('form').form('pass2').bind('focus', function(){
		ob('#reg dl dd .info_pass2').show();
		ob('#reg dl dd .error_pass2').hide();
		ob('#reg dl dd .succ_pass2').hide();

	}).bind('blur', function(){
		if(trim(ob(this).value()).length == 0){//
			ob('#reg dl dd .info_pass2').hide();
		}else if(check_pass2()){
			ob('#reg dl dd .info_pass2').hide();	
			ob('#reg dl dd .succ_pass2').show();		
		}else{
			ob('#reg dl dd .info_pass2').hide();	
			ob('#reg dl dd .error_pass2').show();			
		}
	});

	function check_pass2(){
		if(trim(ob('form').form('pass2').value()) == trim(ob('form').form('pass').value()))return true;
		else return false;
	}

	//ques

	ob('form').form('ques').bind('change', function(){
		if(check_ques())ob('#reg dl dd .error_ques').hide();
	});

	function check_ques(){
		if(ob('form').form('ques').value() != 0)return true;
		else return false;
	}

	//ans
	ob('form').form('ans').bind('focus', function(){
		ob('#reg dl dd .info_ans').show();
		ob('#reg dl dd .error_ans').hide();
		ob('#reg dl dd .succ_ans').hide();

	}).bind('blur', function(){
		if(trim(ob(this).value()).length == 0){//
			ob('#reg dl dd .info_ans').hide();
		}else if(check_ans()){
			ob('#reg dl dd .info_ans').hide();	
			ob('#reg dl dd .succ_ans').show();		
		}else{
			ob('#reg dl dd .info_ans').hide();	
			ob('#reg dl dd .error_ans').show();			
		}
	});

	function check_ans(){
		if(trim(ob('form').form('ans').value()).length >=2 && trim(ob('form').form('ans').value()).length <= 32)return true;
		else return false;
	}

	//email
	ob('form').form('email').bind('focus', function(){
		ob('#reg dl dd .info_email').show();
		ob('#reg dl dd .error_email').hide();
		ob('#reg dl dd .succ_email').hide();
		if(! /@/.test(ob(this).value())){
			ob('#reg dl dd .all_email').show();
			ob('#reg dl dd .all_email li span').html(ob(this).value());
		}
	}).bind('blur', function(){
		if(trim(ob(this).value()).length == 0){//
			ob('#reg dl dd .info_email').hide();
		}else if(check_email()){
			ob('#reg dl dd .info_email').hide();	
			ob('#reg dl dd .succ_email').show();		
		}else{
			ob('#reg dl dd .info_email').hide();	
			ob('#reg dl dd .error_email').show();			
		}
		ob('#reg dl dd .all_email').hide();
	});

	function check_email(){
		if(/^[\w-\.]+@[\w-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim(ob('form').form('email').value())))return true;
		else return false;
	}

	//all_email mouse
	ob('#reg dl dd .all_email li').hover(function(){
		ob(this).css('background', '#E5EDF2').css('color', '#369');
	}, function(){
		ob(this).css('background', '#fff').css('color', '#666');
	}).bind('mousedown', function(){
		ob('form').form('email').value(ob(this).text());
	});

	//all_email key
	ob('form').form('email').bind('keyup', function(event){
		if(! /@/.test(ob(this).value())){
			ob('#reg dl dd .all_email').show();
			ob('#reg dl dd .all_email li span').html(ob(this).value());
		}else{
			ob('#reg dl dd .all_email').hide();
		}

		ob('#reg dl dd .all_email li').css('background', '#fff').css('color', '#666');
		length = ob('#reg dl dd .all_email li').length();
		if(event.keyCode == 40){
			if(this.index == undefined || this.index == length - 1)this.index = 0;
			else this.index++;
			ob('#reg dl dd .all_email li').getEle(this.index).css('background', '#E5EDF2').css('color', '#369');
		}

		if(event.keyCode ==38){
			if(this.index == undefined || this.index == 0)this.index = length - 1;
			else this.index--;
			ob('#reg dl dd .all_email li').getEle(this.index).css('background', '#E5EDF2').css('color', '#369');
		}

		if(event.keyCode == 13){
			ob(this).value(ob('#reg dl dd .all_email li').getEle(this.index).text());
			ob('#reg dl dd .all_email').hide();
			this.index = undefined;
		}

	});

	//birthday
	var year = ob('form').form('year');
	var month = ob('form').form('month');
	var day = ob('form').form('day');

	for(var i = 1935; i <= 2013; i++){
		year.first().add(new Option(i, i), undefined)//undefined，IE与其他浏览器的兼容； null，IE中无法显示
	}

	for(var i = 1; i <= 12; i++){
		month.first().add(new Option(i, i), undefined)//undefined，IE与其他浏览器的兼容； null，IE中无法显示
	}

	year.bind('change', select_day);
	month.bind('change', select_day);
	day.bind('change', function(){
		if(check_birth())ob('#reg dl dd .error_birth').hide();
	});
	function select_day(){
		var day30 = [4, 6, 9, 11];
		var day31 = [1, 3, 5, 7, 8, 10, 12];
		var num = 0;
		day.first().options.length = 1;
		if(year.value() != 0 && month.value() != 0){
			if(inArray(day30, parseInt(month.value()))){
				num = 30;
			}else if(inArray(day31, parseInt(month.value()))){
				num = 31;
			}else{
				if((parseInt(year.value()) % 4  == 0 && parseInt(year.value()) % 100  != 0) 
													 || parseInt(year.value()) % 400  == 0){
					num = 29;
				}else{
					num = 28;
				}
			}
			for(var i = 1; i <= num; i++){
				day.first().add(new Option(i, i), undefined)//undefined，IE与其他浏览器的兼容； null，IE中无法显示
			}	
		}else{
			day.first().options.length = 1;
		}
	}

	function check_birth(){
		if(year.value() != 0 && month.value() != 0 && day.value() != 0)return true;
		else return false;
	}

	//ps
	ob('form').first().reset();

	ob('form').form('ps').bind('keyup',check_ps).bind('paste', function(){
		setTimeout(check_ps,1);
	});

	ob('#reg .ps .clear').click(function(){
		ob('form').form('ps').value((ob('form').form('ps').value().substring(0,200)));
		check_ps();
	});

	function check_ps(){
		var num = 200 - ob('form').form('ps').value().length;
		if(num >= 0){
			ob('#reg dl .ps').getEle(0).css('display', 'block');
			ob('#reg dl .ps').getEle(1).css('display', 'none');
			ob('#reg dl dd .num').getEle(0).html(num);
			return true;
		}else{
			ob('#reg dl .ps').getEle(0).css('display', 'none');
			ob('#reg dl .ps').getEle(1).css('display', 'block');
			ob('#reg dl dd .num').getEle(1).html(-num).css('color', 'red');
			return false;
		}
	}
   
	//submit
	ob('form').form('sub').click(function(){
		var flag = true;
		if(! check_user()){
			alert('user');
			flag = false;
			ob('#reg dl dd .error_user').show();
		}
		if(! check_pass()){
			alert('pass');
			flag = false;
			ob('#reg dl dd .error_pass').show();
		}
		if(! check_pass2()){
			alert('pass2');
			flag = false;
			ob('#reg dl dd .error_pass2').show();
		}
		if(! check_ques()){
			alert('ques');
			flag = false;
			ob('#reg dl dd .error_ques').show();
		}
		if(! check_ans()){
			alert('ans');
			flag = false;
			ob('#reg dl dd .error_ans').show();
		}
		if(! check_email()){
			alert('email');
			flag = false;
			ob('#reg dl dd .error_email').show();
		}
		if(! check_birth()){
			alert('birth');
			flag = false;
			ob('#reg dl dd .error_birth').show();
		}
		if(! check_ps()){
			alert('ps');
			flag = false;
		}
		if(flag){
			alert('表单检测完毕，提交表单！');
			ob('form').first().submit();
		}
	});


	//鎷栨嫿
	login.drag(ob('#login h2').last());
	reg.drag(ob('#reg h2').last());
	
	//陆芦路脰脧铆麓掳驴脷脰脙脫脷麓掳驴脷脳卯脳贸虏脿
	var share = ob("#share");
	share.css('left', '-211px').css('top', (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	
	addEvent(window, 'scroll', function(){
		share.animate({
			attr: 'y',
			target: getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2
		});
		//share.css('top', getScroll().top + (parseInt(getInner().height) - parseInt(share.css('height')))/2 + 'px');
	});
	//路脰脧铆麓掳驴脷碌脛脪脝脠毛脪脝鲁枚
	
	
	//鑿滃崟鏍
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

	//banner initialization
	//ob('#main .banner img').getEle(0).css('z-index', '2');
	ob('#main .banner img').opacity(0);
	ob('#main .banner img').getEle(0).opacity(100);
	ob('#main .banner ul li').getEle(0).css('color', '#333');
	ob('#main .banner strong').html(ob('#main .banner img').getEle(0).attr('alt'));

	var banner_ind = 1;
	var num = ob('#main .banner ul li').length();
	var banner_timer = setInterval(banner_fn, 1000);

	var banner_type = 2;

	ob('#main .banner ul li').hover(function(){
		clearInterval(banner_timer);
		if(ob(this).css('color') != 'rgb(51, 51, 51)' && ob(this).css('color') != '#333')
				banner(this, banner_ind == 0 ? (num-1) : (banner_ind -1) % num); 
	}, function(){
		banner_ind = ob(this).ind() + 1;
		banner_timer = setInterval(banner_fn, 1000);
	});

	function banner(obj, prev){
		//ob('#main .banner img').css('z-index', '1');
		//ob('#main .banner img').getEle(ob(obj).ind()).css('z-index', '2');
		if(banner_type == 1){
			ob('#main .banner img').css('z-index', 1);
			ob('#main .banner img').getEle(prev).animate({
				attr : 'o',
				target: 0,
				t: 30,
				step: 10
			}).css('z-index', 1);
			ob('#main .banner img').getEle(ob(obj).ind()).animate({
				attr : 'o',
				target: 100,
				t: 30,
				step: 10
			}).css('z-index', 2);
		}else if(banner_type == 2){
			ob('#main .banner img').css('z-index', 1).opacity(100);
			ob('#main .banner img').getEle(prev).animate({
				attr : 'y',
				start: 0,
				target: 150,
				t: 30,
				step: 10
			}).css('z-index', 1);
			ob('#main .banner img').getEle(ob(obj).ind()).animate({
				attr : 'y',
				start: -150,
				target: 0,
				t: 30,
				step: 10
			}).css('z-index', 2);
		}
		ob('#main .banner ul li').css('color', '#999');
		ob(obj).css('color', '#333');
		ob('#main .banner strong').html(ob('#main .banner img').getEle(ob(obj).ind()).attr('alt'));
	}

	function banner_fn(){
		banner(ob('#main .banner ul li').getEle(banner_ind % num).first(), banner_ind == 0 ? (num-1) : (banner_ind -1) % num);
		banner_ind++;
	}


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

