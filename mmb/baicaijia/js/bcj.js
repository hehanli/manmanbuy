/*
* @Author: Administrator
* @Date:   2016-12-07 10:24:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-14 19:33:28
*/

'use strict';

     // ajax请求最外层导航
  $(function() {

        $.ajax({
          url: 'http://mmb.ittun.com/api/getbaicaijiatitle',
          // url: 'http://192.168.50.130:8002/api/getbaicaijiatitle',
          type: 'get',
          dataType: 'json',
          data: {title: 'value'},

          success:function(data){
            // console.log(data);
            var html=template('tpl_nav',{tit: data.result})
               // console.log(html);        
              $("#bcj_nav_ul").html(html);
              $("#bcj_nav_ul li").eq(0).addClass('active');

              var length=1;
              $("#bcj_nav_ul li").each(function(){
                  length += $(this).width()+10;
              });
              $('#bcj_nav_ul').css("width",length);

              var start=0,end=0,dx=0,center;
              var screenWidth = $(".bcj_nav").width();
              $('#bcj_nav_ul').on('touchstart',function(e){
                // console.log(start);
                start = e.originalEvent.touches[0].pageX;
                $(this).removeClass("transitionAll");
              });

              $('#bcj_nav_ul').on('touchmove',function(e){
                dx = e.originalEvent.touches[0].pageX - start;
                center = end + dx;
                // console.log(center);
                if(center>50){
                  center = 50;
                }else if(center<screenWidth - length-50){
                  center=screenWidth - length-50;
                }
                $(this).css('transform','translateX('+center+'px)');
              });

              $('#bcj_nav_ul').on('touchend',function(){
                end = center; 
                // console.log(end);
                if(end >= 0){
                  end = 0;
                  $(this).addClass("transitionAll");
                  $(this).css('transform','translateX('+end+'px)');
                }else if(end<=screenWidth - length){
                  end = screenWidth - length;
                  $(this).addClass("transitionAll");
                  $(this).css('transform','translateX('+end+'px)');
                }
              });

          },
          error:function() {
            console.log('错误');
          }
        });  


         

  		// 内容区域 模板
  	 $.ajax({
          url: 'http://mmb.ittun.com/api/getbaicaijiaproduct?titleid=0',
          // url: 'http://192.168.50.130:8002/api/getbaicaijiaproduct?titleid=0',
          type: 'get',
          dataType: 'json',
          success:function(data){
            // console.log(data);
            var html=template('tpl_content',{id: data.result})
               // console.log(html);        
              $("#bcj_content_wrap").html(html);      
          },
          error:function() {
            console.log('错误');
          }
        }); 
  
     //点击切换内容   
        $(".bcj_nav").delegate('li', 'click', function(event) {

        // tab栏
        var index  = $(this).index();  
         $(this).addClass('active').siblings().removeClass('active');
        // console.log(this);
          
          var url = 'http://mmb.ittun.com/api/getbaicaijiaproduct?titleid='+$(this).data("titleid");
          // var url = 'http://192.168.50.130:8002/api/getbaicaijiaproduct?titleid='+$(this).data("titleid");
        // 内容区域 模板
               $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'json',
                    success:function(data){
                      // console.log(data);
                      var html=template('tpl_content',{id: data.result})
                         // console.log(html);        
                        $("#bcj_content_wrap").html(html);      
                    },
                    error:function() {
                      console.log('错误');
                    }
                  });   
        }); 

    // 返回顶部
      $(window).scroll(function(){  
                    if($(window).scrollTop() >= 100){  
                        $(".gotop").fadeIn(600);  
                    }else{  
                        $(".gotop").stop(true,true).fadeOut(600);  
                    }  
                });  

     //返回顶部  
     $(".gotop").click(function(){  
         $("html,body").animate({  
             scrollTop:0  
         },800);  
     });  
})

