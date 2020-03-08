<template>
  <div class="flex-none rounded overflow-hidden shadow-lg card m-4">
    <div class="px-6 py-4">
      <div class="font-bold text-lg mb-1">
        {{ title }}
      </div>
      <div class="pb-2 font-mono text-xs text-lower">
        <span v-for="(tag, index) in tags" :key="tag">
          {{ tag }}
          <span v-if="index !== tags.length - 1">
            •
          </span>
        </span>
      </div>
      <p>
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
