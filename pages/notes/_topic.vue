<template>
  <div>
    <div class="sm:block md:flex lg:flex xl:flex">
      <div class="sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mx-auto p-4">
        <TableOfContents :toc="toc" :note="frontmatter" />
      </div>
      <div class="sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-4">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="rounded shadow description-card p-4" v-html="markdown" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TableOfContents from '../../components/notes/TableOfContents'
import '@/assets/css/katex.min.css'
import '@/assets/css/markdown.css'
import 'markdown-it-highlight/dist/index.css'

export default {
  components: {
    TableOfContents
  },
  /** Import markdown files asyncronously for rendering */
  async asyncData({ params }) {
    const markdown = await import(`~/static/notes/${params.topic}.md`)

    const { output, frontmatter, toc } = Vue.prototype.$markdown(
      markdown.default
    )

    return {
      markdown: output,
      frontmatter,
      toc
    }
  }
}
</script>

<style scoped></style>
