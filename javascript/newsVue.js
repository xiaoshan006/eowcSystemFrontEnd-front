// 创建服务实例
var newsList= new Vue({
    el: '#newsListDiv',
    data: function () {
        return {
            result: {},
            newsType: [],
            currentPage:1, //初始页
            pageSize:5,    //    每页的数据
            newsLists: []   //分页数据
        };
    },
    mounted: function () {
        this.setData();
        this.getClass();
    },
    methods: {
        //数据查询
        setData: function () {
            this.result ={
                "newsList":[
                    {
                        "id": "123",
                        "src": "",
                        "newsTitle": "TITLE-----1",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----2",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----3",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----4",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----5",
                        "newsTime":"2019.4.15",
                        "newsClass":["企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "",
                        "newsTitle": "TITLE-----6",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----7",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----8",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----9",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----10",
                        "newsTime":"2019.4.15",
                        "newsClass":["企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "",
                        "newsTitle": "TITLE-----11",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----12",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----13",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告","企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----14",
                        "newsTime":"2019.4.15",
                        "newsClass":["公告"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    },
                    {
                        "id": "123",
                        "src": "images/blog/1.jpg",
                        "newsTitle": "TITLE-----15",
                        "newsTime":"2019.4.15",
                        "newsClass":["企业规划"],
                        "newsAbstract":".Most cars these days are fitted with power steering, which essentially means that a pump assists with the steering to make it easier to turn the wheel..."
                    }
                ],
                "backgroundImage":"background-image:url(./images/parallax/2.jpg)"
            };
            this.newsLists = this.result.newsList;
        },
        //获取分类
        getClass:function () {
            this.newsType=[
                {
                    "classId": "123",
                    "className": "公告"
                },
                {
                    "classId":"123",
                    "className":"招标"
                }
            ]
        },
        //分页
        sizeChange: function (size) {
            this.pageSize = size;
        },
        currentChange: function (currentPage) {
            if (currentPage > this.currentPage) {
                $("html,body").animate({scrollTop:$("#anchorPoint").offset().top},1200);
            }
            this.currentPage = currentPage;
        },
        //查看详情
        showDetails:function (id) {
            window.location.href="newsItem.html?id=" + id;
        },
        //查看分类
        getNewsByClass:function (id) {
            //TODO:根据Id查询
            if (''===id){
                console.info("查询全部")
            }
            this.newsLists = [];

        }

    }
});