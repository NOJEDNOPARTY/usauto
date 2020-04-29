var common = {
	init: function() {
		common.main();
		common.owl();
		common.submit();
	},
	main: function(){

		$('.phone-mask').mask("+380 (99) 999-99-99");

		new WOW().init();

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('.header-mob').toggleClass('open');
			$('body').toggleClass('hidden');
		})
		
		var bLazy = new Blazy({});


		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$('.header-mob').removeClass('open');
			$('body').removeClass('hidden');
		});

		
		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$(popup).addClass('active');
			$('body').addClass('hidden');
			$('.header-mob').removeClass('open');

		});

		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
		})
		
	
		var bLazy = new Blazy({});
		function fixPanel() {
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed');
				$('body').css({'margin-top':$('header').outerHeight()})
			}else {
				$('header').removeClass('fixed')
				$('body').css({'margin-top':0})
			}
		};
		fixPanel();
		$(window).scroll(function() {
			fixPanel();
		});

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
			responsive:{
				// 0:{
				// 	items:1,
				// },
				0:{
					items:3,
					nav:false
				},
				768:{
					items:5,
				}
			}
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
			responsive:{
				0:{
					center: true,
					items: 1
				},
				768:{
					center: false
				}
			}
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
			responsive:{
				0:{
					items: 1
				},
				621:{
					items: 3,
				}
			}
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
	submit: function(){
		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".form-field, .form-line, input, select")
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				$('.popup-wrapper').removeClass('active');
				$('#thanksPopup').addClass('active');
				$('body').addClass('hidden');
				var bLazy = new Blazy({});
				setTimeout(function(){
					$('.popup-wrapper').removeClass('active');
					$('body').removeClass('hidden');
				}, 3000)
			}
		});
	}
};

(function() {
	common.init();
}());
