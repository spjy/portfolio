<template>
  <div>
    <div class="sm:block md:flex lg:flex xl:flex">
      <div class="sm:w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mx-auto p-4">
        <a-anchor
          class="sm:invisible md:visible lg: visible xl:visible"
          :offset-top="30"
          :offset-bottom="30"
        >
          <a-anchor-link
            v-for="content in toc"
            :key="content.anchor"
            :class="content.level === 1 ? 'font-semibold' : ''"
            :href="`#${content.anchor}`"
            :title="content.content"
            :style="`text-indent: ${0.6 * (content.level - 1)}em`"
          />
        </a-anchor>
        <!-- <br />
          <a-card>
            <h1>Calculators</h1>
          </a-card> -->
      </div>
      <div class="sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5">
        <div class="mx-auto p-4">
          <div class="rounded shadow description-card p-4">
            <div class="font" v-html="markdown"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import '@/assets/css/katex.min.css'
import '@/assets/css/markdown.css'
import 'markdown-it-highlight/dist/index.css'

export default {
  /** Import markdown files asyncronously for rendering */
  async asyncData({ params }) {
    const markdown = await import(`~/static/jotted-topics/${params.topic}.md`)

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

<style>
.font {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: normal;
}
</style>
