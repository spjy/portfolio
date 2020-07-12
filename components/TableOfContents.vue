<template>
  <div
    class="toc sticky-info description-card rounded shadow p-4 overflow-y-auto"
  >
    <h1 class="header">{{ note.header }}</h1>
    <p class="description">{{ note.description }}</p>
    <h2>
      Table of Contents
    </h2>
    <div
      v-for="content in toc"
      :key="content.anchor"
      :class="content.level === 1 ? 'truncate font-bold text-lg' : 'truncate'"
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
    note: {
      type: Object,
      required: true
    },
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

h1 {
  border-image-source: none;
  border-bottom: none;
}

.header {
  border-top: 1px #a3f7bf solid;
}

.description {
  border-bottom: 1px #a3f7bf solid;
}

a {
  font-family: 'Libre Franklin';
  color: white !important;
}
</style>
