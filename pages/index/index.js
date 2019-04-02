//index.js
const app = getApp()

Page({
  data: {
    operateList:[
      {
        title:"我的资料",
        url:"",
        iconSrc:'../../images/myinfo.png'
      }, {
        title: "我的订单",
        url: "",
        iconSrc: '../../images/mysale.png'
      }, {
        title: "收藏",
        url: "",
        iconSrc: '../../images/mycollect.png'
      }, {
        title: "设置",
        url: "",
        iconSrc: '../../images/setting.png'
      }
    ]
  },
  onLoad: function () {
    
  },

})
