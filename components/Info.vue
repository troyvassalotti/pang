<template>
<footer>
  <div class="wrapper" style="padding: 10px 0; text-align: center;">
    <h2>Pang: a New Type of Social Media</h2>
    <p>Thanks for using Pang; I hope you enjoyed your time here. Now, look at what you could be experiencing if you logged off right now.</p>
    <div class="grid activities">
      <img src="https://images.unsplash.com/photo-1544655120-8a026598b011?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img src="https://images.unsplash.com/photo-1544655120-8a026598b011?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img src="https://images.unsplash.com/photo-1582904786476-bb32f4779aa7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
      <img src="https://images.unsplash.com/photo-1586877773568-ca6dcf101456?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
    </div>
    <p>Created by <a href="https://troyv.dev/" target="_blank" rel="noopener">@troyvassalotti</a>. Got feedback? Let me know on <a href="https://github.com/troyvassalotti/pang" target="_blank" rel="noopener">Github</a>.</p>
    <p>Want to break this app? Press this button.</p>
    <div class="actions" data-buttons="1">
      <button @click="breakApp()">There's No Going Back</button>
    </div>
  </div>
</footer>
</template>

<script>
export default {
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
.activities {
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    padding: 5px;
}
</style>
