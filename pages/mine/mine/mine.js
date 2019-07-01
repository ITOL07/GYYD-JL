// pages/mine/mine.js
const app = getApp()
const date = new Date()
var util = require("../../../utils/util.js"); 
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    actionSheetHidden:true,
    userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user: {},
    // icon:null,
		sold_amt: 0,
		les_amt: 0,
    date: util.formatDate(date)
		// user: {
		// 	id: 1,
		// 	name: "冯提莫",
		// 	telephone: "13466905546",
		// 	photo: "../../images/mine/photo.png",
		// 	introduce: "瘦腿、提臀、马甲线、增肌、肩颈腰膝康复#国家职业认证健身教练#4s国际脊柱康复认证教练#ZUMBA中国认证教练…",
		// 	salecourse: "8,620",
		// 	teachcourse: "8,620"
		// },
	},
  headImageClick: function () {
    this.setData({
      actionSheetHidden: false
    })
  },
  actionSheetChange: function () {
    this.setData({
      actionSheetHidden: true
    })
  },

	incomedetail: function(){
		var param = "?id="+this.data.user.id
		wx.navigateTo({
			url: "../incomedetail/imcomedetail"+param
		})
	},

	certificate: function(){
    var param = "?coachid=" + app.globalData.user_id +"&type=23"
    console.log('coachid===' + app.globalData.user_id)
		wx.navigateTo({
			// url: "../addcertificate/addcertificate" + param
      url:"../certificate/certificate"+param,
      success: function () {
        wx.setNavigationBarTitle({
          title: '我的证书'
        })
      }
		})
	},
  myalbum: function () {
    var param = "?coachid=" + app.globalData.user_id + "&type=25"
    console.log('coachid===' + app.globalData.user_id)
    wx.navigateTo({
      // url: "../addcertificate/addcertificate" + param
      url: "../certificate/certificate" + param,
      success: function () {
        wx.setNavigationBarTitle({
          title: '我的相册'
        })
      }
    })
  },
  space: function(){
    var param = "?coachid=" + app.globalData.user_id + "&type=25"
    console.log('coachid===' + app.globalData.user_id)
    wx.navigateTo({
      // url: "../addcertificate/addcertificate" + param
      url: "../field/field" + param,
      success: function () {
        wx.setNavigationBarTitle({
          title: '我的场地'
        })
      }
    })
	},
  agreement:function(){
    var param = "?coachid=" + app.globalData.user_id + "&type=25"
    console.log('coachid===' + app.globalData.user_id)
    wx.navigateTo({
      // url: "../addcertificate/addcertificate" + param
      url: "../agreement/agreement" + param,
      success: function () {
        wx.setNavigationBarTitle({
          title: '用户协议'
        })
      }
    })
  },

	case: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
			url: "../field/field" + param
		})
	},

	mycourse: function(){
    var param = "?id=" + app.globalData.user_id
		wx.navigateTo({
			url: "../mycourse/mycourse" + param,
      success: function () {
        wx.setNavigationBarTitle({
          title: '我的课程'
        })
      }
		})
	},

	getUserInfo: function (e) {
		console.log("请求用户信息："+e.detail.userInfo)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},

	getPhoneNo: function () {
		var url_tmp = util.getListConfig().url_test;
		var _this = this
		wx.request({
			url: url_tmp + '/user/qry',
			data: {
				mem_id: app.globalData.user_id
			},
			success(res) {
				console.log("查询手机号："+res.data)
				app.globalData.phoneNo = res.data.userName
				_this.setData({
					tel: res.data.userName
				})
			}
		})
	},

	setup: function(){
		var param = "?id=" + this.data.user.id
		wx.navigateTo({
      url: "../setup/setup" + param
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	load: function (options) {
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qrySum',
      data: {
        coach_id: app.globalData.user_id,
        reg_date: _this.data.date,
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          les_amt: res.data.kt_sum,
          sold_amt: res.data.xt_sum
        })
      }
    })

    wx.request({
      url: url_tmp + '/coach/qry',
      data: {
        coach_id: app.globalData.user_id,
        // reg_date: '2019-04-18'
      },
      success(res) {
        console.log("教练信息："+JSON.stringify(res.data))
        _this.setData({
          user:res.data,
          icon:res.data.icon
        })
      }
    })
	},
  onLoad:function(){
    this.load()
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
		this.show();
    this.load();
	},
	show: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
		// this.getPhoneNo();
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