/**
 * 这是全选反选的jq组件
 * 调用：
 * $("#checked input[type=checkbox]").checkBox("all");------------------------全选
 * $("#checked input[type=checkbox]").checkBox("none");-----------------------全不选
 * $("#checked input[type=checkbox]").checkBox("toggle");---------------------反选
 * alert($("#checked input[type=checkbox][checked]").checkedValue());---------看看我选择了什么
 */
(function($){
	$.fn.checkBox = function(state){
		this.each(function(){
			switch (state) {
				case 'all':
					$(this).attr("checked",true);
					break;
				case 'none':
					$(this).attr("checked",false);
					break;
				case 'toggle':
					$(this).attr("checked",!this.checked);
					break;
			}
		});
	};
	$.fn.checkedValue = function(){
		var str=[];
		this.each(function(){
			str+=$(this).val()+",";
		})
		return str;
	};
})(jQuery);