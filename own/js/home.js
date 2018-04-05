
$(document).ready(function(){

	$('.date').each(function(){

		$(this).removeClass('current');

		if($(this).attr('id') == currentDay){
			$(this).addClass('current');
		}

	});

	setTimeout( function(){

		$('#main-page-loading').fadeOut();
		$('#main-page-loading-bg').fadeOut();

	}, 1000 );


	/*$('#calendar-body').fadeOut();
	$('#calendar-loading').fadeIn();

	$('.calendar-prev').addClass('no-more');
	$('.calendar-next').addClass('no-more');

	setTimeout( function(){

	$("#calendar-body").load( currentCalendarURL, function() {

		$('#calendar-loading').fadeOut();
		$('#calendar-body').fadeIn();


		$('a.date').click(function(){

			if($(this).hasClass('empty')){

				return false;

			}

			else if($(this).hasClass('inactive')){

				$('.modal-overlay').fadeIn(250);

				$('.modal-header').html('<span class="hidden-phone">Holiday Idea </span>Coming Soon');
				$('.modal-body').html('<strong>This day&rsquo;s idea is not yet available.</strong> Until then, please try our other great gifts, recipes and how-tos.');

				var modalPosition = $(window).scrollTop() + 150;
				$('.modal').show(0, function(){
					$('.modal').animate({top: modalPosition}, 0);
					setTimeout( function(){$('.modal').toggleClass('is-open');}, 250 );
				});

				return false;

			}

			else if($(this).hasClass('active')){

				_href = $(this).attr("href");

				// change the url without a page refresh and add a history entry.
				history.pushState(null, null, _href);

				link = location.href;

				$('#activity_screen-loading').fadeIn(250);
				$('#activity_screen-loading-bg').fadeIn(250);

				loadContent(link, function(){

				});


				setActivityScreenNextPrevLinks();

				return false;

			}

		});

		$('.date').each(function(){

			$(this).removeClass('current');

			if($(this).attr('id') == currentDay){
				$(this).addClass('current');
			}

		});

		var currentCalendarHref = $('#current-calendar-month').attr('href');
		var currentCalendarIndex = calendarFileIndex.indexOf(currentCalendarHref);

		var nextCalendarIndex = currentCalendarIndex + 1;
		var prevCalendarIndex = currentCalendarIndex - 1;

		var nextCalendarLink = calendarFileIndex[nextCalendarIndex];
		var prevCalendarLink = calendarFileIndex[prevCalendarIndex];

		if (typeof prevCalendarLink !== 'undefined' && prevCalendarLink !== null) {

			var url = prevCalendarLink;

			$('.calendar-prev').removeClass('no-more');
			$('.calendar-prev').attr('href', url);

		} else{

			$('.calendar-prev').addClass('no-more');

		}

		if (typeof nextCalendarLink !== 'undefined' && nextCalendarLink !== null) {

			var url = nextCalendarLink;

			$('.calendar-next').removeClass('no-more');
			$('.calendar-next').attr('href', url);

		} else{

			$('.calendar-next').addClass('no-more');

		}

		if (currentMonthName === "December"){
			$('#calendar-month-title').text('December');
			$('.calendar-month-prev-text').text(' November');
			$('.calendar-month-next-text').text('January ');
		}
		else if (currentMonthName === "November"){
			$('#calendar-month-title').text('November');
			$('.calendar-month-prev-text').text(' October');
			$('.calendar-month-next-text').text('December ');
		}
		else if (currentMonthName === "October"){
			$('#calendar-month-title').text('October');
			$('.calendar-month-prev-text').text(' September');
			$('.calendar-month-next-text').text('November ');
		}
		else if (currentMonthName === "September"){
			$('#calendar-month-title').text('September');
			$('.calendar-month-prev-text').text(' August');
			$('.calendar-month-next-text').text('October ');
		}
		else if (currentMonthName === "August"){
			$('#calendar-month-title').text('August');
			$('.calendar-month-prev-text').text(' July');
			$('.calendar-month-next-text').text('September ');
		}
		else if (currentMonthName === "July"){
			$('#calendar-month-title').text('July');
			$('.calendar-month-prev-text').text(' June');
			$('.calendar-month-next-text').text('August ');
		}
		else if (currentMonthName === "June"){
			$('#calendar-month-title').text('June');
			$('.calendar-month-prev-text').text(' May');
			$('.calendar-month-next-text').text('July ');
		}
		else if (currentMonthName === "May"){
			$('#calendar-month-title').text('May');
			$('.calendar-month-prev-text').text(' April');
			$('.calendar-month-next-text').text('June ');
		}
		else if (currentMonthName === "April"){
			$('#calendar-month-title').text('April');
			$('.calendar-month-prev-text').text(' March');
			$('.calendar-month-next-text').text('May ');
		}
		else if (currentMonthName === "March"){
			$('#calendar-month-title').text('March');
			$('.calendar-month-prev-text').text(' February');
			$('.calendar-month-next-text').text('April ');
		}
		else if (currentMonthName === "February"){
			$('#calendar-month-title').text('February');
			$('.calendar-month-prev-text').text(' January');
			$('.calendar-month-next-text').text('March ');
		}
		else if (currentMonthName === "January"){
			$('#calendar-month-title').text('January');
			$('.calendar-month-prev-text').text(' December');
			$('.calendar-month-next-text').text('February ');
		}


	});



	}, 1000 );*/


	$(window).resize();

});

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if (jQuery.browser.mobile != true){

	// Initialize jQuery Skrollr Plugin

	var s = skrollr.init({
		mobileCheck: function() {
			//hack - forces mobile version to be off
			return false;
		}
	});
}



			$(function() {

				if (Modernizr.history) {



					/*var newHash      = "",
					$mainContent = $("#activity_screen-content"),
					$pageWrap    = $("#activity_screen"),
					baseHeight   = 0,
					$el;

					// calculate wrapper heights to prevent jumping when loading new content
					$pageWrap.height($pageWrap.height());
					baseHeight = $pageWrap.height() - $mainContent.height();*/


					// JAVASCRIPT FOR HTML5 BROWSERS


					$('.calendar-next').click(function(){

						if ($(this).hasClass('no-more')){

							return false;

						}

						else{

							_href = $(this).attr("href");

							var currentCalendarTitle = $('#current-calendar-month').attr('title');

							loadCalendar(_href, function(){

								if (currentCalendarTitle === "December"){
									$('#calendar-month-title').text('January');
									$('.calendar-month-prev-text').text(' December');
									$('.calendar-month-next-text').text('February ');
								}
								else if (currentCalendarTitle === "November"){
									$('#calendar-month-title').text('December');
									$('.calendar-month-prev-text').text(' November');
									$('.calendar-month-next-text').text('January ');
								}
								else if (currentCalendarTitle === "October"){
									$('#calendar-month-title').text('November');
									$('.calendar-month-prev-text').text(' October');
									$('.calendar-month-next-text').text('December ');
								}
								else if (currentCalendarTitle === "September"){
									$('#calendar-month-title').text('October');
									$('.calendar-month-prev-text').text(' September');
									$('.calendar-month-next-text').text('November ');
								}
								else if (currentCalendarTitle === "August"){
									$('#calendar-month-title').text('September');
									$('.calendar-month-prev-text').text(' August');
									$('.calendar-month-next-text').text('October ');
								}
								else if (currentCalendarTitle === "July"){
									$('#calendar-month-title').text('August');
									$('.calendar-month-prev-text').text(' July');
									$('.calendar-month-next-text').text('September ');
								}
								else if (currentCalendarTitle === "June"){
									$('#calendar-month-title').text('July');
									$('.calendar-month-prev-text').text(' June');
									$('.calendar-month-next-text').text('August ');
								}
								else if (currentCalendarTitle === "May"){
									$('#calendar-month-title').text('June');
									$('.calendar-month-prev-text').text(' May');
									$('.calendar-month-next-text').text('July ');
								}
								else if (currentCalendarTitle === "April"){
									$('#calendar-month-title').text('May');
									$('.calendar-month-prev-text').text(' April');
									$('.calendar-month-next-text').text('June ');
								}
								else if (currentCalendarTitle === "March"){
									$('#calendar-month-title').text('April');
									$('.calendar-month-prev-text').text(' March');
									$('.calendar-month-next-text').text('May ');
								}
								else if (currentCalendarTitle === "February"){
									$('#calendar-month-title').text('March');
									$('.calendar-month-prev-text').text(' February');
									$('.calendar-month-next-text').text('April ');
								}
								else if (currentCalendarTitle === "January"){
									$('#calendar-month-title').text('February');
									$('.calendar-month-prev-text').text(' January');
									$('.calendar-month-next-text').text('March ');
								}
							});


							return false;

						}

					});

					$('.calendar-prev').click(function(){

						if ($(this).hasClass('no-more')){

							return false;

						}

						else{

							_href = $(this).attr("href");

							var currentCalendarTitle = $('#current-calendar-month').attr('title');

							loadCalendar(_href, function(){

								if (currentCalendarTitle === "December"){
									$('#calendar-month-title').text('November');
									$('.calendar-month-prev-text').text(' October');
									$('.calendar-month-next-text').text('December ');
								}
								else if (currentCalendarTitle === "November"){
									$('#calendar-month-title').text('October');
									$('.calendar-month-prev-text').text(' September');
									$('.calendar-month-next-text').text('November ');
								}
								else if (currentCalendarTitle === "October"){
									$('#calendar-month-title').text('September');
									$('.calendar-month-prev-text').text(' August');
									$('.calendar-month-next-text').text('October ');
								}
								else if (currentCalendarTitle === "September"){
									$('#calendar-month-title').text('August');
									$('.calendar-month-prev-text').text(' July');
									$('.calendar-month-next-text').text('September ');
								}
								else if (currentCalendarTitle === "August"){
									$('#calendar-month-title').text('July');
									$('.calendar-month-prev-text').text(' June');
									$('.calendar-month-next-text').text('August ');
								}
								else if (currentCalendarTitle === "July"){
									$('#calendar-month-title').text('June');
									$('.calendar-month-prev-text').text(' May');
									$('.calendar-month-next-text').text('July ');
								}
								else if (currentCalendarTitle === "June"){
									$('#calendar-month-title').text('May');
									$('.calendar-month-prev-text').text(' April');
									$('.calendar-month-next-text').text('June ');
								}
								else if (currentCalendarTitle === "May"){
									$('#calendar-month-title').text('April');
									$('.calendar-month-prev-text').text(' March');
									$('.calendar-month-next-text').text('May ');
								}
								else if (currentCalendarTitle === "April"){
									$('#calendar-month-title').text('March');
									$('.calendar-month-prev-text').text(' February');
									$('.calendar-month-next-text').text('April ');
								}
								else if (currentCalendarTitle === "March"){
									$('#calendar-month-title').text('February');
									$('.calendar-month-prev-text').text(' January');
									$('.calendar-month-next-text').text('March ');
								}
								else if (currentCalendarTitle === "February"){
									$('#calendar-month-title').text('January');
									$('.calendar-month-prev-text').text(' December');
									$('.calendar-month-next-text').text('February ');
								}
								else if (currentCalendarTitle === "January"){
									$('#calendar-month-title').text('December');
									$('.calendar-month-prev-text').text(' November');
									$('.calendar-month-next-text').text('January ');
								}
							});

							return false;

						}

					});


					// LOAD CALENDAR FUNCTION

					function loadCalendar(href, callback){

						var root = $('html, body');

						var navHeight = $('#primary-header').height();

						root.animate({
						  scrollTop: $('#calendar').offset().top - navHeight
						}, 250, function(){

							$('#calendar-body').fadeOut();
							$('#calendar-loading').fadeIn();

							$('.calendar-prev').addClass('no-more');
							$('.calendar-next').addClass('no-more');

							setTimeout( function(){

							$("#calendar-body").load( href, function() {

								$('#calendar-loading').fadeOut();
								$('#calendar-body').fadeIn();

								$('.date').each(function(){

									$(this).removeClass('current');

									if($(this).attr('id') == currentDay){
										$(this).addClass('current');
									}

								});

								var currentCalendarHref = $('#current-calendar-month').attr('href');
								var currentCalendarIndex = calendarFileIndex.indexOf(currentCalendarHref);

								var nextCalendarIndex = currentCalendarIndex + 1;
								var prevCalendarIndex = currentCalendarIndex - 1;

								var nextCalendarLink = calendarFileIndex[nextCalendarIndex];
								var prevCalendarLink = calendarFileIndex[prevCalendarIndex];

								if (typeof prevCalendarLink !== 'undefined' && prevCalendarLink !== null) {

									var url = prevCalendarLink;

									$('.calendar-prev').removeClass('no-more');
									$('.calendar-prev').attr('href', url);

								} else{

									$('.calendar-prev').addClass('no-more');

								}

								if (typeof nextCalendarLink !== 'undefined' && nextCalendarLink !== null) {

									var url = nextCalendarLink;

									$('.calendar-next').removeClass('no-more');
									$('.calendar-next').attr('href', url);

								} else{

									$('.calendar-next').addClass('no-more');

								}

							});

							callback();

							}, 1000 );

						});

					}


					$(document).on( 'click', 'a.date', function() {

						if($(this).hasClass('empty')){

							return false;

						}

						else if($(this).hasClass('inactive')){

							$('.modal-overlay').fadeIn(250);

							$('.modal-header').html('<span class="hidden-phone">Holiday Idea </span>Coming Soon');
							$('.modal-body').html('<strong>This day&rsquo;s idea is not yet available.</strong> Until then, please try our other great gifts, recipes and how-tos.');

							var modalPosition = $(window).scrollTop() + 150;
							$('.modal').show(0, function(){
								$('.modal').animate({top: modalPosition}, 0);
								setTimeout( function(){$('.modal').toggleClass('is-open');}, 250 );
							});

							return false;

						}

						else if($(this).hasClass('active')){

							var ua = navigator.userAgent.toLowerCase();
							var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

							if(!isAndroid) {

							_href = $(this).attr("href");

							// change the url without a page refresh and add a history entry.
							history.pushState(null, null, _href);

							link = location.href;

							$('#activity_screen-loading').fadeIn(250);
							$('#activity_screen-loading-bg').fadeIn(250);

							loadContent(link, function(){

							});

							setActivityScreenNextPrevLinks();

							/*setTimeout( function(){

								$('#activity_screen-loading').fadeOut(250);
								$('#activity_screen-loading-bg').fadeOut(250);

							}, 1000 );*/


							return false;

							}

						}

					});

					$('#activity_screen-day-previous a, a.activity_screen-prev, #activity_screen-day-next a, a.activity_screen-next').click(function(){

						if($(this).hasClass('disabled')){

							return false;

						} else {

						_href = $(this).attr("href");

						// change the url without a page refresh and add a history entry.
						history.pushState(null, null, _href);

						link = location.href;

						$('#activity_screen').animate({
						  scrollTop: 0
						}, 250 );

						$('#activity_screen-loading').fadeIn(250);
						$('#activity_screen-loading-bg').fadeIn(250);

						loadContent(link, function(){

						});

						setActivityScreenNextPrevLinks();

						/*setTimeout( function(){

							$('#activity_screen-loading').fadeOut(250);
							$('#activity_screen-loading-bg').fadeOut(250);

						}, 1000 );*/


						return false;

						}

					});


					$('#activity_screen-day-close a, a.activity_screen-close').click(function(){
						_href = "/projects/oprah/";
						// change the url without a page refresh and add a history entry.
						history.pushState(null, null, _href);
						$('body').toggleClass('body-locked');
						$('#activity_screen-overlay').toggleClass('is-open');
						$('#activity_screen').toggleClass('is-open').delay(750).promise().done(function(){
							$("#activity_screen-main").html("");
							$("#activity_screen").fadeOut(0);
						});
						return false;
					});

					$(document).keyup(function(e) {

						if (e.keyCode == 27) {

							_href = "/projects/oprah/";
							// change the url without a page refresh and add a history entry.
							history.pushState(null, null, _href);
							$('body').removeClass('body-locked');
							$('#activity_screen-overlay').removeClass('is-open');
							$('#activity_screen').removeClass('is-open').delay(750).promise().done(function(){
								$("#activity_screen-main").html("");
								$("#activity_screen").fadeOut(0);
							});

							//alert('escape key pressed');

						}   // esc

					});


					function setActivityScreenNextPrevLinks(){

						currentPage = link.replace(base_url, '');

						var currentPageIndex = activityFileIndex.indexOf(currentPage);

						var nextPageIndex = currentPageIndex + 1;
						var prevPageIndex = currentPageIndex - 1;

						var nextPageLink = activityFileIndex[nextPageIndex];
						var prevPageLink = activityFileIndex[prevPageIndex];

						//alert(prevPageLink + ', ' + currentPage + ', ' + nextPageLink);

						if (typeof prevPageLink !== 'undefined' && prevPageLink !== null) {

							var url = base_url + prevPageLink;

							var windowWidth = $(window).width();

							if (windowWidth >= 768){
								$('#activity_screen-day-previous').fadeIn(0);
							}
							$('#activity_screen-day-previous a').attr('href', url);

							$("#activity_screen-day-previous-thumb").load( url + " #activity_screen-thumbnail img");

							$('#activity_screen-main').find('a.activity_screen-prev').attr('href', url);

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

							$('#activity_screen-main').find('a.activity_screen-next').attr('href', url);

						} else{

							$('#activity_screen-day-next').fadeOut(0);
							$('.activity_screen-next').each(function(){
								$(this).addClass('disabled');
							});

						}

					}



					function loadContent(href, callback){

						$('#activity_screen').fadeIn(0, function(){

						$('body').addClass('body-locked');
						$('#activity_screen-overlay').addClass('is-open');

						$("#activity_screen-container").load( href + " #activity_screen-container > *", function() {

						// RESET PREVIOUS/NEXT LINKS

						currentPage = link.replace(base_url, '');

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

							$('#activity_screen-main').find('a.activity_screen-prev').attr('href', url);

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

							$('#activity_screen-main').find('a.activity_screen-next').attr('href', url);

						} else{

							$('#activity_screen-day-next').fadeOut(0);
							$('.activity_screen-next').each(function(){
								$(this).addClass('disabled');
							});

						}



						// RELOAD PREVIOUS/NEXT CLICK FUNCTION

						$('a.activity_screen-prev, a.activity_screen-next').click(function(){

							if($(this).hasClass('disabled')){

								return false;

							} else {

								_href = $(this).attr("href");

								// change the url without a page refresh and add a history entry.
								history.pushState(null, null, _href);

								link = location.href;

								$('#activity_screen').animate({
								  scrollTop: 0
								}, 250 );

								$('#activity_screen-loading').fadeIn(250);
								$('#activity_screen-loading-bg').fadeIn(250);

								loadContent(link, function(){

								});

								setActivityScreenNextPrevLinks();

								/*setTimeout( function(){

									$('#activity_screen-loading').fadeOut(250);
									$('#activity_screen-loading-bg').fadeOut(250);

								}, 1000 );*/

								return false;

							}

						});


						$('a.activity_screen-close').click(function(){
							_href = "/projects/oprah/";
							// change the url without a page refresh and add a history entry.
							history.pushState(null, null, _href);
							$('body').toggleClass('body-locked');
							$('#activity_screen-overlay').toggleClass('is-open');
							$('#activity_screen').toggleClass('is-open').delay(750).promise().done(function(){
								$("#activity_screen-main").html("");
								$("#activity_screen").fadeOut(0);
							});
							return false;
						});

							// RELOAD SCROLL FUNCTION

						// BEGIN Navigation
						$('a.activity-scroll').click(function() {
						  $('#activity_screen').animate({
							scrollTop: 0
						  }, 500 );
						  return false;
						});


							// OPEN ACTIVITY SCREEN

							$('#activity_screen').addClass('is-open');

							$('#activity_screen-loading').fadeOut(250);
							$('#activity_screen-loading-bg').fadeOut(250);

							// INITIALIZE ADS

							var adkeywords = $('#activity_screen-main').data("adkw");

							if(!$('#activity_screen-ad-leaderboard').hasClass('sponsored')){
								// LOAD LEADERBOARD AD
								/*OAS_AD.asyncRefresh('leaderboard3', {
									keywords: adkeywords,
									container: document.getElementById('activity_screen-ad-leaderboard')
								});*/
							}

							if(!$('#activity_screen-ad-logo').hasClass('sponsored')){
								// LOAD SPONSOR LOGO
								/*OAS_AD.asyncRefresh('logo4', {
									keywords: adkeywords,
									container: document.getElementById('activity_screen-ad-logo')
								});*/
							}

							if(!$('#activity_screen-ad-island').hasClass('sponsored')){
								// LOAD ISLAND AD
								/*OAS_AD.asyncRefresh('island', {
									flex: false,
									keywords: adkeywords,
									container: document.getElementById('activity_screen-ad-island')
								});*/
							}


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

											if(!Modernizr.csstransitions) {

												$sticky.stop().animate({
													marginTop: $window.scrollTop() - offset
												}, 750, 'linear');

											} else {

												$sticky.css('margin-top', $window.scrollTop() - offset);

											}

										} else {

											if(!Modernizr.csstransitions) {

												$sticky.stop().animate({
													marginTop: 0
												}, 750, 'linear');

											} else {

												$sticky.css('margin-top', 0);

											}
										}

									} else {

										$sticky.css('margin-top', 0);

									}
								}

							});
						});



							// LOAD CONTENT SLIDERS

							if ($('#activity_screen-main').hasClass('social-cards')) {

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

								sequence1.afterCurrentFrameAnimatesOut = function(){
									// REFRESH ISLAND AD

									var adkeywords = $('#activity_screen-main').data("adkw");

									if(!$('#activity_screen-ad-island').hasClass('sponsored')){
										/*OAS_AD.asyncRefresh('island', {
											flex: false,
											keywords: adkeywords,
											container: document.getElementById('activity_screen-ad-island')
										});*/
									}

								  }

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

									if(!$('#activity_screen-ad-island').hasClass('sponsored')){
										// REFRESH ISLAND AD

										var adkeywords = $('#activity_screen-main').data("adkw");

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

							$(document).on( 'click', 'a.activity_screen-content-bottom-nav-prev', function() {

								slider1.goToPrevSlide();

								/*$('#activity_screen').animate({

									scrollTop: top

								}, 250);*/

								return false;

							});

							$(document).on( 'click', 'a.activity_screen-content-bottom-nav-next', function() {

								slider1.goToNextSlide();

								/*$('#activity_screen').animate({

									scrollTop: 0

								}, 250);*/

								return false;

							});

							}


							// COLUMN RESIZE FUNCTIONS

							setTimeout(function() {

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

							}, 300);


						});

						});

						callback();

					}

					/*$(window).bind("popstate", function() {

						link = location.href;

						path = location.pathname;

						if((path != '/projects/oprah/') && (path != '/projects/oprah/index.php' )){

							loadContent(link);

						} else {

							$('body').removeClass('body-locked');
							$('#activity_screen-overlay').removeClass('is-open');
							$('#activity_screen').removeClass('is-open');

						}

					});*/

					History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate

						var State = History.getState(); // Note: We are using History.getState() instead of event.state

						link = location.href;

						path = location.pathname;

						if((path != '/projects/oprah/') && (path != '/projects/oprah/index.php' )){

						$('#activity_screen-loading').fadeIn(250);
						$('#activity_screen-loading-bg').fadeIn(250);

						loadContent(link, function(){

							$('#activity_screen-loading').fadeOut(250);
							$('#activity_screen-loading-bg').fadeOut(250);

						});

						} else {

							$('body').removeClass('body-locked');
							$('#activity_screen-overlay').removeClass('is-open');
							$('#activity_screen').removeClass('is-open');

						}

					});


				} else {

					// JAVASCRIPT FOR HTML4 BROWSERS


						$('.calendar-next').click(function(){

						if ($(this).hasClass('no-more')){

							return false;

						}

						else{

							_href = $(this).attr("href");

							var currentCalendarTitle = $('#current-calendar-month').attr('title');

							loadCalendar(_href, function(){

								if (currentCalendarTitle === "December"){
									$('#calendar-month-title').text('January');
									$('.calendar-month-prev-text').text(' December');
									$('.calendar-month-next-text').text('February ');
								}
								else if (currentCalendarTitle === "November"){
									$('#calendar-month-title').text('December');
									$('.calendar-month-prev-text').text(' November');
									$('.calendar-month-next-text').text('January ');
								}
								else if (currentCalendarTitle === "October"){
									$('#calendar-month-title').text('November');
									$('.calendar-month-prev-text').text(' October');
									$('.calendar-month-next-text').text('December ');
								}
								else if (currentCalendarTitle === "September"){
									$('#calendar-month-title').text('October');
									$('.calendar-month-prev-text').text(' September');
									$('.calendar-month-next-text').text('November ');
								}
								else if (currentCalendarTitle === "August"){
									$('#calendar-month-title').text('September');
									$('.calendar-month-prev-text').text(' August');
									$('.calendar-month-next-text').text('October ');
								}
								else if (currentCalendarTitle === "July"){
									$('#calendar-month-title').text('August');
									$('.calendar-month-prev-text').text(' July');
									$('.calendar-month-next-text').text('September ');
								}
								else if (currentCalendarTitle === "June"){
									$('#calendar-month-title').text('July');
									$('.calendar-month-prev-text').text(' June');
									$('.calendar-month-next-text').text('August ');
								}
								else if (currentCalendarTitle === "May"){
									$('#calendar-month-title').text('June');
									$('.calendar-month-prev-text').text(' May');
									$('.calendar-month-next-text').text('July ');
								}
								else if (currentCalendarTitle === "April"){
									$('#calendar-month-title').text('May');
									$('.calendar-month-prev-text').text(' April');
									$('.calendar-month-next-text').text('June ');
								}
								else if (currentCalendarTitle === "March"){
									$('#calendar-month-title').text('April');
									$('.calendar-month-prev-text').text(' March');
									$('.calendar-month-next-text').text('May ');
								}
								else if (currentCalendarTitle === "February"){
									$('#calendar-month-title').text('March');
									$('.calendar-month-prev-text').text(' February');
									$('.calendar-month-next-text').text('April ');
								}
								else if (currentCalendarTitle === "January"){
									$('#calendar-month-title').text('February');
									$('.calendar-month-prev-text').text(' January');
									$('.calendar-month-next-text').text('March ');
								}
							});


							return false;

						}

					});

					$('.calendar-prev').click(function(){

						if ($(this).hasClass('no-more')){

							return false;

						}

						else{

							_href = $(this).attr("href");

							var currentCalendarTitle = $('#current-calendar-month').attr('title');

							loadCalendar(_href, function(){

								if (currentCalendarTitle === "December"){
									$('#calendar-month-title').text('November');
									$('.calendar-month-prev-text').text(' October');
									$('.calendar-month-next-text').text('December ');
								}
								else if (currentCalendarTitle === "November"){
									$('#calendar-month-title').text('October');
									$('.calendar-month-prev-text').text(' September');
									$('.calendar-month-next-text').text('November ');
								}
								else if (currentCalendarTitle === "October"){
									$('#calendar-month-title').text('September');
									$('.calendar-month-prev-text').text(' August');
									$('.calendar-month-next-text').text('October ');
								}
								else if (currentCalendarTitle === "September"){
									$('#calendar-month-title').text('August');
									$('.calendar-month-prev-text').text(' July');
									$('.calendar-month-next-text').text('September ');
								}
								else if (currentCalendarTitle === "August"){
									$('#calendar-month-title').text('July');
									$('.calendar-month-prev-text').text(' June');
									$('.calendar-month-next-text').text('August ');
								}
								else if (currentCalendarTitle === "July"){
									$('#calendar-month-title').text('June');
									$('.calendar-month-prev-text').text(' May');
									$('.calendar-month-next-text').text('July ');
								}
								else if (currentCalendarTitle === "June"){
									$('#calendar-month-title').text('May');
									$('.calendar-month-prev-text').text(' April');
									$('.calendar-month-next-text').text('June ');
								}
								else if (currentCalendarTitle === "May"){
									$('#calendar-month-title').text('April');
									$('.calendar-month-prev-text').text(' March');
									$('.calendar-month-next-text').text('May ');
								}
								else if (currentCalendarTitle === "April"){
									$('#calendar-month-title').text('March');
									$('.calendar-month-prev-text').text(' February');
									$('.calendar-month-next-text').text('April ');
								}
								else if (currentCalendarTitle === "March"){
									$('#calendar-month-title').text('February');
									$('.calendar-month-prev-text').text(' January');
									$('.calendar-month-next-text').text('March ');
								}
								else if (currentCalendarTitle === "February"){
									$('#calendar-month-title').text('January');
									$('.calendar-month-prev-text').text(' December');
									$('.calendar-month-next-text').text('February ');
								}
								else if (currentCalendarTitle === "January"){
									$('#calendar-month-title').text('December');
									$('.calendar-month-prev-text').text(' November');
									$('.calendar-month-next-text').text('January ');
								}
							});

							return false;

						}

					});

					// LOAD CALENDAR FUNCTION

					function loadCalendar(href, callback){

						var root = $('html, body');

						var navHeight = $('#primary-header').height();

						root.animate({
						  scrollTop: $('#calendar').offset().top - navHeight
						}, 250, function(){

							$('#calendar-body').fadeOut();
							$('#calendar-loading').fadeIn();

							$('.calendar-prev').addClass('no-more');
							$('.calendar-next').addClass('no-more');

							setTimeout( function(){

							$("#calendar-body").load( href, function() {

								$('#calendar-loading').fadeOut();
								$('#calendar-body').fadeIn();

								$('.date').each(function(){

									$(this).removeClass('current');

									if($(this).attr('id') == currentDay){
										$(this).addClass('current');
									}

								});

								var currentCalendarHref = $('#current-calendar-month').attr('href');
								var currentCalendarIndex = calendarFileIndex.indexOf(currentCalendarHref);

								var nextCalendarIndex = currentCalendarIndex + 1;
								var prevCalendarIndex = currentCalendarIndex - 1;

								var nextCalendarLink = calendarFileIndex[nextCalendarIndex];
								var prevCalendarLink = calendarFileIndex[prevCalendarIndex];

								if (typeof prevCalendarLink !== 'undefined' && prevCalendarLink !== null) {

									var url = prevCalendarLink;

									$('.calendar-prev').removeClass('no-more');
									$('.calendar-prev').attr('href', url);

								} else{

									$('.calendar-prev').addClass('no-more');

								}

								if (typeof nextCalendarLink !== 'undefined' && nextCalendarLink !== null) {

									var url = nextCalendarLink;

									$('.calendar-next').removeClass('no-more');
									$('.calendar-next').attr('href', url);

								} else{

									$('.calendar-next').addClass('no-more');

								}

							});

							callback();

							}, 1000 );

						});

					}


					$(document).on( 'click', 'a.date', function() {

						if($(this).hasClass('empty')){

							return false;

						}

						else if($(this).hasClass('inactive')){

							$('.modal-overlay').fadeIn(250);

							$('.modal-header').html('<span class="hidden-phone">Holiday Idea </span>Coming Soon');
							$('.modal-body').html('<strong>This day&rsquo;s idea is not yet available.</strong> Until then, please try our other great gifts, recipes and how-tos.');

							var modalPosition = $(window).scrollTop() + 150;
							$('.modal').show(0, function(){
								$('.modal').animate({top: modalPosition}, 0);
								setTimeout( function(){$('.modal').toggleClass('is-open');}, 250 );
							});

							return false;

						}

						else if($(this).hasClass('active')){

							var ua = navigator.userAgent.toLowerCase();
							var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
							if(!isAndroid) {

							_href = $(this).attr("href");

							window.location = _href;

							return false;

							}

						}

					});


				}

			});


			// NON-BROWSER-SPECIFIC JAVASCRIPT

			/*$('#activity_screen-day-close').click(function(){
				$('body').toggleClass('body-locked');
				$('#activity_screen-overlay').toggleClass('is-open');
				$('#activity_screen').toggleClass('is-open').delay(750).promise().done(function(){
					$("#activity_screen-main").html("");
					$("#activity_screen").fadeOut(0);
				});
				return false;
			});*/

