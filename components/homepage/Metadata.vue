<template>
  <div class="flex flex-col gap-y-3">
    <div class="flex">
      <graduation-cap />

      Bachelor of Science in Computer Engineering from the
      <a
        class="ml-1"
        href="http://hawaii.edu"
        target="_blank"
        rel="noreferrer noopener"
        >University of Hawaii</a
      >
    </div>

    <div class="flex">
      <light-bulb />

      Interested in Full Stack Software Engineering
    </div>

    <div class="flex">
      <building />

      Full Stack Engineer at
      <a
        class="ml-1"
        href="http://ravenind.com"
        target="_blank"
        rel="noreferrer noopener"
        >Raven Industries</a
      >
    </div>
  </div>
</template>
<script>
import GraduationCap from '../icons/GraduationCap.vue'
import LightBulb from '../icons/LightBulb.vue'
import Building from '../icons/Building.vue'

export default {
  components: {
    GraduationCap,
    LightBulb,
    Building
  }
}
</script>
