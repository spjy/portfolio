<template>
  <div class="background w-full">
    <div class="flex justify-center">
      <div class="heading py-10 px-10">
        <h1 class="title accent-green font-bold">Hi, I am Spencer Young.</h1>

        <p>
          I have a Bachelor's of Science in
          <span class="accent-underline">computer engineering</span>,
        </p>
        <p>
          have an interest in
          <span class="accent-underline">software engineering</span> and
          <span class="accent-underline">data science</span>,
        </p>
        <p>
          and professionally am a
          <span class="accent-underline">software engineer</span>.
        </p>
        <div class="text-center mt-20">
          <a href="#me" class="no-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 inline scroll-indicator"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media only screen and (min-width: 700px) {
  .background {
    position: relative;
    overflow: hidden;
    background: linear-gradient(176deg, #393e46 80.9%, #222831 81%);
    height: 100vh;
    padding-top: 150px;
  }
}

.title {
  font-size: 60px;
}

.scroll-indicator {
  fill: #a3f7bf;
  position: relative;
  top: 0;
  transition: top ease 0.3s;
}

.scroll-indicator:hover {
  top: 2px;
  cursor: pointer;
}
</style>
