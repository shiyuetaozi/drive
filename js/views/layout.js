/**
 * Created by Administrator on 2016/4/22.
 */
$(function () {
    indexLayout();
    $(window).resize(function () {
        indexLayout();
    });
});

//主体内容响应式布局
function indexLayout() {
    var o_main = $("#main"), o_header = $("#header");o_iframeBody = $("#iframeBody");o_footer = $("#footer");
    var winHeight = $(window).height(),winWidth = window.innerWidth;
    o_main.height(winHeight - o_header.height());
    o_iframeBody.height(winHeight - o_header.height() - o_footer.height());
}