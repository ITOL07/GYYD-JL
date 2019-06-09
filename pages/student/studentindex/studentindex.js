// pages/student/studentmsg/studentmsg.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js"); 

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		student: {
			id: 1,
			photo: "../../images/student/photo.png",
			name: "冯提莫",
			sex: "../../images/student/woman.png",
			telephone: "13294097319",
			flag: "取消置顶",
			course: {
				"cumulative": 6,
				"completed": 6,
				"ordering": 6,
				"unorder": 6
			},
			birthday: "1987年04月03日",
			height: '163cm'
		},
		course:[
			{
				id: 1,
				sign: "私",
				signbgcolor: "#F9CE0E",
				name: "增肌max",
				state: "旷课",
				date: "2018年11月12日  15:00-16:00",
				time: "3/10",
				store: "腾讯众创空间店",
				content: "胸部训练",
				cancel: true,
				confirm: true
			}
		]
	},

	navigate: function(){
		var data = this.data.student
		var param = "?birthday="+data.birthday
		param += "&height="+data.height
		param += "&flag=true"
		wx.navigateTo({
			url: "../studentremark/studentremark"+param
		})
	},

	navigaterecord: function () {
		wx.navigateTo({
			url: "../bodyrecord/bodyrecord?id="+this.data.student.id
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// if (options.birthday != null) {
		// 	this.data.student.birthday = options.birthday
		// 	this.setData({
		// 		student: this.data.student
		// 	})
		// }
		// if (options.height != null) {
		// 	this.data.student.height = options.height
		// 	this.setData({
		// 		student: this.data.student
		// 	})
		// }

    var url_tmp = commonData.getListConfig().url_test;
    var _this = this;
    console.log('options.id===' + options.id)
    wx.request({
      url: url_tmp + '/member/qry?mem_id=' + options.id,
      success(res) {
        console.log(res.data)
        _this.setData({
          student: res.data
        })
      }
    })
    wx.request({
      url: url_tmp + '/member/qryLesson',
      data:{
        mem_id: options.id,
        status: (typeof (options.status) == "undefined") ? '' : options.status
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          course: res.data
        })
      }
    })
    wx.request({
      url: url_tmp + '/coach/qryMyMemSum',
      data: {
        mem_id: options.id,
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          course1: res.data
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