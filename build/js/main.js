class CodesConverter {

   constructor() {
      var widget = document.getElementsByClassName('widget')[0];
      widget.innerHTML = '';

      this.converterScreen = document.createElement('div');
      this.converterScreen.className = 'widget__converter converter';
      this.converterScreen.innerHTML = '\
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
var codes = [{
   "_code": "01",
   "_region": "Республика Адыгея",
   "_okrug": "Южный"
}, {
   "_code": "02, 102",
   "_region": "Республика Башкортостан",
   "_okrug": "Приволжский"
}, {
   "_code": "03",
   "_region": "Республика Бурятия",
   "_okrug": "Сибирский"
}, {
   "_code": "04",
   "_region": "Республика Алтай",
   "_okrug": "Сибирский"
}, {
   "_code": "05",
   "_region": "Республика Дагестан",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "06",
   "_region": "Республика Ингушетия",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "07",
   "_region": "Кабардино-Балкарская Республика",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "08",
   "_region": "Республика Калмыкия",
   "_okrug": "Южный"
}, {
   "_code": "09",
   "_region": "Республика Карачаево-Черкесия",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "10",
   "_region": "Республика Карелия",
   "_okrug": "Северо-Западный"
}, {
   "_code": "11",
   "_region": "Республика Коми",
   "_okrug": "Северо-Западный"
}, {
   "_code": "12",
   "_region": "Республика Марий Эл",
   "_okrug": "Приволжский"
}, {
   "_code": "13, 113",
   "_region": "Республика Мордовия",
   "_okrug": "Приволжский"
}, {
   "_code": "14",
   "_region": "Республика Саха (Якутия)",
   "_okrug": "Дальневосточный"
}, {
   "_code": "15",
   "_region": "Республика Северная Осетия — Алания",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "16, 116",
   "_region": "Республика Татарстан",
   "_okrug": "Приволжский"
}, {
   "_code": "17",
   "_region": "Республика Тыва",
   "_okrug": "Сибирский"
}, {
   "_code": "18",
   "_region": "Удмуртская Республика",
   "_okrug": "Приволжский"
}, {
   "_code": "19",
   "_region": "Республика Хакасия",
   "_okrug": "Сибирский"
}, {
   "_code": "95",
   "_region": "Чеченская республика",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "21, 121",
   "_region": "Чувашская Республика",
   "_okrug": "Приволжский"
}, {
   "_code": "22",
   "_region": "Алтайский край",
   "_okrug": "Сибирский"
}, {
   "_code": "23, 93, 123",
   "_region": "Краснодарский край",
   "_okrug": "Южный"
}, {
   "_code": "24, 84, 88, 124",
   "_region": "Красноярский край",
   "_okrug": "Сибирский"
}, {
   "_code": "25, 125",
   "_region": "Приморский край",
   "_okrug": "Дальневосточный"
}, {
   "_code": "26, 126",
   "_region": "Ставропольский край",
   "_okrug": "Северо-Кавказский"
}, {
   "_code": "27",
   "_region": "Хабаровский край",
   "_okrug": "Дальневосточный"
}, {
   "_code": "28",
   "_region": "Амурская область",
   "_okrug": "Дальневосточный"
}, {
   "_code": "29",
   "_region": "Архангельская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "30",
   "_region": "Астраханская область",
   "_okrug": "Южный"
}, {
   "_code": "31",
   "_region": "Белгородская область",
   "_okrug": "Центральный"
}, {
   "_code": "32",
   "_region": "Брянская область",
   "_okrug": "Центральный"
}, {
   "_code": "33",
   "_region": "Владимирская область",
   "_okrug": "Центральный"
}, {
   "_code": "34, 134",
   "_region": "Волгоградская область",
   "_okrug": "Южный"
}, {
   "_code": "35",
   "_region": "Вологодская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "36, 136",
   "_region": "Воронежская область",
   "_okrug": "Центральный"
}, {
   "_code": "37",
   "_region": "Ивановская область",
   "_okrug": "Центральный"
}, {
   "_code": "38, 85, 138",
   "_region": "Иркутская область",
   "_okrug": "Сибирский"
}, {
   "_code": "39, 91",
   "_region": "Калининградская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "40",
   "_region": "Калужская область",
   "_okrug": "Центральный"
}, {
   "_code": "41, 82",
   "_region": "Камчатский край",
   "_okrug": "Дальневосточный"
}, {
   "_code": "42, 142",
   "_region": "Кемеровская область",
   "_okrug": "Сибирский"
}, {
   "_code": "43",
   "_region": "Кировская область",
   "_okrug": "Приволжский"
}, {
   "_code": "44",
   "_region": "Костромская область",
   "_okrug": "Центральный"
}, {
   "_code": "45",
   "_region": "Курганская область",
   "_okrug": "Уральский"
}, {
   "_code": "46",
   "_region": "Курская область",
   "_okrug": "Центральный"
}, {
   "_code": "47",
   "_region": "Ленинградская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "48",
   "_region": "Липецкая область",
   "_okrug": "Центральный"
}, {
   "_code": "49",
   "_region": "Магаданская область",
   "_okrug": "Дальневосточный"
}, {
   "_code": "50, 90, 150, 190, 750",
   "_region": "Московская область",
   "_okrug": "Центральный"
}, {
   "_code": "51",
   "_region": "Мурманская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "52, 152",
   "_region": "Нижегородская область",
   "_okrug": "Приволжский"
}, {
   "_code": "53",
   "_region": "Новгородская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "54, 154",
   "_region": "Новосибирская область",
   "_okrug": "Сибирский"
}, {
   "_code": "55",
   "_region": "Омская область",
   "_okrug": "Сибирский"
}, {
   "_code": "56",
   "_region": "Оренбургская область",
   "_okrug": "Приволжский"
}, {
   "_code": "57",
   "_region": "Орловская область",
   "_okrug": "Центральный"
}, {
   "_code": "58",
   "_region": "Пензенская область",
   "_okrug": "Приволжский"
}, {
   "_code": "59, 81, 159",
   "_region": "Пермский край",
   "_okrug": "Приволжский"
}, {
   "_code": "60",
   "_region": "Псковская область",
   "_okrug": "Северо-Западный"
}, {
   "_code": "61, 161",
   "_region": "Ростовская область",
   "_okrug": "Южный"
}, {
   "_code": "62",
   "_region": "Рязанская область",
   "_okrug": "Центральный"
}, {
   "_code": "63, 163",
   "_region": "Самарская область",
   "_okrug": "Приволжский"
}, {
   "_code": "64, 164",
   "_region": "Саратовская область",
   "_okrug": "Приволжский"
}, {
   "_code": "65",
   "_region": "Сахалинская область",
   "_okrug": "Дальневосточный"
}, {
   "_code": "66, 96, 196",
   "_region": "Свердловская область",
   "_okrug": "Уральский"
}, {
   "_code": "67",
   "_region": "Смоленская область",
   "_okrug": "Центральный"
}, {
   "_code": "68",
   "_region": "Тамбовская область",
   "_okrug": "Центральный"
}, {
   "_code": "69, 169",
   "_region": "Тверская область",
   "_okrug": "Центральный"
}, {
   "_code": "70",
   "_region": "Томская область",
   "_okrug": "Сибирский"
}, {
   "_code": "71",
   "_region": "Тульская область",
   "_okrug": "Центральный"
}, {
   "_code": "72",
   "_region": "Тюменская область",
   "_okrug": "Уральский"
}, {
   "_code": "73, 173",
   "_region": "Ульяновская область",
   "_okrug": "Приволжский"
}, {
   "_code": "74, 174",
   "_region": "Челябинская область",
   "_okrug": "Уральский"
}, {
   "_code": "75, 80",
   "_region": "Забайкальский край",
   "_okrug": "Сибирский"
}, {
   "_code": "76",
   "_region": "Ярославская область",
   "_okrug": "Центральный"
}, {
   "_code": "77, 97, 99, 177, 197, 199, 777",
   "_region": "Москва",
   "_okrug": "Центральный"
}, {
   "_code": "78, 98, 178",
   "_region": "Санкт-Петербург",
   "_okrug": "Северо-Западный"
}, {
   "_code": "79",
   "_region": "Еврейская автономная область",
   "_okrug": "Дальневосточный"
}, {
   "_code": "83",
   "_region": "Ненецкий автономный округ",
   "_okrug": "Северо-Западный"
}, {
   "_code": "86, 186",
   "_region": "Ханты-Мансийский автономный округ Югра",
   "_okrug": "Уральский"
}, {
   "_code": "87",
   "_region": "Чукотский автономный округ",
   "_okrug": "Дальневосточный"
}, {
   "_code": "89",
   "_region": "Ямало-Ненецкий автономный округ",
   "_okrug": "Уральский"
}, {
   "_code": "94",
   "_region": "Байконур"
}];
class FuelConverter {

   constructor() {
      var widget = document.getElementsByClassName('widget')[0];
      widget.innerHTML = '';

      this.converterScreen = document.createElement('div');
      this.converterScreen.className = 'widget__converter converter';
      this.converterScreen.innerHTML = '\
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
         inputDiv.value = (data / 10).toFixed(1);
      } else if (data == 0) {
         inputDiv.value = (event.target.innerHTML / 10).toFixed(1);
      } else {
         inputDiv.value = data * 10 + event.target.innerHTML / 10;
      }

      data = parseFloat(inputDiv.value).toFixed(1);
      if (data < 0.1) {
         console.log(data);
         outputDiv.innerHTML = '0.0';
      } else {
         outputDiv.innerHTML = (235.2 / data).toFixed(1);
      }
   }
}
var Router = function (options) {
   this.routes = options.routes || [];
   this.eventBus = options.eventBus;
   this.init();
};

Router.prototype = {
   init: function () {
      window.addEventListener('hashchange', () => this.handleUrl(window.location.hash));
      this.handleUrl(window.location.hash);
   },
   findPreviousActiveRoute: function () {
      return this.currentRoute;
   },
   findNewActiveRoute: function (url) {
      let route = this.routes.find(routeItem => {
         if (typeof routeItem.match === 'string') {
            return url === routeItem.match;
         } else if (typeof routeItem.match === 'function') {
            return routeItem.match(url);
         } else if (routeItem.match instanceof RegExp) {
            return url.match(routeItem.match);
         }
      });

      return route;
   },
   getRouteParams(route, url) {
      var params = url.match(route.match) || [];
      params.shift();
      return params;
   },
   handleUrl: function (url) {
      url = url.slice(1);
      let previousRoute = this.findPreviousActiveRoute();
      let newRoute = this.findNewActiveRoute(url);

      let routeParams = this.getRouteParams(newRoute, url);

      Promise.resolve().then(() => previousRoute && previousRoute.onLeave && previousRoute.onLeave(...this.currentRouteParams)).then(() => newRoute && newRoute.onBeforeEnter && newRoute.onBeforeEnter(...routeParams)).then(() => newRoute && newRoute.onEnter && newRoute.onEnter(...routeParams)).then(() => {
         this.currentRoute = newRoute;
         this.currentRouteParams = routeParams;
      });
   }
};

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

class TempConverter {

   constructor() {
      var widget = document.getElementsByClassName('widget')[0];
      widget.innerHTML = '';

      this.converterScreen = document.createElement('div');
      this.converterScreen.className = 'widget__converter converter';
      this.converterScreen.innerHTML = '\
		<div class="converter__top-wrapper">\
		<div class="top-wrapper__results-wrapper results-wrapper js-results">\
		<div class="results-wrapper__input-field input-field js-input-field" id="input">\
		<input class="input-field__input-data data js-input-data" type="text" placeholder="0" value="0" readonly>\
		<div class="input-field__input-data descr js-input-descr">Фаренгейта</div>\
		</div>\
		<div class="results-wrapper__output-field output-field" id="output">\
		<div class="output-field__output-data data js-output-data">0</div>\
		<div class="output-field__output-data descr js-output-descr">Цельсия</div>\
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
      var data = inputDiv.value;

      if (event.target.innerHTML == 'C') {
         inputDiv.value = '0';
      } else if (event.target.innerHTML == '' && data.length <= 1) {
         inputDiv.value = '0';
      } else if (event.target.innerHTML == '') {
         inputDiv.value = data.slice(0, -1);
      } else if (event.target.innerHTML == '.' && index >= 0) {
         inputDiv.value = inputDiv.value;
      } else if (event.target.innerHTML == '.' && inputDiv.value == 0) {
         inputDiv.value = '0.';
      } else if (inputDiv.value == '0') {
         inputDiv.value = event.target.innerHTML;
      } else {
         inputDiv.value = data + event.target.innerHTML;
      }

      outputDiv.innerHTML = Math.floor(inputDiv.value * 9 / 5 + 32);
   }
}