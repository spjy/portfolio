<template>
  <div class="flex-none rounded overflow-hidden shadow-lg card">
    <img
      v-if="image"
      class="h-64 w-full object-cover object-center"
      :src="image"
    />
    <div class="px-6 py-4 flex flex-col justify-between">
      <div>
        <div class="font-bold text-lg mb-1">
          {{ title }}
        </div>
        <p>
          {{ description }}
        </p>
      </div>
      <div>
        <tags v-if="tags.length > 0" :tags="tags" />
        <router-link :to="link" class="read-more">
          Read More
          <ArrowIcon />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '../shared/Tags.vue'
import ArrowIcon from '../icons/ArrowIcon'

export default {
  components: {
    Tags,
    ArrowIcon
  },
  props: {
    image: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
