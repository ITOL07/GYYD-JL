// pages/mine/incomedetail/imcomedetail.js
const app = getApp()
const date=new Date()
var util = require("../../../utils/util.js"); 
var commonData = require("../../../utils/data.js"); 

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		incomeData1: commonData.getIncome(),
    date: util.formatTime(date),
		incomeData: []
	},
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.getSumData(this.data.date);
  },
  getSumData: function (date) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qrySum',
      data: {
        coach_id: app.globalData.user_id,
        // reg_date: util.formatTime(new Date())+'-31'
        reg_date:date+'-27'
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
            les_amt: res.data.kt_sum,
            sold_amt: res.data.xt_sum
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
				var data = res.data
				for (var index in data) {
					let date = data[index].start_time_1
					date = date.substr(0, 4) + '/' + date.substr(4, 2) + '/' + date.substr(6, 2)
						+ date.substr(8, 6)
					data[index].start_time_1 = date
				}
        _this.setData({
          incomeData: data
        })
      }
    })
  },
  changedate: function (e) {
    var date = e.detail.value
    date = date.split("-", 2)
    date = date[0] + "年" + date[1] + "月"
    this.setData({
      date: date
    })
  },

  cashout: function () {
    var param = "?income=" + this.data.allIncome
    wx.navigateTo({
      url: "../cashout/cashout" + param
    })
  },

  changetime: function (e) {
    this.setData({
      time: e.detail.value
    })
  }, 
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    this.getSumData(this.data.date);
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