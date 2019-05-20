axios.defaults.baseURL = 'http://localhost:8080'; // 设置域名
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';
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
            axios.get("/api/home/heardInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("2005" == stateCode) {
                    //数据获取成功
                    this.result = Object.assign(response.data.result);
                }
            });
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
            axios.get("/api/home/heardInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("2005" == stateCode) {
                    //数据获取成功
                    this.result = Object.assign(response.data.result);
                }
            });
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