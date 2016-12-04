<script>

$(document).ready(function()
{

/*========== DESIGN TEAM 2 SLIDER ==========*/
	
	$(function(){
	  	$('#design_team2_gallery').bxSlider({
		pager: true,
		prevSelector: '#design_team2_gallery_prev',
		prevImage: 'images/down_arrow_circle_border.png',
		nextSelector: '#design_team2_gallery_next',
		nextImage: 'images/down_arrow_circle_border.png',
		buildPager: function(slideIndex){
		  switch (slideIndex){
			case 0:
			  return '<a href="#"></a>';
			case 1:
			  return '<a href="#"></a>';
			case 2:
			  return '<a href="#"></a>';
			case 3:
			  return '<a href="#"></a>';
		  }
		}
	  });
	});
    
});

</script>

<ul id="design_team2_gallery" class="team_gallery">
    <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide1_large.jpg"><img src="images/design_teams/MVVA/slides/MVVA_slide1.jpg" border="0" /></a></li>
    <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide2_large.jpg"><img src="images/design_teams/MVVA/slides/MVVA_slide2.jpg" border="0" /></a></li>
    <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide3_large.jpg"><img src="images/design_teams/MVVA/slides/MVVA_slide3.jpg" border="0" /></a></li>
    <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide4_large.jpg"><img src="images/design_teams/MVVA/slides/MVVA_slide4.jpg" border="0" /></a></li>
</ul>

<a id="design_team2_gallery_prev" class="prev"></a>
<a id="design_team2_gallery_next" class="next"></a>
