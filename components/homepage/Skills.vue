<template>
  <div class="flex justify-start overflow-auto pb-2">
    <table class="table text-lg">
      <tr class="table-header-group">
          <th
            v-for="(_, key) in skills" :key="key" 
            class="text-left table-cell category px-4 py-4 uppercase text-lower font-mono text-sm"
          >
            {{ key }}
          </th>
        </tr>
        <tr v-for="i in getMaxLengthSkills()" :key="i" class="table-row" style="white-space: nowrap;">
          <td v-for="skill in skills" :key="skill" class="table-cell px-4 text-sm overflow-auto">
            {{ Object.values(skill)[i - 1] }}
          </td>
        </tr>
      </table>
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
