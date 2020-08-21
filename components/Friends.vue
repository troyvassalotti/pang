<template>
<aside class="friends">
  <h2>You Have No Friends 😢</h2>
  <div class="friends__text">
    <p class="poster">Bummer! Maybe try one of these instead?</p>
    <ul>
      <li>Learn to Juggle</li>
      <li>Adopt a Pet</li>
      <li>Pick up Baking</li>
      <li>Call a Friend</li>
      <li>Write a Song</li>
      <li>Start a Journal</li>
      <li>Just Watch Netflix</li>
    </ul>
  </div>
</aside>
</template>

<style lang="scss" scoped>
@import "~/assets/css/_globals";

.friends {
    border: 2px solid $black;
    padding: {
        left: 1em;
        right: 1em;
    }
    margin-top: 1em;
    border-radius: 1em;
    background: rgba(229, 149, 0, .5);
}

@media (min-width: 768px) {
    .friends {
        margin-top: 0;
    }
}
</style>
