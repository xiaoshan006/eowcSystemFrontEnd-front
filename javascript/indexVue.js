axios.defaults.baseURL = 'http://localhost:8080'; // 设置域名
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';

//创建轮播图实例
var bannerUl = new Vue({
    el: '#banners',
    data: function () {
        return {
            result: {}
        }
    },
    mounted:function () {
        axios.get("/api/home/bannerInfo").then((response) => {
            var stateCode = response.data.stateCode;
            if ("20016" == stateCode) {
                //数据回显成功
                this.result = JSON.parse(JSON.stringify(Object.assign(response.data.result)));/* Object.assign();*/
            }
        });
    },
    updated: function () {
        this.bannerChang();
    },
    methods: {
        bannerChang:function () {
            $('.tp-banner').show().revolution({
                dottedOverlay:"none",
                delay:6000,
                startwidth:1170,
                startheight:400,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                navigationType:"bullet",
                navigationArrows:"on",
                navigationStyle:"preview4",

                touchenabled:"on",
                onHoverStop:"on",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                keyboardNavigation:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"off",

                spinner:"spinner4",

                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",

                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                fullScreenOffsetContainer: ""
            });

            $('.tp-banner6').show().revolution({
                dottedOverlay:"none",
                delay:6000,
                startwidth:1170,
                startheight:500,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                navigationType:"bullet",
                navigationArrows:"on",
                navigationStyle:"preview4",

                touchenabled:"on",
                onHoverStop:"on",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                keyboardNavigation:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"off",

                spinner:"spinner4",

                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",

                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                fullScreenOffsetContainer: ""
            });

            $('.tp-banner3').show().revolution({
                dottedOverlay:"none",
                delay:6000,
                startwidth:1170,
                startheight:955,
                hideThumbs:200,

                thumbWidth:100,
                thumbHeight:50,
                thumbAmount:5,

                navigationType:"bullet",
                navigationArrows:"on",
                navigationStyle:"preview4",

                touchenabled:"on",
                onHoverStop:"on",

                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,

                parallax:"mouse",
                parallaxBgFreeze:"on",
                parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                keyboardNavigation:"off",

                navigationHAlign:"center",
                navigationVAlign:"bottom",
                navigationHOffset:0,
                navigationVOffset:20,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                shadow:0,
                fullWidth:"on",
                fullScreen:"off",

                spinner:"spinner4",

                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,

                shuffle:"off",

                autoHeight:"off",
                forceFullWidth:"off",

                hideThumbsOnMobile:"off",
                hideNavDelayOnMobile:1500,
                hideBulletsOnMobile:"off",
                hideArrowsOnMobile:"off",
                hideThumbsUnderResolution:0,

                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                startWithSlide:0,
                fullScreenOffsetContainer: ""
            });
        }
    }
});

//创建供应商实例
var clientDiv = new Vue({
    el: '#clients',
    data: function () {
        return {
            isShow: "1",
            result:{}//对象全局数据声明
        }
    },
    mounted:function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/clientInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20017" == stateCode) {
                    //数据回显成功
                    clientDiv.isShow = response.data.result.isShow;/* Object.assign();*/
                }
            });
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
            isShow : "1",
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/serviceInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20018" == stateCode) {
                    //数据回显成功
                    serviceDiv.isShow = response.data.result.isShow;
                }
            });
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

// 创建核心产品实例
var productDiv= new Vue({
    el: '#products',
    data: function () {
        return {
            isShow : "1",
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/productInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20019" == stateCode) {
                    //数据回显成功
                    productDiv.isShow = response.data.result.isShow;
                }
            });
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

// 创建评价实例
var evaluateDiv= new Vue({
    el: '#evaluates',
    data: function () {
        return {
            isShow : "1",
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/evaluateInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20020" == stateCode) {
                    //数据回显成功
                    evaluateDiv.isShow = response.data.result.isShow;
                }
            });
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

// 创建人才队伍实例
var talentDiv= new Vue({
    el: '#talents',
    data: function () {
        return {
            isShow : "1",
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/talentInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20021" == stateCode) {
                    //数据回显成功
                    talentDiv.isShow = response.data.result.isShow;
                }
            });
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

// 创建关于我们实例
var aboutUsDiv= new Vue({
    el: '#aboutUs',
    data: function () {
        return {
            isShow : "1",
            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            axios.get("/api/home/aboutInfo").then((response) => {
                var stateCode = response.data.stateCode;
                if ("20022" == stateCode) {
                    //数据回显成功
                    aboutUsDiv.isShow = response.data.result.isShow;
                }
            });
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








