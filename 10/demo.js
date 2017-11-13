



/*
window.onload = function () {
	alert('1');
}

window.onload = function () {
	alert('2');
}

window.onload = function () {
	alert('3');
}




addEvent(window, 'load', function () {
alert('1');});
addEvent(window, 'load', function () {
alert('2');});
addEvent(window, 'load', function () {
alert('3');});
*/
window.onload = function(){
	/*
	var c0= function (e) {
		alert('00' + this.value );
	}
	var c1= function (e) {
		alert('11' + this.value + e);
	}
	var c2= function (e) {
		alert('22' +   e);
	}
	var c3= function (e) {
		alert('33' + this.value +  e);
	}
	var oButton = document.getElementById('bu');
	oButton.onclick = c0;
	addEvent(oButton, 'click', c1);
	addEvent(oButton, 'click', c2);
	removeEvent(oButton, 'click', c1);
	addEvent(oButton, 'click', c3);
	*/
	var a = document.getElementById('a');
	addEvent(a, 'click', func tion(e){
		e.preventDefault();
	})
	
}




