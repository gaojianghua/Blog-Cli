<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 10:56:46
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:33:36
 * @Description: file content
-->
<template>
    <div class='box h-[6rem] flex items-center ml-4 p-3'>
        <button class="h-[4.5rem] w-[4.5rem] box flex items-center justify-center" @click="switchMenuBox">
            <svg class="iconpark-icon w-[3rem] h-[3rem] main-color"><use :href="icon"></use></svg>
        </button>
        <button class="h-[4.5rem] w-[4.5rem] ml-auto box flex items-center justify-center" @click="close">
            <svg class="iconpark-icon w-[3rem] h-[3rem] main-color"><use href="#power"></use></svg>
        </button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

let icon = ref('#menu-unfold-one')

const switchMenuBox = () => {
    icon.value = icon.value == '#menu-unfold-one' ? '#menu-fold-one' : '#menu-unfold-one'
}

const close = () => {
    navigateTo('/')
}
</script>

<style lang='scss' scoped>
</style>