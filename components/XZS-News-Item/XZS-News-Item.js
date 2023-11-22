// components/XZS-News-Item/XZS-News-Item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 方法一; 自定义属性传 item.(title,author....)
    // index是父级, 该页面是子级, 父级把item.title数据传过来后 用title这个变量接住, 就可以去子级页面渲染出来
    // title: {           // 自定义属性传值 title就相当于变成了一个 变量
    //   type: String,     // 类型
    //   value: ''           // 默认值
    // },
    // author: {
    //   type: String     // 类型; 可以不写默认值
    // }

    // 方法二; 自定义属性直接传 item
    item: {
      type: Object,      // item是个对象
      value: {             // 没有数据的情况下
        title: '默认测试标题',       
        publish_date: '???',
        view_count: '???',
        author: '???'
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

  }
})