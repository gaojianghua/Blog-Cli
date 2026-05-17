<template>
    <div class="box ml-3 flex w-full p-3">
        <div class="box flex w-[16rem] flex-col items-center justify-center p-3 text-xl text-white">
            <div class="">得分：{{ games.score }}</div>
            <div class="mt-2">计时器：{{ games.formatTime }}</div>
        </div>
        <div class="box ml-3 flex flex-1 flex-col justify-around p-3 text-xl">
            <div class="flex w-full items-center">
                <span class="text-white">网格：</span>
                <div
                    :class="games.isStart ? 'disable' : ''"
                    class="box relative flex w-[16rem] cursor-pointer items-center rounded-md p-2 text-xl font-normal text-white"
                    @click="openGrid"
                >
                    <p>{{ formInline.gridList[formInline.gridCurrent].label }}</p>
                    <svg
                        t="1724739822676"
                        class="ml-auto transition-all"
                        :style="{transform: gridShow ? 'rotate(180deg)' : ''}"
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
                        v-if="gridShow"
                        class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2"
                    >
                        <div
                            v-for="(item, i) in formInline.gridList"
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click.stop="changeGrid(item.label, item.value, i)"
                        >
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-2 flex w-full items-center">
                <span class="text-white">速度：</span>
                <div
                    :class="games.isStart ? 'disable' : ''"
                    class="box relative flex w-[16rem] cursor-pointer items-center rounded-md p-2 text-xl font-normal text-white"
                    @click="openSpeed"
                >
                    <p>{{ formInline.speedList[formInline.speedCurrent].label }}</p>
                    <svg
                        t="1724739822676"
                        class="ml-auto transition-all"
                        :style="{transform: speedShow ? 'rotate(180deg)' : ''}"
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
                        v-if="speedShow"
                        class="absolute left-0 top-[3.1rem] z-10 w-[15.8rem] rounded-md bg-zinc-800 p-2"
                    >
                        <div
                            v-for="(item, i) in formInline.speedList"
                            :key="item.value"
                            class="rounded-md p-2 text-white hover:bg-slate-100 hover:text-black"
                            @click.stop="changeSpeed(item.label, item.value, i)"
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
import { reactive, ref, toRefs } from 'vue'
const props = defineProps<{ games: any }>()

let gridShow = ref(false)
let speedShow = ref(false)

const changeGame = () => {
    if (props.games.isStart) {
        props.games.end()
    } else {
        props.games.start()
    }
}

const changeGrid = (label: string, value: number, i: number) => {
    if (props.games.isStart) return
    formInline.value.gridCurrent = i
    props.games.setGridSize(value)
    gridShow.value = false
}

const changeSpeed = (label: string, value: number, i: number) => {
    if (props.games.isStart) return
    formInline.value.speedCurrent = i
    props.games.setSpeed(value)
    speedShow.value = false
}

const openGrid = () => {
    if (props.games.isStart) return
    if (speedShow.value) {
        speedShow.value = false
    }
    gridShow.value = !gridShow.value
}

const openSpeed = () => {
    if (props.games.isStart) return
    if (gridShow.value) {
        gridShow.value = false
    }
    speedShow.value = !speedShow.value
}

const data = reactive({
    formInline: {
        gridCurrent: 2,
        gridList: [
            { label: '小 (15x15)', value: 15 },
            { label: '中 (20x20)', value: 20 },
            { label: '大 (25x25)', value: 25 }
        ],
        speedCurrent: 2,
        speedList: [
            { label: '慢速 (250ms)', value: 250 },
            { label: '中速 (200ms)', value: 200 },
            { label: '快速 (150ms)', value: 150 },
            { label: '极速 (100ms)', value: 100 }
        ]
    }
})
const { formInline } = toRefs(data)
</script>
<style lang="scss" scoped>
    .disable {
        background-color: #ababab;
        color: #999;
    }
</style>