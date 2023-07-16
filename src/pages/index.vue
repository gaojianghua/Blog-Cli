<template>
  <div class="flex justify-center">
      <div class="home w-3/4 flex items-center">
          <div>
              
          </div>
          <div class="flex flex-col items-center w-1/3 ml-auto">
              <div class="w-[200px] h-[200px] rounded-full overflow-hidden border border-[#fff]">
                  <img src="https://blog-cli.oss-cn-hangzhou.aliyuncs.com/gaojianghua.jpg" alt="作者">
              </div>
              <div class="text-[18px] text-[#ababab] mt-10">
                  历经 {{year}} 年开发历程，掌握 Vue系列 React系列 UniApp系列 Electron Gin GRPC Nest 等等技术能力。
              </div>
          </div>
      </div>
  </div>

</template>


<script setup lang="ts">
import { ref } from 'vue'

let year = ref(new Date().getFullYear() - 2018)
</script>

<style lang="scss" scoped>
.home{
    height: calc(100vh - 60px - 0.5rem - 120px);
}
</style>
