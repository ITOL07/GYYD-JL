// pages/student/studentremark/studentremark.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		flag: false,
		birthday: "1981年04月30日",
		height: "163cm"
	},

	naviagte: function(){
		var data = this.data
		var param = "?birthday="+data.birthday
		param += "&height="+data.height
		wx.navigateTo({
			url: "../studentindex/studentindex"+param,
		})
	},

	inputbirthday: function(e){
		this.setData({
			birthday: e.detail.value
		})
	},

	inputheight: function (e) {
		this.setData({
			height: e.detail.value
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if(options.birthday!=null){
			this.setData({
				birthday: options.birthday
			})
		}
		if (options.height != null) {
			this.setData({
				height: options.height
			})
		}
		if (options.flag != null) {
			this.setData({
				flag: options.flag
			})
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

	}
})