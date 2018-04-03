var deBouncer = function($,cf,of, interval){
    // deBouncer by hnldesign.nl
    // based on code by Paul Irish and the original debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;
        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }
            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || interval);
        };
    };
    jQuery.fn[cf] = function(fn){  return fn ? this.bind(of, debounce(fn)) : this.trigger(cf); };
};

deBouncer(jQuery,'smartresize', 'resize', 100);
deBouncer(jQuery,'smartscroll', 'scroll', 100);
deBouncer(jQuery,'smartmousemove', 'mousemove', 100);


// BEGIN document ready function

$(function(){
	$windowHeight = $(window).height() - 60;
	$windowWidth = $(window).width();
	$topHeight = $('.top').height();
	$footerHeight = $('footer').height();
	$thumbsHeight = $('.slider-home-thumbs').height();
	$sliderHeight = $windowHeight - $thumbsHeight;
	$loginHeight = $windowHeight - $footerHeight;

	if( $windowWidth >= 680 ){
		$('.login').css('height', $loginHeight);
	} else {
		$('.login').css('height', 'auto');
	}
	$('.slider-home li').css('height', $sliderHeight );
	$('.slider-room li').css('height', $windowHeight - $topHeight);

	$(window).resize(function(){
		$windowHeight = $(window).height() - 60;
		$windowWidth = $(window).width();
		$topHeight = $('.top').height();
		$footerHeight = $('footer').height();
		$thumbsHeight = $('.slider-home-thumbs').height();
		$sliderHeight = $windowHeight - $thumbsHeight;
		$loginHeight = $windowHeight - $footerHeight;

		$('.slider-home li').css('height', $sliderHeight );
		$('.slider-room li').css('height', $windowHeight - $topHeight);

		if( $windowWidth >= 680 ){
			$('.login').css('height', $loginHeight);
		} else {
			$('.login').css('height', 'auto');
		}

		if (!$('main').hasClass('page-login')){
			$('main').css('marginTop', $topHeight );
			$.waypoints('refresh');
		}
	});

	$(".fancybox").fancybox({
	  helpers: {
		overlay: {
		  locked: false
		}
	  }
	});

	if (!$('main').hasClass('page-login')){
		$('main').css('marginTop', $topHeight );
		$.waypoints('refresh');
	}

	$('.toggle-mobile-nav').click(function(){
		$('.top').toggleClass('mobile-nav-open');
		$('main').toggleClass('mobile-nav-open');
		/*$('#wrapper').toggleClass('fixed');*/
		$('.mobile-nav-toggle-button').toggleClass('mobile-nav-open');
		$('.mobile-nav').toggleClass('mobile-nav-open');
		$('.subnav ul.stuck').removeClass('menu-open');
		$('.menu-toggle-button').removeClass('menu-open');
		$('.navbar').removeClass('menu-open');
		$('body').toggleClass('menu-open');
		return false;
	});

	$('.menu-toggle-button').click(function(){
		$(this).toggleClass('menu-open');
		$('.navbar').toggleClass('menu-open');
		$('.subnav ul.stuck').toggleClass('menu-open');
		$('.subnav-select-room').toggleClass('menu-open');

		var windowWidth = $(window).width();

		if (windowWidth <= 768) {
			$('.top').toggleClass('mobile-nav-open');
			$('main').toggleClass('mobile-nav-open');
			/*$('#wrapper').toggleClass('fixed');*/
			$('.mobile-nav-toggle-button').toggleClass('mobile-nav-open');
			$('.mobile-nav').toggleClass('mobile-nav-open');
			$('body').toggleClass('menu-open');
		}

		return false;
	});

	$('.subnav').localScroll({
		offset:0
	});

	$('.page-scroll-nav').localScroll({
		lazy:true,
		offset:0
	});

	$('.room-markers').localScroll({
		offset:0
	});

	$('.slider-home').bxSlider({
		mode: 'vertical',
		auto: true,
		pagerCustom: '.slider-home-thumbs',
		nextSelector: '.slider-next',
		prevSelector: '.slider-prev',
		nextText: 'Next',
		prevText: 'Prev',
		onSlideBefore: function(){
			$('.slide-home-title').animate({opacity:0.0, bottom: "+=25"}, 0);
		},
		onSlideAfter: function(){
			$('.slide-home-title').animate({opacity:1.0, bottom: "-=25"}, 500);
		}
	});

	var feature_option_slider = $('.feature-option-slider').bxSlider({
		mode: 'vertical',
		auto: false,
		pager: false
	});

	var slider_room =  $('.slider-room').bxSlider({
		mode: 'vertical',
		auto: false,
		pager: false,
		nextSelector: '.slider-next',
		prevSelector: '.slider-prev',
		nextText: 'Next',
		prevText: 'Prev',
		onSlideAfter: function(){
			var slidePosition = slider_room.getCurrentSlide();

			if (slidePosition == 0) {
				$('.marker').addClass('position-1');
				$('.marker').removeClass('position-2');
				$('.marker').removeClass('position-3');
				$('.marker').removeClass('position-4');
				$('.marker').removeClass('position-5');
			} else if (slidePosition == 1) {
				$('.marker').removeClass('position-1');
				$('.marker').addClass('position-2');
				$('.marker').removeClass('position-3');
				$('.marker').removeClass('position-4');
				$('.marker').removeClass('position-5');
			} else if (slidePosition == 2) {
				$('.marker').removeClass('position-1');
				$('.marker').removeClass('position-2');
				$('.marker').addClass('position-3');
				$('.marker').removeClass('position-4');
				$('.marker').removeClass('position-5');
			} else if (slidePosition == 3) {
				$('.marker').removeClass('position-1');
				$('.marker').removeClass('position-2');
				$('.marker').removeClass('position-3');
				$('.marker').addClass('position-4');
				$('.marker').removeClass('position-5');
			} else if (slidePosition == 4) {
				$('.marker').removeClass('position-1');
				$('.marker').removeClass('position-2');
				$('.marker').removeClass('position-3');
				$('.marker').removeClass('position-4');
				$('.marker').addClass('position-5');
			}
		}
	});

	$('.dropdown a').click(function() {
		//var filterVal = 'blur(8px)';
		$('.room-select-menu').animate({top:0});

		return false;
	});

	$('.toggle-room-menu').click(function() {
		//setWidth();
		//$('.subnav-select-room').toggleClass('is-open');
		var windowWidth = $(window).width();

		if (windowWidth <= 768){

			$('.top').toggleClass('mobile-nav-open');
			$('main').toggleClass('mobile-nav-open');
			/*$('#wrapper').toggleClass('fixed');*/
			$('.mobile-nav-toggle-button').toggleClass('mobile-nav-open');
			$('.mobile-nav').toggleClass('mobile-nav-open');
			$('body').addClass('menu-open');
		} else {
			if ($('body').hasClass('menu-open')) {
				$('.navbar').removeClass('menu-open');
				$('.menu-toggle-button').removeClass('menu-open');
				$('.slider-view').css({'top':'60px', 'right':'60px'});
				$('.slider-view').css({'top':'60px', 'right':'60px'});
				$('.slider-view-img').removeClass('inactive');
				$('.slider-view-img').addClass('active');
				$('.slider-view-grid').removeClass('active');
				$('.slider-view-grid').addClass('inactive');
				$('.home-room-grid-item').removeClass('visible');
				$('.room-menu-grid').removeClass('visible');
				$('body').removeClass('menu-open');
			} else {
				$('.navbar').addClass('menu-open');
				$('.menu-toggle-button').addClass('menu-open');
				$('.slider-view').css({'top':'30px', 'right':'30px'});
				$('.slider-view').css({'top':'30px', 'right':'30px'});
				$('.slider-view-img').addClass('inactive');
				$('.slider-view-img').removeClass('active');
				$('.slider-view-grid').addClass('active');
				$('.slider-view-grid').removeClass('inactive');
				$('.home-room-grid-item').addClass('visible');
				$('.room-menu-grid').addClass('visible');
				$('body').addClass('menu-open');
			}
		}

		return false;
	});

	$('.toggle-mobile-subnav').click(function() {
		$(this).toggleClass('active');
		$(this).siblings('.mobile-subnav').slideToggle();
	});

	$('.subnav-select-room li.active a').click(function() {
		$('.subnav-select-room').toggleClass('is-open');
		return false;
	});

	$('.top').hover(function(){
		//
	}, function(){
		$('.subnav-select-room').removeClass('is-open');
	});

	$('.subnav').waypoint({
		handler: function(direction) {
			if (direction == 'down') {
				$('.top').addClass('top-mini');
				$('.subnav ul').addClass('stuck');
				$('.page-scroll-to-top').addClass('active');
				$('.change-room').delay(300).fadeIn();
			} else if (direction == 'up') {
				$('.top').removeClass('top-mini');
				$('.subnav ul').removeClass('stuck');
				$('.menu-toggle-button').removeClass('menu-open');
				$('.navbar').removeClass('menu-open');
				$('.subnav ul.stuck').removeClass('menu-open');
				$('.subnav-select-room').removeClass('menu-open');
				$('.page-scroll-to-top').removeClass('active');
				$('.change-room').fadeOut();
			}
		},
		offset: 90
	});

	$('.feature').waypoint({
		handler: function(direction) {
			$thisFeature = $(this).attr('id');
			$prevFeature = $(this).waypoint('prev').attr('id');

			if ($prevFeature == undefined || $prevFeature == null || $prevFeature == '' ) {
				$prevFeature = 'wrapper';
			}

			$prevPrevFeature = $(this).waypoint('prev').waypoint('prev').attr('id');

			if ($prevPrevFeature == undefined || $prevPrevFeature == null || $prevPrevFeature == '' ) {
				$prevPrevFeature = 'wrapper';
			}

			$nextFeature = $(this).waypoint('next').attr('id');

			if (direction == 'down') {
				$('.subnav ul li').removeClass('active');
				$('.subnav ul li.subnav-' + $thisFeature).addClass('active');
				$('.page-scroll-section-prev').attr('href', '#' + $prevFeature);
				$('.page-scroll-section-next').attr('href', '#' + $nextFeature);
			} else if (direction == 'up'){
				$('.subnav ul li').removeClass('active');
				$('.subnav ul li.subnav-' + $prevFeature).addClass('active');
				$('.page-scroll-section-prev').attr('href', '#' + $prevPrevFeature);
				$('.page-scroll-section-next').attr('href', '#' + $thisFeature);
			}
		},
		offset: 100
	});


	$('#footer-room-nav').waypoint({
		handler: function(direction) {
			if (direction == 'down') {
				$('.page-scroll-to-top').addClass('bottom');
			} else if (direction == 'up') {
				$('.page-scroll-to-top').removeClass('bottom');
			}
		},
		offset: '100%'
	});


	$('ul.tab-nav li a').click(function(event) {
		var clicked_tab_ref = $(this).attr('href');

		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(this).closest('.tab-group').find('.tab-content').addClass('tab-hidden');

		$(clicked_tab_ref).removeClass('tab-hidden');

		if ($(clicked_tab_ref).hasClass('has-slider')) {
			feature_option_slider.reloadSlider();
		}

		$.waypoints('refresh');

		return false;
	});

	$('.alert-dismiss').click(function(event) {
		$(this).closest('.alert').slideUp(0, function() {});
		$.waypoints('refresh');
		event.preventDefault();
	});

	$('.page-scroll-to-top').click(function() {
		var body = $("html, body");
		$("html, body").animate({scrollTop:0}, '500', 'swing');
	});

	$('.mobile-nav ul li.active ul li a').click(function() {
		var href = $(this).attr('href');
		var hash = href.split("#").pop();

		$('body').removeClass('menu-open');
		$('.top').removeClass('mobile-nav-open');
		$('main').removeClass('mobile-nav-open');
		/*$('#wrapper').toggleClass('fixed');*/
		$('.mobile-nav-toggle-button').removeClass('mobile-nav-open');
		$('.mobile-nav').removeClass('mobile-nav-open');
		$('.subnav ul.stuck').removeClass('menu-open');
		$('.menu-toggle-button').removeClass('menu-open');
		$('.navbar').removeClass('menu-open');

		$.scrollTo('#' + hash);

		return false;
	});

	$('.slider-view-option').click(function() {
		$('.slider-view-option').removeClass('active');
		$('.slider-view-option').removeClass('inactive');
		$(this).addClass('active');
		$(this).siblings('.slider-view-option').addClass('inactive');

		if ($(this).hasClass('slider-view-grid')) {
			$('.room-menu-grid-view').addClass('visible');
			$('.slider-view').css({'top':'30px', 'right':'30px'});
		} else {
			$('.room-menu-grid-view').removeClass('visible');
			$('.slider-view').css({'top':'60px', 'right':'60px'});
		}
	});


  	var $bl, $th, blW, blSW, wDiff, mPadd, damp, mX, mX2, posX, mmAA, mmAAr;

	function setWidth() {
        $bl    = $(".room-menu-grid-container");
        $th    = $(".room-menu-grid-inner");
        blW    = $bl.outerWidth();
        blSW   = $bl[0].scrollWidth;
        wDiff  = (blSW/blW)-1;
        mPadd  = 60;
        damp   = 20;
        mX     = 0;
        mX2    = 0;
        posX   = 0;
        mmAA   = blW-(mPadd*2);
        mmAAr  = (blW/mmAA);
	};

	setWidth();

	$(window).resize(setWidth);

	if (Modernizr.touch) {
   		// click or bind to touchstart, touchmove, etc
		$('.room-menu-grid').addClass('touch');
	}
});

$(window).load(function(){
	$(".loading").delay(1000).fadeOut();
	$(".login-box").addClass('loaded');
});
