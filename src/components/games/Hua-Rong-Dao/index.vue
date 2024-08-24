<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-08 09:53:43
 * @LastEditors: 高江华
 * @LastEditTime: 2024-08-24 18:14:48
 * @Description: file content
-->
<template>
    <div class="container flex h-full flex-col">
        <div class="other mb-3 flex w-full">
            <div class="box h-[15rem] w-[15rem] shrink-0 overflow-hidden">
                <img :src="'/_nuxt' + `/assets/image/${gameImg}/${gameImg}.jpg`">
            </div>
            <Control :games="games" />
        </div>
        <div class="box m-auto flex h-[50rem] w-[50rem] items-center justify-center overflow-hidden border-[2rem]">
            <div v-show="!isStart" class="flex flex-col items-center justify-center text-white">
                <p class="text-3xl">华容道</p>
                <p class="text-xl">Hua Rong Dao</p>
            </div>
            <div v-show="isStart" class="clearfix flex h-full w-full flex-wrap">
                <div v-for="item in randomData" :key="item" :class="`img${level}`" @click="handleMove(item)">
                    <img v-if="item != randomData.length" class=" block h-full w-full" :src="'/_nuxt' + `/assets/image/${gameImg}/${level}/${item}.jpg`">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Control from './components/control.vue';
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue';
import Puzzle from './utils/index';
let games = reactive(Puzzle);
const { gameImg, randomData, level, isStart } = toRefs(games);


// 鼠标移动图片
const handleMove = (index: number) => {
    games.move(index);
};
// 键盘事件
const handleKeyDown = (e: any) => {
    if (!isStart.value) return;
    games.onKeydown(e.keyCode);
};
onMounted(() => {
    document.addEventListener('keydown', handleKeyDown);
});
onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss" scoped>
    .img3 {
        width: calc(100% / 3);
        height: calc(100% / 3);
    }
    .img4 {
        width: calc(100% / 4);
        height: calc(100% / 4);
    }
    .img5 {
        width: calc(100% / 5);
        height: calc(100% / 5);
    }
</style>
