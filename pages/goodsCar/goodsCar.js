// pages/goodsCar/goodsCar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    arr: '',//存储请求回来的数组
    ini: 0,
    uhide: '',
    add_car_num: 0,//控制是否初次进入界面
    delBtnWidth: 134,//删除按钮宽度单位（rpx）
    price: '0.00'//价钱
  },
  // 滚动到底部
  lower: function () {
    console.log("我到了底部")
  },
  //删除
  delete_btn: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.showModal({
      // title: '提示',
      content: '删除后不能恢复，是否删除？',
      confirmColor: '#1da1f2',
      success: function (res) {
        if (res.confirm) {
          console.log(index)
          var list = that.data.arr;
          //移除列表中下标为index的项  
          list.splice(index, 1);
          //更新列表的状态  
          that.setData({
            arr: list
          });
          let carts = that.data.arr;
          // var _this = this;
          var sum = 0;
          for (var i = 0; i < carts.length; i++) {
            var QC = that.data.arr[i].num;
            sum += parseFloat(QC);
          }
          // console.log(sum);
          var price = 0;
          if (sum > 0) {
            for (var i = 0; i < carts.length; i++) {
              var QB = that.data.arr[i].price;
              var QR = that.data.arr[i].num;

              price += parseFloat(QB * QR);
            }
          }
          // console.log(price)

          that.setData({
            add_car_num: sum,
            price: price
          })



        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },

  //手动输入数量
  input_num: function (e) {
    var _this = this;
    const index = e.currentTarget.dataset.index;
    let input_num = e.detail.value;//手动输入
    let carts = this.data.arr;
    let num = carts[index].num;//数量
    carts[index].num = input_num;
    this.setData({
      arr: carts
    });
    var sum = 0;
    for (var i = 0; i < carts.length; i++) {
      if (_this.data.arr[i].num == "") {
        _this.data.arr[i].num = 0;
      }
      var QC = _this.data.arr[i].num;
      sum += parseFloat(QC);
    }
    if (sum <= 0) {
      this.setData({
        ico_num: 0
      });
    } else {
      this.setData({
        ico_num: 1
      });
    }
    var price = 0;
    if (sum > 0) {
      for (var i = 0; i < carts.length; i++) {
        var QB = _this.data.arr[i].price;
        var QR = _this.data.arr[i].num;

        price += QB * QR;
      }
    }
    this.setData({
      add_car_num: sum,
      price: price.toFixed(2)
    })

  },
  //数量加函数
  numadd: function (e) {
    var _this = this;
    const index = e.currentTarget.dataset.index;
    let carts = this.data.arr;
    let num = carts[index].num;//数量
    num = num + 1;
    carts[index].num = num;
    this.setData({
      arr: carts
    });
    var sum = 0;
    for (var i = 0; i < carts.length; i++) {
      var QC = _this.data.arr[i].num;
      sum += parseFloat(QC);
    }
    // console.log(sum);
    var price = 0;
    if (sum > 0) {
      for (var i = 0; i < carts.length; i++) {
        var QB = _this.data.arr[i].price;
        var QR = _this.data.arr[i].num;

        price += QB * QR;
      }
    }
    console.log(price.toFixed(2))

    this.setData({
      add_car_num: sum,
      price: price.toFixed(2)
    })
  },
  //数量减函数
  numminus: function (e) {
    const index = e.currentTarget.dataset.index;
    // console.log(index)
    let carts = this.data.arr;
    // console.log(carts[index].num)
    let _this = this;
    let num = carts[index].num;
    if (num <= 1) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.arr;
      let state = carts[index].state;//是否初次进入状态
      state = 0;
      carts[index].state = state;
      carts[index].num = 0;
      console.log(carts[index].num)
      this.setData({
        arr: carts,
      });
    } else {
      num = num - 1;
      carts[index].num = num;
      this.setData({
        arr: carts,
      });
    }
    var sum = 0;
    for (var i = 0; i < carts.length; i++) {

      var QC = _this.data.arr[i].num;
      sum += parseFloat(QC);
    }
    if (sum <= 0) {
      this.setData({
        ico_num: 0
      });
    } else {
      this.setData({
        ico_num: 1
      });
    }
    var price = 0;
    if (sum > 0) {
      for (var i = 0; i < carts.length; i++) {
        var QB = _this.data.arr[i].price;
        var QR = _this.data.arr[i].num;

        price += QB * QR;
      }
    }

    this.setData({
      add_car_num: sum,
      price: price.toFixed(2)
    });



  },
  // 产品数量为零时方法
  showadd: function (e) {
    var _this = this;
    const index = e.currentTarget.dataset.index;
    // console.log(index)
    let carts = this.data.arr;
    // console.log(carts[index].state)
    let num = carts[index].num;
    let state = carts[index].state;
    state = 1;
    carts[index].state = state;
    carts[index].num = 1;
    var sum = 0;
    for (var i = 0; i < carts.length; i++) {

      var QC = _this.data.arr[i].num;
      sum += parseFloat(QC);
    }
    if (sum <= 0) {
      this.setData({
        ico_num: 0
      });
    } else {
      this.setData({
        ico_num: 1
      });
    }
    var price = 0;
    if (sum > 0) {
      for (var i = 0; i < carts.length; i++) {
        var QB = _this.data.arr[i].price;
        var QR = _this.data.arr[i].num;

        price += QB * QR;
      }
    }

    this.setData({
      arr: carts,
      add_car_num: sum,
      price: price.toFixed(2)
    });

  },
  //手指刚放到屏幕触发
  touchS: function (e) {
    // console.log(e);
    //判断是否只有一个触摸点
    if (e.touches.length == 1) {
      this.setData({
        //记录触摸起始位置的X坐标
        startX: e.touches[0].clientX
      });
    }
  },
  //触摸时触发，手指在屏幕上每移动一次，触发一次
  touchM: function (e) {
    // console.log(e);
    var that = this
    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      //计算手指起始点的X坐标与当前触摸点的X坐标的差值
      var disX = that.data.startX - moveX;
      //delBtnWidth 为右侧按钮区域的宽度
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0rpx";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "rpx";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "rpx";
        }
      }
      //获取手指触摸的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.arr;
      //将拼接好的样式设置到当前item中
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        arr: list
      });
    }
  },
  touchE: function (e) {
    // console.log(e);
    var that = this
    if (e.changedTouches.length == 1) {
      //手指移动结束后触摸点位置的X坐标
      var endX = e.changedTouches[0].clientX;
      //触摸开始与结束，手指移动的距离
      var disX = that.data.startX - endX;
      var delBtnWidth = that.data.delBtnWidth;
      //如果距离小于删除按钮的1/2，不显示删除按钮
      var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = that.data.arr;
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      that.setData({
        arr: list
      });
    }
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
    //获得header组件
    this.header = this.selectComponent("#header");
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