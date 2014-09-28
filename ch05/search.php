<?php

sleep( 3 );
// no term passed - just exit early with no response
if (empty($_GET['term'])) exit ;
$q = strtolower($_GET["term"]);
// remove slashes if they were magically added
if (get_magic_quotes_gpc()) $q = stripslashes($q);

$items = array(
"足球"=>"体育王国",
"足球比赛"=>"体育王国",
"足球运动员"=>"体育王国",
"篮球"=>"体育运动",
"篮球比赛"=>"体育王国",
"篮球运动员"=>"体育王国",
"排球"=>"体育比赛",
"排球比赛"=>"体育王国",
"排球运动员"=>"体育王国",
"台球"=>"体育经济",
"乒乓球"=>"体育国家",
"橄榄球"=>"体育文化"
);


$result = array();
foreach ($items as $key=>$value) {
	if (strpos(strtolower($key), $q) !== false) {
		array_push($result, array("id"=>$value, "label"=>$key, "value" => strip_tags($key)));
	}
	if (count($result) > 11)
		break;
}

// json_encode is available in PHP 5.2 and above, or you can install a PECL module in earlier versions
echo json_encode($result);

?>