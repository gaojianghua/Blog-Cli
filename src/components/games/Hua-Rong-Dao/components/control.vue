<template>
    <div class="box ml-3 flex w-full p-3">
        <div class="box flex w-[16rem] flex-col items-center justify-center p-3 text-xl text-white">
            <div class="">步数：{{ games.step }}</div>
            <div class="mt-2">计时器：{{ games.formatTime }}</div>
        </div>
        <div class="box ml-3 flex flex-1 flex-col justify-around p-3 text-xl">
            <div class="flex w-full items-center">
                <span class="text-white">主图：</span>
                <!-- @click="changeGameImg(item.value)" -->
                <div
                    :class="games.isStart ? 'disable' : ''"
                    class="box relative flex w-[16rem] cursor-pointer items-center rounded-md p-2 text-xl font-normal text-white"
                    @click="openImg"
                >
                    <p>{{ formInline.imgList[formInline.imgCurrent].label }}</p>
                    <svg
                        t="1724739822676"
                        class="ml-auto transition-all"
                        :style="{transform: imgShow ? 'rotate(180deg)' : ''}"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5072"
                        width="16"
                        height="16" 
                    >
                        <path
                            d="M76 326L490.6 740.7c5.7 5.7 13.3 8.79999999 21.4 8.8s15.69999999-3.2 21.4-8.8L948 326c8.6-8.6 11.2-21.59999999 6.5-32.9-4.7-11.3-15.69999999-18.6-27.9-18.6l-829.3 0c-12.2 0-23.2 7.4-27.9 18.6-4.6 11.3-2.1 24.3 6.6 32.9z"
                            p-id="5073"
                            fill="#FFFFFF"
                        />
                    </svg>
                    <div
                        v-if="imgShow"
                        class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2"
                    >
                        <div
                            v-for="(item, i) in formInline.imgList"
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click="changeGameImg(item.value, item.label, i)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 flex w-full items-center">
                <span class="text-white">等级：</span>
                <div
                    :class="games.isStart ? 'disable' : ''"
                    class="box relative flex w-[16rem] cursor-pointer items-center rounded-md p-2 text-xl font-normal text-white"
                    @click="openLevel"
                >
                    <p>{{ formInline.levelList[formInline.levelCurrent].label }}</p>
                    <svg
                        t="1724739822676"
                        class="ml-auto transition-all"
                        :style="{transform: levelShow ? 'rotate(180deg)' : ''}"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5072"
                        width="16"
                        height="16" 
                    >
                        <path
                            d="M76 326L490.6 740.7c5.7 5.7 13.3 8.79999999 21.4 8.8s15.69999999-3.2 21.4-8.8L948 326c8.6-8.6 11.2-21.59999999 6.5-32.9-4.7-11.3-15.69999999-18.6-27.9-18.6l-829.3 0c-12.2 0-23.2 7.4-27.9 18.6-4.6 11.3-2.1 24.3 6.6 32.9z"
                            p-id="5073"
                            fill="#FFFFFF"
                        />
                    </svg>
                    <div
                        v-if="levelShow"
                        class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2"
                    >
                        <div
                            v-for="(item, i) in formInline.levelList"
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click="changeGameLevel(item.label, item.value, i)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </div>
            <button class="button main-bg-color ml-auto mt-3 rounded-md px-24 py-3 text-white" @click="changeGame">
                {{ games.isStart ? '结束游戏' : '开始游戏' }}
            </button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
const props = defineProps<{ games: any }>();

let imgShow = ref(false);
let levelShow = ref(false);

// 开始游戏、重来
const changeGame = () => {
    props.games.init({
        gameImg: formInline.value.imgList[formInline.value.imgCurrent].value,
        level: formInline.value.levelList[formInline.value.levelCurrent].value
    });
};
// 切换主图
const changeGameImg = (img: string, name: string, i: number) => {
    formInline.value.imgCurrent = i;
    props.games.setImg(img);
};
// 切换主图
const changeGameLevel = (level: string, value: number, i: number) => {
    formInline.value.levelCurrent = i;
    props.games.setLevel(value);
};

const openLevel = () => {
    if (props.games.isStart) return;
    if (imgShow.value) {
        imgShow.value = false;
    }
    levelShow.value = !levelShow.value;
};

const openImg = () => {
    if (props.games.isStart) return;
    if (levelShow.value) {
        levelShow.value = false;
    }
    imgShow.value = !imgShow.value;
};

const data = reactive({
    formInline: {
        imgCurrent: 0,
        imgList: [
            { label: '灰太狼', value: 'htl' },
            { label: '电音小姐姐', value: 'dy' },
            { label: 'AI小姐姐', value: 'ai' }
        ],
        levelCurrent: 0,
        levelList: [
            { label: '初级', value: 3 },
            { label: '中级', value: 4 },
            { label: '高级', value: 5 }
        ]
    }
});
const { formInline } = toRefs(data);
</script>
<style lang="scss" scoped>
    .disable {
        background-color: #ababab;
        color: #999;
        
    }
</style>
