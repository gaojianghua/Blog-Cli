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

onMounted(() => {
    Cesium.Ion.defaultAccessToken = data.defaultAccessToken;

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayer: Cesium.ImageryLayer.fromWorldImagery({
            
        }),
        baseLayerPicker: false,
    });

    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
            heading: Cesium.CesiumMath.toRadians(0.0),
            pitch: Cesium.CesiumMath.toRadians(-15.0),
        }
    });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = Cesium.createOsmBuildingsAsync();
    viewer.scene.primitives.add(buildingTileset);
})
</script>

<style scoped>
    .page {
        height: calc(100vh - 5rem - 1.5rem);
    }
</style>
