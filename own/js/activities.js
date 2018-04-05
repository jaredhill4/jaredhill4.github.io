
			$(document).ready(function(){

				var adkeywords = $('#activity_screen-main').data("adkw");

				if(!$('#activity_screen-ad-leaderboard').hasClass('sponsored')){
					/*OAS_AD.asyncRefresh('leaderboard3', {
						keywords: adkeywords,
						container: document.getElementById('activity_screen-ad-leaderboard')
					});*/
				}
				if(!$('#activity_screen-ad-logo').hasClass('sponsored')){
					/*OAS_AD.asyncRefresh('logo4', {
						keywords: adkeywords,
						container: document.getElementById('activity_screen-ad-logo')
					});*/
				}
				if(!$('#activity_screen-ad-island').hasClass('sponsored')){
					/*OAS_AD.asyncRefresh('island', {
						flex: false,
						keywords: adkeywords,
						container: document.getElementById('activity_screen-ad-island')
					});*/
				}

				// RESET PREVIOUS/NEXT LINKS

				var currentPageURL = location.href;

				var currentPage = currentPageURL.replace(base_url, '');

				var currentPageIndex = activityFileIndex.indexOf(currentPage);

				var nextPageIndex = currentPageIndex + 1;
				var prevPageIndex = currentPageIndex - 1;

				var nextPageLink = activityFileIndex[nextPageIndex];
				var prevPageLink = activityFileIndex[prevPageIndex];

				if (typeof prevPageLink !== 'undefined' && prevPageLink !== null) {

					var url = base_url + prevPageLink;

					var windowWidth = $(window).width();

					if (windowWidth >= 768){
						$('#activity_screen-day-previous').fadeIn(0);
					}

					$('#activity_screen-day-previous a').attr('href', url);

					$("#activity_screen-day-previous-thumb").load( url + " #activity_screen-thumbnail img");

					$('a.activity_screen-prev').attr('href', url);

				} else{

					$('#activity_screen-day-previous').fadeOut(0);
					$('.activity_screen-prev').each(function(){
						$(this).addClass('disabled');
					});

				}

				if (typeof nextPageLink !== 'undefined' && nextPageLink !== null) {

					var url = base_url + nextPageLink;

					var windowWidth = $(window).width();

					if (windowWidth >= 768){
						$('#activity_screen-day-next').fadeIn(0);
					}

					$('#activity_screen-day-next a').attr('href', url);

					$("#activity_screen-day-next-thumb").load( url + " #activity_screen-thumbnail img");

					$('a.activity_screen-next').attr('href', url);

				} else{

					$('#activity_screen-day-next').fadeOut(0);
					$('.activity_screen-next').each(function(){
						$(this).addClass('disabled');
					});

				}


				if ($('#activity_screen-hero').hasClass('social-cards')) {

					var sequence1 = $("#activity_screen-hero").sequence({
						autoPlay: false,
						autoPlayDelay: 1000,
						nextButton: true,
						prevButton: true,
						pagination:true,
						preloader: true,
						keyNavigation: true,
						pauseOnHover: false,
						animateStartingFrameIn: true,
						preventDelayWhenReversingAnimations: true,
						hideFramesUntilPreloaded: true
					}).data("sequence");

					sequence1.afterCurrentFrameAnimatesOut = function(){

						var adkeywords = $('#activity_screen-main').data("adkw");

						if(!$('#activity_screen-ad-island').hasClass('sponsored')){
							/*OAS_AD.asyncRefresh('island', {
								flex: false,
								keywords: adkeywords,
								container: document.getElementById('activity_screen-ad-island')
							});*/
						}
					}

					var sequence2 = $("#activity_screen-text").sequence({
						autoPlay: false,
						autoPlayDelay: 1000,
						nextButton: true,
						prevButton: true,
						pagination:true,
						preloader: true,
						keyNavigation: true,
						pauseOnHover: false,
						animateStartingFrameIn: true,
						preventDelayWhenReversingAnimations: true,
						hideFramesUntilPreloaded: true
					}).data("sequence");

				}

				else {

				slider2 = $('#activity_screen-text').bxSlider({
					adaptiveHeight: true,
					controls: false,
					pager: false,
					mode: 'fade',
					infiniteLoop:false,
					hideControlOnEnd: true,
					onSlideAfter: function(){
						var slide_current = slider2.getCurrentSlide();
						// do funky JS stuff here
						slider1.goToSlide(slide_current);

						var windowWidth = $(window).width();

						if (windowWidth >= 768){

							var $column = $('.activity_screen-main-content-column'),
							maxHeight = 0;

							$column.each( function() {
								$(this).removeAttr('style');
								if($(this).height() > maxHeight) {
									maxHeight = $(this).height();
								}
							});

							$column.height(maxHeight);

						}

					}
				});

				slider1 = $('#activity_screen-hero').bxSlider({
					adaptiveHeight: true,
					mode: 'horizontal',
					//video: true,
					//useCSS: false,
					infiniteLoop:false,
					hideControlOnEnd: true,
					nextText: '<i class="icon-chevron-right"></i>',
					prevText: '<i class="icon-chevron-left"></i>',
					onSliderLoad: function(){

						var slide_current = slider1.getCurrentSlide();
						var slide_count = slider1.getSlideCount();
						var slide_last = slide_count - 1;

						if ( slide_current == 0 ){
							$('a.activity_screen-content-bottom-nav-prev').addClass('disabled');
						}
						else{
							$('a.activity_screen-content-bottom-nav-prev').removeClass('disabled');
						}

						if ( slide_current == slide_last)
						{
							$('a.activity_screen-content-bottom-nav-next').addClass('disabled');
						}
						else{
							$('a.activity_screen-content-bottom-nav-next').removeClass('disabled');
						}

						$('.activity_screen-content-bottom-nav-count').html(slide_current + 1 + '/' + slide_count);

					},
					onSlideAfter: function(){
						var slide_current = slider1.getCurrentSlide();
						var slide_count = slider1.getSlideCount();
						var slide_last = slide_count - 1;

						if ( slide_current == 0 ){
							$('a.activity_screen-content-bottom-nav-prev').addClass('disabled');
						}
						else{
							$('a.activity_screen-content-bottom-nav-prev').removeClass('disabled');
						}

						if ( slide_current == slide_last)
						{
							$('a.activity_screen-content-bottom-nav-next').addClass('disabled');
						}
						else{
							$('a.activity_screen-content-bottom-nav-next').removeClass('disabled');
						}

						$('.activity_screen-content-bottom-nav-count').html(slide_current + 1 + '/' + slide_count);

						slider2.goToSlide(slide_current);

						var windowWidth = $(window).width();

						if (windowWidth >= 768){

							var $column = $('.activity_screen-main-content-column'),
							maxHeight = 0;

							$column.each( function() {
								$(this).removeAttr('style');
								if($(this).height() > maxHeight) {
									maxHeight = $(this).height();
								}
							});

							$column.height(maxHeight);

						}

					},
					onSlideBefore:function(){

						var adkeywords = $('#activity_screen-main').data("adkw");

						if(!$('#activity_screen-ad-island').hasClass('sponsored')){
							/*OAS_AD.asyncRefresh('island', {
								flex: false,
								keywords: adkeywords,
								container: document.getElementById('activity_screen-ad-island')
							});*/
						}

						$('.activity_screen-video').each(function(){

							var video_src = $(this).attr('src');
							$(this).attr('src', video_src);

						});

					}
				});

				}

            });


			$('.activity_screen-next, .activity_screen-prev').click(function(){

				if($(this).hasClass('disabled')){
					return false;
				}

			});

			$('a.activity_screen-content-bottom-nav-prev').click( function() {

				slider1.goToPrevSlide();

				/*$('#activity_screen').animate({

					scrollTop: top

				}, 250);*/

				return false;

			});

			$('a.activity_screen-content-bottom-nav-next').click( function() {

				slider1.goToNextSlide();

				/*$('#activity_screen').animate({

					scrollTop: 0

				}, 250);*/

				return false;

			});



			$(window).resize( function() {

				var $nav_height = $('#primary-header').height();

				$("#activity_screen").css('padding-top', $nav_height);
				$("#activity_screen-day-close").css('top', $nav_height + 20);
				$("#activity_screen-day-next").css('top', $nav_height + 200);
				$("#activity_screen-day-previous").css('top', $nav_height + 200);

			}).trigger('resize');


			$(function(){ // document ready

				var $sidebar   = $("#activity_screen-sidebar"),
					$spacer    = $('#activity_screen-ad-leaderboard'),
					$sticky    = $("#activity_screen-ad-island"),
					$window    = $('#activity_screen'),
					offset     = $sticky.position().top + 195 // + $spacer.height(),
					topPadding = 15;

				$window.scroll(function() {
					if (!$('#activity_screen-main').hasClass('social-cards')){

						if ($(window).width() >= 768){

							if ($window.scrollTop() > offset) {
								$sticky.stop().animate({
									marginTop: $window.scrollTop() - offset
								}, 0);

							} else {
								$sticky.stop().animate({
									marginTop: 0
								}, 0);
							}

						} else{

							$sticky.stop().animate({
								marginTop: 0
							}, 0);

						}
					}
				});
			});

