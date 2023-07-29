<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="item w-[80%] h-full mr-[0.5rem]"></div>
        <div class="item flex-1 h-full">
            <div class="flex items-center p-[1%] justify-between">
                <div class="w-[49%] h-[5rem] text-[1.3rem] main-color flex items-center justify-center">重置</div>
                <div class="w-[49%] h-[5rem] text-[1.3rem] main-color flex items-center justify-center">打印</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'


</script>

<style scoped lang="scss">
.page{
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
