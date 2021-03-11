// pages/goods_list/index.js
import {
  request
} from "../../request/index"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs_list: [{
      id: 0,
      value: "综合",
      isActive: true
    }, {
      id: 1,
      value: "销量",
      isActive: false
    }, {
      id: 2,
      value: "价格",
      isActive: false
    }],
    goods_list: [],
    cid: 0,
    page: 1,
    num: 10,
    maxPage: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cid: options.cid
    })
    this.getGoodsList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      goods_list: [],
      page: 1,
      num: 10,
      maxPage: 0
    })
    this.getGoodsList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.page < this.data.maxPage) {
      this.setData({
        page: this.data.page + 1,
        num: this.data.num + 10
      })
      this.getGoodsList();
      console.log(this.data.goods_list)
    }else{
      wx.showToast({
        title: '我是有底线的',
        icon:'loading',
        duration:1000
      })

    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  change: function (e) {
    let index = e.detail;
    let tabs_list = this.data.tabs_list;
    tabs_list.forEach((v, i) => index == v.id ? v.isActive = true : v.isActive = false)
    this.setData({
      tabs_list
    })
  },
  getGoodsList: function () {
    request({
      url: "/goods/search?cid=" + this.data.cid + "&pagesize=" + this.data.num
    }).then(result => {
      this.setData({
        goods_list: result.data.message,
        maxPage: Math.ceil(result.data.message.total / (this.data.num / this.data.page))
      })
    })
    wx-wx.stopPullDownRefresh({})
  }
})