<template>
<div>
  <main>
    <section class="wrapper container">
      <h1>Your Feed</h1>
      <div class="feed">
        <article class="post" v-for="post in posts">
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
        </article>
      </div>
      <UserActions />
    </section>
    <Friends />
  </main>
</div>
</template>

<script>
// to use the store, it's this.$store.state.posts.whatever
export default {
  async asyncData({
    $axios
  }) {
    let posts = await $axios.$get("posts?userId=6");
    let photos = await $axios.$get("albums/1/photos");
    return {
      posts: posts,
      photos: photos
    };
  },
  methods: {
    higherScore(state) {
      this.$store.commit("higherScore")
    },
    lowerScore(state) {
      this.$store.commit("lowerScore")
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
