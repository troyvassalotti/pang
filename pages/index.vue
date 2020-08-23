<template>
<div>
  <main>
    <section class="wrapper feed">
      <h1>Your Feed</h1>
      <UserActions />
    </section>
    <Friends />
  </main>
  <Info />
</div>
</template>

<style lang="scss" scoped>
.feed {
    margin: auto;
}

@media only screen and (min-width: 968px) {
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
</style>
