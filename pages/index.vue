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
export default {
  async asyncData({
    $axios
  }) {
    let posts = await $axios.$get("posts?userId=6");
    return {
      posts
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
