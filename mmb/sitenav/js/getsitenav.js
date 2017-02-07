/**
 * Created by DELL on 2016/12/3.
 */
$.ajax({
    type:'get',
    url:'http://mmb.ittun.com/api/getsitenav',
    // url:'http://192.168.50.130:8002/api/getsitenav',
    dataType:'json',
    beforeSend:function(){},
    success:function(data){
        var html=template('tpl',{items:data.result});
        $('.mmb_title_list').html(html);
    },
    error:function(){}
})