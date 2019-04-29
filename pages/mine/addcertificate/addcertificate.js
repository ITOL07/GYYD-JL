// pages/mine/addcertificate/addcertificate.js
const app=getApp()
var util = require("../../../utils/util.js"); 

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    photos:null,
    actionSheetHidden: true
	},

  /**
 * 选择照片
 */
   chooseImgs: function() {
    var that = this
    wx.chooseImage({
      count: 9, // 默认9
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
  /**
 * 上传照片
 */
  uploadImgs: function () {
    var that = this
    for (var i = 0; i < that.data.photos.length; i++) {
      that.uploadImg(that.data.photos[i])
    }
  },
  uploadImg: function (filepath) {
    var that = this
    var url_tmp = util.getListConfig().url_test;
    wx.uploadFile({
      url: url_tmp+'/img/upload', //仅为示例，非真实的接口地址
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
  selectPhoto: function () {
    var that = this
    var image = that.data.images
  		wx.chooseImage({
			count: 3,
			sourceType: "album",
			success: function(res) {
				var data = res.tempFilePaths
				for(var index in data){
					image.push(data[index])
				}
				that.setData({
					actionSheetHidden: true,
					images: image
				})
			},
		})
	},
  shot: function () {
    wx.chooseImage({
      sourceType: "camera",
      success: function (res) {
        this.setData({
          actionSheetHidden: true,
          images: res.tempFilePaths[0]
        })
      },
    })
  },
  upload: function () {
    this.setData({
      actionSheetHidden: false
    })
  },

  actionSheetChange: function () {
    this.setData({
      actionSheetHidden: true
    })
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