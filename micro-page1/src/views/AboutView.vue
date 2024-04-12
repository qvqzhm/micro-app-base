<template>
  <div class="about">
    <h1>这是第一层</h1>
    <button @click="toTwo">跳转第二层</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {

    }
  },
  methods: {
    toTwo(){
      this.$router.push({
        path: '/thr',
        query: {
          name: 123
        }
      })
    }
  }
}
</script>
