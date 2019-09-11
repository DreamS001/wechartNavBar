// components/slider/slider.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    slider:{
      type:Number,
      value:0
    },
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
    _slider2change(e) {
      console.log(e.detail.value)
      this.setData({
        slider: e.detail.value
      })
      this.triggerEvent("slider2change", { slider: e.detail.value});
    },
    _add(e){
      // console.log(e)
      var _this=this
      this.setData({
        slider: _this.data.slider+1
      })
      this.triggerEvent("add", { slider: _this.data.slider + 1 });
    }
  }
})
