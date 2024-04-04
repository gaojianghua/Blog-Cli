<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box mr-[0.5rem] h-full w-[10%]">
            <div
                v-for="(item, i) in articleMenus"
                :key="i"
                class="text-cd ml-[2rem] flex h-[5rem] cursor-pointer items-center justify-center text-[1.5rem] tracking-[2rem]"
                :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                @click="chooseMenu(item.type)"
            >
                {{ item.name }}
            </div>
        </div>
        <div ref="el" class="box h-full flex-1 overflow-y-scroll p-3">
            <div v-if="list.length === 0" class="flex flex-col items-center justify-center">
                <span class="mt-5 text-[1.2rem] text-[#ccc]">作者很懒，未发布新的内容！</span>
            </div>
            <div
                v-for="(item, j) in list"
                v-else
                :key="j"
                class="box box-cd mb-3 flex cursor-pointer items-center justify-between p-3"
                @click="openDetails(j)"
            >
                <div class="child-left flex h-[8rem] w-[70%] flex-1 flex-col justify-between">
                    <div class="child-title text-[1.3rem] leading-none text-white">
                        {{ item.title }}
                    </div>
                    <div class="child-desc truncate text-[1.2rem] text-[#ccc]">
                        {{ item.desc }}
                    </div>
                    <div class="tags flex items-center">
                        <div v-for="(tag, i) in item.tags" :key="i" class="box mr-3 py-0.5 px-3 text-white">
                            {{ tag }}
                        </div>
                    </div>
                </div>
                <div class="child-right">
                    <img
                        class="h-[8rem] w-[16rem] shrink"
                        src="https://official-document.oss-cn-hangzhou.aliyuncs.com/1c41e41a9594d932e34ce0be021bb0fc.jpg"
                        alt=""
                    >
                </div>
            </div>
        </div>
        <div class="box ml-[0.5rem] h-full w-[20%]" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useScroll } from '@vueuse/core';
import data from '@/data';

const router = useRouter();
const el = ref<HTMLElement | null>(null);
const menuIndex = ref(0);
const articleMenus = ref(data.articleMenus);
const list = ref(data.list);

const { arrivedState } = useScroll(el);
const chooseMenu = (i: number) => {
    menuIndex.value = i;
    switch (i) {
    case 0:
        list.value = data.list;
        break;
    default:
        list.value = [];
        break;
    }
};

const openDetails = (i: number) => {
    router.push(`/article-details/${i}`);
};

watch(arrivedState, newValue => {
    if (!newValue.top) {
        list.value = [...list.value, ...data.list];
    }
});
</script>

<style lang="scss" scoped>
    .page {
        height: calc(100vh - 5rem - 1.5rem);
    }
</style>
