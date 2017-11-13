


/*
	//alert(Base.getId('box'));
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox').click(function () {
		alert('a');
	}).addClass('a');
	
	Base��һ�����ĺ��Ķ���
	Base.getId('box')���ص���һ��divElement�����������û��css������
	��Base.getId('box')���ظĳ�Base���ɣ�����Base����
	Base.getId('box').css('color','red')���ص�Ҳ��Base����
	Base.getId('box').css('color','red').css('backgroundColor', 'black')���Ƿ��ص�Base����
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox')Ҳ�Ƿ��ص�Base����
	Base.getId('box').css('color','red').css('backgroundColor', 'black').html('pox').click(function () {
		alert('a');
	}); click����ִ�����֮�󣬻��Ƿ��ص�Base����
	
	
	
	��Base�����У����css����,html����,click����
	
	var base = new Base();
	base.getId('box').style.color = 'red';
	base.getId('box').style.backgroundColor = 'black';
	base.getId('box').innerHTML = 'pox';
	base.getId('box').onclick = function () {
		alert(this.innerHTML);
	};
*/



window.onload = function () {
	$().getId('box').css('color', 'red').css('backgroundColor', 'black');
	$().getTagName('p').css('color', 'green');
};
















