// pages/case/case.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
		caseDta: [
			{
				id: '0',
				imgurl: '../../images/mine/photo2.png',
				coach: '杨宋',
				result: '00000000身材一直偏瘦身体也不是很好，之后决定开始健身就去费恩莱斯国际健身学院学习教练行业，从110多斤的瘦猴增肌到168斤，身体素质和体型都得到了巨大的改善，我自己就是最好的活体。',
				compare: ['../../images/mine/course.png', '../../images/mine/course.png', '../../images/mine/course.png']
			},
			{
				id: '1',
				imgurl: '../../images/mine/photo2.png',
				coach: '杨宋',
				result: '111111身材一直偏瘦身体也不是很好，之后决定开始健身就去费恩莱斯国际健身学院学习教练行业，从110多斤的瘦猴增肌到168斤，身体素质和体型都得到了巨大的改善，我自己就是最好的广告。',
				compare: ['../../images/mine/course.png', '../../images/mine/course.png', '../../images/mine/course.png']
			},
			{
				id: '2',
				imgurl: '../../images/mine/photo2.png',
				coach: '杨宋',
				result: '2222222身材一直偏瘦身体也不是很好，之后决定开始健身就去费恩莱斯国际健身学院学习教练行业，从110多斤的瘦猴增肌到168斤，身体素质和体型都得到了巨大的改善，我自己就是活体广告。',
				compare: ['../../images/mine/course.png', '../../images/mine/course.png', '../../images/mine/course.png']
			},
			{
				id: '3',
				imgurl: '../../images/mine/photo2.png',
				coach: '杨宋',
				result: '333333身材一直偏瘦身体也不是很好，之后决定开始健身就去费恩莱斯国际健身学院学习教练行业，从110多斤的瘦猴增肌到168斤，身体素质和体型都得到了巨大的改善，我就是最好的活体广告。',
				compare: ['../../images/mine/course.png', '../../images/mine/course.png', '../../images/mine/course.png']
			}
		],
    index: 0,
		flag: 0
  },

	blur: function(){
		console.log(this.data.index)
		if (this.data.index == 1 || this.data.index == 0){
			this.setData({
				flag: 0,
				index: 0
			})
		}else{
			this.setData({
				flag: 1,
				index: this.data.index-1
			})
		}
	},

	focus: function(){
		console.log(this.data.index)
		var index = this.data.index
		var length = this.data.caseDta.length
		if (index == (length - 2) || index == (length - 1)){
			this.setData({
				flag: 2,
				index: length - 1
			})
		}else{
			this.setData({
				flag: 1,
				index: index+1
			})
		}
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.caseDta)
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