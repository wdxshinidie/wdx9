$(function() {
    /* 首页大图轮播 */
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 5, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
    // 电子书轮播
    $('#ebooks-banner').tyslide({
        boxh: 223, //盒子的高度
        w: 332, //盒子的宽度
        h: 223, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    //电子书 table切换
    var $lis = $()

    // 新书列表手风琴效果
    $('.ebooks .right-box ul > li').mouseenter(function() {
        // 所有:隐藏详情 显示标题
        $(this).siblings().find('.desc').hide(); //隐藏详情
        $(this).siblings().find('.ebooks-title').show(); //显示标题
        // 当前：隐藏标题 显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情
    });
    // 服装轮播
    $('#clothes-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 运动服装轮播
    $('#sprot-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });
    // 儿童服装轮播
    $('#children-clothes-banner').tyslide({
        boxh: 340, //盒子的高度
        w: 430, //盒子的宽度
        h: 340, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 3, //控制按钮高度
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
    });

    $('.ebooks-list').eq(1).hide();
    $('.ebooks-list').eq(2).hide();


    $('.ebooks-nav > li').mouseenter(function() {
        // 导航高亮颜色切换
        $(this).addClass('active').siblings('li').removeClass('active');
        // 获取索引
        var index = $(this).index();
        // 内容切换
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })

    //服装 卡片切换
    $('.content').eq(1).hide();
    $('.content').eq(2).hide();


    $('.clothes-nav > li').mouseenter(function() {
            // 导航高亮颜色切换
            $(this).addClass('active').siblings('li').removeClass('active');
            // 获取索引
            var index = $(this).index();
            // 内容切换
            $('.content').eq(index).show().siblings('.content').hide();
        })
        //  $('.clothes .left-box .top .fr li').mouseenter(function(){
        // 	$(this).addClass('active').siblings().removeClass('active');
        // 	var index = $(this).index();
        // 	$('.content').eq(index).show().siblings('.content').hide();
        // });

    //户外运动 卡片切换
    $('.sprot .left-box .top .fr li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('').eq(index).show().siblings().hide();
    });

    //童装 童鞋 婴儿装 卡片切换
    $('.children-clothes .left-box .top .fr li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('').eq(index).show().siblings().hide();
    });

    // 推广商品卡片切换
    //$('.produce').eq(1).hide();
    $('.promode .promode-name ul li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $('.promode .promode-producte .inner-box').animate({
            'left': -index * 1200
        })
    });

    /*二维码滑出效果*/
    $('.qr-code .ticket').hover(function() {
        console.log('1')
            //让二维码滑出来//
        $('.qr-code div').stop(true).animate({
            left: '-100px'
        })
    }, function() {
        //让二维码收回去//
        $('.qr-code div').stop(true).animate({
            left: 0
        })
    })

    /*顶部搜索框交互*/
    $(document).scroll(function() {
            //获取到顶部的距离//
            var topDistance = $('html,body').scrollTop();
            //判断
            if (topDistance > 500) {
                //如果滚动的距离大于500，滑下来
                $('.top-search-box').slideDown(300)
            } else {
                //否则收回去
                $('.top-search-box').slideUp(300)
            }
        })
        /*楼梯跳转*/
    $('.floor li').click(function() {
        //获取索引//
        var index = $(this).index();
        //选中每一个板块到顶部的偏移//
        var topDffset = $('.floorBox').eq(index).offset().top;

        //让滚动条滚到这个位置
        $('html,body').animate({
            scrollTop: topDffset - 50
        })
    })
})