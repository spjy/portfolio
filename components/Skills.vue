<template>
  <div class="flex justify-start">
    <div v-for="(skill, key) in skills" :key="key" class="table text-lg">
      <div class="table-row-group">
        <div class="table-row">
          <div
            class="table-cell category px-4 py-4 uppercase text-lower font-mono"
          >
            {{ key }}
          </div>
        </div>
        <div v-for="s in skill" :key="s" class="table-row">
          <div class="table-cell text-gray-700 px-4">
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
      default: () => {}
    }
  }
}
</script>

<style></style>
