<template>
<main>
  <section class="wrapper page" data-constrain="most">
    <h1>Account Options</h1>
    <nav>
      <ol>
        <li>
          <CloseAccountButton />
        </li>
        <li>
          <HomeButton />
        </li>
      </ol>
    </nav>
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
