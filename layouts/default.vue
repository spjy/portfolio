<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <navigation-bar />
      <nuxt />
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/shared/NavigationBar.vue'
import Footer from '../components/shared/Footer.vue'
export default {
  components: {
    NavigationBar,
    Footer
  },
  data() {
    return {
      current: ['home']
    }
  }
}
</script>

<style scoped>
.icons {
  fill: white;
  transition: fill cubic-bezier(0.46, 0.62, 0.55, 0.45) 0.2s;
}

.icons:hover {
  fill: #a3f7bf;
}
</style>
