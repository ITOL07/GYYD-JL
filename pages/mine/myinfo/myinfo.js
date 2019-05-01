// pages/userinfo/userinfo.js
const app = getApp()
var util = require("../../../utils/util.js"); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    nickName:null,
    sex:null,
    birth:null,
    height:null,
    photos:null
  },
  chooseImg: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          photos: tempFilePaths
        })
        console.log(that.data.photos)
      }
    })
  },
  bindNickName:function(e){
    // console.log(e.detail.value)
    this.setData({
      nickName: e.detail.value
    })
  },
  bindSex: function (e) {
    // console.log(e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  bindBirth:function(e) {
    // console.log(e.detail.value)
    this.setData({
      birthday: e.detail.value
    })
  },
  bindHeight: function (e) {
    // console.log(e.detail.value)
    this.setData({
      height: e.detail.value
    })
  },
  uploadImg: function (filepath) {
    var that = this
    var url_tmp = util.getListConfig().url_test;
    wx.uploadFile({
      url: url_tmp + '/img/upload', //仅为示例，非真实的接口地址
      filePath: filepath,
      name: 'file',
      formData: {
        'user_id': app.globalData.user_id,
        'type': 1
      },
      success: function (res) {
        var data = res.data
        console.log(data)
        //do something
      }
    })
  },
  submit:function(){
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    // _this.uploadImg(_this.data.photos[0])
    wx.request({
      url: url_tmp + '/coach/update',
      data: {
        coach_id: app.globalData.user_id,
        nickName: _this.data.nickName,
        sex: _this.data.sex,
        birthday: _this.data.birthday,
        height: _this.data.height
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          user: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;

    wx.request({
      url: url_tmp + '/coach/qry',
      data: {
        coach_id: app.globalData.user_id,
        // reg_date: '2019-04-18'
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          user: res.data
        })
      }
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

  }
})