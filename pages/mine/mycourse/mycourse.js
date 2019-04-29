// pages/mine/mycourse/mycourse.js
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
			{
				id: "2",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "3",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "4",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "5",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "6",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			},
			{
				id: "7",
				imgurl: '../../images/mine/course.png',
				title: '增肌max',
				introduce: '私人定制肌肉强化训练',
				price: '199'
			}
		],
		flag: true,
		flag2: true,
		bgcolor: ""
	},

	edit: function (e) {
		this.setData({
			flag: false,
			bgcolor: "bgcolor"
		})
	},

	cancel: function () {
		this.setData({
			flag: true,
			bgcolor: ""
		})
	},

	click: function (e) {
		var data = this.data.courseData
		for(var index in data){
			if(data[index].id==e.target.id){
				data[index].selected = true
			}
		}
		this.setData({
			flag2: false,
			courseData: data
		})
		console.log(e)
	},

	click2: function (e) {
		var data = this.data.courseData
		var m = 0
		for(var i=0;i<data.length;i++){
			if(data[i].id==e.target.id){
				data[i].selected = false
				m=i
			}
		}
		this.setData({
			flag2: true,
			courseData: data
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
