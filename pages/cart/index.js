// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scope: true,
    address: {
      address: "",
      phone: "",
      name: ""
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    let add = wx.getStorageSync('address');
    this.data.address.address = add.provinceName+add.cityName+add.countyName+add.detailInfo;
    this.data.address.name = add.userName;
    this.data.address.phone = add.telNumber;
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
  getAddress: async function () {
    await wx.chooseAddress({
      success: (result) => {
        wx.setStorageSync('address', result)
        this.data.scope = false;
      }
    })
  }
})