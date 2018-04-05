/*$(document).ready(function(){

	$('.share-link').click(function(){
	
		if ($(this).hasClass('share-on-facebook')){
			window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436');
			return false;
		}
		
		else if ($(this).hasClass('share-on-twitter')){
			window.open('https://twitter.com/home?status=' + encodeURIComponent(document.title) + '%20' + encodeURIComponent(location.href),'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
			return false;
		}
		
		else if ($(this).hasClass('share-on-pinterest')){
			function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)}
			return false;
		
		}	
		
	});

});*/

/*(function(){
	
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
	
		function isTouchDevice(){
			try{
				document.createEvent("TouchEvent");
				return true;
			}catch(e){
				return false;
			}
		}
	
		function touchScroll(id){
			if(isTouchDevice()){ //if touch events exist...
				var el=document.getElementById(id);
				var scrollStartPos=0;
	
				document.getElementById(id).addEventListener("touchstart", function(event) {
					scrollStartPos=this.scrollTop+event.touches[0].pageY;
					//event.preventDefault();
				},false);
	
				document.getElementById(id).addEventListener("touchmove", function(event) {
					this.scrollTop=scrollStartPos-event.touches[0].pageY;
					event.preventDefault();
				},false);
			}
		}
	
		//On page load
		touchScroll('activity_screen');
	
	}

})();*/

function shareHomeFacebook(){
	
	window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'popUpWindow','width=626,height=436');
	return false;

}

function shareHomeTwitter(){
	
	var title = $('#home-thumbnail img').attr('title');
	var desc = $('#home-thumbnail img').attr('alt');
	
	//var url = $('#home-thumbnail a').attr('href');

	window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent('http://www.oprah.com/newyear')+'&text='+encodeURIComponent(title)+'&hashtags=ThisYearIWill','popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	return false;
}

function shareHomePinterest(){
	
	var title = $('#home-thumbnail img').attr('title');
	var desc = $('#home-thumbnail img').attr('alt');
	var image = $('#home-thumbnail img').attr('src');

	window.open('http://pinterest.com/pin/create/button/?url='+encodeURIComponent(location.href)+'&media='+encodeURIComponent(image)+'&description='+encodeURIComponent(title),'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	return false;

}

function shareActivityFacebook(){
	
	window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),'popUpWindow','width=626,height=436');
	return false;

}

function shareActivityTwitter(){
	
    var text = $('#activity_screen-main').data("twitter-share-copy");
    var url = $('#activity_screen-main').data("share-url");

	window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text)+'&hashtags=ThisYearIWill','popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	return false;

}

function shareActivityPinterest(){


    var text = $('#activity_screen-main').data("pinterest-share-copy");
    var image = $('#activity_screen-main').data("thumbnail");

	window.open('http://pinterest.com/pin/create/button/?url='+encodeURIComponent(location.href)+'&media='+encodeURIComponent(image)+'&description='+encodeURIComponent(text),'popUpWindow','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	return false;

}

function showModalShare(){
				
	$('.modal-overlay').fadeIn(250);
	
	$('.modal-header').html('Share <span class="hidden-phone">With Friends</span>');
	$('.modal-body').html('<ul class="modal-share-links">\
			<li><a onClick="shareActivityFacebook(); return false;"><i class="symbol">&#xe027;</i><span class="hidden-phone"> Share on </span>Facebook</a></li>\
			<li><a onClick="shareActivityTwitter(); return false;"><i class="symbol">&#xe086;</i><span class="hidden-phone"> Tweet on </span>Twitter</a></li>\
			<li><a onClick="shareActivityPinterest(); return false;"><i class="symbol">&#xe064;</i><span class="hidden-phone"> Pin on </span>Pinterest</a></li>\
		</ul>');
						
	var modalPosition = $(window).scrollTop() + 50;
	
	$('.modal').show(0, function(){
		$('.modal').animate({top: modalPosition}, 0);
		setTimeout( function(){$('.modal').toggleClass('is-open');}, 300 );
	});
	
	return false;

}

$('#mobile-menu-button').click(function(){
	$('#primary-nav ul').slideToggle('slow');
	return false;
});	

// MODAL FUNCTIONS

$('.modal-close').click(function(){
	cancelModal();
	return false;
});

$('.modal-overlay').click(function(){
	cancelModal();
	return false;
});

function cancelModal(){
	$('.modal-overlay').fadeOut(250);
	$('.modal').toggleClass('is-open');
	setTimeout( function(){ $('.modal').hide(0); }, 250 );
}




(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
				
if (jQuery.browser.mobile != true){

	// Equal Column Heights Scripts
	
	$(window).load( function() {

		var $column = $('.activity_screen-main-content-column'),
			maxHeight = 0;
		var windowWidth = $(window).width();
		
		if (windowWidth <= 768){

			// Do nothing, if window is less than 768px wide
		
		} else{

			$column.each( function() {
				$(this).removeAttr('style');
				if($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				} 
			});
		
			$column.height(maxHeight);
		
		}
	
	});
	
	$(window).resize( function() {

		var $column = $('.activity_screen-main-content-column'),
			maxHeight = 0;
		
		var windowWidth = $(window).width();
		
		if (windowWidth <= 768){

			$column.height('auto');
		
		} else{

			$column.each( function() {
				$(this).removeAttr('style');
				if($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				} 
			});
		
			$column.height(maxHeight);
			
		}
	
	}).trigger('resize');
					
}

/*$('.date-inactive').click(function(){
  $('.modal-overlay').fadeIn(250);
  
  $('.modal-header').html('Activity Unavailable');
  $('.modal-body').html('<strong>The activity for this day is not yet available.</strong> We will release new activities every seven days. So make sure come back each week to participate in new activities!');
  
  var modalPosition = $(window).scrollTop() + 150;
  $('.modal').show(0, function(){
	  $('.modal').animate({top: modalPosition}, 0);
	  setTimeout( function(){$('.modal').toggleClass('is-open');}, 250 );
  });
  
  return false;
});*/


/*$(window).scroll( function() {
		  
	stickyDiv($("#activity_screen-ad-island"), $("#primary-header").height());
	
});*/


$(function() {  
		
	// BEGIN Navigation
	var $root = $('html, body');
	$('a.scroll').click(function() {
	  var href = $.attr(this, 'href');
	  var navHeight = $('#primary-header').height();
	  $root.animate({
		scrollTop: $(href).offset().top - navHeight
	  }, 500 );
	  return false;
	});
});

$(function() {  
	// BEGIN Navigation
	$('a.activity-scroll').click(function() {
	  $('#activity_screen').animate({
		scrollTop: 0
	  }, 500 );
	  return false;
	});

});
