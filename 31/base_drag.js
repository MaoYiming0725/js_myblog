 ob().extend('drag', function(){
	tags = arguments;//arguments是一个array
	for(var i = 0; i < this.elements.length; i++){
		addEvent(this.elements[i], 'mousedown', function(e){
			var _this = this;
			var e = getEvent(e); //IE中事件对象以全局对象window.event传入，Firefox中作为句柄（handler）的第一个参数传入
			
			if(trim(_this.innerHTML).length == 0){
				e.preventDefault();//FireFox中空div会拖断
			}
			diffX = e.clientX - _this.offsetLeft;
			diffY = e.clientY - _this.offsetTop;
			left = e.clientX - diffX;
			to = e.clientY - diffY;
			//alert(getInner().height - _this.offsetHeight);
			if(left < 0){
				left = 0;
			}else if(left >	(getInner().width - _this.offsetWidth))
			{
				left = getInner().width - _this.offsetWidth;
			}
			if(to < 0){
				to = 0;
			}else if(to > (getInner().height - _this.offsetHeight))
			{
				to = getInner().height - _this.offsetHeight;
			}
			_this.style.left = left + 'px';
			_this.style.top = to + 'px';
			
			flag = false;
			for(i = 0; i<tags.length; i++){
				if(e.target == tags[i]){
					flag = true;
					break;
				}
			}
			
			if(flag == true){
				addEvent(document, 'mousemove', move);
				addEvent(document, 'mouseup', up);
			}else{
				removeEvent(document, 'mousemove', move);
				removeEvent(document, 'mouseup', up);
			}
			/*
			addEvent(window, 'scroll', function(){
				document.documentElement.scrollTop = 0;
				document.body.scrollTop = 0;
			});
			*/
			
			function move(e){
				var e = getEvent(e);
				left = e.clientX - diffX;
				to = e.clientY - diffY;
				if(left < 0){
					left = 0;
				}else if(left >	(getInner().width - _this.offsetWidth))
				{
					left = (getInner().width - _this.offsetWidth);
				}
				if(to < 0){
					to = 0;
				}else if(to > (getInner().height - _this.offsetHeight))
				{
					to = getInner().height - _this.offsetHeight;
				}
				_this.style.left = left + 'px';
				_this.style.top = to + 'px';
				if(typeof _this.setCapture != "undefined"){
					_this.setCapture();
				}
				
				
				}
			function up(e){
				removeEvent(document, 'mousemove', move);
				removeEvent(document, 'mouseup', up);
				if(typeof _this.releaseCapture != "undefined"){
					_this.releaseCapture();
				}
			}
	    })
	}
	return this;
})