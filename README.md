# XZS-XCX
之前上传的有问题，部分文件太大手动上传失败；这次用git上传了文件，可以运行了


##### 该项目使用的是B站up主“咸虾米_” 的素材，包括后端的数据接口

###### 接口地址：https://tea.qingnian8.com



不知道什么原因无法在onload里面使用异步函数，使用就会小程序崩溃，自带的调试模拟器直接白屏，而且没有任何报错。



#### 项目主要分为5个页面

主页：pages/index

分类页：pages/classify

新闻页：pages/news

新闻详情页：pages/newsDetail

产品详情页：pages/proDetail（因为无法使用同步异步，导致无法正确的按顺序传递参数，无法使用参数调用别的接口里的数据）



#### 项目使用的方法：

页面：

​	小程序swiper标签 实现轮播图

​	小程序scroll-view标签 实现首页nav导航栏

​	Vant Weapp组件库 实现分类页nav导航栏

​	自定义组件（XZS-News-Item） 实现 新闻热点列表渲染

​	自定义组件（XZS-Product-Item） 实现 产品列表渲染

​	自定义组件（XZS-Header） 头部公共样式

​	自定义组件（XZS-Footer） 	底部公共样式

​	

​	新闻列表（时间、浏览量） 使用自定义方法（common.js）export导出，import引入实现时间戳，游览数格式化



​	新闻详情页面：common.js方法格式化时间、浏览量；富文本渲染后端数据

