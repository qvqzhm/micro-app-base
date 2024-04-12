<template>
  <div>
    <h1>最后一层</h1>
    <button @click="goBack">返回上一层</button>
  </div>
</template>

<script>
export default {
  name: "Four",
  methods: {
    goBack(){
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>

</style>
