


//b('#box').animate('left', '1', 

ob(function(){
	var box = ob('#box');
	
	ob('#button1').toggle(function(){
		box.css('background', 'green');
	}, function(){
		box.css('background', 'blue');
	}, function(){
		box.css('background', 'orange');
	});
	
})

