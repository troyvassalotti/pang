<template>
<div class="user__actions">
  <button @click="like(article)">Like</button>
  <button @click="dislike(article)">Dislike</button>
  <button @click="showComment(article)">Comment</button>
  <button @click="showShare(article)">Share</button>
</div>
<div class="share" v-show="article.share">
  <p><a :href="tweet" target="_blank" rel="noopener"><i class="fab fa-twitter fa-2x"></i> Tweet this Bad Boy</a></p>
</div>
<form v-show="article.comment" class="user__comment-form" @submit.prevent>
  <label for="name">Your Name (for fun):</label>
  <input @keypress.enter="postComment(article)" id="name" type="text" maxlength="100" v-model="article.newName">
  <label for="comment">Write your comment below:</label>
  <textarea id="comment" maxlength="300" v-model="article.newComment" @keypress.enter="postComment(article)"></textarea>
  <button type="submit" @click="postComment(article)">Post Comment</button>
</form>
<p class="error" v-show="article.error">Oops! Please put a name and comment.</p>
<article class="user__comment" v-for="comment in article.comments">
  <p class="poster__text timestamp">{{comment.name}}</p>
  <p class="poster__text">{{comment.comment}}</p>
  <footer class="user__comment-footer">
    <p class="poster__text timestamp">{{comment.time}}</p>
  </footer>
</article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_globals";

.user__actions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;

    button {
        font: {
            size: 82%;
            family: "Fira Sans", sans-serif;
        }

        padding: 0.75em 1em;
        border-radius: 0.5em;
        background: $red;
        color: $light;
    }
}

.error {
    color: $red;
}

.share {
    display: grid;
    place-items: center;

    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: $black;

        &:hover {
            color: $blue;
        }
    }
}

.user__comment-form {
    display: flex;
    flex-direction: column;

    button[type="submit"] {
        width: max-content;
    }

    #comment,
    #name {
        margin: 0.5em 0;
    }

    #comment {
        resize: none;
    }
}

.user__comment {
    border-radius: 1.5em;
    background: $grayLight;
    padding: 0.5em 1em;
}
</style>
