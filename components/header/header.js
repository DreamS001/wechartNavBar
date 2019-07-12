// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    statusBarHeight:{
      type: String
    },
    headerTitle:{
      type: String,
      value: '首页'
    },
    bgColor:{
      type: String,
      value: 'blue'
    },
    city:{
      type: String,
      value: '郑州市'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    }
  }
})
