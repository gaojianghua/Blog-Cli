<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-04 18:00:23
 * @LastEditors: 高江华
 * @LastEditTime: 2024-08-24 10:27:11
 * @Description: file content
-->
<template>
    <div class="page p-2">
        <div class="page-title box flex justify-between px-[8.33rem]">
            <h1 class="title-text cursor-pointer text-[1.9rem] font-medium leading-[5rem]">
                <NuxtLink class="flex items-center" to="/">
                    <img src="~/assets/image/logo.png" class="w-[4.5rem]" alt="logo">
                    Mr. Gao
                </NuxtLink>
            </h1>
            <div class="flex text-[1.3rem] leading-[5rem] text-[#999]">
                <div
                    v-for="(item, i) in menus"
                    :key="i"
                    class="text-cd ml-12 cursor-pointer"
                    :class="route.path.includes(item.path) ? 'main-color' : ''"
                >
                    <NuxtLink class="py-6" :to="item.path">{{ item.name }}</NuxtLink>
                </div>
                <a class="my-auto ml-12 h-[3rem] w-[3rem]" href="https://github.com/gaojianghua" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        class="icon"
                    >
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                    </svg>
                </a>
                <div class="my-auto ml-8 h-[4.3rem] w-[4.3rem] cursor-pointer" @click="switchBack">
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M378.5 613.6l23.7-12.8 90.9 51V526.3l-18.2-9.1-90.9-52.8v103.7L364 579l-76.4-43.6-91 50.9v105.5l91 50.9 90.9-50.9zM656.9 579l-18.2-10.9V464.4l-109.2 61.9v125.5l91-51 23.6 12.8v78.2l91 50.9 91-50.9V586.3l-91-50.9z"
                            fill="#1E88E5"
                        />
                        <path
                            d="M656.9 251.6v83.6l96.4 52.8v94.6l9.1 5.5 63.7 36.3V344.3zM602.3 730l-91 49.1-90.9-49.1-14.6 9.1-60 32.8 165.5 90.9 165.6-90.9-60.1-32.8zM269.4 482.6V388l96.4-52.8v-83.6l-169.2 92.7v180.1l63.7-36.3z"
                            fill="#64B5F6"
                        />
                        <path
                            d="M402.2 433.5l109.1 61.8 18.2-10.9 91-50.9-91-51v-12.7l72.8-41.8V224.3l-91-52.8-90.9 52.8V328l72.7 41.8v12.7z"
                            fill="#1E88E5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import data from '@/data';

const route = useRoute();
const menus = ref(data.menus);

const switchBack = () => {
    navigateTo('/back/home');
};
</script>

<style lang="scss" scoped>
    .page {
        .page-title {
            height: 5rem;

            .title-text {
                background: linear-gradient(to right, #64b5f6, #1e88e5);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
        }
    }
</style>
