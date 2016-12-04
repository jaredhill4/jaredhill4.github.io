function loadmaps(){
	
	
	// Create an array of styles.
  var styles = [
    {
      stylers: [
        { hue: "#000000" },
        { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "on" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
     },{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { color: "#6f9fd9" }
      ]
    }
  ];
  
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
			 
	var point1 = new google.maps.LatLng(30.311507,-97.774588);
	var point2 = new google.maps.LatLng(30.283515,-97.73488);
	var point3 = new google.maps.LatLng(30.264979,-97.747078);
	var point4 = new google.maps.LatLng(30.280285,-97.738852);
	var point5 = new google.maps.LatLng(30.274406,-97.733927);
	var point6 = new google.maps.LatLng(30.280773,-97.737735);
	var point7 = new google.maps.LatLng(30.334474,-97.751573);
	var point8 = new google.maps.LatLng(30.257945,-97.720741);
	//var point9 = new google.maps.LatLng(30.267913,-97.747272);
	var point10 = new google.maps.LatLng(30.263237,-97.731076);
	
	var myMapOptions = {
		zoom: 13,
		panControl: false,
		scrollwheel: false,
		//zoomControl: false,
		//scaleControl: false,
		streetViewControl: false,
		//overviewMapControl: false,
		zoomControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		mapTypeControl: false,
		center: new google.maps.LatLng(30.29544,-97.784187),
		mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	
	var map = new google.maps.Map(document.getElementById("exhibits_map"),myMapOptions);
	
	//Associate the styled map with the MapTypeId and set it to display.
	  map.mapTypes.set('map_style', styledMap);
	  map.setMapTypeId('map_style');
		
	
	// Marker 1
	
	var image1 = new google.maps.MarkerImage(
		'js/marker-images/image1.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow1 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker1 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image1,
		shadow: shadow1,
		map: map,
		position: point1
	});
	
	var infowindow1 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Laguna Gloria</h4><p><i style="font-size:12px;">Stationary exhibit located in the Solarium</i></p><p>3809 W. 35th Street<br />Austin, TX 78703</p><p><a href="http://maps.google.com/maps?q=3809+West+35th+Street+Austin,+TX+78703&hl=en&sll=31.168934,-100.076842&sspn=10.706888,19.753418&hnear=3809+W+35th+St,+Austin,+Texas+78703&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker1, 'click', function() {
		map.setZoom(15);
		map.setCenter(point1);
		marker1.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow2.close(map, marker2);
		infowindow1.open(map, marker1);
		infowindow5.close(map, marker5);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow8.close(map, marker8);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').addClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow1,'closeclick',function(){
		$('#map_link1').removeClass('active');
	});
	
	
	// Marker 2
	
	var image2 = new google.maps.MarkerImage(
		'js/marker-images/image2.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow2 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker2 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image2,
		shadow: shadow2,
		map: map,
		position: point2
	});
	
	var infowindow2 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">University of Texas School of Architecture</h4><p><i style="font-size:12px;">Mobile exhibit located in Goldsmith Hall</i></p><p>310 Inner Campus Drive, Stop B7500<br />Austin, TX 78712</p><p><a href="http://maps.google.com/maps?q=310+Inner+Campus+Drive+Austin,+TX+78712&hl=en&sll=30.325768,-97.810764&sspn=0.084458,0.154324&hnear=310+Inner+Campus+Dr,+Austin,+Texas+78712&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker2, 'click', function() {
		map.setZoom(15);
		map.setCenter(point2);
		marker2.setZIndex(9999);
		marker1.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow2.open(map, marker2);
		infowindow1.close(map, marker1);
		infowindow5.close(map, marker5);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow8.close(map, marker8);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').addClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow2,'closeclick',function(){
		$('#map_link2').removeClass('active');
	});
	
	
	
	// Marker 3
	
	var image3 = new google.maps.MarkerImage(
		'js/marker-images/image3.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow3 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker3 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image3,
		shadow: shadow3,
		map: map,
		position: point3
	});
	
	var infowindow3 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">City Hall</h4><p><i style="font-size:12px;">Mobile exhibit located in Atrium</i></p><p>301 W. Second St.<br />Austin, TX 78701</p><p><a href="http://maps.google.com/maps?q=301+W.+Second+St.+Austin,+TX+78701++&hl=en&sll=30.264979,-97.747078&sspn=0.010564,0.01929&hnear=301+W+2nd+St,+Austin,+Texas+78701&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker3, 'click', function() {
		map.setZoom(15);
		map.setCenter(point3);
		marker3.setZIndex(9999);
		marker2.setZIndex(1);
		marker1.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow3.open(map, marker3);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow5.close(map, marker5);
		infowindow4.close(map, marker4);
		infowindow8.close(map, marker8);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').addClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow3,'closeclick',function(){
		$('#map_link3').removeClass('active');
	});


	
	// Marker 4
	
	var image4 = new google.maps.MarkerImage(
		'js/marker-images/image4.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow4 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker4 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image4,
		shadow: shadow4,
		map: map,
		position: point4
	});
	
	var infowindow4 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Bob Bullock Texas State History Museum</h4><p><i style="font-size:12px;">Mobile exhibit located in 2nd Floor Lobby</i></p><p>1800 Congress Avenue<br />Austin, TX 78701</p><p><a href="http://maps.google.com/maps?q=1800+Congress+Avenue+Austin,+TX+78701&hl=en&sll=30.264979,-97.747078&sspn=0.010564,0.01929&hnear=1800+Congress+Ave,+Austin,+Texas+78701&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker4, 'click', function() {
		map.setZoom(15);
		map.setCenter(point4);
		marker4.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker1.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow4.open(map, marker4);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow5.close(map, marker5);
		infowindow8.close(map, marker8);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').addClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow4,'closeclick',function(){
		$('#map_link4').removeClass('active');
	});
	
	
	
	// Marker 5
	
	var image5 = new google.maps.MarkerImage(
		'js/marker-images/image5.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow5 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker5 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image5,
		shadow: shadow5,
		map: map,
		position: point5
	});
	
	var infowindow5 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">UMC Brackenridge Hospital</h4><p><i style="font-size:12px;">Mobile exhibit located in the hall off of 2 North Lobby</i></p><p>601 E. 15th Street<br />Austin, TX 78701</p><p><a href="http://maps.google.com/maps?q=601+East+15th+Street+Austin,+TX+78701&hl=en&ll=30.274412,-97.733924&spn=0.010563,0.01929&sll=30.280285,-97.738852&sspn=0.010562,0.01929&hnear=601+E+15th+St,+Austin,+Texas+78701&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker5, 'click', function() {
		map.setZoom(15);
		map.setCenter(point5);
		marker5.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker1.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow5.open(map, marker5);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow8.close(map, marker8);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').addClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow5,'closeclick',function(){
		$('#map_link5').removeClass('active');
	});
	
	
	
	// Marker 6
	
	var image6 = new google.maps.MarkerImage(
		'js/marker-images/image6.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow6 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker6 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image6,
		shadow: shadow6,
		map: map,
		position: point6
	});
	
	var infowindow6 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Blanton Museum of Art</h4><p><i style="font-size:12px;">Mobile exhibit located in Grand Foyer of Smith Building</i></p><p>200 E. Martin Luther King Jr. Blvd.<br />Austin, TX 78701</p><p><a href="http://maps.google.com/maps?q=200+E.+Martin+Luther+King+Jr.+Blvd.+Austin,+TX+78701&hl=en&ll=30.280768,-97.737744&spn=0.010562,0.01929&sll=30.274412,-97.733924&sspn=0.010563,0.01929&hnear=200+E+Martin+Luther+King+Jr+Blvd,+Austin,+Texas+78701&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker6, 'click', function() {
		map.setZoom(15);
		map.setCenter(point6);
		marker6.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker1.setZIndex(1);
		marker7.setZIndex(1);
		marker8.setZIndex(1);
		infowindow6.open(map, marker6);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow8.close(map, marker8);
		infowindow7.close(map, marker7);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').addClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow6,'closeclick',function(){
		$('#map_link6').removeClass('active');
	});
	
	
	// Marker 7
	
	var image7 = new google.maps.MarkerImage(
		'js/marker-images/image7.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow7 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker7 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image7,
		shadow: shadow7,
		map: map,
		position: point7
	});
	
	var infowindow7 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Northwest Recreation Center</h4><p><i style="font-size:12px;">Mobile exhibit location TBD</i></p><p>2913 Northland Drive<br />Austin, TX 78757</p><p><a href="http://maps.google.com/maps?q=2913+Northland+Drive+Austin,+TX+78757+&hl=en&sll=30.263237,-97.731076&sspn=0.010564,0.01929&hnear=2913+Northland+Dr,+Austin,+Texas+78731&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker7, 'click', function() {
		map.setZoom(15);
		map.setCenter(point7);
		marker7.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker1.setZIndex(1);
		marker8.setZIndex(1);
		infowindow7.open(map, marker7);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow6.close(map, marker6);
		infowindow8.close(map, marker8);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').addClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow7,'closeclick',function(){
		$('#map_link7').removeClass('active');
	});
	
	
	
	// Marker 8
	
	var image8 = new google.maps.MarkerImage(
		'js/marker-images/image8.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow8 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker8 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image8,
		shadow: shadow8,
		map: map,
		position: point8
	});
	
	var infowindow8 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Pan American Recreation Center</h4><p><i style="font-size:12px;">Mobile exhibit location TBD</i></p><p>2100 E. 3rd Street<br />Austin, TX 78702</p><p><a href="http://maps.google.com/maps?q=2100+East+3rd+Street+Austin,+TX+78702+&hl=en&sll=30.334474,-97.751573&sspn=0.010556,0.01929&hnear=2100+E+3rd+St,+Austin,+Travis,+Texas+78702&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker8, 'click', function() {
		map.setZoom(15);
		map.setCenter(point8);
		marker7.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker1.setZIndex(1);
		marker8.setZIndex(1);
		infowindow8.open(map, marker8);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker8);
		//infowindow9.close(map, marker9);
		infowindow10.close(map, marker10);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').addClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	});
	
	google.maps.event.addListener(infowindow8,'closeclick',function(){
		$('#map_link8').removeClass('active');
	});
	
	// Marker 9
	
	/*var image9 = new google.maps.MarkerImage(
		'js/marker-images/image9.png',
		new google.maps.Size(67,75),
		new google.maps.Point(0,0),
		new google.maps.Point(37,90)
	);
	
	var shadow9 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png',
		new google.maps.Size(67,75),
		new google.maps.Point(0,0),
		new google.maps.Point(37,90)
	);
	
	var marker9 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image9,
		shadow: shadow9,
		map: map,
		position: point9
	});
	
	var infowindow9 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">Sustainable Food Center Farmer\'s Market</h4><p><i style="font-size:12px;">Mobile exhibit location TBD</i></p><p>Republic Square Park<br />400 W. Guadalupe Street<br />Austin, TX 78701</p><p><a href="http://maps.google.com/maps?q=400+W.+Guadalupe+Street,+Republic+Square+Park+Austin,+TX+78701&hl=en&sll=30.280768,-97.737744&sspn=0.010562,0.01929&hq=400+W.+Guadalupe+Street,+Republic+Square+Park+Austin,+TX+78701&t=m&z=15" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker9, 'click', function() {
		map.setZoom(15);
		map.setCenter(point9);
		marker7.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker1.setZIndex(1);
		marker8.setZIndex(1);
		infowindow9.open(map, marker9);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		infowindow8.close(map, marker8);
		infowindow10.close(map, marker10);
	});*/
	
	
	
	// Marker 10
	
	var image10 = new google.maps.MarkerImage(
		'js/marker-images/image9.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var shadow10 = new google.maps.MarkerImage(
		'js/marker-images/shadow.png'
		//new google.maps.Size(67,75),
		//new google.maps.Point(0,0),
		//new google.maps.Point(37,90)
	);
	
	var marker10 = new google.maps.Marker({
		draggable: false,
		raiseOnDrag: false,
		icon: image10,
		shadow: shadow10,
		map: map,
		position: point10
	});
	
	var infowindow10 = new google.maps.InfoWindow({
		content: '<h4 style="margin:0; padding:0;">HOPE Farmer\'s Market</h4><p><i style="font-size:12px;">Mobile exhibit located at west end of market</i></p><p>414 Waller Street<br />Austin, TX 78702</p><p><a href="http://maps.google.com/maps?q=414+Waller+Street+Austin,+TX+78702&hl=en&sll=30.267429,-97.74702&sspn=0.021127,0.038581&hnear=414+Waller+St,+Austin,+Texas+78702&t=m&z=16" target="_blank" class="box lightbkg">Get Directions</a></p>'
	});
	
	google.maps.event.addListener(marker10, 'click', function() {
		map.setZoom(15);
		map.setCenter(point10);
		marker8.setZIndex(9999);
		marker2.setZIndex(1);
		marker3.setZIndex(1);
		marker4.setZIndex(1);
		marker5.setZIndex(1);
		marker6.setZIndex(1);
		marker7.setZIndex(1);
		marker1.setZIndex(1);
		infowindow10.open(map, marker10);
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		infowindow8.close(map, marker7);
		//infowindow9.close(map, marker9);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').addClass('active');
	});
	
	google.maps.event.addListener(infowindow10,'closeclick',function(){
		$('#map_link10').removeClass('active');
	});
	
	
	
	//Trigger a click event to marker when the button is clicked.
	  $('#map_link1').click(function(){
		google.maps.event.trigger(marker1, "click");
		$.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link1').addClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link2').click(function(){
		google.maps.event.trigger(marker2, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link2').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link3').click(function(){
		google.maps.event.trigger(marker3, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link3').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link4').click(function(){
		google.maps.event.trigger(marker4, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link4').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link5').click(function(){
		google.maps.event.trigger(marker5, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link5').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link6').click(function(){
		google.maps.event.trigger(marker6, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link6').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link7').click(function(){
		google.maps.event.trigger(marker7, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link7').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  $('#map_link8').click(function(){
		google.maps.event.trigger(marker8, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link8').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link9').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  
	  $('#map_link9').click(function(){
		google.maps.event.trigger(marker9, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link9').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link10').removeClass('active');
	  });
	  
	  $('#map_link10').click(function(){
		google.maps.event.trigger(marker10, "click");
		 $.scrollTo('#exhibits_map', 500, {offset:-70});
		$('#map_link10').addClass('active');
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		$('#map_link9').removeClass('active');
	  });
	  
	  $('#zoom_in').click(function(){
		map.setZoom(map.getZoom() + 1);
	  });
	  
	  $('#zoom_out').click(function(){
		map.setZoom(map.getZoom() - 1);
	  });
	  
	  $('#reset').click(function(){
		map.setZoom(13);
		map.setCenter(new google.maps.LatLng(30.29544,-97.784187));
		infowindow1.close(map, marker1);
		infowindow2.close(map, marker2);
		infowindow3.close(map, marker3);
		infowindow4.close(map, marker4);
		infowindow5.close(map, marker5);
		infowindow6.close(map, marker6);
		infowindow7.close(map, marker7);
		infowindow8.close(map, marker8);
		/*infowindow9.close(map, marker9);*/
		infowindow10.close(map, marker10);
		marker1.setZIndex(2);
		marker2.setZIndex(0);
		marker3.setZIndex(3);
		marker4.setZIndex(2);
		marker5.setZIndex(3);
		marker6.setZIndex(1);
		marker7.setZIndex(2);
		marker8.setZIndex(3);
		/*marker9.setZIndex(2);*/
		marker10.setZIndex(2);
		$('#map_link1').removeClass('active');
		$('#map_link2').removeClass('active');
		$('#map_link3').removeClass('active');
		$('#map_link4').removeClass('active');
		$('#map_link5').removeClass('active');
		$('#map_link6').removeClass('active');
		$('#map_link7').removeClass('active');
		$('#map_link8').removeClass('active');
		/*$('#map_link9').removeClass('active');*/
		$('#map_link10').removeClass('active');
	  });
	
}

google.maps.event.addDomListener(window, 'load', loadmaps);
