// pages/index/schedule/schedule.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		label: "选择授课时段 >",
		array: [
			"15:00-16:00",
			"16:00-17:00",
			"17:00-18:00",
			"18:00-19:00",
			"19:00-20:00"
		],
		label2: "选择学员 >",
		label3: "选择课程 >",
		array3: [
			"马甲线训练",
			"腿部塑形",
			"塑形瑜伽",
			"max",
			"减脂塑形"
		],
	},

	bindPickerChange: function (e) {
		this.setData({
			label: "",
			index: e.detail.value
		})
	},

	bindPickerChange3: function (e) {
		this.setData({
			label3: "",
			index3: e.detail.value
		})
	},

	selectstudent: function(){
		wx.navigateTo({
			url: "../selectstudent/selectstudent"
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options.name)
		if(options.name!=null){
			this.setData({
				label2: options.name
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