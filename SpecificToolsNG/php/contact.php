<?php
	$to      = 'info@specifictoolsng.com';
	$email   = $_POST['email'];

	$name  = $_POST['name'];
	$subject = $_POST['subject'];
	$message = $_POST['comments'];
	$error=array();

	if($_POST['name']==''){
		$error[]="Your name is required";
	}
	if($_POST['email']==''){
		$error[]="Your email is required";
	}
	if($_POST['subject']==''){
		$error[]="Subject is required";
	}
	if($_POST['comments']==''){
		$error[]="Comments is required";
	}

	if(count($error)>0){
		echo "<div class='alert alert-danger'>";
		foreach($error as $data)
		{
			echo "<p>".$data."</p>";
		}
		echo "</div>";
		die();
	}

	$headers = 'From: Specific Tools Nigeria Ltd.'. '<'.$email.'>' . "\r\n" .
		'Reply-To: '. $email . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers))
	{
		echo "<div class='alert alert-success'>You message has been succesfully received. We will reply you soon.</div>";
		die();
	}
	
	else
	{
		echo "<div class='alert alert-danger'>Opps! Something went wrong. Please try again.</div>";
		die();
	}
	
   
?>