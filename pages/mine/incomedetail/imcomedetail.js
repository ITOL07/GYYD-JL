// pages/mine/incomedetail/imcomedetail.js
const app = getApp()
const date=new Date()
var util = require("../../../utils/util.js"); 

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		incomeData: [
			{
				id: 1,
				time: "2018/11/11 16:00",
				income: "220",
				course: "max 增肌",
				student: "月亮",
				type: "提成",
				field: "腾讯众创空间"
			},
			{
				id: 2,
				time: "2018/11/11 16:00",
				income: "220",
				course: "max 增肌",
				student: "月亮",
				type: "提成",
				field: "腾讯众创空间"
			},
			{
				id: 3,
				time: "2018/11/11 16:00",
				income: "220",
				course: "max 增肌",
				student: "月亮",
				type: "提成",
				field: "腾讯众创空间"
			},
			{
				id: 4,
				time: "2018/11/11 16:00",
				income: "220",
				course: "max 增肌",
				student: "月亮",
				type: "提成",
				field: "腾讯众创空间"
			}
		],
    date: util.formatTime(date)
	},
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.getSumData();
  },
  getSumData: function () {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qrySum',
      data: {
        coach_id: app.globalData.user_id,
        // reg_date: util.formatTime(new Date())+'-31'
        reg_date:_this.data.date+'-31'
      },
      success(res) {
        console.log(res.data)
        if (res.data.errorNo=='-1'){
          _this.setData({
            les_amt: '暂无',
            sold_amt: '暂无'
          })
        }
        else{
          _this.setData({
            les_amt: res.data.les_total_amt,
            sold_amt: res.data.sold_total_amt
          })
        }
      }
    })

    wx.request({
      url: url_tmp + '/coach/qryLesson',
      data: {
        coach_id: app.globalData.user_id,
        // reg_date: util.formatTime(new Date()),
        reg_date:_this.data.date,
        status: ''
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          incomeData: res.data
        })
      }
    })
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    this.getSumData();
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