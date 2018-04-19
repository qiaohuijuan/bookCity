require(['jquery', 'Swiper'], function($) {
    //书架，书城的切换
    $('.title a').on('click', function() {
            var ind = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.main>div').eq(ind).show().siblings().hide();
        })
        //轮播
    new Swiper('.banner', {
        autoplay: 1000,
        loop: true
    })
})