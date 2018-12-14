import server from '@/providers/http-service'
/**
 1. 获取用户信息
 */
export const getUserInfo = params => {
  return server.get('/mock/5c0f8cb284df40532d62bee1/example/user', params)
}
