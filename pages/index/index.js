// import; 用来应用其它页面的 自定义方法   export; 向外导出 / import; 引入
// import {formatNum} from "../../utils/common"   // 使用相对路径才不会报错
import {formatNum,formatTime} from "../../utils/common"
import {listNav, listNews} from "../../API/API"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navArr: [],
    newsArr: []    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavData()
    this.getNewsData()
  },

  // 获取导航数据
  // 1.0 方法
  // getNavData(){
  //   wx.request({
  //     url: 'https://tea.qingnian8.com/nav/get',
  //     header: {
  //       "Content-Type": "application/json"
  //     },
  //     method: "POST",
  //     success: res => {
  //       // console.log(res)
  //       // console.log(res.data.data)
  //       this.setData({
  //         navArr: res.data.data
  //       })
  //     }
  //   })
  // },

  // 2.0方法
  getNavData(){
    listNav().then( res =>{
      // console.log(res)
      // console.log(res.data[0])
      this.setData({
        navArr: res.data
      })
    })
  },
    

  // 获取新闻列表数据
  // 1.0 方法
  // getNewsData(){
  //   wx.request({
  //     url: 'https://tea.qingnian8.com/news/get',
  //     header: {
  //       "Content-Type": "application/json"
  //     },
  //     method: "POST",
  //     data: {           // data 用来请求参数，如果接口需要请求参数的话
  //       limit: 3,
  //       hot: true       // 该接口里的 hot：是否是推荐的文章
  //     },
  //     success: res => {
  //       // console.log(res)
  //       // console.log(res.data.data)
  //       res.data.data.forEach(item => {   // 修改了每一项
  //         // 需要使用自定义方法,需要在 该文件 最上面引用:import
  //         // item.view_count = 123        // 浏览量

  //         // 数字格式化方法     // common.js文件里
  //         item.view_count = formatNum(item.view_count)

  //         // 日期格式化方法
  //         item.publish_date = formatTime(item.publish_date,5)   // 格式化方法里只要月和日; 在方法的数组 arr 里 索引号为 5
  //       })
  //       this.setData({
  //         newsArr: res.data.data
  //       })
  //     }
  //   })
  // },

  // 2.0 方法
  getNewsData(){
    listNews({
      limit: 3,         // 获取多少个
      hot: true         // 是否为热点
    }).then(res => {
      // console.log(res.data);
      // 2.先过滤
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)              // 格式化游览量
        item.publish_date = formatTime(item.publish_date,5)       // 格式化方法里只要月和日; 在该方法的数组 arr 里 索引号为 5
      })
      this.setData({
        newsArr: res.data  // 拿到了接口的数据，并且赋值给 data里的 newsArr 好做页面渲染
        // 1. 但是拿到的时间 和 阅读量 还没有过滤
      })
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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