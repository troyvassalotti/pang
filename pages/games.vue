<template>
<main>
  <section class="wrapper page" data-constrain="most">
    <h1>Games</h1>
    <p>Why on Earth would you want to play games here??</p>
    <p>We're a <em>social media</em> site. We're not a <em>gaming platform</em>.</p>
    <p>This is a bad place to look for good games.</p>
    <HomeButton />
  </section>
</main>
</template>

<script>
export default {
  transition: {
    name: "bounce"
  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
