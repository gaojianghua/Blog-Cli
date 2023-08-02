<template>
    <div class="page flex w-[100rem] mx-auto">
        <div class="box w-[14%] h-full mr-[0.5rem]">
            <div class="text-[1.5rem] text-cd cursor-pointer flex justify-around items-center h-[5rem] ml-[2rem] tracking-[2rem]"
                 :class="menuIndex == item.type ? 'main-color' : 'text-white'"
                 v-for="(item, i) in gameMenus" :key="i" @click="chooseMenu(item.type)">
                {{item.name}}
            </div>
        </div>
        <div class="box flex-1 h-full"></div>
        <div class="box w-[20%] h-full ml-[0.5rem]"></div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import data from '@/data'

const menuIndex = ref(0)
const gameMenus = ref(data.gameMenus)

const chooseMenu = (i: number) => {
    menuIndex.value = i
}

</script>

<style lang="scss" scoped>
.page{
    height: calc(100vh - 5rem - 1.5rem);
}
</style>
