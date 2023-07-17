<template>
    <div class='page p-2'>
        <div class="page-title px-[100px] flex justify-between">
            <h1 class="text-[23px] text-[#999] leading-[60px] cursor-pointer">
                <NuxtLink to="/">Mr. Gao</NuxtLink>
            </h1>
            <div class="flex leading-[60px] text-[16px] text-[#999]">
                <div class="ml-12 cursor-pointer" :class="route.path == item.path ? 'main-color':''" v-for="(item, i) in menu" :key="i">
                    <NuxtLink :to="item.path">{{item.name}}</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()

let menu = ref([
    {
        name:'首页',
        path:'/'
    },
    {
        name:'文章',
        path:'/article'
    },
    {
        name:'关于',
        path:'/about'
    }
])
</script>

<style lang='scss' scoped>
.page {
    .page-title {
        height: 60px;
        border: 1px solid rgba(26, 209, 165, .1);
        backdrop-filter: contrast(100%);
        -webkit-backdrop-filter: contrast(100%);
        background-color: rgba(255, 255, 255, .1);
        border-radius: 6px;
    }
}
</style>
