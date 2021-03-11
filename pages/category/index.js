// pages/category/index.js
import {
  request
} from "../../request/index";
import regeneratorRuntime from "../../lib/runtime/rumtime";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenlei: [],
    check: 0,
    top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = wx.getStorageSync('fenlei');
    if (!data) {
      this.getCategory();
    } else {
      if (Date.now() - wx.getStorageSync('time') > 50) {
        this.getCategory();
      } else {
        this.setData({
          fenlei: wx.getStorageSync('fenlei').data.message
        })
      }
    }
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
  //获取数据
  getCategory: function () {
    request({
      url: '/categories'
    }).then(result => {
      wx.setStorageSync('fenlei', result);
      wx.setStorageSync('time', Date.now());
      this.setData({
        fenlei: wx.getStorageSync('fenlei').data.message
      })
    })
  },
  //更改绑定
  change: function (e) {
    this.setData({
      check: e.target.dataset.index,
      top: 0
    })
  }
})