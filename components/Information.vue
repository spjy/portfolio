<template>
  <div>
    <img v-if="image" class="mb-5 shadow-lg rounded" :src="image" />
    <div class="accent text-xl font-bold">
      {{ title }}
    </div>
    <div class="mb-1 text-sm text-lower font-mono">
      {{ date }}
    </div>
    <div class="mb-4 text-base">
      {{ description }}
    </div>
    <div class="mb-4 font-mono text-lower text-sm">
      <span v-for="(tag, index) in tags" :key="tag">
        {{ tag }}
        <span v-if="index !== tags.length - 1">
          •
        </span>
      </span>
    </div>
    <div>
      <a v-if="github" class="icons" :href="github">
        <a-icon class="text-3xl" type="github" />
      </a>
      &nbsp;
      <a v-if="link" class="icons" :href="link">
        <a-icon class="text-3xl" type="link" />
      </a>
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
      default: null
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    github: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.image {
  border: 2px #a3f7bf solid;
}
</style>
