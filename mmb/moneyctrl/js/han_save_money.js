/**
 * Created by Administrator on 2016/11/30.
 */

//功能：请求数据默认第一页
//存储页数值，当点击的时候，请求数据传入pageid的值
//显示在页面中
$(function(){
    // 1.初始化页面
    $.ajax({
        type:'get',
        url: 'http://mmb.ittun.com/api/getmoneyctrl',
        // url:'http://192.168.50.130:8002/api/getmoneyctrl',
        data:'json',
        before:function(){

        },
        success:function(data){
            var html=template('tpl',{result:data.result});
            $('.product_list').html(html);
        },
        error:function(){

        }

    })

    //2.点击左边的按钮，文本框中的pageid--;点击右边的按钮，pageid++;
    var pageid=$('input[type=text]').val();
    //console.log(pageid);

    pageid=(parseFloat(pageid));
    //console.log(pageid);

    $('.left_btn').on('click',function(){
        if(pageid<=1){
            return;
        }
        pageid--;
       $('input[type=text]').val(pageid+'/'+14);
        $.ajax({
            type:'get',
            url:'http://mmb.ittun.com/api/getmoneyctrl?pageid='+pageid+'',
            // url:'http://192.168.50.130:8002/api/getmoneyctrl?pageid='+pageid+'',
            data:'json',
            before:function(){

            },
            success:function(data){
                //console.log(data);
                var html=template('tpl',{result:data.result});
                $('.product_list').html(html);
            },
            error:function(){

            }

        })

    })
//3.点击跳转到下一页
    $('.right_btn').on('click',function(){
        if(pageid>13){
            return;
        }
        pageid++;
        $('input[type=text]').val(pageid+'/'+14);
        $.ajax({
            type:'get',
            url:'http://mmb.ittun.com/api/getmoneyctrl?pageid='+pageid+'',
            // url:'http://192.168.50.130:8002/api/getmoneyctrl?pageid='+pageid+'',
            data:'json',
            before:function(){

            },
            success:function(data){
                var html=template('tpl',{result:data.result});
                $('.product_list').html(html);
            },
            error:function(){

            }

        })

    })


    //4.点击任意商品跳转到商品的详情页





    //5.返回顶部功能
    $(window).scroll(function () {
        var scrolltop=window.scrollY||document.body.scrollTop||0;
        if(scrolltop>900){
            $('#back_top').click(function () {
                //返回顶部
                $('html,body').scrollTop(0);
            })

        }
    })



})
