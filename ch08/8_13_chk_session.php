<?php
session_start();
$name = $_SESSION["username"];  //得到用户名
if($name == '')
{	
	echo "1";         //会话已经过期
} else {
    echo "0";         //会话没有过期
}
?>