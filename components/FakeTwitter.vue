<template>
<div class="feed flex col">
  <article class="post" v-for="post in posts" :key="post.id">
    <section class="post__message">
      <FakeTwitterUser :username="post.email" />
      <p>{{ post.body }}</p>
    </section>
    <section class="comments">
      <div class="actions" data-buttons="1">
        <button @click="deletePost(post)">Delete This Post</button>
      </div>
    </section>
  </article>
  <article class="post" v-show="this.posts.length === 0">
    <section>
      <h2>No More Posts</h2>
      <p>Good job! You've deleted your Twitter feed.</p>
    </section>
  </article>
</div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    const postSetOne = await fetch("https://jsonplaceholder.typicode.com/comments?postId=5")
      .then(res => res.json());
    this.posts = await fetch("https://jsonplaceholder.typicode.com/comments?postId=8")
      .then(res => res.json())
      .then(data => data.concat(postSetOne));
  },
  methods: {
    deletePost(post) {
      let index = this.posts.indexOf(post);
      if (index > -1) {
        this.posts.splice(index, 1);
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";
.feed {
    gap: var(--gap);
}

.post {
    max-width: 600px;
    padding: 0.5rem 1rem;
    background-color: white;
    border-radius: 1rem;
}

.post__details {
    span {
        color: $rich-black-fogra-29;
        background: $eggshell;
        padding: 2px 4px;
        border-radius: 50%;
        font: {
            size: 80%;
        }
    }
}
</style>
