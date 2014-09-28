<?php 
switch($_POST['name']){
  case 1:
    echo '必需的 URL 参数规定您希望加载的 URL。';
    break;
  case 2:
    echo '可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。';
    break;
  case 3:
    echo '可选的 callback 参数是 load() 方法完成后所执行的函数名称。';
    break;
}
?>