<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="item w-[80%] h-full mr-[0.5rem]"></div>
        <div class="item flex-1 h-full">
            <div class="flex items-center p-[3%] justify-between">
                <div
                    class="item w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
                    <span class="ml-[1.5rem] tracking-[1.5rem] main-color">重置</span>
                </div>
                <div
                    class="item w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
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

    .item {
        border: 1px solid rgba(26, 209, 165, .1);
        backdrop-filter: contrast(100%);
        -webkit-backdrop-filter: contrast(100%);
        background-color: rgba(255, 255, 255, .1);
        border-radius: .5rem;
    }
}
</style>
