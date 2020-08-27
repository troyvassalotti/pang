<template>
<main>
  <section class="wrapper page" data-constrain="most">
    <h1>Crap, a 404.</h1>
    <p>Alright, which one of us broke this thing? Was it you or was it me?</p>
    <p>It doesn't really matter. I'm sorry this happened for whatever the reason was.</p>
    <NuxtLink to="/" id="openAccount">Go Home</NuxtLink>
  </section>
</main>
</template>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";
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
