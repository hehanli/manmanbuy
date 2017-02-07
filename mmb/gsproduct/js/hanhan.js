/**
 * Created by Administrator on 2016/11/28.
 */
//商品列表获取数据




$(function(){
    //1.导航栏功能，点击时候ul显示，再次点击ul隐藏，通过id点击li，显示对应的商品列表/
 //$('.nav_left>ul>li').each(function (index,val) {
 //   $(this).click(function () {
 //       var idName = "#" + $(this).data("target");
 //       $(idName).toggle().siblings().hide();
 //   })
 //
 //})
 //   $('.nav_left .nav_item li').on('click',function(){
 //       var idName = "#" + $(this).data("target");
 //       $(idName).toggle().siblings().hide();
 //   })


    //1.获取数据初始化商品列表
    $.ajax({
        type:'get',
        url:'http://mmb.ittun.com/api/getgsproduct?shopid=0&areaid=0',
        // url:'http://192.168.50.130:8002/api/getgsproduct?shopid=0&areaid=0',
        data:'json',
        success:function(data){
            var html=template('tpl',{result:data.result});
            $(".product_common").html(html);
        },
        error:function(){
            console.log('出错了');
        }
    })

    //2.点击店铺区域列表，获取shop店铺区域的数据，点击对应的店铺，获取对应店铺的列表信息，并改变li中的值
    var n,m;
    $.ajax({
        type:'get',
        url:'http://mmb.ittun.com/api/getgsshop',
        // url:'http://192.168.50.130:8002/api/getgsshop',
        data:'json',
        before:function(){

        },
        success:function(data){
            var html=template('store',{result:data.result});
            $(".shop>ul").html(html);

            $('#shop a').each(function (index,val) {
                $(this).click(function (event) {
                    $(this).parent().parent().parent().hide();



                    $('.nav_item>li').eq(0).text($(this).text());


                    //2.点击模板中的li，获取当前li的id值，在地址栏中重新发送请求数据，显示在页面
                    var shopid=$(this).data("shopid");
                    n=shopid;
                    $.ajax({
                        type:'get',
                        url:'http://mmb.ittun.com/api/getgsproduct?shopid='+n+'&areaid=0',
                        // url:'http://192.168.50.130:8002/api/getgsproduct?shopid='+n+'&areaid=0',
                        data:'json',
                        success: function (data) {
                            var html=template('tpl',{result:data.result});
                            $(".product_common").html(html);
                        }
                    })
                })
            })

        },
        error:function(){
            console.log('出错了');
        }
    })
    ////获取shoparea部分的数据

    $.ajax({
        type:'get',
        url:'http://mmb.ittun.com/api/getgsshoparea',
        // url:'http://192.168.50.130:8002/api/getgsshoparea',
        data:'json',
        success:function(data){
            var html=template('area',{res:data.result});

            $(".shoparea>ul").html(html);

            $('.nav_left .nav_item li').on('click',function(){
                var index=$(this).index()
                //var idName = "#" + $(this).data("target");
                $('.nav_lists').children().eq(index).toggle().siblings().hide();
            })

            $('#shoparea a').on('click',function(){
                $(this).parent().parent().parent().hide();

                $('.nav_item>li').eq(1).text($(this).text().slice(0,2));
                var areaid=$(this).data("areaid");
                m=areaid;
                $.ajax({
                    type:'get',
                    url:'http://mmb.ittun.com/api/getgsproduct?shopid='+n+'&areaid='+m+'',
                    // url:'http://192.168.50.130:8002/api/getgsproduct?shopid='+n+'&areaid='+m+'',
                    data:'json',
                    success: function (data) {
                        var html=template('tpl',{result:data.result});
                        $(".product_common").html(html);
                    }

                })
            })
        },
        error:function(){
            console.log('出错了');
        }
    })

})


