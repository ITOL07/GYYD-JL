//测试数据

//获取轮播图
function getSwiperImgData() {
  var arr = [
    {
      id: '0',
      imgurl: '../../../static/images/swiper/swiper.png',
    },
    {
      id: '1',
      imgurl: '../../../static/images/swiper/swiper.png',
    },
    {
      id: '2',
      imgurl: '../../../static/images/swiper/swiper.png',
    },
    {
      id: '3',
      imgurl: '../../../static/images/swiper/swiper.png',
    },
  ]
  return arr;
}
function getListData2(){
	var arr = [
		{
			id: 1,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已预约",
			timex: "11:00-11:45", 
			seq_no: "1",
			total: "10",
			course_name: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_nick_name: "Ali",
			user: {
				imgurl: "../../images/index/user.png"
			},
			cancel: false,
			confirm: false
		},
		{
			id: 2,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已签到",
			timex: "11:00-11:45",
			seq_no: "1",
			total: "10",
			course_name: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_nick_name: "Ali",
			user: {
				imgurl: "../../images/index/user.png"
			},
			cancel: true,
			confirm: true
		},
		{
			id: 3,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "未签到",
			timex: "11:00-11:45",
			seq_no: "1",
			total: "10",
			course_name: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_nick_name: "Ali",
			user: {
				imgurl: "../../images/index/user.png"
			},
			cancel: true,
			confirm: false
		},
		{
			id: 4,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "旷课",
			timex: "11:00-11:45",
			seq_no: "1",
			total: "10",
			course_name: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_nick_name: "Ali",
			user: {
				imgurl: "../../images/index/user.png"
			},
			cancel: true,
			confirm: true
		}
	]
	return arr
}
//获取列表
function getListData() {
  var arr = [
    {
      id: '0',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    },
    {
      id: '1',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    },
    {
      id: '2',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    },
    {
      id: '3',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    },
    {
      id: '4',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    },
    {
      id: '5',
      title: '增肌max',
      state: '已预约',
      date: '2018年11月12日  15:00-16:00',
      course: '第3/10课',
      student: '月亮',
      coach: '杨宋'
    }
  ]
  return arr;
}
//获取门店图片
function getStoreImgData() {
  var arr = [
    {
      id: '0',
      imgurl: '../../../static/images/user/storeImg.png',
    },
    {
      id: '1',
      imgurl: '../../../static/images/user/storeImg.png',
    },
    {
      id: '2',
      imgurl: '../../../static/images/user/storeImg.png',
    },
    {
      id: '3',
      imgurl: '../../../static/images/user/storeImg.png',
    },
  ]
  return arr;
}
//获取收入信息
function getIncomeData() {
  var arr = [
    {
      id: '0',
      name: '月亮',
      date: '2018/11/11 16:00',
      course: '减脂塑形',
      price: '¥220'
    },
    {
      id: '1',
      name: '月亮',
      date: '2018/11/11 16:00',
      course: '减脂塑形',
      price: '¥220'
    },
    {
      id: '2',
      name: '月亮',
      date: '2018/11/11 16:00',
      course: '减脂塑形',
      price: '¥220'
    },
    {
      id: '3',
      name: '月亮',
      date: '2018/11/11 16:00',
      course: '减脂塑形',
      price: '¥220'
    },
    {
      id: '4',
      name: '月亮',
      date: '2018/11/11 16:00',
      course: '减脂塑形',
      price: '¥220'
    }
  ]
  return arr;
}
//获取提现记录信息
function getCashData() {
  var arr = [
    {
      id: '0',
      date: '2018/11/11 18:00:00',
      price: '20，000元',
      state: '提现中'
    },
    {
      id: '1',
      date: '2018/11/11 18:00:00',
      price: '20，000元',
      state: '提现中'
    },
    {
      id: '2',
      date: '2018/11/11 18:00:00',
      price: '20，000元',
      state: '提现中'
    },
    {
      id: '3',
      date: '2018/11/11 18:00:00',
      price: '20，000元',
      state: '提现中'
    },
    {
      id: '4',
      date: '2018/11/11 18:00:00',
      price: '20，000元',
      state: '提现中'
    }
  ]
  return arr;
}
//获取私教信息
function getPrivateData() {
  var arr = [
    {
      id: '0',
      imgurl: '../../../static/images/user/private.png',
      name: '苏菲',
      phone: '13266778892',
      course: '累计授课283节/月授课39节/日授课2节'
    },
    {
      id: '1',
      imgurl: '../../../static/images/user/private.png',
      name: '苏菲',
      phone: '13266778892',
      course: '累计授课283节/月授课39节/日授课2节'
    },
    {
      id: '2',
      imgurl: '../../../static/images/user/private.png',
      name: '苏菲',
      phone: '13266778892',
      course: '累计授课283节/月授课39节/日授课2节'
    },
    {
      id: '3',
      imgurl: '../../../static/images/user/private.png',
      name: '苏菲',
      phone: '13266778892',
      course: '累计授课283节/月授课39节/日授课2节'
    },
    {
      id: '4',
      imgurl: '../../../static/images/user/private.png',
      name: '苏菲',
      phone: '13266778892',
      course: '累计授课283节/月授课39节/日授课2节'
    }
  ]
  return arr;
}
//获取课程信息
function getCourseData() {
  var arr = [
    {
      id: '0',
      imgurl: '../../../static/images/user/coach.png',
      title: '增肌max',
      introduce: '私人定制肌肉强化训练',
      price: '199'
    },
    {
      id: '1',
      imgurl: '../../../static/images/user/coach.png',
      title: '增肌max',
      introduce: '私人定制肌肉强化训练',
      price: '199'
    },
    {
      id: '2',
      imgurl: '../../../static/images/user/coach.png',
      title: '增肌max',
      introduce: '私人定制肌肉强化训练',
      price: '199'
    },
    {
      id: '3',
      imgurl: '../../../static/images/user/coach.png',
      title: '增肌max',
      introduce: '私人定制肌肉强化训练',
      price: '199'
    }
  ]
  return arr;
}
//获取提醒信息
function getAddupData() {
	var arr = [
		{
			id: '0',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		},
		{
			id: '1',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		},
		{
			id: '2',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		},
		{
			id: '3',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		},
		{
			id: '4',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		},
		{
			id: '5',
			imgurl: '../../../static/images/coach/course.png',
			title: '增肌max',
			finish: '全部完成',
			introduce: '私人定制肌肉强化训练',
			time: '共8节',
			name: '杨宋',
			store: '腾讯众创空间店'
		}
	]
	return arr;
}
//获取订单信息
function getOrderData() {
	var arr = [
		{
			id: '0',
			imgurl: '../../../static/images/coach/course.png',
			number: '381900009211',
			state: '已付款',
			title: '增肌max',
			price: '1790',
			introduce: '私人定制肌肉强化训练',
			name: '杨宋（腾讯众创空间店）',
			time: '2018/11/11  21:24:22'
		},
		{
			id: '1',
			imgurl: '../../../static/images/coach/course.png',
			number: '381900009211',
			state: '已付款',
			title: '增肌max',
			price: '1790',
			introduce: '私人定制肌肉强化训练',
			name: '杨宋（腾讯众创空间店）',
			time: '2018/11/11  21:24:22'
		},
		{
			id: '2',
			imgurl: '../../../static/images/coach/course.png',
			number: '381900009211',
			state: '已付款',
			title: '增肌max',
			price: '1790',
			introduce: '私人定制肌肉强化训练',
			name: '杨宋（腾讯众创空间店）',
			time: '2018/11/11  21:24:22'
		},
		{
			id: '3',
			imgurl: '../../../static/images/coach/course.png',
			number: '381900009211',
			state: '已付款',
			title: '增肌max',
			price: '1790',
			introduce: '私人定制肌肉强化训练',
			name: '杨宋（腾讯众创空间店）',
			time: '2018/11/11  21:24:22'
		},
		{
			id: '4',
			imgurl: '../../../static/images/coach/course.png',
			number: '381900009211',
			state: '已付款',
			title: '增肌max',
			price: '1790',
			introduce: '私人定制肌肉强化训练',
			name: '杨宋（腾讯众创空间店）',
			time: '2018/11/11  21:24:22'
		}
	]
	return arr;
}

function getMessageData() {
  var arr = [
    {
      id: '0',
      title: '课程完成提醒',
      time: '2018-12-09 12:34:22',
      course: '【减脂塑形】第1/10节',
      vip: '会员：月亮  /  私教：杨宋',
      completetime: '2018/10/31/12:00:00'
    },
    {
      id: '1',
      title: '课程完成提醒',
      time: '2018-12-09 12:34:22',
      course: '【减脂塑形】第1/10节',
      vip: '会员：月亮  /  私教：杨宋',
      completetime: '2018/10/31/12:00:00'
    },
    {
      id: '2',
      title: '课程完成提醒',
      time: '2018-12-09 12:34:22',
      course: '【减脂塑形】第1/10节',
      vip: '会员：月亮  /  私教：杨宋',
      completetime: '2018/10/31/12:00:00'
    }
  ]
  return arr;
}
//获取会员信息
function getVipData() {
  var arr = [
    {
      id: '0',
      imgurl: '../../../static/images/detail/timo.png',
      name: '月亮',
      state: '已完成25'
    },
    {
      id: '1',
      imgurl: '../../../static/images/detail/timo.png',
      name: '月亮',
      state: '已完成25'
    },
    {
      id: '2',
      imgurl: '../../../static/images/detail/timo.png',
      name: '月亮',
      state: '已完成25'
    },
    {
      id: '3',
      imgurl: '../../../static/images/detail/timo.png',
      name: '月亮',
      state: '已完成25'
    },
    {
      id: '4',
      imgurl: '../../../static/images/detail/timo.png',
      name: '月亮',
      state: '已完成25'
    }
  ]
  return arr;
}

module.exports = {
  getSwiperImgData: getSwiperImgData,
  getListData: getListData,
  getListData2: getListData2,
  getStoreImgData: getStoreImgData,
  getIncomeData: getIncomeData,
  getCashData: getCashData,
  getPrivateData: getPrivateData,
  getCourseData: getCourseData,
  getMessageData: getMessageData,
  getVipData: getVipData,
	// getCaseData: getCaseData,
	// getListConfig: getListConfig
}
