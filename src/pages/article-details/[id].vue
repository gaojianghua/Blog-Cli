<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box h-full flex-1" />
        <div class="box ml-[0.5rem] h-full w-[20%]">
            <div class="flex items-center justify-between p-[3%]">
                <div class="box box-cd flex h-[3rem] w-[48%] cursor-pointer items-center justify-center text-[1.3rem]">
                    <span class="main-color ml-[1.5rem] tracking-[1.5rem]">收藏</span>
                </div>
                <div class="box box-cd flex h-[3rem] w-[48%] cursor-pointer items-center justify-center text-[1.3rem]">
                    <span class="main-color ml-[1.5rem] tracking-[1.5rem]">分享</span>
                </div>
            </div>
            <div class="overflow-y-scroll" :style="{ height: 'calc(100% - 2.8% - 3rem)' }">
                <div class="mt-5 px-[3%]">
                    <div class="text-center text-[1.3rem] font-medium tracking-wider text-[#ffffff]">相关文章</div>
                    <div
                        v-for="(item, i) in related"
                        :key="i"
                        class="box box-cd mt-5 flex cursor-pointer flex-col p-[3%] text-[1.2rem] text-white"
                    >
                        <div>{{ item.title }}</div>
                        <div class="mt-1 text-right text-[1.1rem] text-[#bbb]">
                            {{ item.share + '分享' + ' · ' + item.collect + '收藏' }}
                        </div>
                    </div>
                </div>
                <div class="mt-7 px-[3%]">
                    <div class="text-center text-[1.3rem] font-medium tracking-wider text-[#ffffff]">推荐文章</div>
                    <div
                        v-for="(item, i) in related"
                        :key="i"
                        class="box box-cd mt-5 flex cursor-pointer flex-col p-[3%] text-[1.2rem]"
                    >
                        <div class="text-white">{{ item.title }}</div>
                        <div class="mt-1 text-right text-[1.1rem] text-[#bbb]">
                            {{ item.share + '分享' + ' · ' + item.collect + '收藏' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
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
]);

console.log(route.params.id);
</script>

<style scoped>
    .page {
        height: calc(100vh - 5rem - 1.5rem);
    }
</style>
