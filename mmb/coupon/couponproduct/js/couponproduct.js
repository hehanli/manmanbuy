$(function(){
	//获取地址栏中的信息
	function getData(href){
		var data1 = href.split('?');
		var data2 = data1[1].split('&');
		var data = {};
		for(var i=0;i<data2.length;i++){
			var data3 = data2[i].split('=');
			data[decodeURI(data3[0])] = decodeURI(data3[1]);
		}
		return data;
	}

	var transData = getData(location.href);

	$('.couponTitle').html(transData.couponTitle + '优惠券');
	//加载店铺优惠券资源
	$.ajax({
		type:"GET",
		url:"http://mmb.ittun.com/api/getcouponproduct?couponid="+ transData.couponId,
		// url:"http://192.168.50.130:8002/api/getcouponproduct?couponid="+ transData.couponId,
		success:function(data){
			// console.log(data);
			var html='';
			html = template('tpl',{result:data.result});
			// console.log(html);
			$('.quanLists').html(html);

			var html1='';
			html1 = template('tpl1',{result:data.result});
			$('.sliderWrap').html(html1);

			//动态生成相关样式
			// $('.sliderWrap').append($('.sliderWrap li').eq(0).clone());
			
		}
	});
	
	//给每个li标签注册事件
	$('.quanLists').delegate('li','click',function(){
		$('#mask').css('display','block');
		var id=$(this).index();
		var sliderlis = $('.sliderWrap li');
		var imgWidth = $('.sliderWrap img').width();
		var imgHeight = $('.sliderWrap img').height();
		var num = $('.sliderWrap li').length;

		$('.sliderWrap')
			.css({
				'width':num*imgWidth+'px',
				'-webkit-transform': 'translateX('+(-id*imgWidth)+'px)',
				'transform': 'translateX('+(-id*imgWidth)+'px)'
			})

		//左箭头功能
		$('.arr-l').click(function(e){
			e.stopPropagation();
			id++;
			if(id==num){
				id=0;
			};
			$('.sliderWrap').addClass('transitionAll')
			.css({
				'-webkit-transform': 'translateX('+(-id*imgWidth)+'px)',
				'transform': 'translateX('+(-id*imgWidth)+'px)'
			});
		});
		//右箭头功能
		$('.arr-r').click(function(e){
			e.stopPropagation();
			id--;
			if(id<0){
				id=num-1;
			}
			$('.sliderWrap').addClass('transitionAll')
			.css({
				'-webkit-transform': 'translateX('+(-id*imgWidth)+'px)',
				'transform': 'translateX('+(-id*imgWidth)+'px)'
			});
		});

		//过渡完成后执行事件
		$('.sliderWrap').on('transitionend',function(){
			$('.sliderWrap').removeClass('transitionAll');
		})
	});

	//给mask注册关闭事件
	$('#mask').on('click',function(){
		$(this).css('display','none');
		$('.sliderWrap').removeClass('transitionAll');
	})
})