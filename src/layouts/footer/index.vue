<!--
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:23:53
 * @LastEditors  : 15257184434 g598670138@163.com
 * @LastEditTime : 2023-01-15 09:25:55
 * @FilePath     : \varlet-nuxt3-example\src\layouts\footer\index.vue
 * @Description  :
 *
 * Copyright (c 2023 by 15257184434 g598670138@163.com, All Rights Reserved.
-->
<template>
    <div class="page fixed bottom-0 left-0 flex flex-col items-center py-2">
        <div class="urls flex">
            <a class="btnn box box-cd cursor-pointer" target="_blank" href="https://wolffy.gaojianghua.cn">Wolffy印记</a>
            <div class="px-2" />
            <a class="btnn box box-cd cursor-pointer" target="_blank" href="https://docs.gaojianghua.cn">作者文档</a>
            <div class="px-2" />
            <a class="btnn box box-cd cursor-pointer" target="_blank" href="https://gaojianghua.cn">服务官网</a>
        </div>
        <div class="text mt-3 cursor-pointer">邮箱：g598670138@163.com 个人微信号：woshigaojianghua</div>
        <a target="_blank" rel="noreferrer" href="https://beian.miit.gov.cn" class="text mt-3 cursor-pointer">Copyright © 2022-{{ copyright }} JiangHua Gao 版权所有 浙ICP备2022001576号</a>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const copyright = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
    .page {
        width: 100%;
        height: 10rem;

        .urls {
            padding-bottom: 0.9rem;

            .btnn {
                padding: 0.33rem 1.2rem;
            }

            .btnn:hover {
                background-color: rgba(255, 255, 255);
                color: var(--main-color) !important;
            }
        }

        .text {
            color: #969faf;
            font-size: 14px;
        }

        .text:hover {
            color: var(--main-color);
        }
    }
</style>
