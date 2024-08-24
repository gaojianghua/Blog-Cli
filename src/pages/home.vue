<template>
    <div class="flex justify-center">
        <div class="home flex w-3/4 items-center justify-between">
            <div class="list flex h-full w-7/12 flex-wrap justify-between py-[4%] text-[1.2rem] text-[#dddddd]">
                <div
                    v-for="(item, i) in project"
                    :key="i"
                    class="item box box-cd flex h-[30%] w-[48.75%] cursor-pointer flex-col p-3"
                >
                    <div class="flex h-full w-full flex-col" @click="openURL(item.url)">
                        <div class="item-title flex items-center">
                            <img class="h-[2rem] w-[2rem]" :src="item.logo" alt="logo">
                            <div class="ml-5">{{ item.name }}</div>
                            <div class="ml-auto h-[2rem] w-[2rem]" @click.stop="openURL(item.github)">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    class="icon"
                                    data-v-8916576e=""
                                >
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="mt-3 text-[1rem] tracking-wider text-[#adadad]">
                            {{ item.desc }}
                        </div>
                        <div class="tags mt-auto flex items-center">
                            <div v-for="(tag, j) in item.tags" :key="j" class="box mr-3 py-0.5 px-3 text-[1rem]">
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-auto mb-[1rem] flex h-full w-4/12 flex-col items-center justify-center">
                <div
                    class="flex h-[15rem] w-[15rem] items-center justify-center overflow-hidden rounded-full border-[0.3rem] border-[#fff]"
                >
                    <img
                        class="h-[16rem] w-[16rem] max-w-none"
                        src="https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/wolffy.png"
                        alt="作者头像"
                    >
                </div>
                <div class="mt-7 text-[#dddddd]">
                    <h1 class="text-[3rem] tracking-wider">你好👋</h1>
                    <div class="mt-2 indent-[2em] text-[1.5rem] leading-[2.5rem] tracking-wider">
                        我是一名全栈开发者，历经 {{ year }} 年开发历程。
                    </div>
                    <div class="indent-[2em] text-[1.5rem] leading-[2.5rem] tracking-wider">
                        掌握 Vue系列 React系列 UniApp系列 Dart Flutter ArkTs Electron Gin GRPC Nest Mysql Redis Docker Nginx Shell
                        等等前后端及运维技术能力。
                    </div>
                    <div class="mt-5 text-right text-[1.5rem] tracking-wider">灰太狼 & 社区第一菜狗</div>
                </div>
                <div class="mt-7 flex w-full items-center justify-around">
                    <div class="flex flex-col items-center justify-center">
                        <img
                            class="h-[7rem] w-[7rem]"
                            src="https://official-document.oss-cn-hangzhou.aliyuncs.com/qrcode_for_gh_4c360c5cb61a_258.jpg"
                            alt="微信公众号"
                        >
                        <span class="main-color mt-2 text-[1.2rem]">公众号：程序员印记</span>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <img
                            class="h-[7rem] w-[7rem]"
                            src="https://official-document.oss-cn-hangzhou.aliyuncs.com/IMG_7086(20230730-131307).JPG"
                            alt="微信公众号"
                        >
                        <span class="main-color mt-2 text-[1.2rem]">技术交流群：指间运动</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const year = ref(new Date().getFullYear() - 2018);
const project = ref([
    {
        name: 'Official-Document',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/wolffyPink.png',
        desc: '一个导航站平台，可自定义印记卡片和导航链接。采用Next，AntD，MBox，Axios开发。使用Rsa，Aes进行加密处理。',
        github: 'https://github.com/gaojianghua/Official-Document',
        url: 'https://wolffy.gaojianghua.cn/home',
        tags: ['NextJs', 'TypeScript', 'Axios']
    },
    {
        name: 'Technical-Site',
        logo: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/logo.png',
        desc: '个人技术文档, 记录学习笔记。包含Vue，React，UniApp，Nest，Go，Mysql，Redis，Vite，Git，Linux，Shell，Docker等等前后端运维技术。',
        github: 'https://github.com/gaojianghua/Technical-Site',
        url: 'https://gaojianghua.cn/docs/',
        tags: ['VitePress']
    },
    {
        name: 'Blog-Cli',
        logo: 'https://blog-cli.oss-cn-hangzhou.aliyuncs.com/logo.png',
        desc: '个人博客客户端，采用Nuxt，Tailwind，Element-Plus，Axios技术开发。收录各类技术文章，生活小常识，休闲小游戏等等。',
        github: 'https://github.com/gaojianghua/Blog-Cli',
        url: 'https://github.com/gaojianghua/Blog-Cli',
        tags: ['Nuxt', 'Tailwind-Css', 'Element-Plus', 'Axios']
    },
    {
        name: 'Flutter-TMP',
        logo: 'https://flutter-tmp.oss-cn-hangzhou.aliyuncs.com/flutter-tmp.png',
        desc: 'Flutter骨架模板：配置了国际化，请求封装，常用组件封装，Getx状态及路由管理等等工具，帮助开发者快速进入业务开发。',
        github: 'https://github.com/gaojianghua/Flutter-TMP',
        url: 'https://github.com/gaojianghua/Flutter-TMP',
        tags: ['Dart', 'Flutter', 'Getx']
    },
    {
        name: 'UniApp-TMP',
        logo: 'https://gongyue-shop.oss-cn-hangzhou.aliyuncs.com/uniapp.png',
        desc: 'UniApp骨架模板：集成实际业务中所需的各种封装工具，封装常用组件。使开发者快速上手开发或项目二开。',
        github: 'https://github.com/gaojianghua/UniApp-TMP',
        url: 'https://github.com/gaojianghua/UniApp-TMP',
        tags: ['UniApp', 'Uview UI', 'Vuex']
    },
    {
        name: 'UniApp-X-TMP',
        logo: 'https://gongyue-shop.oss-cn-hangzhou.aliyuncs.com/uniappx.png',
        desc: 'UniApp-X骨架模板：集成实际业务中所需的各种封装工具，封装常用组件。使开发者快速上手开发或项目二开。',
        github: 'https://github.com/gaojianghua/UniApp-X-TMP',
        url: 'https://github.com/gaojianghua/UniApp-X-TMP',
        tags: ['UniApp-X', 'UTS']
    }
]);

// 打开链接
const openURL = (src: string) => {
    const obj = open('_blank');
        obj!.location.href = src;
};
</script>

<style lang="scss" scoped>
    .home {
        height: calc(100vh - 5rem - 0.5rem - 10rem);

        .list {
            .item:nth-child(1) {
                margin-top: 0;
            }

            .item:nth-child(2) {
                margin-top: 0;
            }
        }
    }
</style>
