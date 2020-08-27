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
      <article class="comment" v-for="comment in comments">
        <p class="small-text">{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
        <div class="actions">
          <button>Delete Comment</button>
        </div>
      </article>
    </section>
  </article>
</div>
</template>

<script>
export default {
  data() {
    return {
      // error: false,
      posts: [],
      users: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"],
      comments: []
    }
  },
  async fetch() {
    this.posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => res.json());
    this.comments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(res => res.json());
  },
  methods: {
    deleteComment() {}
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
