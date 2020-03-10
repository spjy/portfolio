<template>
  <div class="flex p-4 flex-wrap">
    <Note
      v-for="(topic, key) in topics"
      :key="key"
      class="flex-initial"
      :title="topic.frontmatter.header"
      :description="topic.frontmatter.description"
      :link="`/notes/${key}`"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Note from '../../components/Note'

export default {
  components: {
    Note
  },
  data() {
    return {
      topics: []
    }
  },
  async asyncData({ params }) {
    const topics = {}

    await Promise.all(
      require
        .context('../../static/notes/', true, /\.md$/)
        .keys()
        .map(async file => {
          const filename = file.split('./')[1].split('.')[0] // rid of ./ then rid of .md

          const markdown = await import(`~/static/notes/${filename}.md`)

          topics[filename] = Vue.prototype.$markdown(markdown.default)
        })
    )

    return {
      topics
    }
  },
  methods: {
    /**
     * Processes the imported file strings and extracts the name.
     * @param {String[]} files The files within a certain directory.
     */
    importAll(files) {
      files.keys().forEach(file => {
        this.topics.push(file.match(/\/(.*?)\./)[1])
      })
    }
  }
}
</script>

<style scoped>
.clickable {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
}
</style>
