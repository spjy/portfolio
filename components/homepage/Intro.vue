<template>
  <div class="background w-full">
    <div class="flex justify-center">
      <div class="heading py-10 px-10">
        <h1 class="title accent-green font-bold mb-8">
          Hi, I am Spencer Young.
        </h1>

        <Metadata />

        <div class="text-center mt-20">
          <a href="#me" class="no-accent"> <down-arrow /> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownArrow from '../icons/DownArrow.vue'
import Metadata from './Metadata.vue'

export default {
  components: {
    Metadata,
    DownArrow
  }
}
</script>

<style scoped>
@media only screen and (min-width: 700px) {
  .background {
    position: relative;
    overflow: hidden;
    background: linear-gradient(176deg, #393e46 80.9%, #222831 81%);
    height: 100vh;
    padding-top: 150px;
  }
}

.title {
  font-size: 60px;
}

.scroll-indicator {
  fill: #a3f7bf;
  position: relative;
  top: 0;
  transition: top ease 0.3s;
}

.scroll-indicator:hover {
  top: 2px;
  cursor: pointer;
}
</style>
