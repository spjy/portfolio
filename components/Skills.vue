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
          <div class="table-cell text-gray-400 px-4">
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
