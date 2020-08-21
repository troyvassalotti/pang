<template>
<section class="theGoodStuff">
  <div class="theGoodStuff__main">
    <main class="feed">
      <header>
        <h1>Your Feed</h1>
      </header>
      <div class="feed__container">
        <section class="feed__item">
          <header class="feed__header">
            <div class="counter__container">
              <p class="poster timestamp">article.author</p>
              <p class="poster timestamp">Likes <span class="counter">article.likes</span> | Dislikes <span class="counter">article.dislikes</span></p>
            </div>
            <p class="poster__text">article.text</p>
          </header>
          <hr>
          <article class="feed__article">
            <img class="feed__article-image" src="" alt="">
            <h2>article.title</h2>
            <p>article.description</p>
          </article>
          <UserActions />
        </section>
      </div>
    </main>
    <Friends />
  </div>
  <Info />
</section>
</template>

<script>
export default {
  head() {
    return {
      meta: [{
        hid: "description",
        name: 'description',
        content: 'Welcome to Pang: a new type of social media where it\'s just you and only you.'
      }]
    }
  },
};
</script>
