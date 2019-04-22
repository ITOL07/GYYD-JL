const app = getApp()
var fileData = require("data.js");
data:{
  photos:null
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [year, month].map(formatNumber).join('-')
}

const formatTime1 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [year, month].map(formatNumber).join('')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取系统配置
function getListConfig() {
  var arr =
  {
    url_sc: 'http://39.106.156.239:80',
    // url_test: 'https://www.guyueyundong.com',
    url_test: 'http://localhost:8099'
  }
  return arr;
}

function wxlogin() {
  // 登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      var _this = this
      var url_tmp = _this.getListConfig().url_test;
      wx.request({
        // url: 'https://www.guyueyundong.com/wxuser/login',
        url: url_tmp + '/wxuser/login',
        data: {
          code: res.code,
          type:2
        },
        method: 'POST',
        // dataType: 'json',
        header: {
          'content-type': 'application/x-www-form-urlencoded'  //发送post请求
        },
        success: function (res) {
          //请求成功的处理
          //console.log(code);
          app.globalData.openid = res.data.openid
          app.globalData.user_id = res.data.id
          console.log("发送code成功", res.data);
          console.log("发送code成功", res.data.openid);
          wx.switchTab({
            url: '../../index/index/index',
            success: function () {
              wx.setNavigationBarTitle({
                title: '首页'
              })
            }
          })
        }
      })
    }
  })
}
// 时间格式转换 yyyy/mm/dd
function formatTime2(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatDate(date, split) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join(split || '')
}

// 计算变化多少天后的日期
function DateAddDay(d, days) {
  var d = new Date(d);
  return new Date(d.setDate(d.getDate() + days));
}
// 获得本周周日的日期
function FirstDayInThisWeek(d) {
  var d = new Date(d);
  return this.DateAddDay(d, 0 - d.getDay());
}

// 判断类型
function Type(obj) {
  var typeStr = Object.prototype.toString.call(obj).split(" ")[1];
  return typeStr.substr(0, typeStr.length - 1).toLowerCase();
}

/**
 * 选择照片
 */
function chooseImg() {
  var that = this
  wx.chooseImage({
    count: 9, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
      that.setData({
        photos: tempFilePaths
      })
      console.log(that.data.photos)
    }
  })
}
/**
* 上传照片
*/
function uploadImgs(url_in,type) {
  var that = this
  for (var i = 0; i < that.data.photos.length; i++) {
    that.uploadImg(url_in,that.data.photos[i],type)
  }
}
function uploadImg (url_in,filepath,type) {
  var that = this
  wx.uploadFile({
    url: url_in, //仅为示例，非真实的接口地址
    filePath: filepath,
    name: 'file',
    formData: {
      'user_id': app.globalData.user_id,
      'type': type
    },
    success: function (res) {
      var data = res.data
      console.log(data)
      //do something
    }
  })
}
module.exports = {
  formatTime: formatTime,
  formatTime1: formatTime1,
  formatTime2: formatTime2,
  formatDate: formatDate,
  DateAddDay: DateAddDay,
  FirstDayInThisWeek: FirstDayInThisWeek,
  getListConfig: getListConfig,
<<<<<<< Updated upstream
  type: Type,
  addZero: formatNumber,
  wxlogin: wxlogin
=======
  wxlogin: wxlogin,
  chooseImg: chooseImg,
  uploadImgs: uploadImgs
>>>>>>> Stashed changes
}
