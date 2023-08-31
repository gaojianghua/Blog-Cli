/*
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 10:39:39
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 16:03:01
 * @Description: file content
 */
import { defineStore } from "pinia";
import { persist } from '@/utils'

export const useCommonStore = defineStore("common", () => {
    const state = reactive({
    })
    return {
        state,
        getters: {},
        actions: {

        }
    };
})
