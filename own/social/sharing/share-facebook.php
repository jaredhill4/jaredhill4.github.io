<?php
		
		require_once('../php-sdk/facebook.php');
		
		$config = array(
			//'appId' => '434353796675116',
			//'secret' => '41fedab0ceca81abce3217dbe2826ad5',
			'appId' => '223925737653468',
			'secret' => 'bba1397169ab08c26dbba144b6b86f78',
			'fileUpload' => true,
		);

	$facebook = new Facebook($config);
	$user_id = $facebook->getUser();

	$image = $_GET['image']; // Path to the photo on the local filesystem
	$message = $_GET['message'];
	$post_login_url = "https://www.facebook.com/photo.php?fbid=";
	
?>
<html>
  <head></head>
  <body>

  <?php
    if($user_id) {

      // We have a user ID, so probably a logged in user.
      // If not, we'll get an exception, which we handle below.
      try {

        // Upload to a user's profile. The photo will be in the
        // first album in the profile. You can also upload to
        // a specific album by using /ALBUM_ID as the path 
        $ret_obj = $facebook->api('/me/photos', 'POST', array(
			'source' => '@' . $image,
			'message' => $message,
			)
		);
		echo("<script>top.location.href='" . $post_login_url 
          . $ret_obj['id'] . "'</script>");						  
        echo '<pre>Photo ID: ' . $ret_obj['id'] . '</pre>';
        echo '<br /><a href="' . $facebook->getLogoutUrl() . '">logout</a>';
		
		
		
      } catch(FacebookApiException $e) {
        // If the user is logged out, you can have a 
        // user ID even though the access token is invalid.
        // In this case, we'll get an exception, so we'll
        // just ask the user to login again here.
        $login_url = $facebook->getLoginUrl( array(
                       'scope' => 'photo_upload'
                       )); 
		echo("<script>top.location.href='" . $login_url . "'</script>");						  
		//echo 'Please <a href="' . $login_url . '">login.</a>';
        error_log($e->getType());
        error_log($e->getMessage());
		

		

      }   
    } else {

      // No user, print a link for the user to login
      // To upload a photo to a user's wall, we need photo_upload  permission
      // We'll use the current URL as the redirect_uri, so we don't
      // need to specify it here.
      $login_url = $facebook->getLoginUrl( array( 'scope' => 'photo_upload') );
		echo("<script>top.location.href='" . $login_url . "'</script>");						  
	  //echo 'Please <a href="' . $login_url . '">login.</a>';
	  
    }

  ?>

  </body>
</html>