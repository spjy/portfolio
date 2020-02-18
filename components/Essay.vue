<template>
  <div class="w-64 flex-none rounded overflow-hidden shadow-lg card m-4">
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

<style>
.card {
  position: relative;
  background-color: #393e46;
  top: 0;
  transition: top ease 0.3s;
}

.card:hover {
  top: -2px;
}
</style>
