/*
 *购物车js文件
 */
$(function() {
    // 1.全选
    /*
    1.点击表头的全选框 获取表头全选框的选中状态
    2.表格中的选择框状态需要一致
    3.结算中的全选状态一致
    */
    //定义三个变量
    var $theadInput = $('table thead input[type=checkbox]'); //头部选择框
    var $tbodyInput = $('table tbody input[type=checkbox]'); //中间选择框
    var $allPriceInput = $('.totalPrice input[type=checkbox]'); //结算选择框

    $theadInput.change(function() {
            //获取选中状态
            var state = $(this).prop('checked');
            //让表格中的选择框状态保持一致 结算中的选择框 状态保持一致
            $tbodyInput.prop('checked', state);
            $allPriceInput.prop('checked', state);
        })
        //结算中的选择框也需要有相同的选择功能
    $allPriceInput.change(function() {
        //获取选中状态
        var state = $(this).prop('checked');
        //上面的全选 和表格中的input需要状态一致
        $theadInput.prop('checked', state);
        $tbodyInput.prop('checked', state);
    })

    //表单中的选中状态 反过来影响全选

    $tbodyInput.change(function() {
        //第一个标杆
        var flag = true;
        //总价
        var totalPrice = 0;
        //循环表格中所有选择框的选中状态
        $tbodyInput.each(function(i, input) {
                if (!$(input).prop('checked')) { //只要有一个选择框没选中就为false
                    flag = false;
                } else {
                    totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
                }
            })
            //把状态用来改变全选框
        $theadInput.prop('checked', flag)
        $allPriceInput.prop('checked', flag)

        //渲染到总价对应位置
        $('.total').text(totalPrice.toFixed(2))
    })

    //数量的加和减功能
    //加
    $('.add').on('click', function() {
            //下一个inputd的节点
            var $nextInput = $(this).next();
            //获取输入框的值
            var oldVal = parseInt($nextInput.val());
            //自增
            oldVal++;
            //重新赋值给这个输入框
            $nextInput.val(oldVal);

            //小计
            subTotalPrice(oldVal, $(this));
        })
        // 减
    $('.reduce').on('click', function() {
            //上一个inputd的节点
            var $prevInput = $(this).prev();
            //获取输入框的值
            var oldVal = parseInt($prevInput.val());
            //自增
            oldVal--;
            //设置边界值
            oldVal = oldVal < 1 ? 1 : oldVal; //如果小于1 那么就等于1 否则 就等于自己
            //重新赋值给这个输入框
            $prevInput.val(oldVal);

            //小计
            subTotalPrice(oldVal, $(this));
        })
        //抽取一个小计的函数
    function subTotalPrice(val, dom) {
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        //把小计放入dom对应的位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }

    //删除
    $('.del').click(function() {
        //删除整行
        $(this).closest('tr').remove();
    })

    //计算总价
    $tbodyInput.each(function(i, input) {
        //判断选中状态 如果被选中，那么需要计算总价
        if ($(input).prop('checked')) {
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        }

        //计算总价的函数

    })
})