// 创建服务实例
var servicesDiv= new Vue({
    el: '#servicesDiv',
    data: function () {
        return {
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            this.result ={
                "servicesData":[
                    {
                        "src":"images/services/1.jpg",
                        "serviceName":"推荐服务名称",
                        "reasonAndDesc":"推荐原因和描述"
                    },
                    {
                        "src":"images/services/2.jpg",
                        "serviceName":"推荐服务名称",
                        "reasonAndDesc":"推荐原因和描述"
                    },
                    {
                        "src":"images/services/3.jpg",
                        "serviceName":"推荐服务名称",
                        "reasonAndDesc":"推荐原因和描述"
                    }

                ],
                "downloadData":[
                    {
                        "downloadBtnTitle":"下载内容标题1",
                        "downloadBtnDesc":"下载内容描述1"
                    },
                    {
                        "downloadBtnTitle":"下载内容标题2",
                        "downloadBtnDesc":"下载内容描述2"
                    }
                ],
                "allServicesData":[
                    {
                        "serviceName":"下载内容标题1",
                        "serviceDesc":"下载内容描述1"

                    },
                    {
                        "serviceName":"下载内容标题2",
                        "serviceDesc":"下载内容描述2"
                    },
                    {
                        "serviceName":"下载内容标题1",
                        "serviceDesc":"下载内容描述1"

                    },
                    {
                        "serviceName":"下载内容标题2",
                        "serviceDesc":"下载内容描述2"
                    }
                ],
                "backgroundImage":"background-image:url(./images/parallax/2.jpg)",
                "servicesTitle":"我们的服务(标题)",
                "servicesTitleDesc":"我们的服务一句话简介",
                "topIsShow": true,
                "middleIsShow":true,
                "bottomIsShow":true,
                "topTitle":"公司主要服务介绍(标题)",
                "topDesc":"公司主要服务一句话介绍(介绍)",
                "bottomTitle":"我们提供（所有的服务）",
                "bottomDesc":"我们提供的所有服务宣传语",
            };
        }
    }
});