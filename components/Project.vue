<template>
  <div class="flex-none rounded overflow-hidden shadow-lg card m-4">
    <img class="w-full h-64" :src="image" />
    <div class="px-6 pt-4 pb-4">
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
        <a-icon class="arrow" type="arrow-right" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
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

<style></style>
