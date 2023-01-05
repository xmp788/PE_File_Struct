$(window).ready(function(){
	var win_height = $(window).height();//获取窗口的高度						
	var win_width = $(window).width();//获取窗口的宽度
	var hg = win_height - 47;//定义变量
	var dis = null;
	var d_con_h = $(".d-con").height();
	var wd = win_width -$(".d-nav").width()-32;
	
	$(".d-con").css("width",wd);//设置显示内容的宽度
	$(".nav-a").click(function(){
		var _id = $(this).attr("id");//获取被点击的ID
		var va = $(this).html();//获取被点击元素的内容
		var _index = $("#c_"+_id);//定义_index为一个元素，哪个元素呢， ID为：“c_+获取得的ID“的这个元素
		//alert(va);
		dis = _index.css("display");//获取被点击元素的当前显示样式属性(display)
		_index.toggle(300);//用300ms完成以下切换显示
		if (dis == "none"){
			_index.children(".c-top").append("<p style='color:#fff;font-size:15px;line-height:25px;font-weight:bold;'>" + va + "</p>");
		}else{
			_index.children(".c-top").find("p").remove();
		}
	});
	$(".close").click(function(){
		var cl = $(this).parents(".con");
		dis = cl.css("display");
		cl.toggle(300);									
		cl.children(".c-top").find("p").remove();									
	});						
});