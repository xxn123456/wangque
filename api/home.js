import request from '@/utils/request'

// 获取所有文章类别
export function getCateName(data) {
  return request({
    url: '/articleType/findAll',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 获取文章列表
export function getBlog(data) {
  return request({
    url: '/blog/findAll',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}


export function getBlogDetail(data) {
  return request({
    url: '/blog/findOne',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}


// 获取所有分页
export function getCarousel(data) {
  return request({
    url: '/carousel/findAll',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 模糊搜索文章

export function searchBlog(data) {
  return request({
    url: '/blog/search',
    // 此处admin是代理
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}


