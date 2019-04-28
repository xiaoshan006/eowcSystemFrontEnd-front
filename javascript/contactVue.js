// 创建服务实例
var productsDiv = new Vue({
    el: '#contactForm',
    data: function () {
        return {
            message: {
                name: "",
                email: "",
                phone: "",
                msg: "",
                topic: "1"
            },

            result: {}//对象全局数据声明
        };
    },
    mounted: function () {
        this.setData();
    },
    methods: {
        setData: function () {
            this.result = {
                "topic": [
                    {
                        "value": "1",
                        "name": "预约"
                    },
                    {
                        "value": "2",
                        "name": "采购"
                    },
                    {
                        "value": "3",
                        "name": "合作"
                    },
                    {
                        "value": "4",
                        "name": "建议"
                    }
                ],
                "msgLength":240
            };
        },
        sendMassage: function () {
            axios.post('URL', {
                name: this.message.name,
                email: this.message.email,
                phone: this.message.phone,
                message: this.message.msg,
                topic: this.message.topic
            })
                .then(function (response) {
                    console.log(response);
                    if (response.about) {

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});