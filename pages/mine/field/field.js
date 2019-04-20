Page({

  /**
   * 页面的初始数据
   */
  data: {
		storeListData: [
			{
				id: '0',
				imgurl: '../../images/mine/image2.png',
				name: '腾讯重创空间店',
				address: '北京市昌平区回龙观东大街338号腾讯重创空间B座349',
				distance: '364m'
			},
			{
				id: '1',
				imgurl: '../../images/mine/image2.png',
				name: '东升科技园店',
				address: '西小口路66号中关村东升科技园B6号c座地下一层C02（星巴克楼下）',
				distance: '3.6km '
			},
			{
				id: '2',
				imgurl: '../../images/mine/image2.png',
				name: '易事达广场店',
				address: '西小口路66号中关村东升科技园B6号c座地下一层C02（星巴克楼下）',
				distance: '3.6km '
			},
			{
				id: '3',
				imgurl: '../../images/mine/image2.png',
				name: '金域国际金融中心店',
				address: '西小口路66号中关村东升科技园B6号c座地下一层C02（星巴克楼下）',
				distance: '3.6km'
			},
			{
				id: '4',
				imgurl: '../../images/mine/image2.png',
				name: '金域国际金融中心店',
				address: '西小口路66号中关村东升科技园B6号c座地下一层C02（星巴克楼下）',	
				distance: '3.6km'
			},
			{
				id: '5',
				imgurl: '../../images/mine/image2.png',
				name: '腾讯重创空间店',
				address: '北京市昌平区回龙观东大街338号腾讯重创空间B座349',
				distance: '364m'
			}
		],
		flag: "true"
  },
/*flag:控制按钮（编辑与添加），以及控制右侧空白处的大小
	flag2:控制选中图片的隐藏与显示，
	selected:控制图片外层view的隐藏与显示，这个view是用于显示信息未被选中时的空白按钮
*/
	edit: function () {
		this.setData({
			flag: "edit"
		})
	},

	selected: function(e){
		var data = this.data.storeListData
		for(var index in data){
			if(data[index].id==e.target.id){
				data[index].selected = true
				data[index].bgcolor = "bgcolor"
			}
		}
		this.setData({
			storeListData: data
		})
	},

	unselected: function(e){
		var data = this.data.storeListData
		for(var index in data){
			if(data[index].id==e.target.id){
				data[index].selected = !data[index].selected
				data[index].bgcolor = ""		
			}
		}
		this.setData({
			storeListData: data		
		})
	},

	add: function () {
		this.setData({
			flag: "add"
		})
	},

	cancel: function(){
		this.setData({
			flag: "true"
		})
	},

  storeClick: function(){
    var storedetailRouter = '../../store/storedetail/storedetail'
    var storedetailTitle = '门店详情'
		wx.navigateTo({
			url: storedetailRouter,
			success: function () {
				wx.setNavigationBarTitle({
					title: storedetailTitle
				})
			}
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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