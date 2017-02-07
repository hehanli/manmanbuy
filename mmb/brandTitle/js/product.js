console.log(location.href);
function query(url) {
    var obj = {};
    var str=url.split('?')[1];
    var arr=str.split('=');
    obj[arr[0]]=arr[1]?arr[1]:"";
    return obj;
}
var id = query(location.href).brandTitleId;

$.ajax({
    type:'get',
    url:'http://192.168.50.130:8002/api/getbrandproductlist?brandtitleid='+id,
    dataType:'json',
    beforeSend:function(){},
    success:function(data){
        console.log(data);
        var html=template('tpl',{items:data.result});
        $('.mmb_content_list').html(html);
    },
    error:function(){

    }
})