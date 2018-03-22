$(function() {
  // SCROLL TO SCRIPT
  $(window).load(function() {
    // Animate loader off screen
    $('#loader_image').delay(500).animate({top:-400}, 500);
    $('#loader_background').delay(750).slideUp(750, 'easeInOutExpo');
    $('#finalfour_logo1').delay(1500).animate({left:0}, 500);
    $('#finalfour_logo2').delay(2000).animate({height:169}, 500);
    $('#finalfour_logo3').delay(2500).animate({width:718}, 500);
    $('#scroll_down').delay(2750).fadeIn(500).animate({bottom:100}, 500);
  });

  // Scroll the whole document
  $.localScroll({
    target: 'body',
    offset: {
      top: -70,
      left: 0
    },
    //hash:true,
    duration: 1000,
    easing: 'easeInOutExpo'
  });

  $('#scroll_down').hover(function() {
    //$('#intro').animate({height:'-=15'}, {duration: 300});
  }, function() {
      //$('#intro').animate({height:'+=15'}, {duration: 300});
  });

  $('#finalists').waypoint(function(event, direction) {
    if (direction === 'down') {
      $('#nav').addClass('fixed');
      $('#nav').removeClass('absolute');
      $('#nav_finalists').addClass('active');
      $('#header_finalists').slideDown(500);
      $('#finalists_slider_team1').fadeIn(500);
      $('#finalists_slider_team2').fadeIn(500);
      $('#finalists_slider_team3').fadeIn(500);
      $('#finalists_slider_team4').fadeIn(500);
      $('#finalfour_logo1').delay(0).animate({left:386}, 0);
      $('#finalfour_logo2').delay(0).animate({height:0}, 0);
      $('#finalfour_logo3').delay(0).animate({width:0}, 0);
      $('#scroll_down').delay(0).fadeOut(0).animate({bottom:130}, 0);
      //window.location.hash = 'finalists';
    } else if (direction === 'up') {
      $('#nav').removeClass('fixed');
      $('#nav').addClass('absolute');
      $('#nav_finalists').removeClass('active');
      //$('#header_finalists').slideUp(250);
      //$('#finalists_slider_team1').fadeOut(250);
      //$('#finalists_slider_team2').fadeOut(250);
      //$('#finalists_slider_team3').fadeOut(250);
      //$('#finalists_slider_team4').fadeOut(250);
      $('#finalfour_logo1').delay(0).animate({left:0}, 500);
      $('#finalfour_logo2').delay(500).animate({height:169}, 500);
      $('#finalfour_logo3').delay(1000).animate({width:718}, 500);
      $('#scroll_down').delay(1250).fadeIn(500).animate({bottom:100}, 500);
    }
  }, {
    offset: 70
  });

  $('#exhibits').waypoint(function(event, direction) {
    if (direction === 'down') {
      $('#nav_finalists').removeClass('active');
      $('#nav_exhibits').addClass('active');
    } else if (direction === 'up') {
      $('#nav_finalists').addClass('active');
      $('#nav_exhibits').removeClass('active');
    }
  }, {
    offset: 70
  });

  $('#events').waypoint(function(event, direction) {
    if (direction === 'down') {
      $('#nav_exhibits').removeClass('active');
      $('#nav_events').addClass('active');
    } else if (direction === 'up') {
      $('#nav_exhibits').addClass('active');
      $('#nav_events').removeClass('active');
    }
  }, {
    offset: 70
  });

  $('#finalists_slider').hover(function() {
      /*$('#finalists_slider_team1_bw').fadeOut(250);
      $('#finalists_slider_team2').animate({left:'40%'}, {duration: 'fast'});
      $('#finalists_slider_team3').animate({left:'60%'}, {duration: 'fast'});
      $('#finalists_slider_team4').animate({left:'80%'}, {duration: 'fast'});*/
  }, function() {
    $('#finalists_slider_team1_bw').fadeIn(250);
    $('#finalists_slider_team1_number').fadeIn(250);
    $('#finalists_slider_team2_bw').fadeIn(250);
    $('#finalists_slider_team2_number').fadeIn(250);
    $('#finalists_slider_team3_bw').fadeIn(250);
    $('#finalists_slider_team3_number').fadeIn(250);
    $('#finalists_slider_team4_bw').fadeIn(250);
    $('#finalists_slider_team4_number').fadeIn(250);
    $('#finalists_slider_team1').animate({left:'0%'}, 250);
    $('#finalists_slider_team2').animate({left:'20%'}, 250);
    $('#finalists_slider_team3').animate({left:'45%'}, 250);
    $('#finalists_slider_team4').animate({left:'70%'}, 250);
  });


  $('#finalists_slider_team1').hover(function() {
    $('#finalists_slider_team1_bw').fadeOut(250);
    $('#finalists_slider_team1_number').fadeOut(250);
    $('#finalists_slider_team2_bw').fadeIn(250);
    $('#finalists_slider_team2_number').fadeOut(250);
    $('#finalists_slider_team3_bw').fadeIn(250);
    $('#finalists_slider_team3_number').fadeOut(250);
    $('#finalists_slider_team4_bw').fadeIn(250);
    $('#finalists_slider_team4_number').fadeOut(250);
    $('#finalists_slider_team1').animate({left:'0%'}, 250);
    $('#finalists_slider_team2').animate({left:'40%'}, {duration: 'fast'});
    $('#finalists_slider_team3').animate({left:'60%'}, {duration: 'fast'});
    $('#finalists_slider_team4').animate({left:'80%'}, {duration: 'fast'});
  }, function() {
    /*$('#finalists_slider_team1_bw').fadeIn(250);
    $('#finalists_slider_team2').animate({left:'25%'}, 250);
    $('#finalists_slider_team3').animate({left:'50%'}, 250);
    $('#finalists_slider_team4').animate({left:'75%'}, 250);*/
  });

  $('#finalists_slider_team2').hover(
    function() {
      $('#finalists_slider_team2_bw').fadeOut(500);
      $('#finalists_slider_team2_number').fadeOut(250);
      $('#finalists_slider_team1_bw').fadeIn(250);
      $('#finalists_slider_team1_number').fadeOut(250);
      $('#finalists_slider_team3_bw').fadeIn(250);
      $('#finalists_slider_team3_number').fadeOut(250);
      $('#finalists_slider_team4_bw').fadeIn(250);
      $('#finalists_slider_team4_number').fadeOut(250);
      $('#finalists_slider_team1').animate({left:'0%'}, 250);
      $('#finalists_slider_team2').animate({left:'15%'}, 250);
      $('#finalists_slider_team3').animate({left:'55%'}, 250);
      $('#finalists_slider_team4').animate({left:'75%'}, 250);
    }, function() {
      /*$('#finalists_slider_team2_bw').fadeIn(500);
      $('#finalists_slider_team2').animate({left:'25%'}, 250);
      $('#finalists_slider_team3').animate({left:'50%'}, 250);
      $('#finalists_slider_team4').animate({left:'75%'}, 250);*/
    }
  );

  $('#finalists_slider_team3').hover(function() {
    $('#finalists_slider_team3_bw').fadeOut(500);
    $('#finalists_slider_team3_number').fadeOut(250);
    $('#finalists_slider_team2_bw').fadeIn(250);
    $('#finalists_slider_team2_number').fadeOut(250);
    $('#finalists_slider_team1_bw').fadeIn(250);
    $('#finalists_slider_team1_number').fadeOut(250);
    $('#finalists_slider_team4_bw').fadeIn(250);
    $('#finalists_slider_team4_number').fadeOut(250);
    $('#finalists_slider_team1').animate({ left: '0%' }, 250);
    $('#finalists_slider_team2').animate({ left: '10%' }, 250);
    $('#finalists_slider_team3').animate({ left: '35%' }, 250);
    $('#finalists_slider_team4').animate({ left: '75%' }, 250);
  }, function() {
    /*$('#finalists_slider_team3_bw').fadeIn(500);
    $('#finalists_slider_team2').animate({left:'25%'}, 250);
    $('#finalists_slider_team3').animate({left:'50%'}, 250);
    $('#finalists_slider_team4').animate({left:'75%'}, 250);*/
  });

  $('#finalists_slider_team4').hover(function() {
    $('#finalists_slider_team4_bw').fadeOut(500);
    $('#finalists_slider_team4_number').fadeOut(250);
    $('#finalists_slider_team2_bw').fadeIn(250);
    $('#finalists_slider_team2_number').fadeOut(250);
    $('#finalists_slider_team3_bw').fadeIn(250);
    $('#finalists_slider_team3_number').fadeOut(250);
    $('#finalists_slider_team1_bw').fadeIn(250);
    $('#finalists_slider_team1_number').fadeOut(250);
    $('#finalists_slider_team1').animate({ left: '0%' }, 250);
    $('#finalists_slider_team2').animate({ left: '10%' }, 250);
    $('#finalists_slider_team3').animate({ left: '30%' }, 250);
    $('#finalists_slider_team4').animate({ left: '50%' }, 250);
  }, function() {
    /*$('#finalists_slider_team4_bw').fadeIn(500);
    $('#finalists_slider_team2').animate({left:'25%'}, 250);
    $('#finalists_slider_team3').animate({left:'50%'}, 250);
    $('#finalists_slider_team4').animate({left:'75%'}, 250);*/
  });

  $('#finalists_slider_team1').click(function() {
    //$('#dialog').fadeIn(250);
    //$('#coming_soon').delay(250).animate({top:150}, 500);
    //return false;
    $('#design_team1_details').fadeIn(500);
    $('#next_team').fadeIn(500);
    $('#prev_team').fadeIn(500);
    $('#design_team2_details').fadeOut(500);
    $('#design_team3_details').fadeOut(500);
    $('#design_team4_details').fadeOut(500);
    $('#finalists_subhead').fadeOut(500);
    $.scrollTo('#team_details', 500, { offset: -50 }, 'easeInOutExpo');
    $('#team1_gallery_container').load('team1_gallery.html');
    $('#prev_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 3 Name
    $('#next_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 1 Name
  });

  $('#finalists_slider_team2').click(function() {
    //$('#dialog').fadeIn(250);
    //$('#coming_soon').delay(250).animate({top:150}, 500);
    //return false;
    $('#design_team2_details').fadeIn(500);
    $('#next_team').fadeIn(500);
    $('#prev_team').fadeIn(500);
    $('#design_team1_details').fadeOut(500);
    $('#design_team3_details').fadeOut(500);
    $('#design_team4_details').fadeOut(500);
    $('#finalists_subhead').fadeOut(500);
    $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
    $('#team2_gallery_container').load('team2_gallery.html');
    $('#prev_team .text').text('CMG and Public Architecture'); //Team 3 Name
    $('#next_team .text').text('Turenscape and Lake | Flato Architects'); //Team 1 Name
  });

  $('#finalists_slider_team3').click(function() {
    //$('#dialog').fadeIn(250);
    //$('#coming_soon').delay(250).animate({top:150}, 500);
    //return false;
    $('#design_team3_details').fadeIn(500);
    $('#next_team').fadeIn(500);
    $('#prev_team').fadeIn(500);
    $('#design_team1_details').fadeOut(500);
    $('#design_team2_details').fadeOut(500);
    $('#design_team4_details').fadeOut(500);
    $('#finalists_subhead').fadeOut(500);
    $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
    $('#team3_gallery_container').load('team3_gallery.html');
    $('#prev_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 3 Name
    $('#next_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 1 Name
  });

  $('#finalists_slider_team4').click(function() {
    //$('#dialog').fadeIn(250);
    //$('#coming_soon').delay(250).animate({top:150}, 500);
    //return false;
    $('#design_team4_details').fadeIn(500);
    $('#next_team').fadeIn(500);
    $('#prev_team').fadeIn(500);
    $('#design_team1_details').fadeOut(500);
    $('#design_team2_details').fadeOut(500);
    $('#design_team3_details').fadeOut(500);
    $('#finalists_subhead').fadeOut(500);
    $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
    $('#team4_gallery_container').load('team4_gallery.html');
    $('#prev_team .text').text('Turenscape + Lake|Flato Architects'); //Team 3 Name
    $('#next_team .text').text('CMG and Public Architecture'); //Team 1 Name
  });

  $('.dialog_close').click(function() {
    $('#dialog').animate({ top: -500}, 500);
    $('#dialog_outer').delay(500).fadeOut(250);
    return false;
  });

  $('#prev_team').click(function() {
    if ($('#design_team1_details').css('display') != 'none') {
      $('#design_team1_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team4_details').fadeIn(500);
      $('#team4_gallery_container').load('team4_gallery.html');
      $('#prev_team .text').text('Turenscape + Lake|Flato Architects'); //Team 3 Name
      $('#next_team .text').text('CMG and Public Architecture'); //Team 1 Name
    } else if ($('#design_team2_details').css('display') != 'none') {
      $('#design_team2_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team1_details').fadeIn(500);
      $('#team1_gallery_container').load('team1_gallery.html');
      $('#prev_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 3 Name
      $('#next_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 1 Name
    } else if ($('#design_team3_details').css('display') != 'none') {
      $('#design_team3_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team2_details').fadeIn(500);
      $('#team2_gallery_container').load('team2_gallery.html');
      $('#prev_team .text').text('CMG and Public Architecture'); //Team 3 Name
      $('#next_team .text').text('Turenscape and Lake | Flato Architects'); //Team 1 Name
    } else if ($('#design_team4_details').css('display') != 'none') {
      $('#design_team4_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team3_details').fadeIn(500);
      $('#team3_gallery_container').load('team3_gallery.html');
      $('#prev_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 3 Name
      $('#next_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 1 Name
    }
  });

  $('#next_team').click(function() {
    if ($('#design_team1_details').css('display') != 'none') {
      $('#design_team1_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team2_details').fadeIn(500);
      $('#team2_gallery_container').load('team2_gallery.html');
      $('#prev_team .text').text('CMG and Public Architecture'); //Team 3 Name
      $('#next_team .text').text('Turenscape + Lake|Flato Architects'); //Team 1 Name
    } else if ($('#design_team2_details').css('display') != 'none') {
      $('#design_team2_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team3_details').fadeIn(500);
      $('#team3_gallery_container').load('team3_gallery.html');
      $('#prev_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 3 Name
      $('#next_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 1 Name
    } else if ($('#design_team3_details').css('display') != 'none') {
      $('#design_team3_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team4_details').fadeIn(500);
      $('#team4_gallery_container').load('team4_gallery.html');
      $('#prev_team .text').text('Turenscape and Lake | Flato Architects'); //Team 3 Name
      $('#next_team .text').text('CMG and Public Architecture'); //Team 1 Name
    } else if ($('#design_team4_details').css('display') != 'none') {
      $('#design_team4_details').fadeOut(500);
      $.scrollTo('#team_details', 500, {offset:-50}, 'easeInOutExpo');
      $('#design_team1_details').fadeIn(500);
      $('#team1_gallery_container').load('team1_gallery.html');
      $('#prev_team .text').text('Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects'); //Team 3 Name
      $('#next_team .text').text('Michael Van Valkenburgh Associates, Inc. and Thomas Phifer & Partners'); //Team 1 Name
    }
  });

  $('#team_details').waypoint(function(event, direction) {
    if (direction === 'down') {
      $('#next_team').fadeIn(0);
      $('#prev_team').fadeIn(0);
    } else if (direction === 'up') {
      $('#next_team').fadeOut(0);
      $('#prev_team').fadeOut(0);
    }
  }, {
    offset: 70
  });

  $('#toggle_exhibit_key').click(function() {
    var position = $('#toggle_exhibit_key').position();

    if (position.left == 385) {
      $('#exhibit_key').animate({ left: -385 }, 1000, 'easeInOutExpo');
      $(this).animate({ left: 0 }, 1000, 'easeInOutExpo');
      $(this).text('›');
      return false;
    } else if (position.left == 0) {
      $('#exhibit_key').animate({left:0}, 1000, 'easeInOutExpo');
      $(this).animate({left:385}, 1000, 'easeInOutExpo');
      $(this).text('‹');
      return false;
    }
  });

  // RESIZE SECTIONS
  var height = $(window).height();
  //$('#finalists').css('min-height', height);
  $('#intro').height($(window).height() - 70);

  $(window).resize(function() {
    //var height2 = $(window).height();
    //$('#finalists').css('min-height', height2);  // Eliminate the heights value

    var height_less2 = $(window).height() - 70;
    $('#intro').css('height', height_less2);  // Eliminate the heights value
  });

  $('#event1').hover(function() {
    $('#event1_details').fadeIn(50);
  }, function() {
    $('#event1_details').fadeOut(50);
  });

  $('#event2').hover(function() {
    $('#event2_details').fadeIn(50);
  }, function() {
    $('#event2_details').fadeOut(50);
  });

  $('#event3').hover(function() {
    $('#event3_details').fadeIn(50);
  }, function() {
    $('#event3_details').fadeOut(50);
  });

  $('#event4').hover(function() {
    $('#event4_details').fadeIn(50);
  }, function() {
    $('#event4_details').fadeOut(50);
  });

  $('.board_inner').mousedown(function() {
    $('.board_inner li').addClass('active');
  });

  $('.board_inner').mouseup(function() {
    $('.board_inner li').removeClass('active');
  });

  $('.board_inner').draggable({
    axis: 'x',
    containment: [-2502, 0, 132, 0]
  });

  // DESIGN TEAM 1 SLIDER
  $('#events_gallery').bxSlider({
    controls: false,
    pager: false,
    prevSelector: '#events_gallery_prev',
    prevImage: 'images/down_arrow_circle_border.png',
    nextSelector: '#events_gallery_next',
    nextImage: 'images/down_arrow_circle_border.png'
  });

  $('#events_slider').bxSlider({
    pager: true,
    pagerSelector: '#events_slider_thumbs_container',
    prevSelector: '#events_slider_prev',
    prevImage: 'images/events_slider_prev.png',
    nextSelector: '#events_slider_next',
    nextImage: 'images/events_slider_next.png',
    buildPager: function(slideIndex) {
      switch (slideIndex){
        case 0:
          return '<a href="" class="events_slider_thumb"></a>';
        case 1:
          return '<a href="" class="events_slider_thumb"></a>';
        case 2:
          return '<a href="" class="events_slider_thumb"></a>';
        case 3:
          return '<a href="" class="events_slider_thumb"></a>';
      }
    }
  });

  // FANCY BOX
  $('.fancybox').fancybox();
});
