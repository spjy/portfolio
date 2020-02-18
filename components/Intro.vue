<template>
  <div class="background w-full">
    <div class="flex justify-center">
      <div class="heading py-10 px-10">
        <h1 class="title accent font-bold">
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
          <span class="accent-underline">machine learning</span> and
          <span class="accent-underline">control systems</span>.
        </p>
        <p>
          Hopefully graduating in December of 2020.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
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
</style>
