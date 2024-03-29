//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    cityBase:app.globalData.cityBase
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    var data={
      "touser": "OPENID", //必传  接收者（用户）的 openid
      "template_id": "TEMPLATE_ID",//必传  所需下发的模板消息的id
      "page": "index",//必传  点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转
      "form_id": "FORMID",//必传  表单提交场景下，为 submit 事件带上的 formId；支付场景下，为本次支付的 prepay_id
      "data": {//必传  模板内容，不填则下发空模板
        "keyword1": {
          "value": "339208499"
        },
        "keyword2": {
          "value": "2015年01月05日 12:30"
        },
        "keyword3": {
          "value": "粤海喜来登酒店"
        },
        "keyword4": {
          "value": "广州市天河区天河路208号"
        }
      },
      "emphasis_keyword": ""//必传  模板需要放大的关键词，不填则默认无放大
    }
  },
  formSubmit: function (e) {
    //获取formId
    console.log(e.detail.formId);
    wx.showToast({
      title: e.detail.formId,
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady:function(){
    //获得header组件
    this.header= this.selectComponent("#header");
  },
  //确认事件
  _chosecity() {
    console.log('你点击了确定');
    wx.navigateTo({
      url: '../logs/logs'
    })
    this.setData({
      cityBase:'北京市'
    })
  }
})
