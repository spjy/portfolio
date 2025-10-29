<template>
  <p class="pb-2 font-mono text-xs text-lower">
    <span v-for="(tag, index) in tags" :key="tag">
      {{ tag }}
      <span v-if="index !== tags.length - 1">
        •
      </span>
    </span>
  </p>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
