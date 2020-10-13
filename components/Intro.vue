<template>
  <div class="background w-full">
    <div class="flex justify-center">
      <div class="heading py-10 px-10">
        <h1 class="title accent-green font-bold">
          Hi, I am Spencer Young,
        </h1>

        <p>
          a B.S. Candidate in
          <span class="accent-underline">
            Computer Engineering
          </span>
        </p>
        <p>
          with interest in
          <span class="accent-underline">software engineering</span>,
          <span class="accent-underline">data science</span> and
          <span class="accent-underline">control systems</span>.
        </p>
        <p>
          Hopefully graduating in December of 2020.
        </p>
        <div class="text-center mt-20">
          <a href="#me" class="no-accent">
            <svg
              class="h-8 inline scroll-indicator"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm-2-8V5h4v5h3l-5 5-5-5h3z"
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
