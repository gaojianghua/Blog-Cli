/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:31:58
 * @LastEditors  : 15257184434 g598670138@163.com
 * @LastEditTime : 2023-01-15 09:32:02
 * @FilePath     : \varlet-nuxt3-example\src\plugins\directives.ts
 * @Description  : 
 * 
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved. 
 */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted(el) {
            el.focus()
        },
        getSSRProps(binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    })
})