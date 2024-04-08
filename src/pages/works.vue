<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-08 09:57:32
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-08 10:02:00
 * @Description: file content
-->
<template>
    <div class="page mx-auto flex w-[100rem] flex-col">
        <div class="box flex h-[5rem] items-center">
            <div
                v-for="(item, i) in worksMenus"
                :key="i"
                class="text-cd ml-[2rem] flex h-[5rem] cursor-pointer items-center justify-around text-[1.5rem]"
                :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                @click="chooseMenu(item.type)"
            >
                {{ item.name }}
            </div>
        </div>
        <div ref="el" class="box mt-[0.5rem] h-full flex-1 overflow-y-scroll p-3">
            <div v-if="list.length === 0" class="flex flex-col items-center justify-center">
                <span class="mt-5 text-[1.2rem] text-[#ccc]">作者很懒，未发布新的内容！</span>
            </div>
            <div v-else class="flex flex-wrap items-center justify-between">
                <div
                    v-for="(item, j) in list"
                    :key="j"
                    class="box box-cd mb-3 flex w-[32.9%] cursor-pointer flex-col items-center justify-between p-[1rem]"
                    @click="openDetails(j)"
                >
                    <div class="child-right">
                        <img
                            class="h-auto w-full shrink object-cover"
                            src="https://official-document.oss-cn-hangzhou.aliyuncs.com/1c41e41a9594d932e34ce0be021bb0fc.jpg"
                            alt="" 
                        >
                    </div>
                    <div class="child-left mt-[1rem] flex h-[8rem] w-full flex-1 flex-col justify-between">
                        <div class="child-title text-[1.3rem] leading-none text-white">
                            {{ item.title }}
                        </div>
                        <div class="child-desc mt-[0.5rem] truncate text-[1.2rem] text-[#ccc]">
                            {{ item.desc }}
                        </div>
                        <div class="tags mt-[0.5rem] flex items-center">
                            <div v-for="(tag, i) in item.tags" :key="i" class="box mr-3 py-0.5 px-3 text-white">
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import data from '@/data';
import { useRouter } from 'vue-router';
import { useScroll } from '@vueuse/core';

const menuIndex = ref(0);
const worksMenus = ref(data.worksMenus);

const router = useRouter();
const el = ref<HTMLElement | null>(null);
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
    router.push(`/works-details/${i}`);
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
