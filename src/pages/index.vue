<!--
 * @Author       : 15257184434 g598670138@163.com
 * @Date         : 2023-01-15 09:13:13
 * @LastEditors  : 15257184434 g598670138@163.com
 * @LastEditTime : 2023-01-15 09:27:57
 * @FilePath     : \varlet-nuxt3-example\src\pages\index.vue
 * @Description  : 
 * 
 * Copyright (c) 2023 by 15257184434 g598670138@163.com, All Rights Reserved. 
-->
<template>
  <div>
    <var-tooltip content="Say Hello">
      <var-button type="primary" @click="handleClick">Say Hello</var-button>
    </var-tooltip>
  </div>

</template>


<script setup lang="ts">
import { Snackbar } from '@varlet/ui'

function handleClick() {
  Snackbar('Hello')
}
</script>

<style lang="scss" scoped>

</style>
