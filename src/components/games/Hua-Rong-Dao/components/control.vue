
<template>
    <div class="box ml-3 flex w-full p-3">
        <div class="box flex w-[16rem] flex-col items-center justify-center p-3 text-xl text-white">
            <div class="">步数：{{ games.step }}</div>
            <div class="mt-2">计时器：{{ games.step }}</div>
        </div>
        <div class="box ml-3 flex flex-1 flex-col justify-around p-3 text-xl">
            <div class="flex w-full items-center">
                <span class="text-white">主图：</span>
                <!-- @click="changeGameImg(item.value)" -->
                <div class="box relative w-[16rem] cursor-pointer rounded-md p-2 text-xl font-normal text-white" @click="openImg">
                    <p>{{ formData.gameImgName }}</p>
                    <div v-if="imgShow" class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2">
                        <div
                            v-for="item in formInline.imgList" 
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click="changeGameImg(item.value, item.label)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 flex w-full items-center">
                <span class="text-white">等级：</span>
                <div class="box relative w-[16rem] cursor-pointer rounded-md p-2 text-xl font-normal text-white" @click="openLevel">
                    <p>{{ formData.levelName }}</p>
                    <div v-if="levelShow" class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2">
                        <div
                            v-for="item in formInline.levelList" 
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click="changeGameLevel(item.label, item.value)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </div>
            <button class="button main-bg-color ml-auto mt-3 rounded-md px-24 py-3 text-white" @click="changeGame">{{ games.isStart ? '结束游戏' : '开始游戏' }}</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
const props = defineProps<{ games: any }>();

let imgShow = ref(false)
let levelShow = ref(false)

// 开始游戏、重来
const changeGame = () => {
    props.games.init(formData.value);
};
// 切换主图
const changeGameImg = (img: string, name: string) => {
    formData.value.gameImgName = name
    props.games.setImg(img);
};
// 切换主图
const changeGameLevel = (level: string, value: number) => {
    formData.value.levelName = level
    props.games.setLevel(value);
};

const openLevel = () => {
    if (imgShow.value) {
        imgShow.value = false
    }
    levelShow.value = !levelShow.value
}

const openImg = () => {
    if (levelShow.value) {
        levelShow.value = false
    }
    imgShow.value = !imgShow.value
}

const data = reactive({
    formData: {
        gameImg: 'zdg',
        level: 3,
        gameImgName: '沐华',
        levelName: '初级',
    },
    formInline: {
        imgList: [
            { label: '沐华', value: 'mh' },
            { label: '尘世行', value: 'zdg' },
            { label: '大妹子', value: 'woman' },
            { label: '大兄弟', value: 'man' },
            { label: '斗破苍穹', value: 'dp' }
        ],
        levelList: [
            { label: '初级', value: 3 },
            { label: '中级', value: 4 },
            { label: '高级', value: 5 }
        ]
    }
});
const { formData, formInline } = toRefs(data);
</script>
<style lang="scss" scoped>
</style>
