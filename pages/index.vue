<template>
<div>
  <main>
    <section class="wrapper container">
      <h1>Your Feed</h1>
      <div class="feed">
        <article class="post" v-for="post in posts" :key="post.id">
          <header class="post__message">
            <div class="post__details">
              <p>{{ users[7].name }}</p>
              <p>Likes <span>0</span> | Dislikes <span>0</span></p>
            </div>
          </header>
          <div class="post__content">
            <img :src="photos[post.id].url" alt="" />
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>
          <section class="comments">
            <Actions />
            <article class="comment" v-for="comment in comments">
              <p>{{ comment.email }}</p>
              <p>{{ comment.body }}</p>
            </article>
          </section>
        </article>
      </div>
    </section>
    <Friends />
  </main>
</div>
</template>

<script>
export default {
  async asyncData({
    $axios
  }) {
    const posts = await $axios.$get("posts?userId=1");
    const photos = await $axios.$get("photos?albumId=1");
    const users = await $axios.$get("users");
    let comments = await $axios.$get("comments?postId=1");
    return {
      posts: posts,
      photos: photos,
      users: users,
      comments: comments
    }
  }
}
</script>

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
