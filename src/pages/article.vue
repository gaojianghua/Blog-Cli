<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box w-[10%] h-full mr-[0.5rem]">
            <div class="text-[1.5rem] text-cd cursor-pointer flex justify-center items-center h-[5rem] ml-[2rem] tracking-[2rem]"
                :class="menuIndex == item.type ? 'main-color' : 'text-white'" v-for="(item, i) in articleMenus" :key="i"
                @click="chooseMenu(item.type)">
                {{ item.name }}
            </div>
        </div>
        <div ref="el" class="box flex-1 h-full p-3 overflow-y-scroll">
            <div v-if="list.length === 0" class="flex flex-col items-center justify-center">
                <span class="mt-5 text-[#ccc] text-[1.2rem]">作者很懒，未发布新的内容！</span>
            </div>
            <div v-else class="box box-cd flex cursor-pointer items-center justify-between mb-3 p-3"
                v-for="(item, j) in list" :key="j" @click="openDetails(j)">
                <div class="child-left w-[70%] flex-1 h-[8rem] flex flex-col justify-between">
                    <div class="child-title text-[1.3rem] leading-none">
                        {{ item.title }}
                    </div>
                    <div class="child-desc text-[1.2rem] text-[#ccc] truncate">
                        {{ item.desc }}
                    </div>
                    <div class="tags flex items-center">
                        <div class="box py-0.5 px-3 mr-3" v-for="(tag, i) in item.tags" :key="i">
                            {{ tag }}
                        </div>
                    </div>
                </div>
                <div class="child-right">
                    <img class="flex-shrink w-[16rem] h-[8rem]"
                        src="https://official-document.oss-cn-hangzhou.aliyuncs.com/1c41e41a9594d932e34ce0be021bb0fc.jpg"
                        alt="">
                </div>
            </div>
        </div>
        <div class="box w-[20%] h-full ml-[0.5rem]"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";
import data from "@/data";
import { useScroll } from '@vueuse/core'

const router = useRouter()
const el = ref<HTMLElement | null>(null)
const menuIndex = ref(0)
const articleMenus = ref(data.articleMenus)
const list = ref(data.list)

const { arrivedState } = useScroll(el)
const chooseMenu = (i: number) => {
    menuIndex.value = i
    switch (i) {
        case 0:
            list.value = data.list
            break
        default:
            list.value = []
            break
    }
}

const openDetails = (i: number) => {
    router.push(`/article-details/${i}`)
}

watch(arrivedState, (newValue) => {
    if (!newValue.top) {
        list.value = [...list.value, ...data.list]
    }
})

</script>

<style lang="scss" scoped>
.page {
    height: calc(100vh - 5rem - 1.5rem);


}
</style>
