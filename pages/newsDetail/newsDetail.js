import {newsDetail} from "../../API/API"
import {formatNum, formatTime} from "../../utils/common"
let id;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    skeleton: true,           // 骨架屏 默认开启
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {     // options 可以拿到上一个页面 传到这个页面的参数
    // console.log(options);     // {id: "63c38e81e1a35ce43a2689e4"}
    // console.log(options.id);     // 63c38e81e1a35ce43a2689e4
    id = options.id       // 返回来的动态 id的值
    this.getDetail();
  },

  // 获取新闻详情页数据
  getDetail(){
    newsDetail({
      // 接口需要的 参数
      // "id": "63c38db1f43e607808e657c6"
      id: id
    }).then(res => {        // 请求成功之后
      // console.log(res);

      // 格式话时间，直接使用格式化方法，不需要遍历
      res.data.publish_date = formatTime(res.data.publish_date,6)

      // 给富文本 添加类的样式
      res.data.content = res.data.content.replace(/<p/gi,"<p class='pstyle'")
      res.data.content = res.data.content.replace(/<img/gi,"<img class='imgstyle'")
      // replace(/<p/gi,"") 正则表达式 追加标签样式
      // （/<p/）：找到内容里所有的 ‘<p’ 开头的字符串；（g）：在全局里面查找；（i）: 不区分大小写

      // 页面导航栏标题
      wx.setNavigationBarTitle({
        title: res.data.title
      })

      this.setData({
        detail: res.data,
        skeleton: false       // 加载完整个页面后 骨架屏 关闭
      })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title:this.data.detail.title,     // 转发的标题
      path:"/pages/newsDetail/newsDetail?id=" + this.data.detail._id            // 转发的页面路径
    }
  },

  // 用户点击右上角分享到朋友圈
  onShareTimeline() {
    return {
      title:this.data.detail.title,     // 转发的标题
      path:"/pages/newsDetail/newsDetail?id=" + this.data.detail._id            // 转发的页面路径
    }
  }

})