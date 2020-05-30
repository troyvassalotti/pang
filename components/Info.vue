<template>
<aside class="info">
  <h2>Pang: a New Type of Social Media</h2>
  <div class="info__text">
    <p class="poster">Thanks for using Pang; I hope you enjoyed your time here.</p>
    <p>Created by <a href="https://troyv.dev/" target="_blank" rel="noopener">@troyvassalotti</a>. Got feedback? Let me know! <a href="https://twitter.com/lowercasetroy" target="_blank" rel="noopener">@lowercasetroy</a> on Twitter.</p>
    <p>Now, look at what you could be experiencing if you logged off right now.</p>
  </div>
  <div class="gallery">
    <img src='https://images.unsplash.com/photo-1544655120-8a026598b011?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    <img src='https://images.unsplash.com/photo-1581172051143-14dee6995034?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    <img src='https://images.unsplash.com/photo-1582904786476-bb32f4779aa7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
    <img src='https://images.unsplash.com/photo-1586877773568-ca6dcf101456?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''>
  </div>
</aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
    border: 2px solid $black;
    padding: {
        left: 1em;
        right: 1em;
    }
    margin-top: 1em;
    border-radius: 1em;
    background: rgba(222, 224, 225, 1);
}

.gallery {
    display: grid;
    place-items: start;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1em;
    padding: 5px;
}

@media (min-width: 768px) {
    .gallery {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (min-width: 1100px) {
    .info {
        max-width: 350px;
        margin-right: 1.5em;
    }
}
</style>
