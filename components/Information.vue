<template>
  <div class="sticky-info">
    <img v-if="image" class="mb-5 shadow-lg rounded" :src="image" />
    <div class="accent-green text-xl font-bold">
      {{ title }}
    </div>
    <div class="mb-1 text-sm text-lower font-mono">
      {{ date }}
    </div>
    <div class="mb-4 text-base">
      {{ description }}
    </div>
    <div class="mb-4 font-mono text-lower text-sm">
      <span v-for="(tag, index) in tags" :key="tag">
        {{ tag }}
        <span v-if="index !== tags.length - 1">
          •
        </span>
      </span>
    </div>
    <div>
      <a
        v-if="github"
        class="icons no-accent"
        :href="github"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          class="h-8 inline icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"
          />
        </svg>
        <a-icon class="text-3xl" type="github" />
      </a>
      &nbsp;
      <a
        v-if="link"
        class="icons no-accent"
        :href="link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          class="h-8 inline icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.26 13a2 2 0 01.01-2.01A3 3 0 009 5H5a3 3 0 000 6h.08a6.06 6.06 0 000 2H5A5 5 0 015 3h4a5 5 0 01.26 10zm1.48-6a2 2 0 01-.01 2.01A3 3 0 0011 15h4a3 3 0 000-6h-.08a6.06 6.06 0 000-2H15a5 5 0 010 10h-4a5 5 0 01-.26-10z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    github: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped></style>
