<template>
  <div>
    <div class="flex justify-around p-6 font-mono">
      <div class="flex-1 text-left">
        spjy
      </div>
      <div class="flex-1 text-center">
        <router-link to="/" class="flex-initial">
          Overview
        </router-link>
        &nbsp;
        <router-link to="/notes" class="flex-initial">
          Notes
        </router-link>
      </div>
      <div class="flex-1 text-gray-700 text-right text-lg">
        <a
          class="no-accent"
          :href="$store.state.settings.linkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            class="h-5 inline icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"
            />
          </svg>
        </a>
        <a
          class="no-accent"
          :href="`mailto:${$store.state.settings.email}`"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            class="h-5 inline icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"
            />
          </svg>
        </a>
        <a
          class="no-accent"
          :href="$store.state.settings.github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            class="h-5 inline icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"
            />
          </svg>
        </a>
      </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ['home']
    }
  }
}
</script>

<style scoped>
.icons {
  fill: white;
  transition: fill cubic-bezier(0.46, 0.62, 0.55, 0.45) 0.2s;
}

.icons:hover {
  fill: #a3f7bf;
}
</style>
