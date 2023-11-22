// request 暂定不懂

const baseURL = 'https://tea.qingnian8.com';      // 把链接的主站页面定义为 变量 baseURL
// const baseURL = 'https://www.fastmock.site/mock/13998300dc7574018c16109b0ef56a56/xzs';      // 把链接的主站页面定义为 变量 baseURL

export function request(params){
  
  let dataObj = params.data || {};
  let headerObj = {			
    'content-type': 'application/json'    
  }
  
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + params.url,        // 基础路径拼接
      method:params.method || "GET",
      data:dataObj,
      header:headerObj,
      success:res=>{
        if(res.data.errCode!=0){
          reject(res.data);
          wx.showToast({
            title: res.data.errMsg,
            mask:true,
            icon:"error"
          })
          return;
        }
        resolve(res.data)
      },
      fail:err=>{
        reject(err)
      }
    })
  })
}