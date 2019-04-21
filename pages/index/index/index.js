const app = getApp()
var util = require("../../../utils/util.js"); 

Page({
  data: {
		swiper: {
			indicatordots: true,
			indicatorcolor: "#FFFFFF",
			indicatoractivecolor: "#F9CE0E",
			autoplay: true,
			interval: 3000,
			duration: 1500,
			circular: true,
			img: [
				{
					id: 0,
					imgurl: "../../images/index/man.png"
				},
				{
					id: 1,
					imgurl: "../../images/index/man.png"
				},
				{
					id: 2,
					imgurl: "../../images/index/man.png"
				},
				{
					id: 3,
					imgurl: "../../images/index/man.png"
				}
			]
		},
		detail:[
			{
				id: 1,
				star: "私",
				name: "腾讯众创空间",
				state: "已预约",
				time: "11:00-11:45  增肌max 第1/10课",
				content: "课程内容：胸肌训练",
				bgcolor: "#FF9A2B",
				user: {
					imgurl: "../../images/index/user.png",
					name: "Ali"
				},
				cancel: false,
				confirm: false
			},
			{
				id: 2,
				star: "私",
				name: "腾讯众创空间",
				state: "已签到",
				time: "11:00-11:45  增肌max 第1/10课",
				content: "课程内容：胸肌训练",
				bgcolor: "#8FC31F",
				user: {
					imgurl: "../../images/index/user.png",
					name: "Ali"
				},
				cancel: true,
				confirm: true
			},
			{
				id: 3,
				star: "私",
				name: "腾讯众创空间",
				state: "未签到",
				time: "11:00-11:45  增肌max 第1/10课",
				content: "课程内容：胸肌训练",
				bgcolor: "#00B7EE",
				user: {
					imgurl: "../../images/index/user.png",
					name: "Ali"
				},
				cancel: true,
				confirm: false
			},
			{
				id: 4,
				star: "私",
				name: "腾讯众创空间",
				state: "旷课",
				time: "11:00-11:45  增肌max 第1/10课",
				content: "课程内容：胸肌训练",
				bgcolor: "#F9CE0E",
				user: {
					imgurl: "../../images/index/user.png",
					name: "Ali"
				},
				cancel: true,
				confirm: true
			}
		]
	},

	doplan: function(){
		wx.navigateTo({
			url: '../schedule/schedule'
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qryLesson',
      data: {
        coach_id: app.globalData.user_id,
        reg_date: util.formatTime(new Date()),
        status: ''
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          detail1: res.data
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
