/*
* @Author: Administrator
* @Date:   2016-12-01 14:45:28
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-14 19:44:10
*/

'use strict';
		


      // ajax请求最外层导航
  $(function() {

        $.ajax({
          url: 'http://mmb.ittun.com/api/getcategorytitle',
          // url: 'http://192.168.50.130:8002/api/getcategorytitle',
          type: 'get',
          dataType: 'json',
          data: {title: 'value'},
          success:function(data){
            // console.log(data);
            var html=template('tpl',{tit: data.result})
               // console.log(html);
              $("#nav").html(html);
              $(".nav_li").each(function(i,v){
                var _this = $(v);
                // 分类列表的ajax请求
                $.ajax({
                    url: 'http://mmb.ittun.com/api/getcategory?titleid='+_this.data('titleid'),
                    // url: 'http://192.168.50.130:8002/api/getcategory?titleid='+_this.data('titleid'),
                    type: 'get',
                    dataType: 'json',
                    data: {title: 'value'},

                    success:function(data){
                      // console.log(data);
                      var html=template('tpl_category',{caty: data.result})
                         // console.log(html);
                  
                        _this.find(".mmm_nav_detail").html(html);
                           },
                    error:function() {
                      console.log('分类列表错误');
                            }
                  });
              })
          },
          error:function() {
            console.log('title错误');
          }
        });      

    $('#nav').delegate('.nav_li', 'click', function(e) {
        $(this).find('ul').toggle().end().siblings().find('ul').hide();
          
    });       
});

      



			
        







	 
    