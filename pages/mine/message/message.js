Page({

  /**
   * 页面的初始数据
   */
  data: {
		messageData: [
			{
				id: '0',
				title: '【增肌max】课程提醒',
				time: '2018-12-09 12:34:22',
				content: '本周三下午16:00整又到了我们流汗的时间 了，记得准时到达哦！ 【腾讯众创空间店】不见不散！'
			},
			{
				id: '1',
				title: '【增肌max】课程提醒',
				time: '2018-12-09 12:34:22',
				content: '本周三下午16:00整又到了我们流汗的时间 了，记得准时到达哦！ 【腾讯众创空间店】不见不散！'
			},
			{
				id: '2',
				title: '【增肌max】课程提醒',
				time: '2018-12-09 12:34:22',
				content: '本周三下午16:00整又到了我们流汗的时间 了，记得准时到达哦！ 【腾讯众创空间店】不见不散！'
			},
		],
		selected: true
  },

	switch1: function(){
		this.setData({
			selected: true
		})
		console.log("switch1"+this.data.selected)
	},

	switch2: function(){
		this.setData({
			selected: false
		})
		console.log("switch2"+this.data.selected)
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