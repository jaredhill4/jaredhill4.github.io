<?php

	require('../../includes/base.php');
	
	$link = $_SERVER['HTTP_REFERER'];
	$image = urlencode ($base_url . substr($_POST['image'], 5)); // Path to the photo on the local filesystem
	$message = urlencode($_POST['message']);
	
	$url = 'http://pinterest.com/pin/create/button/?url='. $link .'&media='.$image.'&description='.$message;
	
	echo("<script>top.location.href='" . $url . "'</script>");
						  

?>
