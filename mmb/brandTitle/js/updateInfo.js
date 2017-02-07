console.log(location.href);
//function query(url) {
//    var obj = {};
//    var str=url.split('?')[1];
//    var arr=str.split('=');
//    obj[arr[0]]=arr[1]?arr[1]:"";
//    return obj;
//}
//var id = query(location.href).productId;

function query(url) {
    var obj = {};
    //id=2&name=zs&age=18
    var str = url.split('?')[1];

    str.split('&').forEach(function(item) {
        //item  -->  id=2
        var arr = item.split('=');
        obj[arr[0]] = arr[1] ? arr[1] : '';
        obj[arr[2]] = arr[3] ? arr[3] : '';
        obj[arr[4]] = arr[5] ? arr[5] : '';
    })
    console.log(obj);
    return obj;
}
var id = query(location.href).productid;
var imgHref=query(location.href).productImg;
var content=query(location.href).productName;
//console.log(imgHref);

$.ajax({
    type:'get',
    url:'http://192.168.50.130:8002/api/getproductcom?productid=0',
    dataType:'json',
    beforeSend:function(){},
    success:function(data){
        console.log(data);
        console.log(data.result);
        var html=template('tpl',{items:data.result});
        $('.mmb_update_txt').html(html);
    },
    error:function(){}
})

$('.img_wrap img').attr('src',decodeURI(imgHref));
$('.content_wrap').html(decodeURI(content));
//function query(url) {
//    var obj = {};
//    var str=url.split('?')[1];
//    var arr=str.split('=');
//    obj[arr[0]]=arr[1]?arr[1]:"";
//    return obj;
//}
//var id = query(location.href).brandTitleId;
//$.ajax({
//    type:'get',
//    url:'http://192.168.50.130:8002/api/getbrandproductlist?brandtitleid=0',
//    dataType:'json',
//    beforeSend:function(){},
//    success:function(data){
//        console.log(data);
//        var html=template('tpls',{users:data.result[1]});
//        $('.mmb_update_main').html(html);
//    },
//    error:function(){}
//})