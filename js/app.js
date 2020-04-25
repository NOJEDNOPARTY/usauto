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
		
		var bLazy = new Blazy({});


	},
	owl: function(){
		$('.banner-slider').trigger('resize.owl.carousel');
		$('.test-auto-slider').owlCarousel({
			margin:13,
			nav: true,
			loop: true,
			dots: false,
			items: 5,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
		$('.auto-slider').owlCarousel({
			margin:25,
			nav: true,
			loop: true,
			dots: false,
			items: 3,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
		$('.rev-slider').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 1,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
		$('.warranty-slider').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 1,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
		$('.banner-slider').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 1,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});
		$('.stages-list').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 3,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		});

		var whyText = $('.why-text-slider').owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots: false,
			items: 1,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			dotsContainer: '.why-dots'
		});
		
		var whyImg = $('.why-img-slider').owlCarousel({
			margin:40,
			nav: true,
			loop: true,
			dots: false,
			items: 2,
			smartSpeed: 1000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			dotsContainer: '.why-dots'
		});

		$('.why-dots .owl-dot').click(function () {
			$('.why-dots .owl-dot').removeClass('active');
			$(this).addClass('active');
			whyImg.trigger('to.owl.carousel', [$(this).index(), 300]);
			whyText.trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		$('.owl-dot, .owl-nav button').click(function(){var bLazy = new Blazy();});
		$('.owl-carousel').on(' translated.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})
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
