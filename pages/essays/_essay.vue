<template>
  <div class="flex p-6 flex-col md:flex-row">
    <div class="w-full md:w-1/4 mb-4 md:px-4">
      <Information
        :title="frontmatter.title"
        :image="frontmatter.image"
        :date="frontmatter.date"
        :description="frontmatter.description"
        :tags="frontmatter.tags.split(', ')"
        :github="frontmatter.github"
        :link="frontmatter.link"
      />
    </div>
    <div
      class="w-full md:w-3/4 px-4 h-full text-base rounded shadow"
    >
      <div class="mb-5 text-lower font-mono">
        ESSAY
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="markdown" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Information from '../../components/shared/Information'
import '@/assets/css/katex.min.css'
import '@/assets/css/markdown.css'
import 'markdown-it-highlight/dist/index.css'

export default {
  components: {
    Information
  },
  /** Import markdown files asyncronously for rendering */
  async asyncData({ params }) {
    const markdown = await import(`~/static/essays/${params.essay}.md`)

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
