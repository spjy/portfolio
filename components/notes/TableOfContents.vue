<template>
  <div class="sticky-info">
    <div class="rounded px-4 overflow-y-auto">
      <h1 class="header">{{ note.header }}</h1>
      <p class="description">{{ note.description }}</p>
    </div>
    <div class="md:toc overflow-y-auto m-2 h-40">
      <div
        v-for="content in toc"
        :key="content.anchor"
        :class="
          content.level === 1
            ? 'truncate font-bold text-xl mt-2'
            : 'truncate border-l-2 hover:border-green-300'
        "
        :href="`#${content.anchor}`"
        :title="content.content"
        :style="
          `margin-left: ${0.6 * (content.level - 1)}em; padding-left: 5px`
        "
      >
        <a :href="`#${content.anchor}`">
          {{ content.content }}
        </a>
      </div>
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
  height: calc(100vh - 18em);
}
a {
  font-family: 'IBM Plex Sans';
  color: white !important;
}
</style>
