/*
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:13:13
 * @LastEditors: 高江华
 * @LastEditTime: 2024-04-18 17:05:23
 * @FilePath     : \varlet-nuxt3-example\nuxt.config.ts
 * @Description  :
 *
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved.
 */
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    srcDir: 'src/',
    build: {
        transpile: ['dayjs']
    },
    components: [
        {
            path: '@/components/public',
            extensions: ['.vue']
        }
    ],
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
        }
    },
    modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
    css: ['~/assets/styles/init.css'],
    app: {
        head: {
            charset: 'utf-8',
            title: 'Gao Blog',
            meta: [
                { name: 'description', content: '高江华的博客' },
                { name: 'author', content: '高江华, g598670138@163.com' },
                {
                    name: 'keywords',
                    content:
                        '高江华, 博客, vue, react, nuxt, next, nest, uniapp, 小程序, app, html, js, css, scss, less'
                },
                { name: 'robots', content: 'index,follow' },
                { name: 'viewport', content: 'initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no' },
                { name: 'apple-mobile-web-app-title', content: '高江华的博客' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                { name: 'renderer', content: 'webkit' },
                { name: 'HandheldFriendly', content: 'true' },
                { name: 'generator', content: 'VsCode Nuxt3' },
                { name: 'copyright', content: '高江华' },
                { name: 'revisit-after', content: '7 days' },
                { name: 'cache-control', content: 'no-cache' },
                { name: 'x-dns-prefetch-control', content: 'on' },
                { name: 'og:type', content: 'website' },
                { name: 'og:url', content: 'https://docs.gaojianghua.cn' },
                { name: 'og:title', content: 'Wolffy-Document' },
                {
                    name: 'og:image',
                    content: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/%E7%81%B0%E5%A4%AA%E7%8B%BC.png'
                },
                {
                    name: 'og:description',
                    content:
                        '技术博客--前端后端运维知识点收录: Vue, React, Taro, ReactNative, Webpack, Vite, UniApp, 小程序, H5, Docker, Git, GoLang, Node, Nest, Mysql, Redis, 数据结构, 算法'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: 'https://blog-cli.oss-cn-hangzhou.aliyuncs.com/logo.ico' },
                { rel: 'dns-prefetch', href: 'https://blog-cli.oss-cn-hangzhou.aliyuncs.com' },
                { rel: 'dns-prefetch', href: 'https://docs.gaojianghua.cn' },
                { rel: 'stylesheet', href: 'https://unpkg.com/cesium@1.116/Build/Cesium/Widgets/widgets.css' }
            ],
            script: [
                {
                    src: 'https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_28150_11.961f67029185d625b7656c914468febb.js'
                },
                { src: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js', defer: true },
                { src: 'https://cdn.jsdelivr.net/npm/three/build/three.min.js', defer: true },
                { src: 'https://cdn.jsdelivr.net/npm/three/examples/js/controls/OrbitControls.js', defer: true }
            ]
        }
    }
});
