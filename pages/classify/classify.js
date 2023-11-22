import {listNav,listProduct} from "../../API/API"
// let navId = '63b9600be1a35c358c18483b';            // 默认进入第一个分类页面
let navId = '63b9600be1a35c358c18483b'        // 默认进入第一个分类页面
// 从性能上来讲，放在data中就会创建出响应式监听，消耗内存。既然在模板中不使用这个变量就没有必要浪费这个消耗
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    navArr: [],
    productArr: [],
    loading: false,
    isData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {         // （1）同步异步方法 async await 等待 this.getNavList() 成功之后，再去执行 后面的方法
    let {idx} = options;        // 1. 解构的方式 拿到上一个页面传过来的索引值

    this.getNavList();       // （2）先拿到导航栏（navArr）的数据，再去执行 产品数据渲染
    // navId = this.data.navArr[0]._id;   // （3）拿到 _id数据，用来渲染哪个分类的页面
    // console.log(this.data.navArr[0]._id);

    // this.navChange(idx);       // 2. 把上个页面传来的值 送过去
    // this.setData({
    //   navActive: idx
    // })

    this.getProductList();
  },


  // 获取分类导航数据
  getNavList(){         // （1）
    listNav().then(res => {   //（2）
      // console.log(res);
      this.setData({
        navArr: res.data
      })
      // this.selectComponent("#vanTabs").reset()      // selectComponent方法 找到自定义组件 并且添加组件自带的方法
      console.log(this.data.navArr);
      this.navChange();       // 2. 把上个页面传来的值 送过去
    })
  },

  
  // 获取产品数据
  getProductList(size = 0){
    this.setData({      
      loading: true               // 加载数据时显示 loading
    })
    listProduct({
      navid: navId,                       // （3）
      size: size                           // size： 用来翻页
    }).then(res => {
      // console.log(res);
      // console.log(res.data);
      let oidArr = this.data.productArr       // 第一次执行时 productArr 是空数组
      let newArr = oidArr.concat(res.data)    // 第一次执行后 把 res.data 里的 5个对象用 concat()方法 拼接到 newArr变量里
      this.setData({
        // productArr: res.data                    // 第一次执行后 就有5条数据
        productArr: newArr,                    // 第一次执行后 就有5条数据
        
        loading: false            // 加载数据完毕后 关闭 loading
      })
      // console.log(this.data.productArr);
      
      if(res.total === this.data.productArr.length){        // 接口的数据全部显示出来后 
        this.setData({
          isData: true
        })
      }
    })
  },
  
  
  // 导航条切换事件
  navChange(e){
    // console.log(e);
    // let index = e.detail.index    // 得到 nav的索引值
    // console.log(index);
    
    let index = e?.detail?.index ?? e    // js可选链 如果传来的值 里面没有detail值的情况下 直接使用 ?? 后面的 e
    
    // console.log(this.data.navArr);
    // navId = this.data.navArr[index]._id  // 拿到当前点击的 _id
    navId = this.data.navArr[index]._id  // 拿到当前点击的 _id
    console.log(navId);      // 用navId 来匹配分类

    this.setData({            // 切换分类的时候 清除数组里的所有数据（上一个分类里的数据）
      productArr: [],
      loading: false,         // 切换分类时重置
      isData: false
    })

    this.getProductList()         // 重新获取一次数据
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
    if(this.data.isData) return;        // 当显示没有更多数据的时候 中断触底事件

    // 触底时 调用一次刷新数据
     this.getProductList(this.data.productArr.length);           // 给 size（翻页）传了一个 5（数组长度）
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})