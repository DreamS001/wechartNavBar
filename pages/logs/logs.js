//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    //获得header组件
    this.header= this.selectComponent("#header");
  },
  _tapback(){
    wx.navigateBack({
      delta: 1
    })
  }
})
