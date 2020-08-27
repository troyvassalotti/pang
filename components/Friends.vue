<template>
<aside>
  <div class="wrapper" data-constrain="most">
    <h2>You Have No Friends 😢</h2>
    <p>Bummer! Maybe try one of these instead?</p>
    <ul>
      <li>Learn to Juggle 🤹</li>
      <li>Adopt a Pet 🐈</li>
      <li>Pick up Baking 🎂</li>
      <li>Call a Friend ☎️</li>
      <li>Write a Song 🎼</li>
      <li>Start a Journal 📖</li>
      <li>Just Watch Netflix 🎥</li>
    </ul>
  </div>
</aside>
</template>

<style lang="scss" scoped>
@import "assets/css/_globals.scss";
.wrapper {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background: $rich-black-fogra-29;
    color: $eggshell;
}

@media only screen and (min-width: 968px) {
    aside {
        height: min-content;
        max-width: 400px;
    }
}
</style>
