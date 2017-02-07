 $(function(){
	//加载导航资源
	$.ajax({
		type:"GET",
		url:"http://mmb.ittun.com/api/getindexmenu",
		// url:"http://192.168.50.130:8002/api/getindexmenu",
		success:function(data){
			// console.log(data);
			var html1='';
			html1 = template('nav',{result:data.result.splice(0,8)});
			// console.log(html1);
			$('.nav .nav1').html(html1);
			var html2='';
			html2 = template('nav',{result:data.result});
			// console.log(html2);
			$('.nav .nav2').html(html2);
		},
		error: function(){
			$('.nav .nav1').html('资源加载失败！请检查网络链接！');
		}
	});

	//给更多注册点击事件 使用代理
	$('.nav').delegate('.nav a[href="../#/#"]','click',function(e){
		// console.log(e);
		e.preventDefault();
		$('.nav .nav2').toggle();
	});

	//加载超值折扣
	$.ajax({
		type:"GET",
		url:"http://mmb.ittun.com/api/getmoneyctrl",
		// url:"http://192.168.50.130:8002/api/getmoneyctrl",
		success:function(data){
			console.log(data);
			var html = '';
			html = template('product',{result:data.result});
			// console.log(html);
			$('.discount_lists > ul').html(html);
		},
		error: function(){
			$('.discount_lists > ul').html('资源加载失败！请检查网络链接！');
		}
	});

})