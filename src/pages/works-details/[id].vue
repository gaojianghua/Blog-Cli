<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-08 10:30:40
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-23 15:29:57
 * @Description: file content
-->
<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box h-full flex-1 p-[0.5rem]">
            <template v-if="routeParams.id == '0'">
                <cesium-one />
            </template>
            <template v-if="routeParams.id == '1'">
                <three-one />
            </template>
            <template v-if="routeParams.id == '2'">
                <three-two />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import CesiumOne from '@/components/works/cesium-one.vue'
import ThreeOne from '@/components/works/three-one.vue'
import ThreeTwo from '@/components/works/three-two.vue'
const route = useRoute();
const routeParams = route.params;
console.log(routeParams);


</script>

<style scoped>
    .page {
        height: calc(100vh - 5rem - 1.5rem);
    }
</style>
