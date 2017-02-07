/*
* 获取慢慢折扣商品的数据
* */
//var arr=[];
//function loading(){
//    $.ajax({
//        type:'get',
//        url:'http://192.168.50.130:8002/api/getinlanddiscount',
//        dataType:'json',
//        beforeSend: function () {
//
//        },
//        success: function (data) {
//            /*console.log(data.result[0].productImg);
//             var img=data.result[0].productImg;
//             img=img.replace('&lt;','<').replace('&gt;','>');
//             data.result[0].productImg=img;*/
//            //取出数据
//            //console.log(data);
//            var j=6;
//            for (var i = 0; i < j; i++) {
//                arr.push(data.result[i]);
//            }
//            i=j;
//            j+=4;
//            var html=template('tpl',{goods:arr});
//            //html= html.replace(/'&lt;'/g,'<').replace(/'&gt;'/g,'>');
//            $('.mmm_goods').html(html);
//
//
//            var mmm_goods_height=$('.mmm_goods').height();
//            console.log(mmm_goods_height);
//        },
//        error: function () {
//            alert('网络有问题，请检查');
//        }
//    })
//
//}
//
//loading();

//  延迟加载
var counter = 0;
// 每页展示4个
var num = 4;
var pageStart = 0,pageEnd = 0;

// dropload
$('.mmm_goods').dropload({
    scrollArea : window,
    loadDownFn : function(me){
        $.ajax({
            type: 'GET',
            // url: 'http://192.168.50.130:8002/api/getinlanddiscount',
            url:'http://mmb.ittun.com/api/getinlanddiscount',
            dataType: 'json',
            success: function(data){
                var html = '';
                counter++;
                pageEnd = num * counter;
                pageStart = pageEnd - num;

                for(var i = pageStart; i < pageEnd; i++){
                    html+=template('tpl',{goods:data.result[i]});
                    //result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                    //    +'<img src="'+data.lists[i].pic+'" alt="">'
                    //    +'<h3>'+data.lists[i].title+'</h3>'
                    //    +'<span class="date">'+data.lists[i].date+'</span>'
                    //    +'</a>';
                    if((i + 1) >= data.result.length){
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                        break;
                    }
                }
                // 为了测试，延迟1秒加载
                setTimeout(function(){
                    $('.mmm_goods_lists').append(html);
                    // 每次数据加载完，必须重置
                    me.resetload();
                },1000);
            },
            error: function(xhr, type){
                //alert('Ajax error!');
                // 即使加载出错，也得重置
                me.resetload();
            }
        });
    }
});


//底部是否显示
$(window).on('scroll', function () {
    if($('.mmm_goods').height()){
        $('.mmm_footer').addClass('db');
    }else{
        $('.mmm_footer').addClass('dn');
    }
})
























///*
//* 延迟加载功能
//* //分析，当滑动的距离达到一定值时，再次发送请求，每次请求只拿到4组数据，显示加载，加载数据
//* */
////给谁添加滚动事件
//$('.mmm_goods').on('touchstart',touchstartHandler);
//$('.mmm_goods').on('touchmove',touchmoveHandler);
//$('.mmm_goods').on('touchend',touchendHandler);
//
//
//var startY= 0,distanceY=0;
//function touchstartHandler(e){
//    //console.log(e);
//    //console.log(e.originalEvent.touches[0].pageY);
//    startY=e.touches[0].pageY;
//}
//
////可视区高度
//console.log($(window).height());
//var windowHeight=$(window).height();
////mmm_goods的高度
//
////$('.mmm_goods').hide().appendTo($('body'));
////locate($('.mmm_goods')),show();
////var mmm_goods=document.getElementsByClassName('mmm_goods');
//
////var mmm_goods=document.getElementById('products');
////var mmm_goods_height=mmm_goods.offsetHeight;
//var mmm_goods_height=$('.mmm_goods').height();
//console.log(mmm_goods_height);
//
//
//function touchmoveHandler(e){
//    distanceY=e.originalEvent.touches[0].pageY-startY;
//    console.log(distanceY);
//    //这个距离怎么判断
//    //判断容器的高度<卷起的高度和可视区高度+200
//
//}
//
//function touchendHandler(){
//
//}