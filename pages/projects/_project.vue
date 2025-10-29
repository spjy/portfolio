<template>
  <div class="flex justify-center p-6 flex-col md:flex-row">
    <aside class="md:w-1/5 p-4">
      <Information
        :title="frontmatter.title"
        :image="frontmatter.image"
        :date="frontmatter.date"
        :description="frontmatter.description"
        :tags="frontmatter.tags.split(', ')"
        :github="frontmatter.github"
        :link="frontmatter.link"
      />
    </aside>
    <article class="md:w-4/5 max-w-3xl p-4 text-base">
      <div class="mb-2 text-lower font-mono">
        PROJECT
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="markdown" />
    </article>
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
    const markdown = await import(`~/static/projects/${params.project}.md`)

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
