<!-- JQUERY -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
<!--<script src="https://github.com/Modernizr/Modernizr/raw/master/modernizr.js"></script>-->

<!-- ROTATE EFFECT -->
<script type="text/javascript" src="js/jquery.rotate.js"></script>

<!-- SCROLLING EFFECTS -->
<script type="text/javascript" src="js/jquery.localScroll.js"></script>
<script type="text/javascript" src="js/jquery.scrollTo.js"></script>
<script type="text/javascript" src="js/jquery.waypoints.js"></script>

<!-- SLIDERS -->
<script type="text/javascript" src="js/jquery.bxSlider.min.js"></script>

<!-- FANCY BOX -->
<!--<script type="text/javascript" src="js/fancybox/jquery.mousewheel-3.0.6.pack.js"></script>-->
<script type="text/javascript" src="js/fancybox/jquery.fancybox.pack.js?v=2.1.0"></script>
<script type="text/javascript" src="js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.3"></script>
<script type="text/javascript" src="js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.3"></script>
<script type="text/javascript" src="js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.6"></script>

<!-- GOOGLE MAPS -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/googlemaps.js"></script>

<!-- AJAX FORM SUBMIT -->
<script type="text/javascript" src="http://malsup.github.com/jquery.form.js"></script>
<script type="text/javascript" src="js/formSend.js"></script>

<!-- LOCAL JS -->
<script type="text/javascript" src="js/wallercreek2.js"></script>



<!-- GOOGLE ANALYTICS KEY -->

<script type="text/javascript">

$(document).ready(function()
{
	$("#toggle_exhibit_key").click(
		function () {

			var position = $("#toggle_exhibit_key").position();

			if(position.left == 385){
				$("#exhibit_key").animate({left:-385}, 1000, 'easeInOutExpo');
				$(this).animate({left:0}, 1000, 'easeInOutExpo');
				$(this).text("›");
				return false;
			}
			else if(position.left == 0){
				$("#exhibit_key").animate({left:0}, 1000, 'easeInOutExpo');
				$(this).animate({left:385}, 1000, 'easeInOutExpo');
				$(this).text("‹");
				return false;
			}
		}
	);
});

</script>



<!-- INITIALIZE FANCY BOX -->

<script type="text/javascript">
$(document).ready(function() {
	$(".fancybox").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});
</script>




<!-- GOOGLE ANALYTICS -->

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-34751916-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
