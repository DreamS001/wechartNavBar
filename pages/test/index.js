// pages/test/index.js
import NumberAnimate from "../../utils/NumberAnimate";
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuth: true,
    // slider:0,
    num:0
  },
  bindGetUserInfo(e){
    console.log(e)
    var _this = this
    if (e.detail.errMsg == 'getUserInfo:ok'){
      // wx.setStorageSync('isAuth', 'false')
      _this.setData({
        isAuth: false
      })
    }
  },
  goAlert(){
    wx.showToast({
      title: '1111',
    })
  },
  // get(e){
  //   console.log(e.detail.value)
  //   this.setData({
  //     slider: e.detail.value
  //   })
  // },
  // slider2change1(e){
  //   console.log(e.detail.value)
  //   this.setData({
  //     slider: e.detail.value
  //   })
  // },



  // get1(e) {
  //   console.log(e.detail.value)
  // },
  // get2(e) {
  //   console.log(e.detail.value)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.animate()
  },
  //调用NumberAnimate.js中NumberAnimate实例化对象，测试3种效果
   animate: function () {

       this.setData({
           num1: '',
           num1Complete: '',
       });

        let num1  =  18362.856;
        let n1  =  new  NumberAnimate({
              from: num1,//开始时的数字
              speed: 2000,// 总时间
              refreshTime: 100,//  刷新一次的时间
              decimals: 3,//小数点后的位数
              onUpdate: () => {//更新回调函数
                  this.setData({
                      num1: n1.tempValue
                  });
              },
              onComplete: () => {//完成回调函数
                    this.setData({
                        num1Complete: " 完成了"
                    });
              }
        });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得header组件
    this.slider = this.selectComponent("#slider");
  },


  _slider2change(e) {
    // console.log('1111')
    console.log(e.detail.slider);
  },
  _slider3change(e) {
    // console.log('1111')
    console.log(e.detail.slider);
  },
  _slider4change(e) {
    // console.log('1111')
    console.log(e.detail.slider);
  },

  _add(e){
    console.log(e.detail.slider);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              _this.setData({
                isAuth: true
              })
            }
          })
        }else{
          _this.setData({
            isAuth: false
          })
        }
      }
    })
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