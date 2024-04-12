<template>
  <div class="home">
    <h1>这是首页</h1>
    <button @click="toOne">跳转第一层</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {toRefs} from "vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return{

    }
  },
  mounted() {

  },
  methods: {
    toOne(){
      let url = this.$router.resolve({
        path: '/about',
      })
      window.open(url.href, '_blank')
    }
  }
}
</script>
