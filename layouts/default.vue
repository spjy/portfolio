<template>
  <div>
    <div class="flex justify-around bg-gray-200 p-6 font-mono">
      <div class="flex-1 text-gray-700 text-left bg-gray-400">
        spjy
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400">
        <div class="flex">
          <router-link to="/" class="flex-1 text-gray-700 text-center px-2">
            Overview
          </router-link>
          <a class="flex-1 text-gray-700 text-center px-2">
            Skills
          </a>
          <a class="flex-1 text-gray-700 text-center px-2">
            Projects
          </a>
          <a class="flex-1 text-gray-700 text-center px-2">
            Essays
          </a>
          <router-link
            to="/notes"
            class="flex-1 text-gray-700 text-center px-2"
          >
            Notes
          </router-link>
        </div>
      </div>
      <div class="flex-1 text-gray-700 text-right bg-gray-400 text-lg">
        <a
          class="icons"
          :href="$store.state.settings.linkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <a-icon class="" type="linkedin" />
        </a>
        <a
          class="icons"
          :href="`mailto:${$store.state.settings.email}`"
          rel="noopener noreferrer"
          target="_blank"
        >
          <a-icon type="mail" />
        </a>
        <a
          class="icons"
          :href="$store.state.settings.github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <a-icon type="github" />
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

<style>
body {
  background-color: #222831;
  color: white;
  font-family: 'PT Sans', sans-serif;
}

a.icons {
  color: white;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222831;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a3f7bf;
  border-radius: 25px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #29a19c;
}
</style>
