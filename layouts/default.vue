<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '../components/shared/NavigationBar.vue'
export default {
  components: {
    NavigationBar
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
