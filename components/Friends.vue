<template>
<aside id="friends">
  <div class="wrapper" data-constrain="most">
    <h1>Friends Online</h1>
    <div class="friends">
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
  </div>
</aside>
</template>

<style lang="scss" scoped>
@import "assets/css/_globals.scss";
.friends {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background: white;
}

#friends {
    grid-area: friends;
}
</style>
