/**
 * @description: 获取用户信息
 */
export const getUserinfo = (params?: any) => useRequest.get("/user/userinfo", params);
