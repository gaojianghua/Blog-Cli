<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 12:28:21
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:32:18
 * @Description: file content
-->
<template>
    <div class='box flex flex-col items-center w-[15.625rem] h-full py-5 px-4'>
        <div class="flex w-full justify-between items-center">
            <div
                class="w-[5rem] h-[5rem] flex items-center justify-center rounded-full overflow-hidden border-[0.2rem] border-[#fff]">
                <img class="w-[5.2rem] h-[5.2rem] max-w-none"
                    src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png" alt="作者头像">
            </div>
            <h1 class="main-color">
                Mr. Gao
            </h1>
        </div>
        <div class="mt-8 w-full">
            <NuxtLink class="flex box w-full text-[1.2rem] py-4 items-center justify-center mb-4"
                :class="route.path == item.path ? 'main-color' : ''" :to="item.path" v-for="(item, i) in backMenus"
                :key="i">
                <svg class="iconpark-icon w-[2rem] h-[2rem] mr-3">
                    <use :class="route.path == item.path ? 'main-color' : ''" :href="item.icon"></use>
                </svg>
                {{ item.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data'

const route = useRoute()
const backMenus = ref(data.backMenus)
const isSwitch = ref(true)

</script>

<style lang='scss' scoped>
h1 {
    text-decoration: none;
    font-size: 2.5rem;
    letter-spacing: 1;
    line-height: 1;
    overflow: hidden;
    -webkit-box-reflect: below .0625rem linear-gradient(transparent, #1AD1A533);
}
</style>