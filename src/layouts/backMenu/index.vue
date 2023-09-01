<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 12:28:21
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:32:18
 * @Description: file content
-->
<template>
    <div class='menu box flex flex-col items-center w-[16.3rem] h-full py-5 px-4'
        :class="!common.state.backMenuSwitch ? '' : 'unflod'">
        <div class="flex w-full justify-between items-center">
            <div
                class="w-[5rem] shrink-0 h-[5rem] flex items-center justify-center rounded-full overflow-hidden border-[0.2rem] border-[#fff]">
                <img class="w-[5.2rem] h-[5.2rem] max-w-none"
                    src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png" alt="作者头像">
            </div>
            <h1 class="main-color shrink-0">
                Mr. Gao
            </h1>
        </div>
        <div class="mt-8 w-full flex items-center flex-col">
            <NuxtLink class="menuItem flex box text-[1.2rem] p-4 items-center justify-center mb-4"
                :class="route.path == item.path ? 'main-color' : ''" :to="item.path" v-for="(item, i) in backMenus"
                :key="i">
                <div class="menuText flex items-center cursor-pointer">
                    <svg class="icon shrink-0 w-[2rem] h-[2rem] mr-3">
                        <use class="iconUse" :class="route.path == item.path ? 'main-color' : ''" :href="item.icon"></use>
                    </svg>
                    <span class="shrink-0">{{ item.name }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '@/data'

const route = useRoute()
const backMenus = ref(data.backMenus)
const common = useStore.useCommonStore()

</script>

<style lang='scss' scoped>
.menu {
    transition: all 0.2s linear;
    overflow: hidden; // 超出隐藏

    .menuItem {
        width: 14rem;
        transition: all 0.2s linear;
        overflow: hidden; // 超出隐藏

        .menuText {
            overflow: hidden;
            transition: all 0.2s linear;
        }
    }

    .icon {
        display: block;
        object-fit: cover;
        transition: all 0.2s linear;
        .iconUse{
            transition: all 0.2s linear;
        }
    }
}

.unflod {
    width: 7rem;
    transition: all 0.2s linear;

    .menuItem {
        width: 4.1rem;
        transition: all 0.2s linear;
    }
}

h1 {
    text-decoration: none;
    font-size: 2.5rem;
    letter-spacing: 1;
    line-height: 1;
    margin-left: 1rem !important;
    overflow: hidden;
    -webkit-box-reflect: below .0625rem linear-gradient(transparent, #1AD1A533);
}
</style>