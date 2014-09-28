<?php
$button = $_GET['button'];        //获取所所单击的按钮的值
//读取红酒和白酒数据
$red = array('基安蒂酒', '巴罗罗', '原产法国勃艮第');
$white = array('霞多丽', '卡瓦酒', '夏布利');
$winetable = array(                //合并红酒和白酒到一个多维数组中
      "red" => $red,
      "white" => $white,
);
if ($button == "red") {
  print json_encode($red);         //使用json_encode转换JSON数据
}
else if ($button == "white") {
  print json_encode($white);
}
else {
  print json_encode($winetable);
}
?>