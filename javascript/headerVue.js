//创建供应商实例
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
                "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            };
        }
    }
});
