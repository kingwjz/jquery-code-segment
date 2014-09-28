<?php 
 header("Content-Type: text/html; charset=UTF-8");  //UTF8编码
  $maxval=1;                                        //定义起始值变量
 if (isset($_GET['start'])){
	 $maxval=$_GET['start'];                       //获取起始值
 }

 $i=1;
 while($i<=50)                                     //循环向客户端输出数据
  {
  echo "行数 #".$maxval.": 当滚动到页面的底部时，将会自动的从服务器端加载其他的记录行信息，在很多网站中都可以看到这个应用。<br/>";
  $i++;
  $maxval++;
  }
 ?>