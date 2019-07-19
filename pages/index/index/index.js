const app = getApp()
var util = require("../../../utils/util.js"); 
var commenData = require("../../../utils/data.js"); 

Page({
  data: {

    /**
     * 日历内容粘贴start
     */
    loading: false, // 加载中
    list: {
      activity: { pageNo: 1, data: [] },
      brand: { pageNo: 1, data: [] },
    },
    dateList: [],   // 日历数据数组
    swiperCurrent: 0, // 日历轮播正处在哪个索引位置
    dateCurrenttext:'',
    dateCurrent: new Date(),  // 正选择的当前日期
    dateCurrentStr: '', // 正选择日期的 id
    dateMonth: '1月',  // 正显示的月份
    dateListArray: ['日', '一', '二', '三', '四', '五', '六'],
      /**
     * 日历内容粘贴end
     */
		swiper: {
			indicatordots: true,
			indicatorcolor: "#FFFFFF",
			indicatoractivecolor: "#F9CE0E",
			autoplay: true,
			interval: 3000,
			duration: 1500,
			circular: true,
			img: commenData.getSwiperImgData()
		},
    num1:'',
    num2:'',
    detail1: [],
    detail1_bak:[],
		detail: commenData.getListData2()
	},
  //取消课程
  cancleClass: function (event){
    var that = this
    var url_tmp = util.getListConfig().url_test;
    var kc_id = event.currentTarget.dataset.kc_id
    var seq_no = event.currentTarget.dataset.seq_no
    wx.showModal({
      title: '取消',
      content: '确认取消此课程吗？',
      success: function (sm) {
        if (sm.confirm) {
          wx.request({
            url: url_tmp + '/attendClass/cancleClass',
            method: 'post',
            data: {
              kc_id: kc_id,
              seq_no: seq_no
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            }, success: function (res) {
              console.log(res)
              if (res.statusCode == 200) {
                wx.showToast({
                  title: res.data.resultInfo,
                  icon: res.data.resultInfo,
                  duration: 1000,
                  mask: false
                })
                that.getLess();
              }
            }
          })
        }
      }
    })
  },
  attendClass:function(event){
    console.log(event)
    var that = this
    var url_tmp = util.getListConfig().url_test;
    var kc_id=event.currentTarget.dataset.kc_id
    var seq_no=event.currentTarget.dataset.seq_no
    var choose_flag=event.currentTarget.dataset.status
    //判断当前课程状态是否完结
    if (choose_flag == 2) {
      wx.showToast({
        title: '此课已经完结了呢亲',
        icon: 'none',
        duration: 1000,
        mask: false
      })
      return
    }
    //点击签到按钮，弹出提示框
    wx.showModal({
      title: '签到确认',
      content: '确认后即开始上课哦~',
      success: function (sm) {
        if (sm.confirm) {
          
          wx.request({
            url: url_tmp + '/attendClass/updateCourseInfos',
            method: 'post',
            data: {
              kc_id: kc_id,
              seq_no: seq_no,
              choose_flag: choose_flag
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            }, success: function (res) {
              console.log(res)
              if (res.data.flag) {
                wx.showToast({
                  title: event._relatedInfo.anchorTargetText + '成功',
                  icon: 'success',
                  duration: 1000,
                  mask: false
                })
                //签到签退后获取新的登录状态，为后面局部刷新做处理
                wx.request({
                  url: url_tmp + '/coach/qryLesson',
                  data: {
                    coach_id: app.globalData.user_id,
                    reg_date: util.formatTime(new Date()),
                    status: ''
                  },
                  success(res) {
                    console.log(res.data)
                    that.setData({
                      detail1_bak: res.data
                    })
                    for (let j = 0; j < that.data.detail1_bak.length; j++) {
                      console.log(j)
                      if (kc_id == that.data.detail1_bak[j].kc_id && seq_no == that.data.detail1_bak[j].seq_no) {
                        console.log(j)
                        that.setData({
                          num1: j
                        })
                      }
                    }
                    for (let i = 0; i < that.data.detail1.length; i++) {
                      if (kc_id == that.data.detail1[i].kc_id && seq_no == that.data.detail1[i].seq_no) {
                        that.setData({
                          num2: i
                        })
                      }
                    }
                    console.log(that.data.num1)
                    console.log(that.data.num2)
                    that.setData({
                      ["detail1[" + that.data.num2 + "]"]: that.data.detail1_bak[that.data.num1]
                    })
                  }
                })
              }
            }, fail: function () {

            }
          })

        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

	doplan: function(){
		wx.navigateTo({
			url: '../schedule/schedule'
		})
	},
  sysinfo:function(){
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.system)
        console.log(res.system.toLowerCase())
        //var system = res.system.indexOf("IOS");
        // that.setData({
        //   systemInfo: res
        // });
      }
    })
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
    // var _this = this
    //this.sysinfo();//测试获取系统版本
    this.initDate(); // 日历组件程序
    this.getLess();
    this.getbanner();
	},
  getbanner:function(){
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      // url: url_tmp + '/coach/qry',
      url: url_tmp + '/img/load1',
      data: {
        //6为轮播图
        type: 6
      },
      success(res) {
        console.log(res.data)
        _this.setData({
          swiperImg: res.data
        })
      }
    }) 
  },

	compare: function (property) {
		console.log("property:" + property)
		return function (a, b) {
			var value1 = a[property];
			var value2 = b[property];
			value1 = value1.split('-')[0].split(':')[0]
			value2 = value2.split('-')[0].split(':')[0]
			console.log("value1:" + value1)
			console.log("value2:" + value2)
			return value1 - value2;
		}
	},

  getLess:function(){
    var _this = this
    var url_tmp = util.getListConfig().url_test;
    wx.request({
      url: url_tmp + '/coach/qryLesson',
      data: {
        coach_id: app.globalData.user_id,
        reg_date: _this.data.dateCurrentStr,
        status: ''
      },
      success(res) {
        console.log(res.data)
        var tmp=[];
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].status!=null){
            tmp.push(res.data[i])
          }
        } 
				var list = null
				list = tmp.sort(_this.compare("timex"))
        _this.setData({
          detail1: list
        })
      }
    })
    //已取消
    console.log('已取消' + _this.data.dateCurrentStr)
    wx.request({
      url: url_tmp + '/member/qryCancelLesson',
      data: {
        mem_id: '',
        coach_id: app.globalData.user_id,
        club_id: '',
        reg_date: _this.data.dateCurrentStr
      },
      success(res) {
        console.log(res.data)
        var tmp = [];
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].status != null) {
            tmp.push(res.data[i])
          }
        }
        var list = null
        list = tmp.sort(_this.compare("timex"))
        _this.setData({
          detail2: list
        })
        // _this.setData({
        //   detail2: res.data
        // })
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
  
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
        });
      }
    });
    // _this.initDate(); // 日历组件程序
    this.getLess();
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

	},
  initDate:function() {
    var d = new Date();
    console.log(d)
    var month = util.addZero(d.getMonth() + 1),
      day = util.addZero(d.getDate());
    for (var i = -3; i <= 3; i++) {
      this.updateDate(util.DateAddDay(d, i * 7));
    }
    console.log(d)
    console.log(d.toDateString)
    console.log(d.toISOString)
    this.setData({
      swiperCurrent: 3,
      dateCurrent: d,
      dateCurrenttext: d.getFullYear() + '年' + month+'月',
      dateCurrentStr: d.getFullYear() + '-' + month + '-' + day,
      dateMonth: month + '月',
    });
    console.log(this.data.dateMonth)
  },
  // 获取这周从周日到周六的日期
  calculateDate(_date) {
    var first = util.FirstDayInThisWeek(_date);
    var d = {
      'month': first.getMonth() + 1,
      'days': [],
    };
    for (var i = 0; i < 7; i++) {
      var dd = util.DateAddDay(first, i);
      var day = util.addZero(dd.getDate()),
        month = util.addZero(dd.getMonth() + 1);
      d.days.push({
        'day': day,
        'id': dd.getFullYear() + '-' + month + '-' + day,
      });
    }
    return d;
  },
  // 更新日期数组数据
  updateDate(_date, atBefore) {
    var week = this.calculateDate(_date);
    if (atBefore) {
      this.setData({
        dateList: [week].concat(this.data.dateList),
      });
    } else {
      this.setData({
        dateList: this.data.dateList.concat(week),
      });
    }
    console.log(this.data.dateList)
  },
  // 日历组件轮播切换
  dateSwiperChange(e) {
    var index = e.detail.current;
    var d = this.data.dateList[index];
    this.setData({
      swiperCurrent: index,
      dateMonth: d.month + '月',
    });
  },
  // 获得日期字符串
  getDateStr: function (arg) {
    if (util.type(arg) == 'array') {
      return arr[0] + '-' + arr[1] + '-' + arr[2] + ' 00:00:00';
    } else if (util.type(arg) == 'date') {
      return arg.getFullYear() + '-' + (arg.getMonth() + 1) + '-' + arg.getDate() + ' 00:00:00';
    } else if (util.type(arg) == 'object') {
      return arg.year + '-' + arg.month + '-' + arg.day + ' 00:00:00';
    }
  },
  // 点击日历某日
  chooseDate(e) {
    var str = e.target.id;
    this.setData({ 
      dateCurrentStr: str, 
      dateCurrenttext: str.split("-")[0] + '年' + str.split("-")[1] + '月',
      });
    console.log('当前选择日期：' + str)
    this.getLess();
  },
})
