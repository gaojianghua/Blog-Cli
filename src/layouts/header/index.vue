<!--
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:24:01
 * @LastEditors  : 15257184434 g598670138@163.com
 * @LastEditTime : 2023-01-15 09:27:27
 * @FilePath     : \varlet-nuxt3-example\src\layouts\header\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class='page'>
        <div class="container h-100 d-flex a-center">
            <a class="logo" href="/">
                <img class="logo-img" src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/logo.png" alt="天论">
                <img class="mobile" src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/logoImg.png" alt="天论">
            </a>
            <nav class="h-100 d-flex a-center">
                <var-button type="primary" @click="handleClick">切换</var-button>
                <var-button type="primary" @click="langClick">{{ lang == 'zh-CN' ? 'zh-CN' : 'en-US' }}</var-button>
            </nav>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { StyleProvider, Themes, Locale } from '@varlet/ui'

let themes: any = null
const handleClick = () => {
    themes = themes ? null : Themes.dark
    StyleProvider(themes)
}
let lang = useState<string | null>('lang', () => '')
if (process.client) {
    lang.value = localStorage.getItem('lang')
}

const langClick = () => {
    if (lang.value && lang.value == 'en-US') {
        Locale.use('zh-CN')
        localStorage.setItem('lang', 'zh-CN')
        lang.value = 'zh-CN'
    } else {
        Locale.use('en-US')
        lang.value = 'en-US'
        localStorage.setItem('lang', 'en-US')
    }
}
</script>

<style lang='scss' scoped>
.page {
    height: 5rem;
    position: relative;
    border-bottom: 1px solid #f1f1f1;

    .container {
        max-width: 1440px;
        position: relative;
        margin: auto;
        width: 100%;

        .logo {
            .logo-img {
                display: block;
                height: 37px;
            }

            .mobile {
                display: none;
            }
        }
    }

}

@media (max-width: 1149px) {
    .page {
        .container {
            width: 97%;
            margin: 0 2rem !important;
        }
    }
}

@media (max-width: 640px) {
    .page {
        height: 4.333rem;

        .container {
            margin: 0 0.917rem 0 1.333rem !important;
            width: 97%;

            .logo {
                .logo-img {
                    display: none;
                    height: 22px;
                }

                .mobile {
                    display: block;
                    height: 37px;
                }
            }
        }
    }
}
</style>