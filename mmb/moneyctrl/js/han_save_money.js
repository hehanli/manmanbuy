/**
 * Created by Administrator on 2016/11/30.
 */

//���ܣ���������Ĭ�ϵ�һҳ
//�洢ҳ��ֵ���������ʱ���������ݴ���pageid��ֵ
//��ʾ��ҳ����
$(function(){
    // 1.��ʼ��ҳ��
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

    //2.�����ߵİ�ť���ı����е�pageid--;����ұߵİ�ť��pageid++;
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
//3.�����ת����һҳ
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


    //4.���������Ʒ��ת����Ʒ������ҳ





    //5.���ض�������
    $(window).scroll(function () {
        var scrolltop=window.scrollY||document.body.scrollTop||0;
        if(scrolltop>900){
            $('#back_top').click(function () {
                //���ض���
                $('html,body').scrollTop(0);
            })

        }
    })



})
