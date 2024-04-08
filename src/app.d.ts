/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:25:15
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-08 10:02:48
 * @FilePath     : \varlet-nuxt3-example\src\app.d.ts
 * @Description  :
 *
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved.
 */
declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const componentOptions: ComponentOptions;
    export default componentOptions;
}
declare module './data.ts'
declare global {
    interface Window {
        CESIUM_BASE_URL: string
    }
}
declare module 'cesium' {
    // 定义或导入Cesium的类型定义
    export = Cesium;
}
