
var headerbarDiv = new Vue({
    el: '#headerbar',
    data: function () {
        return {
            result:{}//对象全局数据声明

        }
    },
    mounted:function () {
        this.setData();
    },
    methods: {
        setData: function () {
            this.result ={
                "data":"企业运营理念在此处展示",
                "isShow": true,
                "qqHref":"Https://qq.com/",
                "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            };
        }
    }
});
var headerDiv = new Vue({
    el: '#header',
    data: function () {
        return {
            result:{}//对象全局数据声明

        }
    },
    mounted:function () {
        this.setData();
    },
    methods: {
        setData: function () {
            this.result ={
                "logoSrc": "images/logo.png"
            };
        }
    }
});

var responsiveMenu = function() {
    var menuType = 'desktop';

    $(window).on('load resize', function() {
        var currMenuType = 'desktop';

        if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
            currMenuType = 'mobile';
        }

        if ( currMenuType !== menuType ) {
            menuType = currMenuType;

            if ( currMenuType === 'mobile' ) {
                var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                $('#header').after($mobileMenu);
                hasChildMenu.children('ul').hide();
                hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                $('.btn-menu').removeClass('active');
            } else {
                var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                $desktopMenu.find('.submenu').removeAttr('style');
                $('#header').find('.nav-wrap').append($desktopMenu);
                $('.btn-submenu').remove();
            }
        }
    });

    $('.btn-menu').on('click', function() {
        $('#mainnav-mobi').slideToggle(300);
        $(this).toggleClass('active');
    });

    $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
        $(this).toggleClass('active').next('ul').slideToggle(300);
        e.stopImmediatePropagation()
    });
}

responsiveMenu();