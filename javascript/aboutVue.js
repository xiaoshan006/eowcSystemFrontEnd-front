// 创建人才队伍我们实例
var aboutTeamDiv= new Vue({
    el: '#aboutTeam',
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
                "talentsTitle":"人才队伍",
                "talentsTitleDesc":"这里是一句话简介",

            };
        }
    }
});