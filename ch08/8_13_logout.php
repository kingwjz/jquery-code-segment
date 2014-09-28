<?php
session_start();
session_destroy();
header("Content-Type: text/html; charset=UTF-8");  //UTF8编码
?>
<p>您已经成功的登出了，请关闭这个页面 </p>