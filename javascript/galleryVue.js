// 创建服务实例
var productsDiv= new Vue({
    el: '#productsInfoDiv',
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
                "classificationData":[
                    {
                        "classTags":".classA",
                        "className":"类名A"
                    },
                    {
                         "classTags":".classB",
                         "className":"类名B"
                    },
                    {
                        "classTags":".classC",
                        "className":"类名C"
                    }
                ],
                "productsInfo":[
                    {
                        "productImg":"images/gallery/1.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classA"
                    },
                    {
                        "productImg":"images/gallery/2.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classB"
                    },
                    {
                        "productImg":"images/gallery/3.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classC"
                    },
                    {
                        "productImg":"images/gallery/4.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classA"
                    },
                    {
                        "productImg":"images/gallery/5.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classB"
                    },
                    {
                        "productImg":"images/gallery/6.jpg",
                        "productName":"产品名称",
                        "productDesc":"产品简介描述或价格等",
                        "productClass":"classC"
                    }
                ],
                "backgroundImage":"background-image:url(./images/parallax/2.jpg)",
                "productShowTitle":"产品展示标题",
                "productShowDesc":"产品展示描述内容"
            };
        }
    }
});