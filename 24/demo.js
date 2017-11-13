


//b('#box').animate('left', '1', 

ob(function(){
	var box = ob('#box');
	
	ob('#button').click(function(){
		box.animate({
			'attr': 'x',
			//'step': 10,
			'target': 100,
		
			//'t': 50
		});
	})
	
	//alert(Math.ceil(0.1));
	
})

