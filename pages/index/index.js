//Page Object
import {
    request
} from "../../request/index.js"; //import 来引入另一个js文件 {}中的表示引入对象 form后面跟随文件路径
Page({
    data: {
        message: [],
        daohang: [],
        louceng: []
    },
    //options(Object)
    onLoad: function (options) {
        this.getLunBoTu();
        this.getDaoHang();
        this.getLouCeng();
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    },
    //获取轮播图数据
    getLunBoTu: function () {
        request({
            url: '/home/swiperdata'
        }).then(result => {
            this.setData({
                message: result.data.message
            })
        })
    },
    //获取导航栏数据
    getDaoHang: function () {
        request({
            url: '/home/catitems'
        }).then(result => {
            this.setData({
                daohang: result.data.message
            })
        })
    },
    //获取楼层数据
    getLouCeng: function () {
        request({
            url: '/home/floordata'
        }).then(result => {
            this.setData({
                louceng: result.data.message
            })
        })
    }
});