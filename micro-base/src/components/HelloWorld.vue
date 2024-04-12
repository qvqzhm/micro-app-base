<script setup lang="ts">
import {onMounted, ref} from 'vue'
import router from "../router";

defineProps<{ msg: string }>()

const count = ref(0)

onMounted(()=> {
  localStorage.setItem('token','eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjM0ZjlkMzhlLWU4MTAtNGQ1Yi05NzhiLTY0YzQ1ZjUxYzY2OSJ9.Fjd037vmqP7H09xN3b7NzGyqhTuymKtVNs4rIoMcVdZWzQyTVAuY8_2UuEVbe56fYEZjt4F7aNPjtBQRA0a--g')
  localStorage.setItem('farmId', '1465139559510710725')
})

function toSub(){
  let url = router.resolve({
    path: '/page1'
  })
  window.open(url.href,'_blank')
}

</script>

<template>
  <h1>base</h1>
  <button @click="toSub">跳转子应用</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
