<template>
    <div class="page mx-auto flex w-[100rem]">
        <div class="box h-full flex-1 p-[0.5rem]">
            <div id="cesiumContainer" ref="cesiumContainer" class="h-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data';
const cesiumContainer = ref<HTMLDivElement>()
if (process.client) {
    window.CESIUM_BASE_URL = 'https://unpkg.com/cesium@1.116/Build/Cesium/';
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
    .page {
        height: calc(100vh - 5rem - 1.5rem);
    }
</style>
