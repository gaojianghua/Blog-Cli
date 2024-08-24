<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-08 09:53:43
 * @LastEditors: 高江华
 * @LastEditTime: 2024-08-24 11:28:37
 * @Description: file content
-->
<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box mr-[0.5rem] h-full w-[20%]" />
        <div class="box h-full flex-1" />
        <div class="box ml-[0.5rem] h-full w-[20%]">
            <div class="flex items-center justify-between p-[3%]">
                <div class="box box-cd flex h-[3rem] w-[48%] cursor-pointer items-center justify-center text-[1.3rem]">
                    <span class="main-color ml-[1.5rem] tracking-[1.5rem]">重置</span>
                </div>
                <div class="box box-cd flex h-[3rem] w-[48%] cursor-pointer items-center justify-center text-[1.3rem]">
                    <span class="main-color ml-[1.5rem] tracking-[1.5rem]">打印</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped lang="scss">
    .page {
        height: calc(100vh - 5rem - 1.6rem);
    }
</style>
