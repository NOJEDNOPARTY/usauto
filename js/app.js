var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.phone-mask').mask("+380 (99) 999-99-99");

		new WOW().init();

		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').addClass('open');
		// })
		// $('.nav-close').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').removeClass('open');
		// })
		
		// var bLazy = new Blazy({});


	},
	owl: function(){
		$('.banner-slider').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 1,
			smartSpeed: 5000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});


		function bannerNav() {
			$('.banner-slider').each(function(){
				var product = $(this).find('.owl-item:not(.cloned)').length;

				if(product > 8){
					$(this).parent().find('.p-nav-all').text(product);

					$(this).find('.owl-item:not(.cloned)').each(function(index, elem){
						if($(this).hasClass('active')) {
							var showProduct = index + 1;
							$(this).closest('.banner').find('.p-nav-show').text(showProduct);
						}
					});
				}else {
					$(this).parent().find('.p-nav-all').text('0'+ product);

					$(this).find('.owl-item:not(.cloned)').each(function(index, elem){
						if($(this).hasClass('active')) {
							var showProduct = index + 1;
							$(this).closest('.banner').find('.p-nav-show').text('0'+ showProduct);
						}
					});
				}

			});
		}

		bannerNav();

		$('.banner-slider .owl-nav button').click(function(){
			bannerNav();
			var bLazy = new Blazy({});
		})

		$('.banner-slider').on(' translated.owl.carousel', function(event) {
			bannerNav();
			var bLazy = new Blazy({});
		})


	},
};

(function() {
	common.init();
}());
