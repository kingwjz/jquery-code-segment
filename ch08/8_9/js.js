$(document).ready(function() {					 
	var hash = window.location.hash.substr(1);    //设置或获取href属性中在井号"#"后面的字符串
	var href = $('#nav li a').each(function(){  //循环选中的链接元素
		var href = $(this).attr('href');         //得到链接href属性值
		if(hash==href.substr(0,href.length-5)){   //当href去掉了.html扩展名后与hash比较
			var toLoad = hash+'.html #content';    //如果相同，则指定加载的HTML文件
			$('#content').load(toLoad)            //调用load加载恋恋不舍雍容华贵
		}											
	});
    //当导航链接单击事执行事件处理代码
	$('#nav li a').click(function(){								  
		var toLoad = $(this).attr('href')+' #content';//获取当前导航链接href+#content
		$('#content').hide('fast',loadContent);        //隐藏当前content中的内容
		$('#load').remove();                           //移除load元素
		$('#wrapper').append('<span id="load">LOADING...</span>'); //重新创建load元素进行显示
		$('#load').fadeIn('normal');                   //淡入load元素
		//获取hash值
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent()) //显示新内容
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());     //隐藏加载器
		}
		function hideLoader() {
			$('#load').fadeOut('normal');                  //隐藏loading的显示
		}
		return false;	
	});
});