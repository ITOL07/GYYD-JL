// pages/index/selectstudent/selectstudent.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		student: [
			{
				id: 1,
				name: "菲菲",
				photo: "../../images/index/student.png",
				sex: "../../images/index/man (2).png",
				cumulative: 6,
				completed: 2,
				ordering: 2,
				unorder: 2,
				selected: true
			},
			{
				id: 2,
				name: "ali",
				photo: "../../images/index/student.png",
				sex: "../../images/index/woman.png",
				cumulative: 6,
				completed: 2,
				ordering: 2,
				unorder: 2,
				selected: false
			},
			{
				id: 3,
				name: "沉沉",
				photo: "../../images/index/student.png",
				sex: "../../images/index/man (2).png",
				cumulative: 6,
				completed: 2,
				ordering: 2,
				unorder: 2,
				selected: false
			},
			{
				id: 4,
				name: "ali",
				photo: "../../images/index/student.png",
				sex: "../../images/index/woman.png",
				cumulative: 6,
				completed: 2,
				ordering: 2,
				unorder: 2,
				selected: false
			},
			{
				id: 5,
				name: "沉沉",
				photo: "../../images/index/student.png",
				sex: "../../images/index/man (2).png",
				cumulative: 6,
				completed: 2,
				ordering: 2,
				unorder: 2,
				selected: false
			}
		]
	},

	selected: function(e){
		var data = this.data.student
		for(var index in data){
			if(data[index].id == e.target.id){
				data[index].selected = !data[index].selected
			}
		}
		this.setData({
			student: data
		})
	},

	back: function(){
		var map = []
		var data = this.data.student
		for(var index in data){
			if(data[index].selected){
				map.push(data[index].name)
			}
		}
		wx.navigateTo({
			url: "../schedule/schedule?name="+map
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