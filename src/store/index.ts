/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:39:07
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 12:59:13
 * @FilePath     : \varlet-nuxt3-example\src\store\useRef.ts
 * @Description  :
 *
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved.
 */
import { useUserStore } from './useUserStore';
import { useCommonStore } from './useCommonStore';

// 模块
const stores = {
    useUserStore,
    useCommonStore
};

export default stores;
