/**
 * Created by DELL on 2016/11/29.
 */
//console.log(location.href)
//function query(url) {
//    var obj = {};
//    var str=url.split('?')[1];
//    var arr=str.split('=');
//    obj[arr[0]]=arr[1]?arr[1]:"";
//    return obj;
//}
//var id = query(location.href).brandTitleId;

$.ajax({
    type:'get',
    url:'http://192.168.50.130:8002/api/getbrandtitle',
    dataType:'json',
    beforeSend:function(){
        $('.loading').html('正在加载中...');
    },
    success:function(data){
        console.log(data.result);
        var html=template('tpl',{items:data.result});
        $('.mmb_products_b_list').html(html);
        $('.loading').html('');
    },
    error:function(){
        $('.loading').html('出错了.');
    }
})
