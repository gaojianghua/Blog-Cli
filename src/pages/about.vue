<template>
    <div class="page flex flex-col items-center justify-center">
        <div />
        <div class="tree mx-auto mt-auto flex flex-col items-center justify-center">
            <div />
            <div class="tree-footer flex flex-col items-center justify-center">
                <span class="main-color mt-5 w-[60%] text-center text-[1.3rem] text-[#ccc]">天行健 君子以自强不息 地势坤 君子以厚德载物</span>
                <span class="main-color mt-2 w-[80%] text-center text-[1.3rem] text-[#ccc]">业不可不勤 人不可不善 勤可以改变命运 善可以改变人生</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
    .page {
        height: calc(100vh - 5rem - 1.5rem);
        overflow-y: scroll;
        .tree {
            .tree-main {
                border-radius: 0;
            }
            .tree-footer {
                width: 50rem;
                height: 10rem;
                position: relative;
                -webkit-perspective: 10rem;
                perspective: 10rem;

                &:after {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 0.5rem;
                    backdrop-filter: contrast(100%);
                    -webkit-backdrop-filter: contrast(100%);
                    background-color: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(26, 209, 165, 0.2);
                    content: '';
                    left: 0;
                    bottom: 0.63rem;
                    z-index: -1;
                    -webkit-transform: rotateX(20deg) rotateY(0deg);
                    transform: rotateX(20deg) rotateY(0deg);
                }
            }
        }
    }
</style>
