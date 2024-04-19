<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-18 14:43:09
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-19 10:14:50
 * @Description: file content
-->
<template>
    <div id="threeContainer" ref="threeContainer" class="h-full" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap'

const threeContainer: any = ref(null);
let scene : any
let camera : any
let renderer : any
let controls : any
let axesHelper : any
let cubeGeometry : any
let cubeMaterial : any
let cube : any
let clock : any
let animate1 : any

if (process.client) {
    // 创建场景
    scene = new THREE.Scene();
    // 创建相机
    camera = new THREE.PerspectiveCamera(75, window?.innerWidth / window?.innerHeight, 0.1, 1000);
    
    // 初始化渲染器
    renderer = new THREE.WebGLRenderer();
    // 创建轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
    // 创建坐标系
    axesHelper = new THREE.AxesHelper(5)
    // 创建几何体
    cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // 创建材质
    cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    // 根据几何体和材质创建物体
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // 创建时钟
    clock = new THREE.Clock();
    // 设置动画
    animate1 = gsap.to(cube.position, {
        x:5, 
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1, // 重复次数，-1无限循环
        yoyo: true, // 往返运动
        delay: 2, // 延迟多少秒开始
        onComplete: () => {
            console.log('动画结束')
        },
        onStart: () => {
            console.log('动画开始')
        }
    })
    gsap.to(cube.rotation, {
        x:2 * Math.PI, 
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1, // 重复次数，-1无限循环
        yoyo: true, // 往返运动
        onComplete: () => {
            console.log('动画结束')
        },
        onStart: () => {
            console.log('动画开始')
        }
    })

    window.addEventListener('dblclick', () => {
        if (animate1.isActive()) {
            animate1.pause()
        }else {
            animate1.resume()
        }
        
    })
}

// 修改物体位置
// cube.position.set(5, 0, 0)
// 缩放
// cube.scale.set(3, 2, 1)
// 旋转
// cube.rotation.set(Math.PI/4, 0, 0)




// 渲染函数
const render = () => {
    // 更新控制器
    controls.update()
    // 使用渲染器，通过相机将场景渲染起来
    renderer.render(scene, camera)
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
    // 将物体添加到场景中
    scene.add(cube);
    // 将WebGL渲染的canvas内容添加到DOM上
    threeContainer.value!.appendChild(renderer.domElement);
    // 添加阻尼效果
    controls.enableDamping = true
    // 设置渲染器大小
    renderer.setSize(threeContainer.value!.clientWidth, threeContainer.value!.clientHeight);
    // 调用渲染
    render()
    // 监听窗口变化，更新渲染画面
    window.addEventListener('resize', () => {
        // 更新摄像头
        camera.aspect = window.innerWidth / window.innerHeight
        // 更新摄像头投影矩阵
        camera.updateProjectionMatrix()
        // 更新渲染器
        renderer.setSize(window.innerWidth, window.innerHeight)
        // 设置渲染器的像素比
        renderer.setPixelRatio(window.devicePixelRatio)
    })
});

onBeforeUnmount(() => {});
</script>

<style scoped></style>
