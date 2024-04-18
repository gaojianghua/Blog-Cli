<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-18 14:43:09
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-18 17:15:35
 * @Description: file content
-->
<template>
    <div id="threeContainer" ref="threeContainer" class="h-full" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import data from '@/data';

const threeContainer = ref(null);

// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 创建轨道控制器
const controls = new THREE.OrbitControls(camera, renderer.domElement)
// 创建坐标系
const axesHelper = new THREE.AxesHelper(5)
// 渲染函数
const render = () => {
    // 使用渲染器，通过相机将场景渲染起来
    renderer.render(scene, camera)
    controls.update();
    // 帧动画
    requestAnimationFrame(render)
}



onMounted(() => {
    // 添加相机到场景中
    scene.add(camera);
    // 添加坐标系到场景中
    scene.add(axesHelper);
    // 设置相机位置
    camera.position.set(0, 0, 10);
    
    // *** start 添加物体 ***
    // 创建几何体
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // 创建材质
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    // 根据几何体和材质创建物体
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // 将物体添加到场景中
    scene.add(cube);
    // *** end ***

    // 将WebGL渲染的canvas内容添加到DOM上
    threeContainer.value!.appendChild(renderer.domElement);

    // 设置渲染器大小
    renderer.setSize(threeContainer.value!.clientWidth, threeContainer.value!.clientHeight);

    // 调用渲染
    render()
});



onBeforeUnmount(() => {});
</script>

<style scoped></style>
