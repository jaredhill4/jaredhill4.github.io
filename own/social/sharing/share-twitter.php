<?php

    require ('../tmh-oauth/tmhOAuth.php');

	$token = $_COOKIE['Temp_Token'];
	$secret = $_COOKIE['Temp_Secret'];
	$image = $_COOKIE['Img_Url'];
	$status = $_COOKIE['Tweet_Txt'];
	
	$tmhOAuth = new tmhOAuth(array(
		'consumer_key' => 'mp9ST59ZBAg5jmRls0tNvA',
		'consumer_secret' => 'ftXpZ7L47e6lPEhtUPWbluNyEZbQKi6BlsV9YLBjg9U',
		//'consumer_key' => 'SGMMAUX5y4YJKLoQ2ittw',
		//'consumer_secret' => 'CtHhfAEARlchZgEjDkwdB6hcsfGRmnwrxF0ld0fOEE',
		'user_token' => $token,
		'user_secret' => $secret,
		'curl_ssl_verifypeer' => false
	));
	
	$tmhOAuth->request("POST", $tmhOAuth->url("oauth/access_token", ""), array('oauth_verifier' => $_GET["oauth_verifier"] )); // pass the oauth_verifier received from Twitter
	$response = $tmhOAuth->extract_params($tmhOAuth->response["response"]);
	$tmhOAuth->config["user_token"] = $response['oauth_token'];
	$tmhOAuth->config["user_secret"] = $response['oauth_token_secret'];	
	
	//$image = '../../img/activities/test/201108-omag-pie-black-600x411.jpg';
	//$status = 'New Status!';
	
	//$image = $_GET['image']; // Path to the photo on the local filesystem
	//$status = $_GET['message'];

	$params = array(
		'media[]' => "@{$image};type=image/jpeg;filename={$image}",
		'status'  => $status
	);
	
	$code = $tmhOAuth->user_request(array(
		'method' => 'POST',
		'url' => $tmhOAuth->url("1.1/statuses/update_with_media"),
		'params' => $params,
		'multipart' => true
	));
	
	if ($code == 200) :
		
		$data = json_decode($tmhOAuth->response['response'], true);
		
		$screen_name = htmlspecialchars($data['user']['screen_name']);
		$photo_id = htmlspecialchars($data['id_str']);
	
		echo("<script>top.location.href='https://twitter.com/" . $screen_name . "/statuses/". $photo_id . "'</script>");						  
	
	?>
	
        <p>Hello, @<?php echo htmlspecialchars($data['user']['screen_name']) ?>.</p>
        You just <a href="https://twitter.com/<?php echo htmlspecialchars($data['user']['screen_name']) ?>/statuses/<?php echo htmlspecialchars($data['id_str']) ?>">tweeted</a>
	
	<?php
	
	else:
	
	?>
    
    	Something went wrong...
    
    <?php
	
	endif;


?>