<template>
<div>
  <main>
    <section class="wrapper container">
      <h1>Your Feed</h1>
      <div class="feed">
        <section class="feed__item" v-for="article in feed">
          <header class="feed__header">
            <div class="counters">
              <p class="author small">{{article.author}}</p>
              <p class="author small">Likes <span class="counter">{{article.likes}}</span> | Dislikes <span class="counter">{{article.dislikes}}</span></p>
            </div>
            <p class="author__text">{{article.text}}</p>
          </header>
          <hr>
          <article class="feed__article">
            <img :src="require(`~/assets/img/${article.img}.jpg`)" alt="" class="feed__image">
            <h2>{{article.title}}</h2>
            <p>{{article.description}}</p>
          </article>
        </section>
      </div>
      <UserActions />
    </section>
    <Friends />
  </main>
</div>
</template>

<style lang="scss" scoped>
.container {
    margin: auto;
}

@media only screen and (min-width: 968px) {
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
</style>
