// pages/mine/mycourse/mycourse.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		courseData: [
			{
				id: '0',
				imgurl: '../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: '0',
				imgurl: '../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: '0',
				imgurl: '../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: '0',
				imgurl: '../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			}
		],
		flag: true,
		flag2: true
	},

	edit: function () {
		this.setData({
			flag: false
		})
	},

	cancel: function () {
		this.setData({
			flag: true
		})
	},

	click: function () {
		this.setData({
			flag2: false
		})
	},

	click2: function () {
		this.setData({
			flag2: true
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