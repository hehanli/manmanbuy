
//��ȡ��ַ���е���Ϣ���õ�idֵ


var url=location.href.split('?')[1];

var urlId=url.split('=')[1];
console.log(urlId);
$.ajax({
    type:'get',
    // url:'http://192.168.50.130:8002/api/getmoneyctrlproduct?productid='+urlId,
    url:'http://mmb.ittun.com/api/getmoneyctrlproduct?productid='+urlId,
    dataType:'json',
    beforeSend: function () {

    },
    success: function (data) {
        var lists=data.result;
        console.log(lists);
        var html='<h2 class="title">'+lists[0].productName+'</h2>'
            // +'<div class="price">'+lists[0].productPrice+'</div>'
            +'<div class="from">'
            +'<span>'+lists[0].productFrom+'</span>&nbsp;'

            +'<span>'+lists[0].productTime+'</span>&nbsp;'

            +'<span>'+lists[0].productTips+'</span>'
            +'</div>'
            +'<div class="text">'
            +lists[0].productImgSm
            +'<p>'+lists[0].productInfo+'</p>'
            +'<p>'+lists[0].productInfo1+'</p>'
            +'<p>'+lists[0].productInfo2+'</p>'
            +''
            +'</div>'
            +lists[0].productImgLg
        $('.mmm_discount').html(html);
        $('.mmm_talk').html(lists[0].productComment);
    },
    error: function () {
        alert('�������');
    }
})



