<?php

    require ('../tmh-oauth/tmhOAuth.php');

    /*$tmhOAuth = new tmhOAuth(array(
		'consumer_key'    => "mp9ST59ZBAg5jmRls0tNvA",
		'consumer_secret' => "ftXpZ7L47e6lPEhtUPWbluNyEZbQKi6BlsV9YLBjg9U",
		'user_token'      => "1923930595-7Vw7cg90A76wKt7OM4eAnkc8kjBD4uj7oMEOV22",
		'user_secret'     => "rnkOHg3kpCIxCWeaO31lyFrsSFrKXh18cgk2dXsQ",
    ));	*/
	
	$token = $_COOKIE['Temp_Token'];
	$secret = $_COOKIE['Temp_Secret'];
	$image = $_COOKIE['Img_Url'];
	$status = $_COOKIE['Tweet_Txt'];
	
	$tmhOAuth = new tmhOAuth(array(
		'consumer_key' => 'mp9ST59ZBAg5jmRls0tNvA',
		'consumer_secret' => 'ftXpZ7L47e6lPEhtUPWbluNyEZbQKi6BlsV9YLBjg9U',
		'user_token' => $token,
		'user_secret' => $secret,
		'curl_ssl_verifypeer' => false
	));
	
	//$image = $_GET['image']; // Path to the photo on the local filesystem
	//$status = $_GET['message'];

	$tmhOAuth->request("POST", $tmhOAuth->url("oauth/access_token", ""), array(
		'oauth_verifier' => $_GET["oauth_verifier"] // pass the oauth_verifier received from Twitter
	));
	
	$response = $tmhOAuth->extract_params($tmhOAuth->response["response"]);
	
	$tmhOAuth->config["user_token"] = $response['oauth_token'];
	$tmhOAuth->config["user_secret"] = $response['oauth_token_secret'];
	
	//$image = './'.$image;
	$code = $tmhOAuth->request('POST', 'https://api.twitter.com/1.1/statuses/update_with_media.json',
	array(
		'media[]' => "@{$img}",
		'status' => "$status"
	),
	true, // use auth
	true // multipart
	);
	
	if ($code == 200){
		echo 'Your image tweet has been sent successfully';
	}else{
	
		//tmhUtilities::pr($tmhOAuth->response['response']);
		
		echo "Fail<br />" . 
		$image . '<br />' .
		$status;
		
	
	}
	?>