/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:39:33
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 14:17:53
 * @FilePath     : \varlet-nuxt3-example\src\store\useUserStore.ts
 * @Description  :
 *
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import {getUserinfo} from "@/api/get";

export const useUserStore = defineStore('user', () => {
    const state = reactive({
        userInfo: {
            userName: '易师傅',
            id: 1,
            sex: '男',
        },
    })
    return {
        state,
        getters: {

        },
        actions: {
            getUserinfo: async () => {
                let res = await getUserinfo()
            }
        }
    }
})
