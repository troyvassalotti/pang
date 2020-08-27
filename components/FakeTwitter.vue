<template>
<div class="feed flex col">
  <article class="grid post" v-for="post in posts" :key="post.id">
    <header class="post__message">
      <div class="flex post__details">
        <FakeTwitterUser :username="users[post.id - 1]" />
      </div>
    </header>
    <section>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </section>
    <section class="comments">
      <div class="actions" data-buttons="1">
        <button @click="deletePost(post)">Delete This Post</button>
      </div>
    </section>
  </article>
  <article class="grid post" v-show="this.posts.length === 0">
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
      posts: [],
      users: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]
    }
  },
  async fetch() {
    this.posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => res.json());
    this.deleted = false;
  },
  methods: {
    deleteComment(comment) {
      let index = this.comments.indexOf(comment);
      if (index > -1) {
        this.comments.splice(index, 1);
      }
    },
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
    justify-content: space-between;

    p {
        font-size: 85%;
    }

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
