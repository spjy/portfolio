<template>
  <div class="p-10">
    <div>
      <h2 class="accent section font-mono text-3xl uppercase">
        {{ title }}
      </h2>
    </div>
    <div :class="cards ? 'flex flex-no-wrap overflow-x-scroll' : 'pl-20'">
      <slot />
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
    cards: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.section {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section:after {
  content: '';
  border-top: rgb(50, 56, 70) 2px solid;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

.section:after {
  margin-left: 20px;
}
</style>
