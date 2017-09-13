class FuelConverter {
	
	constructor() {
		var widget = document.getElementsByClassName('widget')[0];
		widget.innerHTML = '';

		this.converterScreen = document.createElement('div');
		this.converterScreen.className = 'widget__converter converter';
		this.converterScreen.innerHTML='\
		<div class="converter__top-wrapper">\
		<div class="top-wrapper__results-wrapper results-wrapper js-results">\
		<div class="results-wrapper__input-field input-field js-input-field" id="input">\
		<input class="input-field__input-data data js-input-data" type="text" placeholder="0" value="0.0" readonly>\
		<div class="input-field__input-data descr js-input-descr">Миль на галлон</div>\
		</div>\
		<div class="results-wrapper__output-field output-field" id="output">\
		<div class="output-field__output-data data js-output-data">0.0</div>\
		<div class="output-field__output-data descr js-output-descr">Литров на 100 км</div>\
		</div>\
		</div>\
		</div>\
		<div class="converter__grid-wrapper grid">\
		<table class="grid__table">\
		<tr class="grid__row">\
		<td class="grid__cell">7</td>\
		<td class="grid__cell">8</td>\
		<td class="grid__cell">9</td>\
		</tr>\
		<tr class="grid__row">\
		<td class="grid__cell">4</td>\
		<td class="grid__cell">5</td>\
		<td class="grid__cell">6</td>\
		</tr>\
		<tr class="grid__row">\
		<td class="grid__cell">1</td>\
		<td class="grid__cell">2</td>\
		<td class="grid__cell">3</td>\
		</tr>\
		<tr class="grid__row">\
		<td class="grid__cell js-cell-clear">C</td>\
		<td class="grid__cell">0</td>\
		<td class="grid__cell grid__cell-back js-cell-back"></td>\
		</tr>\
		</table>\
		</div>';

		widget.appendChild(this.converterScreen);

		document.getElementsByClassName('grid')[0].addEventListener('click', this.clickOnCell);
	}

	
	clickOnCell(event) {
		var inputDiv = document.getElementsByClassName('js-input-data')[0];
		var outputDiv = document.getElementsByClassName('js-output-data')[0];
		var outputDescr = document.getElementsByClassName('js-output-descr')[0];
		var data = parseFloat(inputDiv.value).toFixed(1);

		if (event.target.innerHTML == 'C') {
			inputDiv.value = '0.0';
		
		} else if (event.target.innerHTML == '' && data < 0) {
			inputDiv.value = '0.0';
		
		} else if (event.target.innerHTML == '') {
			inputDiv.value = (data/10).toFixed(1);

		} else if (data == 0) {
			inputDiv.value = (event.target.innerHTML/10).toFixed(1);

		} else {
			inputDiv.value = data*10 + event.target.innerHTML/10;
		}

		data = parseFloat(inputDiv.value).toFixed(1);
		if (data < 0.1) {
			console.log(data);
			outputDiv.innerHTML = '0.0';
		} else {
			outputDiv.innerHTML = (235.2/data).toFixed(1);
		}
	}
}