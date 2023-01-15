<template>
    <div>
        <AppHeader name="header" />
        <slot />
        <AppFooter name="footer" />
    </div>
</template>

<script setup lang='ts'>
import AppHeader from './header/index.vue'
import AppFooter from './footer/index.vue'
</script>