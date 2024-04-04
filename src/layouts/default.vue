<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-07-29 16:48:52
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:27:53
 * @Description: file content
-->
<template>
    <div class="main" :class="switchBack ? 'flex p-4' : ''">
        <template v-if="switchBack">
            <BackMenu />
            <div class="flex flex-1 flex-col">
                <BackNavbar />
                <div class="box ml-4 mt-4 h-full p-4">
                    <slot />
                </div>
            </div>
        </template>
        <template v-else>
            <AppHeader name="header" />
            <slot />
            <AppFooter v-if="isHome" name="footer" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from './header/index.vue';
import AppFooter from './footer/index.vue';
import BackMenu from './backMenu/index.vue';
import BackNavbar from './backNavbar/index.vue';

const isHome = ref(false);
const switchBack = ref(false);
const route = useRoute();

watch(
    () => route.path,
    newX => {
        if (newX == '/') {
            isHome.value = true;
        } else {
            isHome.value = false;
        }
        if (!newX.includes('back')) {
            switchBack.value = false;
        } else {
            switchBack.value = true;
        }
    },
    { immediate: true }
);
</script>
