<template>
  <div class="flex justify-start overflow-auto">
    <div v-for="(skill, key) in skills" :key="key" class="table text-lg">
      <div class="table-row-group">
        <div>
          <div
            class="table-cell category px-4 py-4 uppercase text-lower font-mono"
          >
            {{ key }}
          </div>
        </div>
        <div v-for="s in skill" :key="s">
          <div class="table-cell px-4 text-sm">
            {{ s }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped></style>
