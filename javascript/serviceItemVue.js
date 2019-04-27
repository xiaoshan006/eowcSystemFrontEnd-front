// 创建服务实例
var servicesDiv= new Vue({
    el: '#servicesItemDiv',
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
                "servicesInfoImgs":[
                    {
                        "imgSrc":"images/services/1.jpg",
                    },
                    {
                        "imgSrc":"images/services/2.jpg",
                    },
                    {
                        "imgSrc":"images/services/3.jpg",
                    }
                ],
                "backgroundImage":"background-image:url(./images/parallax/1.jpg)",
                "serviceName":"服务名称",
                "serviceDesc":"服务描述或推荐理由或特点等",
                "infoTitle":"我们的服务(标题)",
                "infoDesc":"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n" +
                    "\n" +
                    "                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." +
                    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n" +
                    "\n" +
                    "                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
            };
        }
    }
});