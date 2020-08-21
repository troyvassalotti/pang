<template>
<main>
  <header>
    <h1>Your Feed</h1>
  </header>
  <section>
    <header>
      <div>
        <p>article.author</p>
        <p>Likes <span>article.likes</span> | Dislikes <span>article.dislikes</span></p>
      </div>
      <p>article.text</p>
    </header>
    <hr>
    <article>
      <img src="" alt="">
      <h2>article.title</h2>
      <p>article.description</p>
    </article>
    <UserActions />
  </section>
</main>
<Friends />
<Info />
</template>

<script>
export default {
  head: {
    meta: [{
      hid: "description",
      name: "description",
      content: "Welcome to Pang: a new type of social media where it's just you and only you."
    }]
  }
};
</script>
