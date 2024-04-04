/*
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-04 18:00:23
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 13:42:20
 * @Description: file content
 */
import { useUserStore } from '@/store/useUserStore';
export default defineNuxtRouteMiddleware(async to => {
    const userStore = useUserStore();
    if (!userStore.state.userInfo.id) {
        // 用户不存在之后的操作
    }
});
