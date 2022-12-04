/** 
 * 返回顶部功能函数封装
 * 2022-11-19 by wdx
 */
$(function() {
    //把函数挂载再window上 暴露出去
    window.gotoTop = function() {
        //准备结构
        var $gotoTopHtlm = $(' <div class="backToTop"><img src="images/gototop_09.jpg" alt=""></div>');

        //写样式定位
        $gotoTopHtlm.css({
            width: '30px',
            height: '50px',
            position: '100px',
            bottom: '100px',
            left: '610px',
            marginLfet: '50%',
            display: 'none'

        });

        //返回顶部的JS代码
        /*返回顶部*/
        //绑定滚动事件
        $(document).scroll(function() {
                //获取距离顶部的位置
                var topDistance = $('html,body').scrollTop();
                //判断
                if (topDistance > 500) {
                    $('.backToTop').fadeIn();

                } else {
                    $('.backToTop').fadeOut();
                }

            })
            //返回顶部功能(动态添加的元素需要使用事件委托才能绑定事件)
        $('body').on('click', '.backToTop', function() {
            $('html,body').animate({
                scrollTop: 0
            }, 300)
        })


        //追加到页面的尾部
        $('body').append($gotoTopHtlm)
    }
})