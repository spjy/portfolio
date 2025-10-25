<template>
  <div class="flex justify-start overflow-auto pb-2">
    <div class="text-lg">
      <div class="table-header-group">
          <div
            v-for="(_, key) in skills" :key="key" 
            class="text-left table-cell category px-4 py-4 uppercase text-lower font-mono text-sm"
          >
            {{ key }}
          </div>
        </div>
        <div v-for="i in getMaxLengthSkills()" :key="i" class="table-row" style="white-space: nowrap;">
          <div v-for="skill in skills" :key="skill" class="table-cell px-4 text-sm overflow-auto">
            {{ Object.values(skill)[i - 1] }}
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
  },
  methods: {
    getMaxLengthSkills() {
      return Math.max(...Object.values(this.skills).map((skill) => skill.length));
    }
  }
}
</script>

<style scoped></style>
