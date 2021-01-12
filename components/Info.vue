<template>
<footer>
  <div class="wrapper">
    <img class="logo" src="~/assets/img/notsocial-logo.png" alt="NotSocial" width="200" height="200">
    <h2>NotSocial: a New Type of Social Media</h2>
    <p>Thanks for using NotSocial; I hope you enjoyed your time here. Now, look at all these great dogs.</p>
    <div class="grid activities">
      <img :src="image" alt="A picture of a great dog from the Dog CEO API" v-for="image in images.message">
    </div>
    <p>Created by <a href="https://www.troyv.dev/" target="_blank" rel="noopener">@troyvassalotti</a>. Got feedback? Let me know on <a href="https://github.com/troyvassalotti/pang" target="_blank" rel="noopener">Github</a>.</p>
    <p>Want to break this app? Press this button.</p>
    <div class="actions" data-buttons="1">
      <button @click="breakApp()">There's No Going Back</button>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  async fetch() {
    this.images = await fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(res => res.json());
  },
  methods: {
    breakApp() {
      const app = document.getElementById("app");
      app.classList.toggle("oops");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals";
footer {
    margin: {
        top: auto;
    }
}

.wrapper {
    padding: 10px 0;
    text-align: center;

    h2 {
        margin: revert;
    }

    img.logo {
        width: 100%;
        height: 100%;
        max-width: 250px;
    }
}
.activities {
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 5px;
}
</style>
