<template>
  <div
    class="toc sticky-info description-card rounded shadow p-4 overflow-y-auto"
  >
    <h2>
      Table of Contents
    </h2>
    <div
      v-for="content in toc"
      :key="content.anchor"
      :class="content.level === 1 ? 'truncate font-bold' : 'truncate'"
      :href="`#${content.anchor}`"
      :title="content.content"
      :style="`text-indent: ${0.8 * (content.level - 1)}em`"
    >
      <a :href="`#${content.anchor}`">
        {{ content.content }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.toc {
  height: calc(100vh - 2em);
}
</style>
