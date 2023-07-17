<template>
    <div class="flex justify-center">
        <div class="home w-3/4 flex items-center justify-between">
            <div class="list py-[4%] h-full text-[1.2rem] w-7/12 text-[#dddddd] flex flex-wrap justify-between">
                <div class="item p-5 cursor-pointer h-[28%] flex flex-col w-[48%]" v-for="(item, i) in project" :key="i">
                    <div class="h-full w-full" @click="openURL(item.url)">
                        <div class="item-title flex items-center ">
                            <img class="w-[2rem] h-[2rem] rounded-full" :src="item.logo" alt="logo">
                            <div class="ml-5">{{ item.name }}</div>
                            <div class="ml-auto w-[2rem] h-[2rem]" @click.stop="openURL(item.github)">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
                                     viewBox="0 0 24 24" class="icon" data-v-8916576e="">
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="mt-3 text-[1rem] text-[#adadad]">
                            {{ item.desc }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center h-full w-4/12 ml-auto">
                <div class="w-[15rem] h-[15rem] rounded-full overflow-hidden border border-[#fff]">
                    <img src="https://blog-cli.oss-cn-hangzhou.aliyuncs.com/gaojianghua.jpg" alt="作者">
                </div>
                <div class="text-[1.2rem] text-[#dddddd] mt-10">
                    <div>历经 {{ year }} 年开发历程，掌握 Vue系列 React系列 UniApp系列 Electron Gin GRPC Nest
                        等等技术能力。
                    </div>
                    <div class="mt-3">历经 {{ year }} 年开发历程，掌握 Vue系列 React系列 UniApp系列 Electron Gin GRPC
                        Nest 等等技术能力。
                    </div>
                    <div class="mt-3">历经 {{ year }} 年开发历程，掌握 Vue系列 React系列 UniApp系列 Electron Gin GRPC
                        Nest 等等技术能力。
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup lang="ts">
import {ref} from 'vue'

let year = ref(new Date().getFullYear() - 2018)
let project = ref([
    {
        name: 'Official-Document',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/wolffyPink.png',
        desc: '一个导航站平台，可自定义印记卡片和导航链接。',
        github: 'https://github.com/gaojianghua/Official-Document',
        url: 'https://wolffy.gaojianghua.cn/home'
    },
    {
        name: 'UniApp-TMP',
        logo: 'https://gongyue-shop.oss-cn-hangzhou.aliyuncs.com/GongYueLogo.png',
        desc: 'UniApp骨架模板，集成实际业务中所需的各种封装工具。使开发者快速上手开发或项目二开。',
        github: 'https://github.com/gaojianghua/UniApp-TMP',
        url: 'https://github.com/gaojianghua/UniApp-TMP'
    },
    {
        name: 'Technical-Site',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png',
        desc: '个人技术文档, 积累记录学习笔记。',
        github: 'https://github.com/gaojianghua/Technical-Site',
        url: 'https://gaojianghua.cn/docs/'
    },
    {
        name: 'Vue-B-TMP',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/weChatLogo.png',
        desc: 'Vue3版本-后台管理系统模板',
        github: 'https://github.com/gaojianghua/Vue-B-TMP',
        url: 'https://github.com/gaojianghua/Vue-B-TMP'
    },
    {
        name: 'Vue-C-TMP',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/weChatLogo.png',
        desc: 'Vue3版本-C端响应式模板',
        github: 'https://github.com/gaojianghua/Vue-C-TMP',
        url: 'https://github.com/gaojianghua/Vue-C-TMP'
    },
    {
        name: 'Electron-Vue-TMP',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/weChatLogo.png',
        desc: '基于Vue3与Electron的桌面端应用模板',
        github: 'https://github.com/gaojianghua/Electron-Vue-TMP',
        url: 'https://github.com/gaojianghua/Electron-Vue-TMP'
    }
])

// 打开链接
const openURL = (src: string) => {
    let obj = open('_blank')
    obj!.location.href = src
}
</script>

<style lang="scss" scoped>
.home {
    height: calc(100vh - 5rem - 0.5rem - 10rem);

    .list {
        .item {
            border: 1px solid rgba(26, 209, 165, .1);
            backdrop-filter: contrast(100%);
            -webkit-backdrop-filter: contrast(100%);
            background-color: rgba(255, 255, 255, .1);
            border-radius: .5rem;
        }

        .item:nth-child(1) {
            margin-top: 0;
        }

        .item:nth-child(2) {
            margin-top: 0;
        }
    }
}
</style>
