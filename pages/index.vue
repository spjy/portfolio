<template>
  <div>
    <Intro />

    <Section id="me" title="Who">
      <div>
        <p>
          In 2013, I built my first computer, so it was only natural for me to
          love software engineering. I first began coding in 2017.
        </p>

        <p>
          In my spare time, I enjoy gaming, gardening, photography, and coding.
        </p>
      </div>

      <Skills :skills="$store.state.settings.skills" />
    </Section>

    <Section id="projects" title="Projects" cards>
      <base-card
        v-for="(project, key) in projects"
        :key="key"
        class="m-3"
        :title="project.frontmatter.title"
        :image="project.frontmatter.image"
        :tags="project.frontmatter.tags.split(', ')"
        :description="project.frontmatter.description"
        :link="`/projects/${key}`"
      />
    </Section>

    <Section id="essays" title="Essays" cards>
      <base-card
        v-for="(essay, key) in essays"
        :key="key"
        class="m-3"
        :title="essay.frontmatter.title"
        :tags="essay.frontmatter.tags.split(', ')"
        :description="essay.frontmatter.description"
        :link="`/essays/${key}`"
      />
    </Section>
  </div>
</template>

<script>
import Vue from 'vue'
import Intro from '../components/homepage/Intro'
import Section from '../components/shared/Section'
import Skills from '../components/homepage/Skills'
import BaseCard from '../components/card/BaseCard.vue'

export default {
  components: {
    Intro,
    Section,
    Skills,
    BaseCard
  },
  async asyncData({ params }) {
    const essays = {}
    const projects = {}

    await Promise.all(
      require
        .context('../static/essays/', true, /\.md$/)
        .keys()
        .map(async file => {
          const filename = file.split('./')[1].split('.')[0] // rid of ./ then rid of .md

          const markdown = await import(`~/static/essays/${filename}.md`)

          essays[filename] = Vue.prototype.$markdown(markdown.default)
        })
    )

    await Promise.all(
      require
        .context('../static/projects/', true, /\.md$/)
        .keys()
        .map(async file => {
          const filename = file.split('./')[1].split('.')[0]

          const markdown = await import(`~/static/projects/${filename}.md`)

          projects[filename] = Vue.prototype.$markdown(markdown.default)
        })
    )

    return {
      essays,
      projects
    }
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* 
.background:before {
  background-color: #393e46;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  z-index: -1;
  transform: rotate(15deg);
} */

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  padding-bottom: 15px;
  font-size: 1rem;
}

.links {
  padding-top: 15px;
}

.channel-format {
  color: #667ec9;
  background-color: #f3f3f3;
}
</style>
