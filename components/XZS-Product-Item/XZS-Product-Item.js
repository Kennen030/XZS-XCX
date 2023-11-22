// components/XZS-Product-Item/XZS-Product-Item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,      // item是个对象
      value: {             // 没有数据的情况下
        title: '默认测试标题',       
      }
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
    clickPro(e) {
      // console.log(e);
      wx.navigateTo({
        url: '/pages/proDetail/proDetail',
      })
    }
  }
})