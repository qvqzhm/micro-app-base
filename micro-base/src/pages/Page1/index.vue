<template>
  <micro-app name='page1' url='http://localhost:8080/'
             @created="creating"
             @mounted="isMounted"
             @unmount="unmountSub"
             keep-router-state
             router-mode="pure"
             disable-memory-router
             keep-alive
             :disable-patch-request="true"
             :data="toPage1Msg"></micro-app>
</template>

<script setup lang="ts">

import {ref, reactive, onMounted} from "vue";

onMounted(()=> {
  console.log('页面完成渲染');
})

function creating(){
  console.log('开始创建')

}

function isMounted(){
  console.log('创建完成')
}

function unmountSub(){
  console.log('卸载了')
}

const toPage1Msg = reactive({
  farmId:  localStorage.getItem('farmId'),
});

</script>

<style scoped>

</style>
