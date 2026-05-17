<!-- eslint-disable tailwindcss/migration-from-tailwind-2 -->
<template>
    <div class="container flex h-full flex-col">
        <div class="other mb-3 flex w-full">
            <Control :games="games" />
        </div>
        <div class="box m-auto flex items-center justify-center overflow-hidden border-[2rem]" :style="{ width: games.gridSize * 25 + 'px', height: games.gridSize * 25 + 'px' }">
            <div v-show="!isStart && !isOver" class="flex flex-col items-center justify-center text-white">
                <p class="text-3xl">贪吃蛇</p>
                <p class="text-xl">Gluttonous Snake</p>
            </div>
            <div v-show="isStart || isOver" class="relative w-full h-full bg-zinc-800">
                <div
                    v-for="(segment, index) in games.snake"
                    :key="'snake-' + index"
                    class="absolute snake-segment"
                    :style="{
                        left: segment.x * 25 + 'px',
                        top: segment.y * 25 + 'px',
                        width: '25px',
                        height: '25px',
                        backgroundColor: index === 0 ? '#22c55e' : '#4ade80',
                        borderRadius: index === 0 ? '4px 4px 2px 2px' : '2px'
                    }"
                />
                <div
                    class="absolute food"
                    :style="{
                        left: games.food.x * 25 + 'px',
                        top: games.food.y * 25 + 'px',
                        width: '25px',
                        height: '25px',
                        backgroundColor: '#ef4444',
                        borderRadius: '50%'
                    }"
                />
            </div>
        </div>
        <div v-if="isOver" class="fixed inset-0 z-20 flex items-center justify-center bg-zinc-900 bg-opacity-50">
            <div class="flex flex-col items-center justify-center rounded-xl bg-zinc-50 py-8">
                <h3 class="text-2xl font-bold">温馨提示</h3>
                <div class="mt-5 px-20 text-xl">恭喜你，游戏结束。</div>
                <div class="mt-5 px-20 text-xl">用时：{{ formatTime }}、得分：{{ score }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Control from './components/control.vue'
import { onBeforeUnmount, onMounted, reactive, toRefs } from 'vue'
import Snake from './utils/index'

const games = reactive(Snake)
const { isStart, isOver, score, formatTime } = toRefs(games)

const handleKeyDown = (e: any) => {
    games.onKeydown(e.keyCode)
}

onMounted(() => {
    document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeyDown)
    games.end()
})
</script>

<style lang="scss" scoped>
    .snake-segment {
        transition: left 0.05s linear, top 0.05s linear;
    }
    .food {
        transition: left 0.1s linear, top 0.1s linear;
    }
</style>