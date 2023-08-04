import { useUserStore } from '~/store';
export default defineNuxtRouteMiddleware(async (to) => {
    const userStore = useUserStore();
    // 获取用户信息
    let { id } = userStore.state.userInfo;
    if (!id) {
        // 用户不存在之后的操作
    }
});
