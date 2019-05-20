axios.defaults.baseURL = 'http://localhost:8080'; // 设置域名
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';

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
            axios.get("/api/home/footerInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("2005" == stateCode) {
                    //数据获取成功
                    this.result = Object.assign(response.data.result);
                }
            });
        }
    }
});
