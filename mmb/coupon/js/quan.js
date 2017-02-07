$(function(){
	//加载店铺资源
	$.ajax({
		type:"GET",
		url:"http://mmb.ittun.com/api/getcoupon",
		// url:"http://192.168.50.130:8002/api/getcoupon",
		success:function(data){
			// console.log(data);
			var html='';
			html = template('tpl',{result:data.result});
			// console.log(html);
			$('.shopNav').html(html);
		}
	});
})