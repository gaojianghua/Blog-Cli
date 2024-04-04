<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 12:28:21
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:32:18
 * @Description: file content
-->
<template>
    <div
        class="box menu flex h-full w-[16.3rem] flex-col items-center py-5 px-4"
        :class="!common.state.backMenuSwitch ? '' : 'unflod'"
    >
        <div class="flex w-full items-center justify-between">
            <div
                class="flex h-[5rem] w-[5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border-[0.2rem] border-[#fff]"
            >
                <img
                    class="h-[5.2rem] w-[5.2rem] max-w-none"
                    src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png"
                    alt="作者头像"
                >
            </div>
            <h1 class="main-color shrink-0">Mr. Gao</h1>
        </div>
        <div class="mt-8 flex w-full flex-col items-center">
            <NuxtLink
                v-for="(item, i) in backMenus"
                :key="i"
                class="menuItem box mb-4 flex items-center justify-center p-4 text-[1.2rem]"
                :class="route.path == item.path ? 'main-color' : ''"
                :to="item.path"
            >
                <div class="menuText flex cursor-pointer items-center">
                    <svg class="icon mr-3 h-[2rem] w-[2rem] shrink-0">
                        <use class="iconUse" :class="route.path == item.path ? 'main-color' : ''" :href="item.icon" />
                    </svg>
                    <span class="shrink-0">{{ item.name }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/data';

const route = useRoute();
const backMenus = ref(data.backMenus);
const common = useStore.useCommonStore();
</script>

<style lang="scss" scoped>
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
            .iconUse {
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
        -webkit-box-reflect: below 0.0625rem linear-gradient(transparent, #1ad1a533);
    }
</style>
