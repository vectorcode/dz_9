// Для старых браузеров подключаем jquery.placeholder
if (!Modernizr.input.placeholder){
  $('input, textarea').placeholder();
} 

$(document).ready(function() {
	if ($('.form__item__select').length) {
		$('.form__item__select').simpleselect();
	};

	if ($('.options').length) {
		$('.options').jScrollPane();
	}

	if ($('.slider__blk').length) {
		$('.slider__blk').bxSlider({
			auto:true,
			pager: false,
			nextText : 'След.',
			prevText : 'Пред.'
		});	
	}
	
	
}); 