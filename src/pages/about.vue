<template>
    <div class="page">
        <div class="tree mx-auto flex flex-col justify-center items-center">
            <div class="tree-main w-[3rem] h-[200rem] relative bottom-[-1rem]">

            </div>
            <div class="tree-footer flex items-center flex-col justify-center">
                <span class="w-[60%] text-[#ccc] main-color text-[1.3rem] mt-8 text-center">天行健  君子以自强不息  地势坤  君子以厚德载物</span>
                <span class="w-[80%] text-[#ccc] main-color text-[1.3rem] mt-2 text-center">业不可不勤  人不可不善  勤可以改变命运  善可以改变人生</span>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.page{
    height: calc(100vh - 5rem - 1.5rem);
    overflow-y: scroll;
    .tree{
        .tree-main{
            backdrop-filter: contrast(100%);
            -webkit-backdrop-filter: contrast(100%);
            background-color: rgba(255, 255, 255, .1);
            border: 1px solid rgba(26, 209, 165, .2);
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
                border-radius: .5rem;
                backdrop-filter: contrast(100%);
                -webkit-backdrop-filter: contrast(100%);
                background-color: rgba(255, 255, 255, .1);
                border: 1px solid rgba(26, 209, 165, .2);
                content: '';
                left: 0;
                top: 0;
                z-index: -1;
                -webkit-transform: rotateX(20deg) rotateY(0deg);
                transform: rotateX(20deg) rotateY(0deg);
            }
        }
    }
}
</style>
