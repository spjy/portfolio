<template>
  <div class="flex flex-col gap-y-3">
    <div class="flex">
      <div>
        <graduation-cap />
      </div>

      <div>
        BS in Computer Engineering from the
        <a
          class="ml-1"
          href="http://hawaii.edu"
          target="_blank"
          rel="noreferrer noopener"
          >University of Hawaii</a
        >
      </div>
    </div>

    <div class="flex">
      <div>
        <light-bulb />
      </div>

      <div>
        Interested in Full Stack Software Engineering
      </div>
    </div>

    <div class="flex">
      <div>
        <building />
      </div>

      <div>
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
