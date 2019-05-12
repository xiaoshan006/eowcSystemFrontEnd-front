// 创建服务实例
var newsItem= new Vue({
    el: '#newsItemDiv',
    data: function () {
        return {
            result: {}
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        //数据查询
        setData: function () {
            var urlParam = getUrlParam("id");
            if (null === urlParam || undefined === urlParam || "" === urlParam) {
                alert("非法请求!");
                history.back();
                return;
            }
            this.result = {
                "newsIitle": "TNEWS_ITLE",
                "newsText": "<p>Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheels, even when the car is stationary.  The steering rack is connected to the front wheels and it’s the rack that allows the car to turn corners. This sound simple in practice, however it is a bit more complex and the power steering system needs to be checked regularly to ensure it is working properly.</p>\n" +
                    "\n" +
                    "                                            <p>The largest cause of failure in this system is a worn power steering pump which will not only operate ineffectively, but they can also contaminate the steering hydraulics with metal particles. These are the most likely cause of damage to components in the system such as damaged fluid seals, sticky valves and scored shafts and power bores.</p>\n" +
                    "\n" +
                    "                                            <p>Leaking hydraulic pipes that drive the steering pump can also be an issue and need checking and from time to time, or replacing, as part of your regular service. You can learn more about your power steering system by viewing our new AutoFacts video here.</p>\n" +
                    "\n" +
                    "                                            <p>If you have any concerns with your power steering call your local Repco Authorised Service centre today.</p>\n",
                "newsType": ["公告","测试"],
                "newsTime": "2019.4.5",
                "newsSrc":"images/blog/1.4.jpg"
            };
        },
        //返回按钮
        backUp:function () {
            history.back();
        }
    }
});

function getUrlParam (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}