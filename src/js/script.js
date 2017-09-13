screen.orientation.lock('portrait');
var codes;
var widget = document.getElementsByClassName('widget')[0];


function showMainScreen() {
	widget.innerHTML = '';

	var mainScreen = document.createElement('div');
	mainScreen.className = 'widget__main-screen main-screen';
	mainScreen.innerHTML = '<div class="main-screen__menu-wrapper menu-wrapper">\
	<a href="#codes" class="menu-wrapper__menu menu-wrapper__menu-codes">Codes</a>\
	<a href="#temp" class="menu-wrapper__menu menu-wrapper__menu-temp">Temperature</a>\
	<a href="#fuel" class="menu-wrapper__menu menu-wrapper__menu-fuel">Fuel consumption</a>\
	</div>';

	widget.appendChild(mainScreen);

}

