//创建供应商实例
var footerDiv = new Vue({
    el: '#footerInfo',
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
                "logoSrc":"images/logo1.png",
                "introduction":"We offer a commitment to personalized service for our clients. If you have further questions or need help with a case, please complete our quick form below. A team member will return your message as soon as possible.",
                "address":"山东省济南市高新区XXX号",
                "tel":"0538-7444444",
                "mobile":"14244030666",
                "email": "mail@llanc.cn"
            };
        }
    }
});
