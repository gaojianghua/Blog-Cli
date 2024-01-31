<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box flex-1 h-full"></div>
        <div class="box w-[20%] h-full ml-[0.5rem]">
            <div class="flex items-center p-[3%] justify-between">
                <div
                    class="box box-cd w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
                    <span class="ml-[1.5rem] tracking-[1.5rem] main-color">收藏</span>
                </div>
                <div
                    class="box box-cd w-[48%] h-[3rem] cursor-pointer text-[1.3rem] flex items-center justify-center">
                    <span class="ml-[1.5rem] tracking-[1.5rem] main-color">分享</span>
                </div>
            </div>
            <div class="overflow-y-scroll" :style="{height: 'calc(100% - 2.8% - 3rem)'}">
                <div class="px-[3%] mt-5">
                    <div class="text-[#ffffff] text-center text-[1.3rem] font-medium tracking-wider">
                        相关文章
                    </div>
                    <div class="box box-cd p-[3%] text-white cursor-pointer mt-5 text-[1.2rem] flex flex-col" v-for="(item, i) in related" :key="i">
                        <div>{{ item.title }}</div>
                        <div class="text-[#bbb] text-right mt-1 text-[1.1rem]">
                            {{ item.share + '分享' + ' · ' + item.collect + '收藏' }}
                        </div>
                    </div>
                </div>
                <div class="px-[3%] mt-7">
                    <div class="text-[#ffffff] text-center text-[1.3rem] font-medium tracking-wider">
                        推荐文章
                    </div>
                    <div class="box box-cd p-[3%] cursor-pointer mt-5 text-[1.2rem] flex flex-col" v-for="(item, i) in related" :key="i">
                        <div class="text-white">{{ item.title }}</div>
                        <div class="text-[#bbb] text-right mt-1 text-[1.1rem]">
                            {{ item.share + '分享' + ' · ' + item.collect + '收藏' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const related = ref([
    {
        title: 'vue是最好的前端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    },
    {
        title: 'uniapp是最好的跨端框架',
        share: 36,
        collect: 24
    }
])

console.log(route.params.id)


</script>

<style scoped>
.page {
    height: calc(100vh - 5rem - 1.5rem);
}
</style>
