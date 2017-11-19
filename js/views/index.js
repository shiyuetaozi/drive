/**
 * Created by Administrator on 2017/8/17.
 */
$(function () {
    new Vue({
        el: '#vueBox',
        data: function () {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleOpen: function (key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose: function (key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect:function(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    })
});