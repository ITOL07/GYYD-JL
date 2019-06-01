// pages/mine/mycourse/mycourse.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js");
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		courseData: [
			{
				id: "0",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "1",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			
		],
		flag: true,
		flag2: true,
		bgcolor: ""
	},

  getCourseInfo: function (para1,para2) {
    var that = this
    var url_tmp = commonData.getListConfig().url_test;
    console.log('获取教练课程信息' + para1)
    wx.request({
      // url: url_tmp + '/course/getCourseInfo',
      url: url_tmp + '/coach/qryCourse',
      method: 'POST',
      data: {
        coach_id: para1,
        try_flag: '',
        club_id: (typeof (para2) == "undefined") ? '' : para2
      },//param
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //发送post请求
      }, success: function (res) {
        console.info(res.data)
        if (res.statusCode == 200) {
          that.setData({
            courseData: res.data
          })
        }
      }
    })
  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    //默认加载教授课程信息
    console.log(options)
    this.getCourseInfo(options.id);
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
