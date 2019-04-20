// pages/student/student.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		inputtext: "搜索学员昵称或手机号",
		student: [
			{
				id: 1,
				photo: "../../images/student/photo.png",
				name: "冯提莫",
				sex: "../../images/student/woman.png",
				telephone: "13294097319",
				flag: true,
				course: {
					"cumulative": 6,
					"completed": 6,
					"ordering": 6,
					"unorder": 6
				}
			},
			{
				id: 2,
				photo: "../../images/student/photo.png",
				name: "冯提莫",
				sex: "../../images/student/woman.png",
				telephone: "13294097319",
				flag: false,
				course: {
					"cumulative": 6,
					"completed": 6,
					"ordering": 6,
					"unorder": 6
				}
			},
			{
				id: 3,
				photo: "../../images/student/photo.png",
				name: "冯提莫",
				sex: "../../images/student/woman.png",
				telephone: "13294097319",
				flag: false,
				course: {
					"cumulative": 6,
					"completed": 6,
					"ordering": 6,
					"unorder": 6
				}
			},
			{
				id: 4,
				photo: "../../images/student/photo.png",
				name: "冯提莫",
				sex: "../../images/student/woman.png",
				telephone: "13294097319",
				flag: false,
				course: {
					"cumulative": 6,
					"completed": 6,
					"ordering": 6,
					"unorder": 6
				}
			}
		]
	},

	changeflag: function(e){
		console.log(e)
		var data = this.data.student
		for (var index in data) {
			data.pop(data[index])
			if (data[index].id == e.target.id) {
				data[index].flag = true
			}else{
				data[index].flag = false
			}
		}
		this.setData({
			student: data
		})
	},

	navigate: function(e){
		wx.navigateTo({
			url: "../studentindex/studentindex?id"+e.target.id
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