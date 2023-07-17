<template>
    <div class="main">
        <AppHeader name="header" />
        <slot />
        <AppFooter v-if="isHome" name="footer" />
    </div>
</template>

<script setup lang='ts'>
import AppHeader from './header/index.vue'
import AppFooter from './footer/index.vue'
import { ref } from "vue";
import { useRoute } from "vue-router";

let isHome = ref(false)
const route = useRoute()

watch(()=> route.path, (newX) => {
    if (newX == '/') {
        isHome.value = true
    }else {
        isHome.value = false
    }
}, { immediate: true })
</script>