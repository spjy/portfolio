<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="0" y="0" width="100" height="100" fill="white"></rect>
        <text x="50" y="50" font-family="Verdana" font-size="35" fill="blue">
          S
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 500px) {
  .header-lg {
    background-image: url('/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 6em;
  }
}

@media only screen and (max-width: 1359px) {
  .header-sm {
    background-color: #303030;
    padding: 6em;
  }
}
</style>
