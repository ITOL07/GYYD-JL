// pages/index/schedule/schedule.js
const app = getApp()
var util = require("../../../utils/util.js"); 
var fileData = require("../../../utils/util.js");
var commonData = require("../../../utils/util.js");

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    texts: "至少2个字",

    url_tmp: util.getListConfig().url_test,
    areatests:'',
    min: 2,//最少字数
    max: 20, //最多字数 (根据自己需求改变)
    //学员
    members:[],
    members_bac: [],
    member:0,
    //日期
    newdate: new Date(),
    date: '',
    dates:[],
      //时间段
    times_s: ['0:00 - 1:00', '1:00 - 2:00', '2:00 - 3:00', '3:00 - 4:00', '4:00 - 5:00', '5:00 - 6:00', '6:00 - 7:00', '7:00 - 8:00', '8:00 - 9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '19:00 - 20:00', '20:00 - 21:00','21:00 - 22:00', '22:00 - 23:00', '23:00 - 24:00'],
    times:[],
    time:0,
    time1: '请选择',
    time2: '请选择',
    //课程
    courses:[],
    courses_bac:[],
    kc_ids:[],
    course:0,
    //门店
    clubs:[],
    clubs_bac: [],
    club:0,
    //教案
    teachingPlan:'暂无教案信息',
    //排课提交后提示信息及图标
    titleInfo:'排课失败，请查看是否为会员安排此课课时',
    iconTyoe:'none'
	},
 //学员变更记录学员信息并触调用查询课程方法
  memberChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      member: e.detail.value
    })
    this.changeCourse();
  },
  //点击课程时记录课程信息并自动调用查询场地信息方法
  courseChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      course: e.detail.value
    })
    //调用场地查询方法
    this.changeClub();
  },
  //查询课程信息，成功返回后，调用查询场地信息方法
  changeCourse:function(e){
    var that = this
    var url_tmp = util.getListConfig().url_test;
    console.log(that.data.members_bac[that.data.member])
    wx.request({
      url: url_tmp + '/coach/course_info',
      method:'post',
      data: {
        //mem_id:'201904050003',
        mem_id: that.data.members_bac[that.data.member],
        coach_id: app.globalData.user_id
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded' 
      },success:function(res){
        console.log(res)
        if(res.statusCode == 200){
          that.setData({
            courses:res.data.course_name,
            courses_bac:res.data.course_id,
            kc_ids:res.data.kc_id,
          })
        }else{
          wx.showToast({
            title: '系统错误',
            icon: 'none',
            duration: 1500,
            mask: false
          })
          return
        }

        //成功后调用查询场地信息方法
        that.changeClub();
      },fail:function(){
        console.log("查询课程信息失败！")
      }
    })
  },

  //点击场地时记录场地信息
  clubChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      club: e.detail.value
    })
  },
  //场地查询方法
  changeClub:function(){
    var that = this
    wx.request({
      url: that.data.url_tmp+'/coach/getClubInfo',
      method:'post',
      data:{
        course_id:that.data.courses_bac[that.data.course]
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res)
        that.setData({
          clubs: res.data.club_name,
          clubs_bac: res.data.club_id
        })
      },fail:function(){
        console.log("查询场地信息失败！")
      }
    })
  },
  //点击切换日期
  dateChange:function(e){
    console.log('日期选择值改变，携带值为', e.detail.value)
    this.setData({
      newdate: e.detail.value
    })
    this.getListTime();
  },
  //点击切换时段
  timeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
    console.log(this.data.times[this.data.time].split('-')[1].replace(" ", ""))
  },

  //点击切换开始时间
  timeChange1:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time1: e.detail.value
    })
    // console.log(this.data.times[this.data.time].split('-')[1].replace(" ",""))
  },
  //点击切换结束时间
  timeChange2:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
    // console.log(this.data.times[this.data.time].split('-')[1].replace(" ",""))
  },
  //字数限制  
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        texts: "至少2个字，留好教案好查看~"
      })
    else if (len > this.data.min)
      this.setData({
        texts: " "
      })

    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len, //当前字数  
      areatests:value
    });
  },

 //获取学员信息
memberInfo:function(){
  var that = this
  var url_tmp = util.getListConfig().url_test;
  console.log('coach_id=====' + app.globalData.user_id)
  wx.request({
    url: that.data.url_tmp +'/coach/getMemberInfo',
    method:'post',
    data:{
      coachid: app.globalData.user_id,
    }, header: {
      'content-type': 'application/x-www-form-urlencoded' 
    },success:function(res){
      console.log(res.data.length)
      console.log('获取学员信息'+res)
      if (res.data.length == 0){
        wx.showToast({
          title: '暂时没有需要排课的学员哦',
          icon: 'none',
          duration: 1500,
          mask: false
        })
      }
      var array = new Array();
      var array_bac = new Array();
      for(var i=0;i<res.data.length;i++){
          array[i] = res.data[i].name;
          array_bac[i] = res.data[i].mem_id;
      }
      that.setData({
        members_bac: array_bac,
        members:array
      })
      //添加对学员某日期排课可选时段的过滤
      that.getListTime();
      that.changeCourse();
    },fail:function(){
        console.log("查询学员信息失败！")
    }
  })
},
 //添加对学员某日期排课可选时段的过滤
  getListTime: function () {
    console.log("============")
    var that = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/schedule/listTimes',
      method: 'post',
      data: {
        mem_id: that.data.members_bac[that.data.member],
        date: that.data.newdate,
        times: that.data.times_s
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }, success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          that.setData({
            times:res.data
          })
        } 
      }, fail: function () {
        console.log("查询课程信息失败！")
      }
    })
  },

submit:function(){
  var that = this
  var url_tmp = util.getListConfig().url_test;
  wx.request({

    url: that.data.url_tmp +'/schedule/lesson',
    method:'post',
    data:{
      mem_id: that.data.members_bac[that.data.member],// '201904050003',
      real_club: that.data.clubs_bac[that.data.club],
      real_coach: app.globalData.user_id,
      sale_id: that.data.courses_bac[that.data.course], 
      kc_id: that.data.kc_ids[that.data.course], 
      seq_no:'', //课程节数由后台获取
      bz1: that.data.areatests,
      start_time_1: that.data.newdate+' '+that.data.times[that.data.time].split('-')[0].replace(" ", ""), 
      end_time_1: that.data.newdate + ' '+that.data.times[that.data.time].split('-')[1].replace(" ", ""), 
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success:function(res){
      console.log(res)
      console.log(res.statusCode)
      
      if (res.statusCode == 200){
        // that.setData({
        //   titleInfo:'排课成功',
        //   iconTyoe:'success'
        // })
        wx.showToast({
          title: '排课成功',
          icon: 'success',
          duration: 2000
        })
        wx.switchTab({
          url: '../index/index',
          success: function () {
            wx.setNavigationBarTitle({
              title: '首页'
            })
          }
        })
      }  
    }
  })
  
},

	bindPickerChange: function (e) {
		this.setData({
			label: "",
			index: e.detail.value
		})
	},

	bindPickerChange3: function (e) {
		this.setData({
			label3: "",
			index3: e.detail.value
		})
	},

	selectstudent: function(){
		wx.navigateTo({
			url: "../selectstudent/selectstudent"
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    var datex = util.formatDate1(new Date())
    this.setData({
      newdate: datex
    })
    this.memberInfo();
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
