// pages/goods_detail/index.js
import {
  request
} from "../../request/index.js";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods_id: 0,
    goods: {
      pics: [],
      goods_introduce: "",
      goods_name: "",
      goods_price: 0
    }
  },
  good: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goods_id: options.goods_id
    })
    request({
        url: "/goods/detail?goods_id=" + this.data.goods_id
      })
      .then(result => {
        this.setData({
          goods: {
            pics: result.data.message.pics,
            goods_introduce: result.data.message.goods_introduce,
            goods_name: result.data.message.goods_name,
            goods_price: result.data.message.goods_price
          }
        })
        this.good = result.data.message;
        this.good.num = 1;
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  swiper_tap: function (e) {
    var that = this;
    wx.previewImage({
      current: e.currentTarget.dataset.url,
      urls: that.data.goods.pics.map(value => value.pics_big)
    })
  },
  addCart: function () {
    var cart = wx.getStorageSync("cart") ? wx.getStorageSync("cart") : [];
    var index = cart.findIndex(value => value.goods_id == this.good.goods_id);
    if (index == -1) {
      cart.push(this.good);
    } else {
      cart[index].num++;
    }
    wx.showToast({
      title: '添加成功',
      icon: "success",
      mask: true,
    })
    wx.setStorageSync('cart', cart);
  }
})