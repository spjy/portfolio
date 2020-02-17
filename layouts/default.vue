<template>
  <div>
    <div class="flex justify-around bg-gray-200 p-6 font-mono">
      <div class="flex-1 text-gray-700 text-left bg-gray-400">
        S
      </div>
      <div class="flex-1 text-gray-700 text-center bg-gray-400">
        <div class="flex">
          <a class="flex-1 text-gray-700 text-center px-2">
            Skills
          </a>
          <a class="flex-1 text-gray-700 text-center px-2">
            Projects
          </a>
          <a class="flex-1 text-gray-700 text-center px-2">
            Essays
          </a>
        </div>
      </div>
      <div class="flex-1 text-gray-700 text-right bg-gray-400 text-lg">
        <a-icon class="" type="linkedin" />
        <a-icon type="mail" />
        <a-icon type="github" />
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
</style>
