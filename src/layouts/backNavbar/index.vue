<!--
 * @Author: 高江华 g598670138@163.com
 * @Date: 2023-08-31 10:56:46
 * @LastEditors: 高江华
 * @LastEditTime: 2023-08-31 15:33:36
 * @Description: file content
-->
<template>
    <div class="box ml-4 flex h-[6.2rem] items-center px-4">
        <button
            class="menuBun box flex h-[3.5rem] w-[3.5rem] items-center justify-center"
            :class="common.state.backMenuSwitch ? 'unflod' : ''"
            @click="switchMenuBox"
        >
            <svg class="iconpark-icon main-color h-[2.5rem] w-[2.5rem]">
                <use :href="common.state.backMenuSwitch ? '#menu-fold-one' : '#menu-unfold-one'" />
            </svg>
        </button>
        <button class="box ml-[1rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center" @click="refresh">
            <svg class="iconpark-icon main-color h-[2.5rem] w-[2.5rem]" :class="rotate ? 'rotate' : ''">
                <use href="#refresh" />
            </svg>
        </button>
        <button class="box ml-[1rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center" @click="setScreenStatus">
            <svg class="iconpark-icon main-color h-[2.5rem] w-[2.5rem]">
                <use :href="screenStatus ? '#off-screen-one' : '#full-screen-one'" />
            </svg>
        </button>
        <button class="box ml-auto flex h-[3.5rem] w-[3.5rem] items-center justify-center" @click="setting">
            <svg class="iconpark-icon main-color h-[2.5rem] w-[2.5rem]">
                <use href="#setting-two" />
            </svg>
        </button>
        <button class="box ml-[1rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center" @click="close">
            <svg class="iconpark-icon main-color h-[2.5rem] w-[2.5rem]">
                <use href="#power" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const common = useStore.useCommonStore();
const screenStatus = ref(false);
const rotate = ref(false);

const switchMenuBox = () => {
    common.actions.setBackMenuSwitch(!common.state.backMenuSwitch);
};

const close = () => {
    navigateTo('/');
};

const setScreenStatus = () => {
    if (screenStatus.value) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            /* Firefox */
            (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
            /* IE/Edge */
            (document as any).msExitFullscreen();
        }
    } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if ((document.documentElement as any).mozRequestFullScreen) {
        /* Firefox */
        (document.documentElement as any).mozRequestFullScreen();
    } else if ((document.documentElement as any).webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        (document.documentElement as any).webkitRequestFullscreen();
    } else if ((document.documentElement as any).msRequestFullscreen) {
        /* IE/Edge */
        (document.documentElement as any).msRequestFullscreen();
    }
    screenStatus.value = !screenStatus.value;
};

const setting = () => {};

const refresh = () => {
    rotate.value = true;
    // 刷新逻辑
    const time = setTimeout(() => {
        rotate.value = false;
        clearTimeout(time);
    }, 1500);
};
</script>

<style lang="scss" scoped>
    .menuBun {
        transition: all 0.2s linear;
    }

    .rotate {
        animation: rotate 1.2s linear;

        @keyframes rotate {
            to {
                transform: rotate(0);
            }

            from {
                transform: rotate(-720deg);
            }
        }
    }

    .unflod {
        transform: rotate(45deg);
    }
</style>
