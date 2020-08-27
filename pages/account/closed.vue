<template>
<main class="flex">
  <div class="wrapper flex col" data-constrain="most">
    <h1>Thank you for closing your account!</h1>
    <p>We appreciate your time.</p>
    <p>If you would like to reopen your account, you can click the button below...</p>
    <p>But only if you <em>really, really</em> have to.</p>
    <p>
      <NuxtLink to="/" id="openAccount">Open Account</NuxtLink>
    </p>
  </div>
</main>
</template>

<script>
export default {
  layout: "the-abyss"
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";
main {
    min-height: 100vh;
    background-color: $rich-black-fogra-29;
    color: $eggshell;
}

#openAccount {
    padding: 1rem;
    display: inline-block;
    background: $star-command-blue;
    border-radius: 10px;
    color: $eggshell;
    text-decoration: none;
    font: {
        family: $fira;
        weight: bold;
    }

    &:hover {
        background: $eggshell;
        color: $rich-black-fogra-29;
    }
}
</style>
