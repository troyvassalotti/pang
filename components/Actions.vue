<template>
<section>
  <div>
    <button>Like</button>
    <button>Dislike</button>
    <button>Comment</button>
    <button>Share</button>
  </div>
  <p>
    <a :href="tweet" target="_blank" rel="noopener">Tweet this Bad Boy</a>
  </p>
  <form>
    <label for="name">Your name:</label>
    <input id="name" type="text" maxlength="100">
    <label for="comment">Write your comment below:</label>
    <textarea id="comment" maxlength="300"></textarea>
    <button type="submit">Post Comment</button>
  </form>
  <p>Oops! Please put a name and comment.</p>
  <article class="comment">
    <p>New Name</p>
    <p>New Comment</p>
  </article>
</section>
</template>

<script>
export default {
  data() {
    return {
      tweet: `https://twitter.com/compose/tweet?text=${encodeURIComponent(`Check out a new social media site made by @validcharacters https://pang.netlify.app`)}`
    }
  }
}
</script>
