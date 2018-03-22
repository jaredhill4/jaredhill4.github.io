<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>The Waller Creek Conservancy Design Competition Final Four</title>

<? include ("includes/resources2.php"); ?>   

<style type="text/css">

#cssawards{
	position:absolute;
	top:0px;
	right:0px;
	z-index:555;
}

#cssawards a{
	width:115px;
	height:115px;
	text-indent:-8000px;
	display:block;
	background:url(cssawards_sotd_dark.png) no-repeat;
}

#cssdesignawards{
	position:absolute;
	top:0;
	right:0px;
	z-index:555;
}

#cssdesignawards a{
	width:68px;
	height:96px;
	text-indent:-8000px;
	display:block;
	background:url(http://www.cssdesignawards.com/award/css-design-awards-winner-right-black.png) no-repeat;
}

</style>

</head>

<body>

<div id="wrapper">


	<!-- START PRELOADER -->
    
	<div id="loader_background" style="overflow:hidden;"></div>
    
    <div id="loader_image">
		<img src="images/loading.gif" />
		<p><img src="images/loading_text.gif" /></p>
	</div> <!-- END PRELOADER -->
    
    
    
	<!-- START DIALOG BOX -->
    
	<div id="dialog_outer">
    	
        <div id="dialog">
        	<div id="dialog_title"><span id="dialog_title_inner"></span> <img src="images/close_button.png" class="dialog_close" style="float:right; height:20px; margin-top:5px; cursor:pointer;" /></div>
        	<div id="dialog_message">
                <p id="dialog_message_inner" style="margin-top:0;">The designs have not yet been released to the public. Please check back on <strong>Sept. 17</strong>, when we will unveil the renderings for each design team.</p>
                <p style="margin-bottom:0;"><a class="box lightbkg dialog_close">Close this Box</a></p>
            </div>
        </div>
        
        <div id="ajax_loading" style="display:none;"></div>
        
    </div>	<!-- END DIALOG BOX -->


    
    <!-- END PRELOADER -->
    
    
    <div id="intro" class="scrollSection">
    	
        <!--<div id="cssawards"><a class="moz-txt-link-rfc2396E" href="http://www.cssawards.net/waller-creek-final-four/" target="_blank">Waller Creek Final Four</a></div>-->
        <div id="cssdesignawards"><a href="http://www.cssdesignawards.com/css-web-design-award-winner.php?id=13735" target="_blank">Waller Creek Final Four</a></div>
    
    	<div id="intro_inner" style="margin-top:-200px;">
        	<div id="logo">
            	<div id="finalfour_logo1">
                	<img id="finalfour_logo1_image" src="images/logo/finalfour_logo1.gif"  />
            	</div>
            	<div id="finalfour_logo2">
                	<img src="images/logo/finalfour_logo2.png" />
				</div>
                <div id="finalfour_logo3">
                	<img src="images/logo/finalfour_logo3.png" />
				</div>
            </div> <!---------- END LOGO ---------->
        </div> <!---------- END INTRO INNER ---------->
		
        <img id="and_the_winner_is" src="images/and_the_winner_is.png" alt="And the Winner is..." style="display:none; position:absolute; bottom:240px; left:50%; margin-left:-400px;" />
        
        <a id="scroll_down" href="#winner"><img src="images/down_arrow_circle_border.png" /></a>
    
    	<div id="nav" class="absolute">
        	<div id="nav_inner">
            	<ul id="main_nav">
                	<li id="nav_home"><a href="#intro" class="logo_small"></a></li>
                	<li id="nav_winner"><a href="#winner">Winner</a></li>
                	<li id="nav_finalists"><a href="#finalists">Finalists</a></li>
                	<li id="nav_exhibits"><a href="#exhibits">Exhibits</a></li>
                	<li id="nav_events"><a href="#events">Events</a></li>
                	<li id="nav_contact"><a href="#footer">Contact</a></li>
                	<li></li>
                </ul>
                
                <ul id="social_media">
                	<li><a href="https://www.facebook.com/WallerCreekConservancy" target="_blank"><img src="images/facebook_icon.png" /></a></li>
                	<li><a href="https://twitter.com/austinwcc" target="_blank"><img src="images/twitter_icon.png" /></a></li>
                	<li><a href="http://wallercreek.org/blog/" target="_blank"><img src="images/blog_icon.png" /></a></li>
                	<li><a href="http://www.wallercreek.org" target="_blank" style="color:#FFF;">Waller Creek Home &rsaquo;</a></li>
                </ul>
            </div> <!---------- END NAV INNER ---------->
        
        </div> <!---------- END NAV ---------->

    </div> <!---------- END INTRO SECTION ---------->



	<!---------- BEGIN WINNER SECTION ---------->

<div id="winner" class="scrollSection" style="text-shadow:1px 1px rgb(255,255,255); padding-bottom:0;">
    
        <h1 id="header_exhibitions" style="text-align:center;"><img src="images/header_winner.png" /></h1>
        <h3 style="text-align:center; font-size:26px; font-weight:500; color:rgb(111,159,217);">Michael Van Valkenburgh Associates, Inc. and Thomas Phifer &amp; Partners</h3>
        
        <br clear="all" />
         
       	<script>

		$(document).ready(function()
		{
		
		/*========== DESIGN TEAM 2 SLIDER ==========*/
			
			$(function(){
				$('#winner_gallery').bxSlider({
				pager: true,
				pagerSelector: '#winner_pager',
				prevSelector: '#winner_gallery_prev',
				prevImage: 'images/down_arrow_circle_border.png',
				nextSelector: '#winner_gallery_next',
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
        <div id="winner_gallery_container">
            <ul id="winner_gallery" class="winner_gallery">
                <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide1_large.jpg"><img src="images/winner/slides/winner_slide1.jpg" border="0" /></a></li>
                <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide2_large.jpg"><img src="images/winner/slides/winner_slide2.jpg" border="0" /></a></li>
                <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide3_large.jpg"><img src="images/winner/slides/winner_slide3.jpg" border="0" /></a></li>
                <li><a class="fancybox" rel="MVVA" href="images/design_teams/MVVA/slides/MVVA_slide4_large.jpg"><img src="images/winner/slides/winner_slide4.jpg" border="0" /></a></li>
            </ul>
            
            <div id="winner_pager"></div>
            <a id="winner_gallery_prev" class="prev"></a>
            <a id="winner_gallery_next" class="next"></a>
		</div>
        
        
        <!---------- BEGIN CONTAINER ---------->
        
        <br clear="all" />
        
		<div class="container" style="position:relative;">
        	
            <!---------- BEGIN WINNER DETAILS ---------->
            
            <div id="winner_details" style="float:left;">
				              
                <p style="font-size:22px;">
                <a href="downloads/MVVA_Design_Concept_Summary.pdf" class="download_summary" target="_blank" style="float:right; width:280px; margin-left:20px; border:solid 1px rgb(80,145,205); border-radius:5px;">
                    <img src="images/download_icon.png" />
                    Download the Design Concept Summary
				</a> 
                The MVVA Team, led by Michael Van Valkenburgh and Thomas Phifer, brings together professionals aiming to, "create an exciting and humane landscape that will be critical to great city life in Austin."</p>
                <p>The team feels strongly that, "this project is far too complex to resolve with a single sweeping design gesture or by simplifying the creek to an idealized prior condition." They aim to, "seize this moment to create a place that is provocative, yet essentially Austinian in spirit by unleashing the dynamic beauty of a reinvented water course and infusing it with the right mix of economic and social attractors that will shape the city's evolving identity."</p>
                <h3 class="blue">Fully Integrated Design Team</h3>
                
                <div class="one-col left" style="width:320px;">
                    <ul>
                        <li>Michael Van Valkenburgh Associates</li>
                        <li>Thomas Phifer &amp; Partners</li>
                        <li>Greenberg Consultants</li>
                        <li>Ted Zoli – HNTB</li>
                        <li>Development Strategies</li>
                        <li>Metcalfe, Wolff, Stuart &amp; Williams LLP**</li>
                        
                    </ul>
                </div> <!----- END ONE COL LEFT ----->
                
                <div class="one-col middle" style="width:320px;">
                    <ul>
                        <li>LimnoTech*</li>
                        <li>Applied Ecological Services</li>
                        <li>ETM Associates LLC</li>
                        <li>Public Art Fund</li>
                        <li>Oscar Tuazon</li>
                        <li>Project Projects</li>
                    </ul>
                </div>
                
                <div class="one-col right" style="width:320px;">
                    <ul>
                        <li>Tillett Lighting Design</li>
                        <li>DWG**</li>
                        <li>Joshua Long**</li>
                        <li>Big Red Dog**</li>
                        <li>Davey Resource Group*</li>
                    </ul>
                    <p style="font-size:10px;">** An Austin, Texas, based firm<br /> 
                    * A satellite office in Austin, Texas.</p>
                </div><!----- END ONE COL RIGHT ----->
                
                <h3 class="blue">Team Concepts</h3>
                <p><strong>Drag the images below</strong> to the left/right to view all design concepts.</p>
                
            </div>
                        
		</div>
		
        <br clear="all" />
        
        <div class="board_container" style="width:100%;">
            <ul class="winner_board_inner custom_cursor">
                <li><img src="images/design_teams/MVVA/boards/MVVA_board1.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board2.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board3.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board4.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board5.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board6.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board7.jpg" /></li>
                <li><img src="images/design_teams/MVVA/boards/MVVA_board8.jpg" /></li>
            </ul>
        </div> <!----- END BOARD CONTAINER ----->
	
    </div> <!---------- END WINNER SECTION ---------->


	<!---------- BEGIN FINALISTS SECTION ---------->

	<div id="finalists" class="scrollSection">
    
    	<h1 id="header_finalists" style="text-align:center;"><a class="fancybox" rel="group" href="images/design_teams/CMG/slides/CMG_slide2.jpg"><img src="images/header_finalists.png" /></a></h1>
        
        <br clear="all" />
        
        <div id="finalists_slider">
            <ul>
                <li id="finalists_slider_team1">
                	<img id="finalists_slider_team1_color" class="finalists_slider_color_image" src="images/design_teams/CMG/CMG_intro.png" style="width:665px; height:404px; display:block;" />
                	<div class="finalists_slider_title" style="background:url(images/slider/finalists_slider_title_bkg1.png) repeat; position:absolute; bottom:0; left:0; padding:15px; color:#FFF; font-weight:300; font-size:18px; line-height:22px; text-shadow: 1px 1px rgb(80,145,205);">
                    	CMG and Public Architecture<br />
                        <a id="finalists_team1_more" class="box" style="margin-top:15px;">Learn More</a>
                    </div>
                    <img id="finalists_slider_team1_bw" class="finalists_slider_bw_image" src="images/design_teams/CMG/CMG_intro_bw.png" style="width:665; height:404px; display:block;" />
                	<img id="finalists_slider_team1_number" class="finalists_slider_number" src="images/slider/slider_team1_number.png" style="left:65px;" />
				</li>
                
                <li id="finalists_slider_team2">
                    <img src="images/winner_banner.png" style="position:absolute; left:0; top:0; z-index:999;" />
                    <img id="finalists_slider_team2_color" class="finalists_slider_color_image" src="images/design_teams/MVVA/MVVA_intro.png" style="width:665; height:404px; display:block;" />
                	<div class="finalists_slider_title" style="background:url(images/slider/finalists_slider_title_bkg.png) no-repeat bottom left; position:absolute; bottom:0; left:0; padding:15px 15px 15px 45px; color:#FFF; font-weight:300; font-size:18px; line-height:22px; text-shadow: 1px 1px rgb(80,145,205);">
                    	Michael Van Valkenburgh Associates,<br />Inc. and Thomas Phifer &amp; Partners<br />
                        <a id="finalists_team2_more"  class="box" style="margin-top:15px;">Learn More</a>
                    </div>
                    <img id="finalists_slider_team2_bw" class="finalists_slider_bw_image" src="images/design_teams/MVVA/MVVA_intro_bw.png" style="width:665px; height:404px; display:block;" />
                	<img id="finalists_slider_team2_number" class="finalists_slider_number" src="images/slider/slider_team2_number.png" />
                </li>
                
                <li id="finalists_slider_team3">
                	<img id="finalists_slider_team3_color" class="finalists_slider_color_image" src="images/design_teams/Turenscape/Turenscape_intro.png" style="width:665px; height:404px; display:block;" />
                	<div class="finalists_slider_title" style="background:url(images/slider/finalists_slider_title_bkg.png) no-repeat bottom left; position:absolute; bottom:0; left:0; padding:15px 15px 15px 40px; color:#FFF; font-weight:300; font-size:18px; line-height:22px; text-shadow: 1px 1px rgb(80,145,205);">
                    	Turenscape + Lake|Flato Architects<br />
                        <a id="finalists_team3_more"  class="box" style="margin-top:15px;">Learn More</a>
                    </div>
                    <img id="finalists_slider_team3_bw" class="finalists_slider_bw_image" src="images/design_teams/Turenscape/Turenscape_intro_bw.png" style="width:665px; height:404px; display:block;" />
                	<img id="finalists_slider_team3_number" class="finalists_slider_number" src="images/slider/slider_team3_number.png" />
                </li>
                <li id="finalists_slider_team4">
                	<img id="finalists_slider_team4_color" class="finalists_slider_color_image" src="images/design_teams/Workshop/Workshop_intro.png" style="width:665px; height:404px; display:block;" />
                	<div class="finalists_slider_title" style="background:url(images/slider/finalists_slider_title_bkg.png) no-repeat bottom left; position:absolute; bottom:0; left:0; padding:15px 15px 15px 55px; color:#FFF; font-weight:300; font-size:18px; line-height:22px; text-shadow: 1px 1px rgb(80,145,205);">
                    	Workshop: Ken Smith Landscape Architect,<br />Ten Eyck Landscape Architects,<br />and Rogers Marvel Architects<br />
                        <a id="finalists_team4_more"  class="box" style="margin-top:15px;">Learn More</a>
                    </div>
                    <img id="finalists_slider_team4_bw" class="finalists_slider_bw_image" src="images/design_teams/Workshop/Workshop_intro_bw.png" style="width:665px; height:404px; display:block;" />
                	<img id="finalists_slider_team4_number" class="finalists_slider_number" src="images/slider/slider_team4_number.png" />
               	</li>
            </ul>
        
        </div> <!---------- END FINALISTS SLIDER ---------->

        <div id="team_details" class="container" style="position:relative;">
			
            <br clear="all" />
        	
            <h3 id="finalists_subhead" style="text-align:center; color:#FFF;">
                Select a design team to review their project renderings and design concept summary.
            </h3>
            
            
            <!---------- TEAM 1 DETAILS ---------->
            
           
        	<div id="design_team1_details" class="design_team_details" style="display:none;">  
                
                <h2 class="design_team_name">
                    <a id="design_team1_close" onClick="$('#design_team1_details').fadeOut(500); $('#next_team').fadeOut(0); $('#prev_team').fadeOut(0); $('#finalists_subhead').fadeIn(500); $.scrollTo('#finalists', {duration:500, offset:-70});" class="design_team_close"><img src="images/close_button.png" /></a>
                    CMG and Public Architecture
                </h2>
                
                <!---------- TEAM 2 GALLERY CONTAINER ---------->
                
                <div id="team1_gallery_container" class="team_gallery_container"></div>
                
                <!---------- END TEAM 2 GALLERY CONTAINER ---------->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 style="margin-top:0;" class="blue">Team Description</h3>
                    <p style="font-size:22px;">The CMG and Public Architecture Team, led by Willett Moss and John Peterson, intends to create, "a landscape authentic in its manifestation of Austin's Character."</p>
                    <p>The team proposes, "a Score for Regeneration and Curation […] set upon a robust physical and ecological foundation." Along with their full team of specialists in, "immersive, digital, traditional and atypical engagement, [they] will make Waller Creek a new model for urban regeneration that is rooted in the culture of the city."</p>
                    <h3 class="blue">Fully Integrated Design Team</h3>
                    <div class="one-col left">
                        <ul>
                            <li>CMG</li>
                            <li>Public Architecture</li>
                            <li>Biohabitats</li>
                            <li>ARUP</li>
                            <li>Urban Design Group**</li>
                            <li>Hicks and Company**</li>
                            <li>Scott and Lauren Ogden*</li>
                            <li>Enotech Engineering**</li>
                            <li>Kimley-Horn**</li>
                            <li>FYOOG - Dan Cheetham**</li>
                            <li>Community Land Use and Economics Group</li>
                   		</ul>
                    </div> <!---------- END ONE COL LEFT ---------->
                    
                    <div class="one-col right">
                        <ul>
                            <li>ETM Associates</li>
                            <li>Capitol Market Research**</li>
                            <li>Art Alliance Austin**</li>
                            <li>Cheryl Haines and For-Site</li>
                            <li>Austin Community Design and Development Center**</li>
                            <li>Media and Place</li>
                            <li>Pentagram*</li>
                            <li>Future Cities Lab</li>
                            <li>Tatiana Bilbao, SC</li>
                   		</ul>
                        <p style="font-size:10px;">** An Austin, Texas, based firm<br /> 
                		* A satellite office in Austin, Texas.</p>
                    </div> <!---------- END ONE COL RIGHT ---------->
                    
                </div> <!---------- END TWO COL LEFT ---------->
                
                <div class="one-col right" style="margin-top:0;">
                    <a href="downloads/CMG+Public_Architecture_Design_Concept_Summary.pdf" class="download_summary" target="_blank" style="border-radius:5px 5px 0 0;">
                        <img src="images/download_icon.png" />
                        Download the Design Concept Summary
                    </a>
                    <div class="comment_form" style="border-radius:0 0 5px 5px;">
                        <h4>Public Comments</h4>
                        <p style="text-shadow:1px 1px rgb(255,255,255);">Public comments are now closed</p>
                        <!--<form name="team1" id="team1" action="feedback.php" method="post">
                            <input type="text" class="text" id="name1" name="name1" value="Full Name*" onFocus="if(this.value == 'Full Name*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Full Name*'; $(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <input type="text" class="text" id="phone1" name="phone1" value="Phone Number" onFocus="if(this.value == 'Phone Number') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Phone Number';}" />
                            <input type="text" class="text" id="email1" name="email1" value="Email Address*" onFocus="if(this.value == 'Email Address*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Email Address*'; $(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <textarea class="text" id="comments1" name="comments1" onFocus="if(this.value == 'Comments*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Comments*'; $(this).addClass('error');}else{$(this).removeClass('error');}">Comments*</textarea>
                            <input type="hidden" name="designer" id="designer" value="CMG" />
                            <input type="submit" class="submit" id="submit1" name="submit1" value="Submit Feedback" />
                        </form>-->
                        
                    </div> <!---------- END COMMENT FORM ---------->
                
                </div> <!---------- END ONE COL RIGHT ---------->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 class="blue">Team Concepts</h3>
                    <p><strong>Drag the images below</strong> to the left/right to view all design concepts.</p>
                </div> <!---------- END TWO COL LEFT ---------->
                
                <div class="board_container">
                	<ul class="board_inner custom_cursor">
                    	<li><img src="images/design_teams/CMG/boards/CMG_board1.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board2.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board3.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board4.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board5.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board6.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board7.jpg" /></li>
                    	<li><img src="images/design_teams/CMG/boards/CMG_board8.jpg" /></li>
                    </ul>
                
                </div> <!---------- END BOARD CONTAINER ---------->
            
       		</div> <!----- END TEAM 1 DETAILS ----->
            
            <!---------- TEAM 2 DETAILS ---------->
            
			<div id="design_team2_details" class="design_team_details" style="display:none;">  
                
                <h2 class="design_team_name">
                    <a href="#" id="design_team2_close" onClick="$('#design_team2_details').fadeOut(500); $('#next_team').fadeOut(0); $('#prev_team').fadeOut(0); $('#finalists_subhead').fadeIn(500); $.scrollTo('#finalists', {duration:500, offset:-70});" class="design_team_close"><img src="images/close_button.png" /></a>
                    Michael Van Valkenburgh Associates, Inc. and Thomas Phifer &amp; Partners
                </h2>
                
                <!---------- TEAM 2 GALLERY CONTAINER ---------->
                
                <div id="team2_gallery_container" class="team_gallery_container"></div>
                
                <!---------- END TEAM 2 GALLERY CONTAINER ---------->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 style="margin-top:0;" class="blue">Team Description</h3>
                    <p style="font-size:22px;">The MVVA Team, led by Michael Van Valkenburgh and Thomas Phifer, brings together professionals aiming to, "create an exciting and humane landscape that will be critical to great city life in Austin."</p>
                    <p>The team feels strongly that, "this project is far too complex to resolve with a single sweeping design gesture or by simplifying the creek to an idealized prior condition." They aim to, "seize this moment to create a place that is provocative, yet essentially Austinian in spirit by unleashing the dynamic beauty of a reinvented water course and infusing it with the right mix of economic and social attractors that will shape the city's evolving identity."</p>
                    <h3 class="blue">Fully Integrated Design Team</h3>
                    <div class="one-col left">
                        <ul>
                            <li>Michael Van Valkenburgh Associates</li>
                            <li>Thomas Phifer &amp; Partners</li>
                            <li>Greenberg Consultants</li>
                            <li>Ted Zoli – HNTB</li>
                            <li>Development Strategies</li>
                            <li>Metcalfe, Wolff, Stuart &amp; Williams LLP**</li>
                            <li>LimnoTech*</li>
                            <li>Applied Ecological Services</li>
                            <li>ETM Associates LLC</li>
                            <li>Public Art Fund</li>
                    	</ul>
                    </div> <!----- END ONE COL LEFT ----->
                    
                    <div class="one-col right">
                        <ul>
                            <li>Oscar Tuazon</li>
                            <li>Project Projects</li>
                            <li>Tillett Lighting Design</li>
                            <li>DWG**</li>
                            <li>Joshua Long**</li>
                            <li>Big Red Dog**</li>
                            <li>Davey Resource Group*</li>
                        </ul>
                    	<p style="font-size:10px;">** An Austin, Texas, based firm<br /> 
                		* A satellite office in Austin, Texas.</p>
                    </div><!----- END ONE COL RIGHT ----->
                    
                </div><!----- END TWO COL LEFT ----->
                
                <div class="one-col right" style="margin-top:0;">
                    <a href="downloads/MVVA_Design_Concept_Summary.pdf" class="download_summary" target="_blank" style="border-radius:5px 5px 0 0;">
                        <img src="images/download_icon.png" />
                        Download the Design Concept Summary
                    </a>
                    <div class="comment_form" style="border-radius:0 0 5px 5px;">
                        <h4>Public Comments</h4>
                        <p style="text-shadow:1px 1px rgb(255,255,255);">Public comments are now closed</p>
                        <!--<form name="team2" id="team2" action="feedback.php" method="post">
                            <input type="text" class="text" id="name2" name="name2" value="Full Name*" onFocus="if(this.value == 'Full Name*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Full Name*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <input type="text" class="text" id="phone2" name="phone2" value="Phone Number" onFocus="if(this.value == 'Phone Number') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Phone Number';}" />
                            <input type="text" class="text" id="email2" name="email2" value="Email Address*" onFocus="if(this.value == 'Email Address*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Email Address*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <textarea class="text" id="comments2" name="comments2" onFocus="if(this.value == 'Comments*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Comments*';$(this).addClass('error');}else{$(this).removeClass('error');}">Comments*</textarea>
                            <input type="hidden" name="designer" id="designer" value="MVVA" />
                            <input type="submit" class="submit" id="submit2" name="submit2" value="Submit Feedback" />
                        </form>-->
                        
                    </div> <!----- END COMMENT FORM ----->
                
                </div> <!----- END ONE COL RIGHT ----->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 class="blue">Team Concepts</h3>
                    <p><strong>Drag the images below</strong> to the left/right to view all design concepts.</p>
                </div> <!----- END TWO COL LEFT ----->
                
                <div class="board_container">
                	<ul class="board_inner custom_cursor">
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board1.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board2.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board3.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board4.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board5.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board6.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board7.jpg" /></li>
                    	<li><img src="images/design_teams/MVVA/boards/MVVA_board8.jpg" /></li>
                    </ul>
                </div> <!----- END BOARD CONTAINER ----->
            
       		</div> <!----- END TEAM 2 DETAILS ----->
            
            
			<!---------- TEAM 3 DETAILS ---------->
            
			<div id="design_team3_details" class="design_team_details" style="display:none;">  
                
                <h2 class="design_team_name">
                    <a id="design_team3_close" onClick="$('#design_team3_details').fadeOut(500); $('#next_team').fadeOut(0);  $('#prev_team').fadeOut(0); $('#finalists_subhead').fadeIn(500); $.scrollTo('#finalists', {duration:500, offset:-70});" class="design_team_close"><img src="images/close_button.png" /></a>
                    Turenscape + Lake|Flato Architects
                </h2>
                
                <!---------- TEAM 3 GALLERY CONTAINER ---------->
                
                <div id="team3_gallery_container" class="team_gallery_container"></div>
                
                <!---------- END TEAM 3 GALLERY CONTAINER ---------->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 style="margin-top:0;" class="blue">Team Description</h3>
                    <p style="font-size:22px;">The Turenscape + Lake|Flato Architects Team, led by Dr. Kongjian Yu and David Lake, will work to focus their team's, "diverse strengths on an inspiring vision during the competition and beyond."</p>
                    <p>The planning and design group will act as a "main stem" for this team, with "contributing tributaries" &mdash; ecology, public art, and lighting, storytelling, economic development and engineering &mdash; "feeding new ideas and insights into the planning and design main stem."</p>
                    
                    <h3 class="blue">Fully Integrated Design Team</h3>
                    <div class="one-col left">
                       	<ul>
                            <li>Turenscape</li>
                            <li>Lake|Flato Architects</li>
                            <li>SvR Design</li>
                            <li>Black &amp; Vernooy**</li>
                            <li>RVi Landscape Design**</li>
                            <li>Alta Planning + Design</li>
                            <li>Applied Ecological Services</li>
                            <!--<li>Steve Windhager</li>-->
                            <li>Santa Barbara Botanic Garden</li>
                            <li>Summit Envirosolutions</li>
                            <li>Lorna Jordan Studio</li>
                            <li>Leni Schwendinger Light Productions</li>
                        </ul>
                    </div><!---------- END ONE COL LEFT ---------->
                    
                    <div class="one-col right">
                    	<ul>
                            <li>Dyal &amp; Partners**</li>
                            <li>Siglo Group**</li>
                            <li>Civic Collaboration**</li>
                            <li>Juliet Whitsett Programs</li>
                            <li>Rose Urban Solutions</li>
                            <!--<li>Barelas Community Planning</li>-->
                            <li>Bunkhouse Austin**</li>
                            <li>Freese and Nichols, Inc.**</li>
                            <li>Architectural Engineers Collaborative**</li>
                            <li>Enotech Engineering**</li>
                    	</ul>
                        <p style="font-size:10px;">** An Austin, Texas, based firm<br /> 
                		* A satellite office in Austin, Texas.</p>
                    </div> <!---------- END ONE COL RIGHT ---------->
                </div> <!---------- END TWO COL ---------->
                
                <div class="one-col right" style="margin-top:0;">
                    <a href="downloads/Turenscape_Design_Concept_Summary.pdf" class="download_summary" target="_blank" style="border-radius:5px 5px 0 0;">
                        <img src="images/download_icon.png" />
                        Download the Design Concept Summary
                    </a>
                    <div class="comment_form" style="border-radius:0 0 5px 5px;">
                        <h4>Public Comments</h4>
                        <p style="text-shadow:1px 1px rgb(255,255,255);">Public comments are now closed</p>
                        <!--<form name="team3" id="team3" action="feedback.php" method="post">
                            <input type="text" class="text" id="name3" name="name3" value="Full Name*" onFocus="if(this.value == 'Full Name*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Full Name*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <input type="text" class="text" id="phone3" name="phone3" value="Phone Number" onFocus="if(this.value == 'Phone Number') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Phone Number';}" />
                            <input type="text" class="text" id="email3" name="email3" value="Email Address*" onFocus="if(this.value == 'Email Address*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Email Address*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <textarea class="text" id="comments3" name="comments3" onFocus="if(this.value == 'Comments*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Comments*';$(this).addClass('error');}else{$(this).removeClass('error');}">Comments*</textarea>
                            <input type="hidden" name="designer" id="designer" value="Turenscape" />
                            <input type="submit" class="submit" id="submit3" name="submit3" value="Submit Feedback" />
                        </form>-->
                        
                    </div> <!---------- END COMMENT FORM ---------->
                
                </div> <!---------- END ONE COL RIGHT ---------->
                
                <br clear="all" />
                <div class="two-col left">
                    <h3 class="blue">Team Concepts</h3>
                    <p><strong>Drag the images below</strong> to the left/right to view all design concepts.</p>
                </div> <!---------- END TWO COL LEFT ---------->
                
                <div class="board_container">
                	<ul class="board_inner custom_cursor">
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board1.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board2.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board3.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board4.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board5.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board6.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board7.jpg" /></li>
                    	<li><img src="images/design_teams/Turenscape/boards/Turenscape_board8.jpg" /></li>
                    </ul>
                </div> <!---------- END BOARD CONTAINER ---------->
            
       		</div> <!----- END TEAM 3 DETAILS ----->
            
            <!---------- TEAM 4 DETAILS ---------->
            
			<div id="design_team4_details" class="design_team_details" style="display:none;">  
                
                <h2 class="design_team_name">
                    <a id="design_team4_close" onClick="$('#design_team4_details').fadeOut(500); $('#next_team').fadeOut(0); $('#prev_team').fadeOut(0); $('#finalists_subhead').fadeIn(500); $.scrollTo('#finalists', {duration:500, offset:-70});" class="design_team_close"><img src="images/close_button.png" /></a>
                    Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects, and Rogers Marvel Architects
                </h2>
                
                <!---------- TEAM 4 GALLERY CONTAINER ---------->
                
                <div id="team4_gallery_container" class="team_gallery_container"></div>
                
                <!---------- END TEAM 4 GALLERY CONTAINER ---------->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 style="margin-top:0;" class="blue">Team Description</h3>
                    <p style="font-size:22px;">The KSLA, TELA, + RMA Team, led by Ken Smith, Christine Ten Eyck, Robert Rogers, and Jonathan Marvel, share how they are, "committed to creating a better functioning, dynamic and accessible open space system along Waller Creek."</p>
                    <p>The core team selected specialized consultants based on expertise within ecology, art, wayfinding and lighting, hydrology, engineering and compliance, outreach, programming and development, and costing and budgets. The team plans to tackle six goals: 1) respect the creek &mdash; it's beautiful, make it better, 2) strengthen connections to the neighborhoods, 3) Make the creek a catalyst for redevelopment, 4) Create a great linear experience, 5) Capture Austin's authenticity, and 6) Be socially, environmentally and economically responsible.</p>
                    
                    <h3 class="blue">Fully Integrated Design Team</h3>
                    <div class="one-col left">
                        <ul>
                            <li>Workshop: Ken Smith Landscape Architects</li>
                            <li>Rogers Marvel Architects</li>
                            <li>Ten Eyck Landscape Architects**</li>
                            <li>Biohabitats</li>
                            <li>Pentagram*</li>
                            <li>Leni Schwendinger Light Productions</li>
                            <li>Merry Norris Contemporary Art</li>
                            <li>Magnusson Klemencic Associates</li>
                            <li>Jose I. Guerra, Inc.**</li>
                    	</ul>
                    </div><!----- END ONE COLUMN LEFT ----->
                    
                    <div class="one-col right">
                        <ul>
                            <li>URS*</li>
                            <li>Acoustic Dimensions</li>
                            <li>Altura Solutions **</li>
                            <li>Adisa Communications**</li>
                            <li>Biederman Redevelopment Ventures</li>
                            <li>The Eisen Group</li>
                            <li>Davis Langdon, an AECOM Company</li>
                    	</ul>
                        <p style="font-size:10px;">** An Austin, Texas, based firm<br /> 
                		* A satellite office in Austin, Texas.</p>
                    </div><!----- END ONE COLUMN RIGHT ----->
                
                </div> <!----- END TWO COLUMN LEFT ----->
                
                <div class="one-col right" style="margin-top:0;">
                    <a href="downloads/Workshop_Design_Concept_Summary.pdf" class="download_summary" target="_blank" style="border-radius:5px 5px 0 0;">
                        <img src="images/download_icon.png" />
                        Download the Design Concept Summary
                    </a>
                    
                    <div class="comment_form" style="border-radius:0 0 5px 5px;">
                        <h4>Public Comments</h4>
                        <p style="text-shadow:1px 1px rgb(255,255,255);">Public comments are now closed</p>
                        <!--<form name="team4" id="team4" action="feedback.php" method="post">
                            <input type="text" class="text" id="name4" name="name4" value="Full Name*" onFocus="if(this.value == 'Full Name*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Full Name*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <input type="text" class="text" id="phone4" name="phone4" value="Phone Number" onFocus="if(this.value == 'Phone Number') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Phone Number';}" />
                            <input type="text" class="text" id="email4" name="email4" value="Email Address*" onFocus="if(this.value == 'Email Address*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Email Address*';$(this).addClass('error');}else{$(this).removeClass('error');}" />
                            <textarea class="text" id="comments4" name="comments4" onFocus="if(this.value == 'Comments*') { this.value = ''; }" onBlur="if(this.value == '') { this.value = 'Comments*';$(this).addClass('error');}else{$(this).removeClass('error');}">Comments*</textarea>
                            <input type="hidden" name="designer" id="designer" value="Workshop" />
                            <input type="submit" class="submit" id="submit4" name="submit4" value="Submit Feedback" />
                        </form>-->
                        
                    </div> <!----- END COMMENT FORM ----->
                
                </div> <!----- END ONE COLUMN RIGHT ----->
                
                <br clear="all" />
                
                <div class="two-col left">
                    <h3 class="blue">Team Concepts</h3>
                    <p><strong>Drag the images below</strong> to the left/right to view all design concepts.</p>
                </div> <!----- END TWO COLUMN ----->
                
                <div class="board_container">
                	<ul class="board_inner custom_cursor">
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board1.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board2.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board3.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board4.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board5.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board6.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board7.jpg" /></li>
                    	<li><img src="images/design_teams/Workshop/boards/Workshop_board8.jpg" /></li>
                    </ul>
                </div> <!----- END BOARD CONTAINER ----->
            
       		</div> <!----- END TEAM 4 DETAILS ----->

        </div> <!---------- END TEAM DETAILS ---------->
        
        <a id="next_team" style="display:none;">
              <table cellpadding="0" cellspacing="0" border="0">
              <tr valign="middle">
                  <td border="0"><div class="arrow"></div></td>
                  <td border="0"><div class="text" style="color:#FFF;">Michael Van Valkenburgh Associates, Inc. and Thomas Phifer &amp; Partners</div></td>
              </tr>
              </table>
          </a>
          
          <a id="prev_team" style="display:none;">
              <table cellpadding="0" cellspacing="0" border="0">
                  <tr valign="middle">
                      <td border="0"><div class="text" style="color:#FFF;">Michael Van Valkenburgh Associates, Inc. and Thomas Phifer &amp; Partners</div></td>
                      <td border="0"><div class="arrow"></div></td>
                  </tr>
              </table>
          </a>
        
    </div> <!---------- END FINALISTS SECTION ---------->

	
    <!---------- BEGIN EXHIBITS SECTION ---------->
    
	<div id="exhibits" class="scrollSection" style="padding-bottom:0;">
    
        <h1 id="header_exhibitions" style="text-align:center;"><img src="images/header_exhibitions.png" /></h1>
        <h3 style="text-align:center;">Come see the designs up close at any one of the locations on the map below.</h3>
        <br clear="all" /> 
           	
		<!---------- TEAM 4 GALLERY CONTAINER ---------->
            
        <div id="exhibits_map"></div>
        
		<div class="exhibits_contents">
            <ul id="exhibit_key">
                <li id="map_link1"><a style="background-image:url(images/map_link_number1.png); background-repeat:no-repeat; background-position:20px center;"><strong>Laguna Gloria</strong><br /><i>Sept. 18&ndash;30 &mdash; COMPLETE</i></a></li>
                <li id="map_link2"><a style="background-image:url(images/map_link_number2.png); background-repeat:no-repeat; background-position:20px center;"><strong>University of Texas School of Architecture</strong><br /><i>Sept. 17&ndash;19 &mdash; COMPLETE</i></a></li>
                <li id="map_link3"><a style="background-image:url(images/map_link_number3.png); background-repeat:no-repeat; background-position:20px center;"><strong>City Hall</strong><br /><i>Sept. 20&ndash;21 &mdash; COMPLETE</i></a></li>
                <li id="map_link4"><a style="background-image:url(images/map_link_number4.png); background-repeat:no-repeat; background-position:20px center;"><strong>Bob Bullock Texas State History Museum</strong><br /><i>Sept. 22 &mdash; COMPLETE</i></a></li>
                <li id="map_link5"><a style="background-image:url(images/map_link_number5.png); background-repeat:no-repeat; background-position:20px center;"><strong>UMC Brackenridge Hospital</strong><br /><i>Sept. 23&ndash;24 &mdash; COMPLETE</i></a></li>
                <li id="map_link6"><a style="background-image:url(images/map_link_number6.png); background-repeat:no-repeat; background-position:20px center;"><strong>Blanton Museum of Art</strong><br /><i>Sept. 25&ndash;26 &mdash; COMPLETE</i></a></li>
                <li id="map_link7"><a style="background-image:url(images/map_link_number7.png); background-repeat:no-repeat; background-position:20px center;"><strong>Northwest Recreation Center</strong><br /><i>Sept. 27 &mdash; COMPLETE</i></a></li>
                <li id="map_link8"><a style="background-image:url(images/map_link_number8.png); background-repeat:no-repeat; background-position:20px center;"><strong>Pan American Recreation Center</strong><br /><i>Sept. 28&ndash;29 &mdash; COMPLETE</i></a></li>
                <!--<li id="map_link9"><a style="background-image:url(images/map_link_number9.png); background-repeat:no-repeat; background-position:20px center;"><strong>Sustainable Food Center Farmer's Market</strong><br /><i>September 29</i></a></li>-->
                <li id="map_link10"><a style="background-image:url(images/map_link_number9.png); background-repeat:no-repeat; background-position:20px center;"><strong>HOPE Farmer's Market</strong><br /><i>Sept. 30 &mdash; COMPLETE</i></a></li>
            </ul>
            <a href="#" id="toggle_exhibit_key" class="box lightbkg">&lsaquo;</a>
            
            <div id="map_controls" style="position:absolute; width:auto; top:230px; right:20px; background:rgb(111,159,217);">
                <a id="zoom_in" class="box lightbkg" style=""><img src="images/zoom_in.png" /></a><br />
                <a id="zoom_out" class="box lightbkg" style="border-top:1px solid rgb(80,145,205);"><img src="images/zoom_out.png" /></a><br />
                <a id="reset" class="box lightbkg" style="border-top:1px solid rgb(80,145,205);"><img src="images/reset.png" /></a>
            </div>
		
        </div>
	
    </div> <!---------- BEGIN EXHIBITS SECTION ---------->
    
    
    
    <!---------- BEGIN EVENTS SECTION ---------->
    
	<div id="events" class="scrollSection" style="padding-bottom:0;">
		
        <h1 id="header_events" style="text-align:center;"><img src="images/header_events.png" /></h1>
        
        <h3 style="text-align:center; color:#FFF;">A few important dates for you to remember. Hover over one to view details.</h3>

        <br clear="all" /> 

        <div id="events_inner">
            
            <div class="container">  
                
                <div id="event1" class="events_item" style="margin-left:0; margin-top:100px;">
                    <img src="images/completed_banner.png" style="position:absolute; top:0; left:0;" />
                    <span style="letter-spacing:5px;">9/17</span>
                    <p style="font-size:24px;">Final Four Design Concepts Unveiled</p>
                    <div id="event1_details" class="event_details">
                        <p style="margin-top:0;">Fusce mauris quam, auctor vitae pharetra in, pharetra at dolor. Donec in sapien vel est congue pellentesque et id nisl. Nulla dapibus luctus dolor, at pretium lacus sagittis nec. Quisque ultrices lorem ut enim ullamcorper a feugiat tellus pharetra.</p>
                        <p style="margin-top:0;">Pellentesque mollis semper nisl sit amet porta. Nulla sodales mauris vel erat mollis pulvinar. Nulla consectetur pharetra lorem vitae mollis.</p>
                    </div>
                </div>
                
                <div id="event2" class="events_item" style="margin-top:100px;">
                    <img src="images/completed_banner.png" style="position:absolute; top:0; left:0;" />
                    <span style="letter-spacing:5px;">9/17-30</span>
                    <p style="font-size:24px;">Public Exhibition of Design Concepts</p>
                    <div id="event2_details"class="event_details">
                        <p style="margin-top:0;">Fusce mauris quam, auctor vitae pharetra in, pharetra at dolor. Donec in sapien vel est congue pellentesque et id nisl. Nulla dapibus luctus dolor, at pretium lacus sagittis nec. Quisque ultrices lorem ut enim ullamcorper a feugiat tellus pharetra.</p>
                        <p style="margin-top:0;">Pellentesque mollis semper nisl sit amet porta. Nulla sodales mauris vel erat mollis pulvinar. Nulla consectetur pharetra lorem vitae mollis.</p>
                    </div>
                </div>
                
                <div id="event3" class="events_item" style="margin-top:100px;">
                    <img src="images/completed_banner.png" style="position:absolute; top:0; left:0;" />
                    <span style="letter-spacing:5px;">10/03</span>
                    <p style="font-size:24px;">City Hall<br />Presentation</p>
                    <p><a class="box">More Info</a></p>
                    <div id="event3_details" class="event_details">
                    	<p style="margin-top:0;"><strong>8:30&ndash;10 a.m.</strong><br />CMG and Public Architecture</p>
                        <p style="margin-top:0;"><strong>10:30 a.m.&ndash;Noon</strong><br />Workshop: Ken Smith Landscape Architect, Ten Eyck Landscape Architects and Rogers Marvel Architects</p>
                        <p style="margin-top:0;"><strong>1&ndash;2:30 p.m.</strong><br />MVVA and Thomas Phifer &amp; Partners</p>
                        <p style="margin-top:0;"><strong>3&ndash;4:30 p.m.</strong><br />Turenscape and Lake | Flato Architects</p>
                    </div>
                </div>
                
                <div id="event4" class="events_item" style="margin-top:100px;">
                    <img src="images/completed_banner.png" style="position:absolute; top:0; left:0;" />
                    <span style="letter-spacing:5px;">10/18</span>
                    <p style="font-size:24px;">Design Contest Winner Announced</p>
                    <p><a class="box">More Info</a></p>
                    <div id="event4_details" class="event_details">
                        <p style="margin-top:0;">As this is a public-private partnership with the City of Austin, Council must endorse the jury's chosen design team. After Council takes action on this item, we hope to have a formal announcement of the winner.</p>
                    </div>
                </div>
                
                <br clear="all" />
                
                <a href="downloads/WC_Stage_III_Jury_Report-101812.pdf" class="box" style="float:right; width:221px; margin-top:0; text-align:center;" target="_blank">Download Stage III Jury Report</a>
            
            </div>
	
    	</div>

    </div>
    
    
    <div id="footer" class="scrollSection">
    	
        <div id="footer_inner">
        	
            <div id="footer_left">
            	<h3><strong>The Waller Creek Conservancy</strong></h3><br /><a href="http://www.wallercreek.org/" target="_blank">The Waller Creek Conservancy</a> acts as the steward of Waller Creek by playing a vital role in the preservation, redevelopment and maintenance of the creek's surrounding parks, nearby businesses, adjoining neighborhoods and community at large.
            </div>
            
            <div id="footer_right">
				<strong style="font-size:18px;">Principal Sponsors</strong><br clear="all">
                <div id="footer_right_one">
                    <ul>
                    	<li><a href="http://www.austintexas.gov/" target="_blank">City of Austin</a></li>
                        <li>David &amp; Suzanne Deal Booth</li>
                        <li>Jeanne &amp; Michael Klein</li>
                        <li>Mattsson-McHale Foundation</li>
                    </ul>
                </div>
                
                <div id="footer_right_two">
                    <ul>
                        <li>The Meredith Family</li>
                        <li>Still Water Foundation</li>
                        <li>Melba &amp; Ted Whatley</li>
                    </ul>
                </div>
            </div>
            
            <div id="footer_middle_one">
            	<strong style="font-size:18px;">Contact Us</strong>
            	<ul>
					<li>PO Box 12363<br />
                	Austin, Texas 78711</li>
                	<li>512-541-3520</li>
                	<li><a href="http://www.wallercreek.org/" target="_blank">www.wallercreek.org</a></li>
				</ul>
            </div>
            
        	<div id="footer_middle_two">
            	<strong style="font-size:18px;">Follow Us</strong>
            	<ul>
                	<li><a href="https://www.facebook.com/WallerCreekConservancy" target="_blank">Facebook</a></li>
                	<li><a href="https://twitter.com/austinwcc" target="_blank">Twitter</a></li>
                	<li><a href="http://wallercreek.org/blog/" target="_blank">Blog</a></li>
				</ul>
            </div>
            
			<br clear="all" />
            
			<p style="font-size:12px; margin-bottom:0; margin-top:20px; float:right;">&copy; 2012 Waller Creek Conservancy. All Rights Reserved.</p>

        </div>
    	
    </div>  
    
</div>	

</body>
</html>