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
			kc_id: 1,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已预约",
			timex: "17:00-18:00", 
			seq_no: "1",
			buy_count: "10",
			course_name: "胸肌训练",
			bz1: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_name: "Ali",
			mem_icon: "../../images/index/user.png",
			status: 0
		},
		{
			kc_id: 2,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已预约",
			timex: "12:00-13:00",
			seq_no: "1",
			buy_count: "10",
			course_name: "胸肌训练",
			bz1: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_name: "Ali",
			mem_icon: "../../images/index/user.png",
			status: 1
		},
		{
			kc_id: 3,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已预约",
			timex: "14:00-15:00",
			seq_no: "1",
			buy_count: "10",
			course_name: "胸肌训练",
			bz1: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_name: "Ali",
			mem_icon: "../../images/index/user.png",
			status: 2
		},
		{
			kc_id: 4,
			star: "私",
			club_name: "腾讯众创空间",
			status_desc: "已预约",
			timex: "19:00-20:00",
			seq_no: "1",
			buy_count: "10",
			course_name: "胸肌训练",
			bz1: "胸肌训练",
			bgcolor: "#FF9A2B",
			mem_name: "Ali",
			mem_icon: "../../images/index/user.png",
			status: 3
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

//获取学员数据
function getStudentData(){
	var data = [
		{
			MemInfo: {
				memId: 1,
				icon: '../../../static/images/user/private.png',
				name: '月亮',
				sex: 1,
				tel: '13119121211'
			},
			LessInfo: {
				total: 10,
				used: 5,
				ordered: 3,
				ordering: 2
			}
		},
		{
			MemInfo: {
				memId: 2,
				icon: '../../../static/images/user/private.png',
				name: '月亮',
				sex: 0,
				tel: '13119121211'
			},
			LessInfo: {
				total: 20,
				used: 15,
				ordered: 3,
				ordering: 2
			}
		},
		{
			MemInfo: {
				memId: 3,
				icon: '../../../static/images/user/private.png',
				name: '月亮',
				sex: 1,
				tel: '13119121211'
			},
			LessInfo: {
				total: 20,
				used: 5,
				ordered: 13,
				ordering: 2
			}
		},
		{
			MemInfo: {
				memId: 4,
				icon: '../../../static/images/user/private.png',
				name: '月亮',
				sex: 1,
				tel: '13119121211'
			},
			LessInfo: {
				total: 10,
				used: 5,
				ordered: 3,
				ordering: 12
			}
		}
	]
	return data
}

//获取学员详细数据
function getStudentDetail(){
	var data = {
			student: {
				id: 1,
				photo: "../../images/student/photo.png",
				name: "冯提莫",
				sex: 1,
				tel: "13294097319",
				birthday: "1987年04月03日",
				height: '163cm'
			},
			course1: {
				total: 10,
				used: 5,
				ordered: 3,
				ordering: 2
			}
	}
	return data
}
//获取学员相关课程的详细数据
function getStudentDetail2(){
	var data = [
			{
				id: 1,
				sign: "私",
				signbgcolor: "#F9CE0E",
				course_name: "增肌max",
				state: "旷课",
				datex: "2018年11月12日",
				timex: "15:00-16:00",
				seq_no: "3",
				buy_count: "10",
				club_name: "腾讯众创空间店",
				bz1: "胸部训练"
			},
			{
				id: 2,
				sign: "私",
				signbgcolor: "#F9CE0E",
				course_name: "增肌max",
				state: "旷课",
				datex: "2018年11月12日",
				timex: "15:00-16:00",
				seq_no: "3",
				buy_count: "10",
				club_name: "腾讯众创空间店",
				bz1: "胸部训练"
			}
	]
	return data
}

function getIncome(){
	var income = [
		{
			id: 1,
			start_time_1: "20190607 10:25:00",
			price: "220",
			course_name: "max 增肌",
			student: "月亮",
			type: "原价",
			club_name: "腾讯众创空间"
		},
		{
			id: 2,
			start_time_1: "20190607 10:25:00",
			price: "220",
			course_name: "max 增肌",
			student: "月亮",
			type: "原价",
			club_name: "腾讯众创空间"
		},
		{
			id: 3,
			start_time_1: "20190607 10:25:00",
			price: "220",
			course_name: "max 增肌",
			student: "月亮",
			type: "原价",
			club_name: "腾讯众创空间"
		},
		{
			id: 4,
			start_time_1: "20190607 10:25:00",
			price: "220",
			course_name: "max 增肌",
			student: "月亮",
			type: "原价",
			club_name: "腾讯众创空间"
		}
	]
	return income
}

module.exports = {
  getSwiperImgData: getSwiperImgData,
  getListData: getListData,
	getIncome: getIncome,
  getListData2: getListData2,
	getStudentData: getStudentData,
	getStudentDetail: getStudentDetail,
	getStudentDetail2: getStudentDetail2,
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
