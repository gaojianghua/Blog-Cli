<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box w-[14%] h-full mr-[0.5rem]">
            <div class="text-[1.5rem] cursor-pointer flex justify-around items-center h-[5rem] ml-[2rem] tracking-[2rem]"
                 :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                 v-for="(item, i) in menus" :key="i" @click="chooseMenu(item.type)">
                {{item.name}}
            </div>
        </div>
        <div class="box flex-1 h-full"></div>
        <div class="box w-[20%] h-full ml-[0.5rem]"></div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const menuIndex = ref(0)
const menus = ref([
    {
        name: '华容道',
        type: 0
    },
    {
        name: '贪吃蛇',
        type: 1
    },
    {
        name: '推箱子',
        type: 2
    },
    {
        name: '消消乐',
        type: 3
    },
    {
        name: '炸弹人',
        type: 4
    },
    {
        name: '打灰机',
        type: 5
    },
    {
        name: '格斗战',
        type: 6
    }
])

const chooseMenu = (i: number) => {
    menuIndex.value = i
}

</script>

<style lang="scss" scoped>
.page{
    height: calc(100vh - 5rem - 1.5rem);
}
</style>
