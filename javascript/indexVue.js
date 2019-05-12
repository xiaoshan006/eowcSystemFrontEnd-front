//创建轮播图实例
var bannerUl = new Vue({
    el: '#banners',
    data: function () {
        return {
            result:[]
        }
    },
    mounted:function () {
        this.setData();
    },
    methods: {
        setData: function () {
            this.result = [
                {
                    "bannerSrc": "images/slides/slider_1.jpg",
                    "bannerTitle":"图片标题1",
                    "bannerDesc":"这是描述内容"
                },
                {
                    "bannerSrc": "images/slides/slider_2.jpg",
                    "bannerTitle":"图片标题2",
                    "bannerDesc":"这是描述内容"
                },
                {
                    "sbannerSrcrc": "images/slides/slider_3.jpg",
                    "bannerTitle":"图片标题3",
                    "bannerDesc":"这是描述内容"
                },
                {
                    "bannerSrc": "images/slides/slider_4.jpg",
                    "bannerTitle":"图片标题4",
                    "bannerDesc":"这是描述内容"
                }
            ]
        }
    }
});

//创建供应商实例
var clientDiv = new Vue({
    el: '#clients',
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
                "data":[
                    {
                        "containerSrc": "images/client/1.png",
                    },
                    {
                        "containerSrc": "images/client/2.png",
                    },
                    {
                        "containerSrc": "images/client/3.png",
                    },
                    {
                        "containerSrc": "images/client/4.png",
                    }
                ],
                "isShow": true
            };
        }
    }
});

// 创建服务实例
var serviceDiv= new Vue({
    el: '#services',
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
                "data":[
                    {
                        "serviceSrc": "images/services/1.jpg",
                        "serviceDescTitle": "VEHICLE INSPECTION_1",
                        "serviceDescContent": "A Anycar Inspection is a comprehensive Vehicle Inspection advising the current state of the vehicle. It is a great way to receive independent advice…"
                    },
                    {
                        "serviceSrc": "images/services/2.jpg",
                        "serviceDescTitle": "VEHICLE INSPECTION_2",
                        "serviceDescContent": "A Anycar Inspection is a comprehensive Vehicle Inspection advising the current state of the vehicle. It is a great way to receive independent advice…"
                    },
                    {
                        "serviceSrc": "images/services/3.jpg",
                        "serviceDescTitle": "VEHICLE INSPECTION_3",
                        "serviceDescContent": "A Anycar Inspection is a comprehensive Vehicle Inspection advising the current state of the vehicle. It is a great way to receive independent advice…"
                    }
                 ],
                "isShow": true,
                "serviceTitle":"优质服务"
            };
        }
    }
});

// 创建关于我们实例
var aboutUsDiv= new Vue({
    el: '#aboutUs',
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
                "img":[
                    {
                        "src":"images/images-single/1.jpg"
                    },
                    {
                        "src":"images/images-single/2.jpg"
                    },
                    {
                        "src":"images/images-single/1.jpg"
                    }
                ],
                "data":[
                    {
                        "aboutUsAdvantage":"优势1",
                        "percent":"80"
                    },
                    {
                        "aboutUsAdvantage":"优势2",
                        "percent":"100"
                    },
                    {
                        "aboutUsAdvantage":"优势3",
                        "percent":"95"
                    },
                    {
                        "aboutUsAdvantage":"优势4",
                        "percent":"85"
                    }
                 ],
                "isShow": true,
                "aboutUsTitle":"关于我们标题",
                "aboutUsDesc":"这里是一句话简介",
                "aboutUsFirstWord":"这",
                "aboutUsContent":"Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。"
            };
        }
    }
});

// 创建人才队伍实例
var talentDiv= new Vue({
    el: '#talents',
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
                "data":[
                    {
                        "src":"images/member/t1.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX@Gmail.com",
                        "talentTel":"13526374627"
                    },
                    {
                        "src":"images/member/t2.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t3.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t4.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t5.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t6.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t7.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    },
                    {
                        "src":"images/member/t8.png",
                        "qqHref":"Http://baidu.com",
                        "weixinSrc":"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                        "talentsName":"这是名字",
                        "talentPosition":"部门经理",
                        "talentEmail":"XXX.Gmail.com"
                    }
                ],
                "isShow": true,
                "talentsTitle":"人才队伍标题",
                "talentsTitleDesc":"这里是一句话简介",

            };
        }
    }
});

// 创建评价实例
var evaluateDiv= new Vue({
    el: '#evaluates',
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
                "data":[
                    {
                        "evaluateContents":"我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。",
                        "evaluaterName":"评价人名",
                        "evaluatePosition":"职位",
                        "evaluateCompany":"公司"
                    },
                    {
                        "evaluateContents":"我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。",
                        "evaluaterName":"评价人名",
                        "evaluatePosition":"职位",
                        "evaluateCompany":"公司"
                    },
                    {
                        "evaluateContents": "我们已经成功创建了第一个 Vue 应用！看起来这跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。",
                        "evaluaterName": "评价人名",
                        "evaluatePosition": "职位",
                        "evaluateCompany": "公司"
                    }
                 ],
                "isShow":true,
                "backgroundImage":"background-image:url(./images/parallax/2.jpg)"

            };
        }
    }
});

// 创建核心产品实例
var productDiv= new Vue({
    el: '#products',
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
                "data":[
                    {
                        "src":"images/gallery/ga5.jpg",
                        "productItemName":"产品名称",
                        "productItemDesc":"产品超简短介绍",
                    },
                    {
                        "src":"images/gallery/ga4.jpg",
                        "productItemName":"产品名称",
                        "productItemDesc":"产品超简短介绍",
                    },
                    {
                        "src":"images/gallery/ga3.jpg",
                        "productItemName":"产品名称",
                        "productItemDesc":"产品超简短介绍",
                    },
                    {
                        "src":"images/gallery/ga2.jpg",
                        "productItemName":"产品名称",
                        "productItemDesc":"产品超简短介绍",
                    },
                    {
                        "src":"images/gallery/ga1.jpg",
                        "productItemName":"产品名称",
                        "productItemDesc":"产品超简短介绍",
                    }
                 ],
                "isShow":true,
                "productTitle":"核心产品",
                "productTitleDesc":"一句话标题解释，产品介绍"

            };
        }
    }
});





