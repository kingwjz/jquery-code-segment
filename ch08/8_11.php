<?php

//Retrieve form data. 
//GET - user submitted data using AJAX
//POST - in case user does not support javascript, we'll use POST instead
$name = ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$email = ($_GET['email']) ?$_GET['email'] : $_POST['email'];
$website = ($_GET['website']) ?$_GET['website'] : $_POST['website'];
$comment = ($_GET['comment']) ?$_GET['comment'] : $_POST['comment'];

//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

//Simple server side validation for POST data, of course, you should validate the email
if (!$name) $errors[count($errors)] = 'Please enter your name.';
if (!$email) $errors[count($errors)] = 'Please enter your email.'; 
if (!$comment) $errors[count($errors)] = 'Please enter your comment.'; 

//if the errors array is empty, send the mail / no errors found
if (!$errors) {

	//if POST was used, display the message straight away
	if ($_POST) {
		echo 'Thank you! We have received your message.';
		
	//This one for ajax
	//1 means success, 0 means failed
	} else {
		echo '1';	
	}


} else {
	//display the errors message
	for ($i=0; $i<count($errors); $i++) echo $errors[$i] . '<br/>';
	echo '<a href="jquery-ajaxform.php">Back</a>';
	exit;
}

