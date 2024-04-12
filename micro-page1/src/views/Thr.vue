<template>
  <div>
    <h1>这是第二层</h1>
    <button @click="goBack">返回上一层</button>
    <button @click="toThr">跳转第三层</button>
  </div>
</template>

<script>
export default {
  name: "Thr",
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    toThr(){
      this.$router.push({
        path: '/four'
      })
    }
  }
}
</script>

<style scoped>

</style>
