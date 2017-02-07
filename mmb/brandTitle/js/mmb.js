//http://localhost:63342/manmanbuy/mmb.html?brandTitleId=
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
        url:'http://192.168.50.130:8002/api/getbrand?brandtitleid='+id,
        dataType:'json',
        beforeSend: function () {
            $('.loading').html('正在拼命加载中...');
        },
        success: function (data) {
            console.log(data);
            var html=template('tpl',{items:data.result});
            $('.mmb_product_list').html(html);
            $('.loading').html('');
        },
        error: function () {

        }
    })

$.ajax({
    type:'get',
    url:'',
})


