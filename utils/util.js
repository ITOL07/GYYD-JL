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

const formatTimeHM = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()

  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [hour, minute].map(formatNumber).join(':')
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
    url_test: 'http://localhost:9099'
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
          type:2,
          nickName: app.globalData.userInfo.nickName,
          gender: app.globalData.userInfo.gender,
          icon: ''
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
  return [year, month, day].map(formatNumber).join('-')
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
//根据传入日期返回年-月-日格式的数据
function formatDate1(param){
  var timestamp = Date.parse(param);
  var date1 = new Date(timestamp);
  //获取年份  
  var Y = date1.getFullYear();
  //获取月份  
  var M = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1);
  //获取当日日期 
  var D = date1.getDate() < 10 ? '0' + date1.getDate() : date1.getDate();
  console.log("当前时间：" + Y + '年' + M + '月' + D + '日');
  return (Y + '-' + M + '-' + D)
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
// 计算两个经纬度之间的距离
const distance = (la1, lo1, la2, lo2) => {
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137; //地球半径
  s = Math.round(s * 10000) / 10;
  // console.log("计算结果",s)
  //计算精度 4位可精确到米
  s = s.toFixed(1);
  return s
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
//点击图片查看大图
//e表示当前查看的图片的下标，imgs表示将要预览的图片列表
function previewImg(e, imgs) {
  var index = e.currentTarget.dataset.index
  var imgArr = imgs
  wx.previewImage({
    current: imgArr[index],     //当前图片地址
    urls: imgArr,               //所有要预览的图片的地址集合 数组形式
    success: function (res) {
      console.log("width=" + res.width)
    },
    fail: function (res) { },
    complete: function (res) { },
  })
}
function routers(routers, title) {
  wx.navigateTo({
    url: routers,
    success: function () {
      wx.setNavigationBarTitle({
        title: title
      })
    }
  })
}
module.exports = {
  formatTime: formatTime,
  formatTime1: formatTime1,
  formatTime2: formatTime2,
  formatDate: formatDate,
  formatDate1: formatDate1,
  formatTimeHM: formatTimeHM,
  DateAddDay: DateAddDay,
  FirstDayInThisWeek: FirstDayInThisWeek,
  getListConfig: getListConfig,
  type: Type,
  addZero: formatNumber,
  wxlogin: wxlogin,
  chooseImg: chooseImg,
  uploadImgs: uploadImgs,
  distance: distance,
  previewImg: previewImg,
  routers,
}
