jQuery(document).ready(function($) {

	/*----------- Portfolio -----------*/
	var $portfolio = (function() {
		
		var $col,	
			$container = $('#portfolio'),
			$articles = $container.find('.portfolio'),
			$columns = $container.data('columns'),
			$filters = $('#portfolio-filters a'),
			$changer = $('#portfolio-selector'),

		init = function() {
			initEvents();
			columns($columns);
			isotope();
		},

		initEvents = function() {

			$filters.click(function(e) {
				e.preventDefault();
				var selector = $(this).data('filter');
				$container.isotope({
					filter: selector
				});
				return false;
			});

			$changer.change(function() {
				val = $(this).val();
				columns(val);
			});

		},

		columns = function(val) {
			if(val == 4) { $col = 3; $columns = 4; };
			if(val == 3) { $col = 4; $columns = 3; };
			if(val == 2) { $col = 6; $columns = 2; };
			$articles.removeClass('col-md-3  col-md-4 col-md-6').addClass('col-md-' + $col + ' col-sm-' + $col +' col-xs-' + 12);
			isotope();
		},

		isotope = function() {
			$(window).smartresize(function() {
				$container.isotope({
					itemSelector: '.portfolio',
					resizable: false, // disable normal resizing
					masonry: {
						columnWidth: $container.width() / $columns
					}
				});
			}).smartresize();

			$container.imagesLoaded( function() {
				$(window).smartresize();
			});

			$changer.val($columns);
		};

		return { init: init }

	})();

	$portfolio.init();

});

$(window).load(function() {

	var $portfolioSingle = (function() {
		
		var $scrollLocation,
			$portfolio = $('section.our-work'),
			$articles = $portfolio.find('.portfolio'),
			$button = $('.portfolio-back'),
			$section = $('section.portfolio-single'),
			$basket = $section.find('.basket'),
			$nextButton = $('.portfolio-next'),
			$prevButton = $('.portfolio-prev'),
			$index,

	

		
		

		loader = function(index) {
			$basket.html('');
			$item = $articles.eq(index).find('.portfolio-ajax');
			$link = $item.attr('href') + ' #load';
			$title = $item.data('title');
			$subtitle = $item.data('subtitle');
			$('.portfolio-title').html($title);
			$('.portfolio-subtitle').html($subtitle);
			$basket.load($link);
		},

		buttons = function(index) {
			index == ($articles.length - 1) ? $nextButton.hide() : $nextButton.show();
			index == 0 ? $prevButton.hide() : $prevButton.show();
		},

		back = function() {
			$(window).scrollTop() < ($scrollLocation+10) ? $button.hide() : $button.show();
		};



	})();



});