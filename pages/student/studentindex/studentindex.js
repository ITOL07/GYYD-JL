// pages/student/studentmsg/studentmsg.js
const app = getApp()
var fileData = require("../../../utils/data.js");
var commonData = require("../../../utils/util.js"); 

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		student1: fileData.getStudentDetail().student,
		course11: fileData.getStudentDetail().course1,
		course_s1: fileData.getStudentDetail2(),
		course1: fileData.getStudentDetail2(),
		course_cancel1: fileData.getStudentDetail2()
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
  doplan: function () {
    wx.navigateTo({
      url: '../../index/schedule_s/schedule_s?id=' + this.data.student.memId + '&name=' + this.data.student.nickName
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
    //待预约课程
    wx.request({
      url: url_tmp + '/member/qryLesson',
      data:{
        mem_id: options.id,
        coach_id: app.globalData.user_id,
        status: 0
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          course_s: res.data
        })
      }
    })

    //历史课程（已完成和已取消）
    //已完成
    wx.request({
      url: url_tmp + '/member/qryLesson',
      data: {
        mem_id: options.id,
        coach_id: app.globalData.user_id,
        status: 2
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          course: res.data
        })
      }
    })
    //已取消
    
    wx.request({
      url: url_tmp + '/member/qryCancelLesson',
      data: {
        mem_id: options.id,
        coach_id: app.globalData.user_id,
        club_id:'',
        reg_date:''
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          course_cancel: res.data
        })
      }
    })
    wx.request({
      url: url_tmp + '/coach/qryMyMemSum',
      data: {
        mem_id: options.id,
        coach_id: app.globalData.user_id
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