<?php 
  $username="";
  $password="";
 if (isset($_POST['username'])){
	 $username=$_POST['username'];
 }
 
 if (isset($_POST['password'])){
	 $password=$_POST['password'];
 }
 if ($username=="admin" && $password=="123"){
	 echo 1;
 }else
     echo 2;
 ?>