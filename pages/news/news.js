import {listNews} from "../../API/API"
import {formatNum,formatTime} from "../../utils/common"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: [],
    loading: false,   // 底部加载动画
    isData: false     // 数据是否加载完毕
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewsData()
  },

  getNewsData(size = 0){
    this.setData({
      loading: true   // 网络在请求的时候 启动加载动画
    })
    listNews({
      limit: 8,       // 获取多少个
      size: size         // 分页（过滤的个数）；为 8 时就是刷新后显示 该 8条后面的 数据
    }).then(res => {
      console.log(res)
      // 过滤 格式化数据
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)              // 格式化游览量
        item.publish_date = formatTime(item.publish_date,5)       // 格式化方法里只要月和日; 在该方法的数组 arr 里 索引号为 5
      })

      // 老的数据需要 拼接新的数据
      let oldData = this.data.newsArr
      // let newData = oldData.concat(res.data)    // concat() 拼接数据
      let newData = [...oldData,...res.data]       // 数组解构方式 拼接   
      this.setData({
        newsArr: newData,
        loading: false   // 完成页面加载后 关闭加载动画
      })

      // 结束下拉刷新动画
      wx.stopPullDownRefresh()

      if(this.data.newsArr.length === res.total){             // total 是接口数据的 数量
        console.log('没有更多了');
        this.setData({
          isData: true
        })
      }     
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 开启下拉刷新
    this.setData({      
      newsArr: [],        // 下拉刷新时 清空数据 
      isData: false,      // 隐藏 加载
      loading: false      // 隐藏 没有更多
    })
    this.getNewsData()    // 触发一次 加载数据
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 判断数据（total）是否全部加载完成
    if(this.data.isData) return;      // 如果为 true 这中断，不执行下面的代码

    // this.getNewsData(8)                        // 触底时 size 为 8
    this.getNewsData(this.data.newsArr.length);    // 触底时刷新 新（该数组长度以外）的数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})