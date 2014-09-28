<?php
session_start();               //开启一个会话
$_SESSION['username'] ="demo"; //设置会话变量username
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>使用AJAX检查Session</title>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!--确保会话处于有效状态下，执行检测代码-->
<?php if(!empty($_SESSION['username'])) { ?>
<script type="text/javascript">
var check_session;                                    //定义全局变量
function CheckForSession() {
		var str="chklogout=true";                    //传递检查字符串
		jQuery.ajax({
				type: "POST",              
				url: "8_13_chk_session.php",         //发送对服务器端页面的请求
				data: str,
				cache: false,
				success: function(res){   
					if(res == "1") {                //如果返回1,则提示会主话过期消息
					alert('您的会话已经过期了!');
					}
				}
		});
		}
check_session = setInterval(CheckForSession, 5000); //定时的检查是否过期
</script>
<?php } ?>
</head>

<body>
 <a href="8_13_logout.php" target="_blank">单击这里登出</a> 
</body>
</html>
