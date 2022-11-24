<template>
  <div class="flex-1 rounded overflow-hidden shadow-lg card m-2">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-1">
        {{ title }}
      </div>
      <p class="text-sm">
        {{ description }}
      </p>
      <router-link :to="link" class="read-more">
        Read More
        <ArrowIcon />
      </router-link>
    </div>
  </div>
</template>

<script>
import ArrowIcon from './ArrowIcon'

export default {
  components: {
    ArrowIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
