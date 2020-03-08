<template>
  <div class="sticky-info description-card rounded shadow p-4">
    <h2>
      Table of Contents
    </h2>
    <div
      v-for="content in toc"
      :key="content.anchor"
      :class="content.level === 1 ? 'truncate font-bold' : 'truncate'"
      :href="`#${content.anchor}`"
      :title="content.content"
      :style="`text-indent: ${1 * (content.level - 1)}em`"
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

<style scoped></style>
