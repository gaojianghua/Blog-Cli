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
    <div class='page text-white'>
        <var-button type="primary" @click="handleClick">切换</var-button>
        <var-button type="primary" @click="langClick">{{ lang == 'zh-CN' ? 'zh-CN' : 'en-US' }}</var-button>
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
.page{
    
}
</style>