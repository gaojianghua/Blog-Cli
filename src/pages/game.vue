<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-08 09:53:43
 * @LastEditors: 高江华
 * @LastEditTime: 2024-08-24 16:16:10
 * @Description: file content
-->
<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box mr-[0.5rem] h-full w-[14%]">
            <div
                v-for="(item, i) in gameMenus"
                :key="i"
                class="text-cd ml-[2rem] flex h-[5rem] cursor-pointer items-center justify-around text-[1.5rem] tracking-[2rem]"
                :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                @click="chooseMenu(item.type)"
            >
                {{ item.name }}
            </div>
        </div>
        <div class="box h-full flex-1 p-3">
            <div v-if="menuIndex == 0" class="h-full">
                <HuaRongDao />
            </div>
            <div v-else class="flex flex-col items-center justify-center">
                <span class="mt-5 text-[1.2rem] text-[#ccc]">游戏开发中，敬请期待哦</span>
            </div>
        </div>
        <div class="box ml-[0.5rem] h-full w-[20%]" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import data from '@/data';
import HuaRongDao from '@/components/games/Hua-Rong-Dao/index.vue';

const menuIndex = ref(0);
const gameMenus = ref(data.gameMenus);

const chooseMenu = (i: number) => {
    menuIndex.value = i;
};
</script>

<style lang="scss" scoped>
    .page {
        height: calc(100vh - 5rem - 1.6rem);
    }
</style>
