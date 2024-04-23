<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2024-04-18 14:43:09
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-23 16:44:23
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
import {GUI} from 'dat.gui'

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
let gui : any

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
    if (process.client) {
        // 创建场景
        scene = new THREE.Scene();
        // 创建相机
        camera = new THREE.PerspectiveCamera(75, threeContainer.value!.clientWidth / threeContainer.value!.clientHeight, 0.1, 1000);
        // 初始化渲染器
        renderer = new THREE.WebGLRenderer();
        // 创建轨道控制器
        controls = new OrbitControls(camera, renderer.domElement)
        // 创建坐标系
        axesHelper = new THREE.AxesHelper(5)
        // 创建几何体
        for (let i = 0; i < 50; i++) {
            cubeGeometry = new THREE.BufferGeometry();
            const vertices = new Float32Array(9)
            for (let j = 0; j < 9; j++) {
                vertices[j] = Math.random() * 10 - 5;
            }
            cubeGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
            // 创建材质
            let color = new THREE.Color(Math.random(), Math.random(), Math.random())
            cubeMaterial = new THREE.MeshBasicMaterial({
                color: color
            });
            // 根据几何体和材质创建物体
            cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            // 将物体添加到场景中
            scene.add(cube);
        }
        
        
        
        // 创建时钟
        clock = new THREE.Clock();
        // 设置动画
        // animate1 = gsap.to(cube.position, {
        //     x:5, 
        //     duration: 5,
        //     ease: 'power1.inOut',
        //     repeat: -1, // 重复次数，-1无限循环
        //     yoyo: true, // 往返运动
        //     delay: 2, // 延迟多少秒开始
        //     onComplete: () => {
        //         console.log('动画结束')
        //     },
        //     onStart: () => {
        //         console.log('动画开始')
        //     }
        // })
        // gsap.to(cube.rotation, {
        //     x:2 * Math.PI, 
        //     duration: 5,
        //     ease: 'power1.inOut',
        //     repeat: -1, // 重复次数，-1无限循环
        //     yoyo: true, // 往返运动
        //     onComplete: () => {
        //         console.log('动画结束')
        //     },
        //     onStart: () => {
        //         console.log('动画开始')
        //     }
        // })

        // window.addEventListener('dblclick', () => {
        //     if (animate1.isActive()) {
        //         animate1.pause()
        //     }else {
        //         animate1.resume()
        //     }
        // })
        // 监听窗口变化，更新渲染画面
        window.addEventListener('resize', () => {
            // 更新摄像头
            camera.aspect = threeContainer.value!.clientWidth / threeContainer.value!.clientHeight
            // 更新摄像头投影矩阵
            camera.updateProjectionMatrix()
            // 更新渲染器
            renderer.setSize(threeContainer.value!.clientWidth, threeContainer.value!.clientHeight)
            // 设置渲染器的像素比
            renderer.setPixelRatio(window.devicePixelRatio)
        })
        // 监听双击事件
        window.addEventListener('dblclick', () => {
            const fullScreenElement = document.fullscreenElement
            if (fullScreenElement) {
                document.exitFullscreen()
            }else {
                renderer.domElement.requestFullscreen()
            }
        })
        // 引入GUI
        import('dat.gui').then((dat) => {
            // 在客户端环境下引入dat.gui并进行相关操作
            gui = new dat.GUI()
            // 添加X轴的操作
            gui.add(cube.position, "x").min(0).max(5).step(0.01).name("移动X抽坐标").onChange((value:any)=>{
                console.log(value)
            }).onFinishChange((value:any)=>{
                console.log(value)
            })
            // 修改物体颜色
            const parmas = {
                color: '#ffff00',
                fn: ()=> {
                    // 让物体动起来
                    gsap.to(cube.position, {x:5, duration: 2, yoyo: true, repeat: -1})
                }
            }
            gui.addColor(parmas, 'color').onChange((value:any)=> {
                console.log(value)
                cube.material.color.set(value)
            })
            // 控制物体是否显示
            gui.add(cube, 'visible').name('是否显示')
            // 设置物体
            let folder = gui.addFolder('设置物体')
            folder.add(cube.material, 'wireframe') // 设置线框
            folder.add(parmas, 'fn').name('物体运动') // 设置物体运动
        });
    }
    // 添加相机到场景中
    scene.add(camera);
    // 添加坐标系到场景中
    scene.add(axesHelper);
    // 设置相机位置
    camera.position.set(0, 0, 10);
    // 将WebGL渲染的canvas内容添加到DOM上
    threeContainer.value!.appendChild(renderer.domElement);
    // 添加阻尼效果
    controls.enableDamping = true
    // 设置渲染器大小
    renderer.setSize(threeContainer.value!.clientWidth, threeContainer.value!.clientHeight);
    // 调用渲染
    render()
});

onBeforeUnmount(() => {});
</script>

<style scoped></style>
