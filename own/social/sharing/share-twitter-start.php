<?php

    require ('../tmh-oauth/tmhOAuth.php');

	$tmhOAuth = new tmhOAuth(array(
		'consumer_key' => 'mp9ST59ZBAg5jmRls0tNvA',
		'consumer_secret' => 'ftXpZ7L47e6lPEhtUPWbluNyEZbQKi6BlsV9YLBjg9U',
		//'consumer_key' => 'SGMMAUX5y4YJKLoQ2ittw',
		//'consumer_secret' => 'CtHhfAEARlchZgEjDkwdB6hcsfGRmnwrxF0ld0fOEE',
		'curl_ssl_verifypeer' => false
	));
	$tmhOAuth->request('POST', $tmhOAuth->url('oauth/request_token', ''));
	$response = $tmhOAuth->extract_params($tmhOAuth->response["response"]);

	$image = $_POST['image']; // Path to the photo on the local filesystem
	$status = $_POST['message'];

	$temp_token = $response['oauth_token'];
	$temp_secret = $response['oauth_token_secret'];
	$time = $_SERVER['REQUEST_TIME'];

	setcookie("Temp_Token", $temp_token, $time + 3600 * 30, '/projects/oprah/', 'customfitteddesign.com');
	setcookie("Temp_Secret", $temp_secret, $time + 3600 * 30, '/projects/oprah/', 'customfitteddesign.com');
	setcookie("Tweet_Txt", $status, $time + 3600 * 30, '/projects/oprah/', 'customfitteddesign.com');
	setcookie("Img_Url", $image, $time + 3600 * 30, '/projects/oprah/', 'customfitteddesign.com');

	$url = $tmhOAuth->url("oauth/authorize", "") . '?oauth_token=' . $temp_token;
	header("Location:". $url);
	exit();

?>
