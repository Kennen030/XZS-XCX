import {request} from  "../utils/request"

// 导航栏获取
export function listNav(){
  return request({
    url: '/nav/get',         // 去到详细页面
    method: "POST"
  })
}

// 新闻列表获取
export function listNews(data){
  return request({
    url: '/news/get',
    method: "POST",
    data: data        // 该接口需要传输参数才能获取
  })
}

// 新闻详情页面 获取
export function newsDetail(data){
  return request({
    url: '/news/detail',
    method: "POST",
    data: data        
  })
}

export function listProduct(data){
  return request({
    url: '/product/getlist',
    method: "POST",
    data: data        
  })
}