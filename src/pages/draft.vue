<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box w-[20%] h-full mr-[0.5rem]"></div>
        <div class="box flex-1 h-full"></div>
        <div class="box w-[20%] h-full ml-[0.5rem]">
            <div class="flex items-center p-[3%] justify-between">
                <div
                    class="box box-cd w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
                    <span class="ml-[1.5rem] tracking-[1.5rem] main-color">重置</span>
                </div>
                <div
                    class="box box-cd w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
                    <span class="ml-[1.5rem] tracking-[1.5rem] main-color">打印</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'


</script>

<style scoped lang="scss">
.page {
    height: calc(100vh - 5rem - 1.5rem);
}
</style>
