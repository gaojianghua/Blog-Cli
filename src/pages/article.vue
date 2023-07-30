<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box w-[10%] h-full mr-[0.5rem]">
            <div
                class="text-[1.5rem] cursor-pointer flex justify-center items-center h-[5rem] ml-[2rem] tracking-[2rem]"
                :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                v-for="(item, i) in menus" :key="i" @click="chooseMenu(item.type)">
                {{ item.name }}
            </div>
        </div>
        <div class="box flex-1 h-full p-3 overflow-y-scroll">
            <div class="box flex items-center justify-between mb-3 p-3" v-for="(item, j) in list" :key="j">
                <div class="child-left w-[70%] flex-1 h-[8rem] flex flex-col justify-between">
                    <div class="child-title text-[1.3rem] leading-none">
                        {{item.title}}
                    </div>
                    <div class="child-desc text-[1.2rem] text-[#ccc] truncate">
                        {{item.desc}}
                    </div>
                    <div class="tags flex items-center">
                        <div class="box py-0.5 px-3 mr-3" v-for="(tag, i) in item.tags" :key="i">
                            {{tag}}
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
import {ref} from 'vue'

const menuIndex = ref(0)
const menus = ref([
    {
        name: '全部',
        type: 0
    },
    {
        name: '前端',
        type: 1
    },
    {
        name: '后端',
        type: 2
    },
    {
        name: '运维',
        type: 3
    },
    {
        name: '生活',
        type: 4
    },
    {
        name: '娱乐',
        type: 5
    },
    {
        name: '其他',
        type: 6
    }
])

const list = ref([
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'Vue技术揭秘之watch监听器',
        desc: 'watch监听器是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    },
    {
        title: 'React技术揭秘之useEffect',
        desc: 'useEffect是我们平时工作中经常用到的，我们来细说下它的使用以及应该场景。useEffect是函数组件中替代过去类组件中的生命周期钩子的方案。',
        tags: [
            '前端',
            'Vue',
            '监听器'
        ]
    }
])

const chooseMenu = (i: number) => {
    menuIndex.value = i
}

</script>

<style lang="scss" scoped>
.page {
    height: calc(100vh - 5rem - 1.5rem);


}
</style>
