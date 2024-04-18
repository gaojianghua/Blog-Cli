<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-18 14:43:09
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-18 14:45:42
 * @Description: file content
-->
<template>
    <div id="cesiumContainer" ref="cesiumContainer" class="h-full" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import data from '@/data';
const cesiumContainer = ref<HTMLDivElement>()
if (process.client) {
    window.CESIUM_BASE_URL = 'https://unpkg.com/cesium/Build/Cesium/';
}

let viewer: any

onMounted(() => {
    Cesium.Ion.defaultAccessToken = data.defaultAccessToken;

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayer: Cesium.ImageryLayer.fromWorldImagery({
            
        }),
        baseLayerPicker: true,
    });

    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(114.31158155473, 30.598466736401, 8000)
    });
})
onBeforeUnmount(() => {
    if (viewer) {
        viewer.destroy();
        viewer = null; // 确保引用被清除
    }
});
</script>

<style scoped>
</style>
