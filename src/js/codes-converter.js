class CodesConverter {
	
	constructor() {
		var widget = document.getElementsByClassName('widget')[0];
		widget.innerHTML = '';

		this.converterScreen = document.createElement('div');
		this.converterScreen.className = 'widget__converter converter';
		this.converterScreen.innerHTML='\
		<div class="converter__top-wrapper">\
		<div class="top-wrapper__results-wrapper results-wrapper js-results">\
		<div class="results-wrapper__input-field input-field js-input-field" id="input">\
		<input class="input-field__input-data data js-input-data" type="text" value="--" readonly>\
		<div class="input-field__input-data descr js-input-descr"></div>\
		</div>\
		<div class="results-wrapper__output-field output-field" id="output">\
		<div class="output-field__output-data data js-output-data">Данные отсутствуют</div>\
		<div class="output-field__output-data descr js-output-descr"></div>\
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

		document.getElementsByClassName('js-input-descr')[0].innerHTML = 'Введите код региона';
		document.getElementsByClassName('js-output-descr')[0].innerHTML = 'Данные отсутствуют';
		document.getElementsByClassName('js-output-descr')[0].style.color = 'transparent';

		document.getElementsByClassName('grid')[0].addEventListener('click', this.clickOnCell);
	}

	
	clickOnCell(event) {
		var inputDiv = document.getElementsByClassName('js-input-data')[0];
		var inputDescr = document.getElementsByClassName('js-input-descr')[0];
		var outputDiv = document.getElementsByClassName('js-output-data')[0];
		var outputDescr = document.getElementsByClassName('js-output-descr')[0];
		var data = inputDiv.value;


		if (event.target.innerHTML == 'C') {
			inputDiv.value = '--';
			outputDiv.innerHTML = 'Данные отсутствуют';
			outputDescr.style.color = 'transparent';
			inputDescr.style.color = '#ffffff';
			return;

		} else if (event.target.innerHTML == '' && data.length <= 1) {
			inputDiv.value = '--';
			outputDiv.innerHTML = 'Данные отсутствуют';
			outputDescr.style.color = 'transparent';
			inputDescr.style.color = '#ffffff';
			return;

		} else if (event.target.innerHTML == '' && data.length == 2) {
			inputDiv.value = '-' + data[0];
			outputDiv.innerHTML = 'Данные отсутствуют';
			outputDescr.style.color = 'transparent';
			inputDescr.style.color = '#ffffff';
			return;
			
		} else if (event.target.innerHTML == '') {
			inputDiv.value = data.slice(0, -1);

		} else if (inputDiv.value == '--') {
			inputDiv.value = '-' + event.target.innerHTML;

		} else if (inputDiv.value[0] == '-' && inputDiv.value[1] != '-') {
			inputDiv.value = inputDiv.value[1] + event.target.innerHTML;

		} else {
			inputDiv.value = data + event.target.innerHTML;
		}

		for (var i = 0; i < codes.length; i++) {
			
			var info = codes[i];
			var temp = info._code.split(', ');
			
			for (var j = 0; j < temp.length; j++) {
				if (temp[j] == inputDiv.value) {
					outputDiv.innerHTML = info._region;
					outputDescr.innerHTML = info._okrug + ' округ';
					outputDescr.style.color = '#ffffff';
					inputDescr.style.color = 'transparent';
					return;
				} else {
					outputDiv.innerHTML = 'Данные отсутствуют';
					outputDescr.style.color = 'transparent';
					inputDescr.style.color = '#ffffff';
				}
			}

		}
	}
}