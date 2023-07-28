<template>
    <div class="page flex items-center justify-center">
        <div class="test">

        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.page{
    .test{
        width: 30rem;
        height: 7rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
            border: 1px solid rgba(26, 209, 165, .1);
            content: '';
            left: 0;
            top: 0;
            z-index: -1;
            -webkit-transform: rotateX(20deg) rotateY(0deg);
            transform: rotateX(20deg) rotateY(0deg);
        }
    }
}
</style>
