// pages/mine/mine.js
const app = getApp()
var util = require("../../../utils/util.js"); 
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		user: {
			id: 1,
			name: "冯提莫",
			telephone: "13466905546",
			photo: "../../images/mine/photo.png",
			introduce: "瘦腿、提臀、马甲线、增肌、肩颈腰膝康复#国家职业认证健身教练#4s国际脊柱康复认证教练#ZUMBA中国认证教练…",
			salecourse: "8,620",
			teachcourse: "8,620"
		}
	},

	incomedetail: function(){
		var param = "?id="+this.data.user.id
		wx.navigateTo({
			url: "../incomedetail/imcomedetail"+param
		})
	},

	certificate: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../addcertificate/addcertificate" + param
		})
	},

	case: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../case/case" + param
		})
	},

	space: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../field/field" + param
		})
	},

	mycourse: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../mycourse/mycourse" + param
		})
	},

	setup: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../myinfo/myinfo" + param
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qrySum',
      data: {
        coach_id: app.globalData.user_id,
        reg_date: '2019-04-18'
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          les_amt: res.data.les_total_amt,
          sold_amt: res.data.sold_total_amt
        })
      }
    })

    wx.request({
      url: url_tmp + '/coach/qry',
      data: {
        coach_id: app.globalData.user_id,
        reg_date: '2019-04-18'
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          user:res.data
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