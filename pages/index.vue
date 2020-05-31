<template>
<section class="theGoodStuff">
  <div class="theGoodStuff__main">
    <main class="feed">
      <header>
        <h1>Your Feed</h1>
      </header>
      <div class="feed__container">
        <section class="feed__item" v-for="article in feed">
          <header class="feed__header">
            <div class="counter__container">
              <p class="poster timestamp">{{article.author}}</p>
              <p class="poster timestamp">Likes <span class="counter">{{article.likes}}</span> | Dislikes <span class="counter">{{article.dislikes}}</span></p>
            </div>

            <!-- With all the conditional classes, etc -->
            <!-- <Overlay /> -->

            <p class="poster__text">{{article.text}}</p>
          </header>
          <hr>
          <article class="feed__article">
            <img class="feed__article-image" :src="article.img" alt=''>
            <h2>{{article.title}}</h2>
            <p>{{article.description}}</p>
          </article>

          <!-- User Actions -->
          <!-- <UserActions /> -->

        </section>
      </div>
    </main>

    <!-- Friends -->
    <Friends />
  </div>

  <!-- Info -->
  <!-- <Info /> -->

</section>
</template>

<script>
import Friends from '~/components/Friends.vue';
// import Info from '~/components/Info.vue';
// import Overlay from '~/components/Overlay.vue';
// import UserActions from '~/components/UserActions.vue';

export default {
  components: {
    Friends
  },
  head() {
    return {
      title: 'Pang | A New Type of Social Media',
      meta: [{
          hid: "description",
          name: 'description',
          content: 'Welcome to Pang: a new type of social media where it\'s just you and only you.'
        },
        {
          name: 'twitter:title',
          content: 'Pang | A New Type of Social Media'
        },
        {
          name: 'twitter:description',
          content: 'Welcome to Pang: a new type of social media where it\'s just you and only you.'
        },
        {
          name: 'twitter:image',
          content: '~/assets/img/pang.png'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_globals";

#app {
    width: 100%;
    display: grid;
    place-items: center;
}

.theGoodStuff {
    padding: 0.5vw;
}

.timestamp {
    font-size: 85%;
}

.feed__container {
    display: grid;
    gap: 2em;
}

.feed__item {
    padding: 0.5em 0.5em 1.5em;
    background: $grayDark;
    border-radius: 1em;
    display: grid;
    gap: 1em;
    max-width: 600px;
}

.feed__article {
    background: rgba(222,224,225,.5);
    box-shadow: 0 0 5px 5px rgba(159,161,165, 1);
    border-radius: 0.5em;
    padding: 0.5em;

    h2 {
        margin-bottom: 0;
    }

    p {
        margin: {
            top: 0.5em;
            bottom: 0.5em;
        }
    }
}

.feed__article-image {
    margin: auto;
}

.counter__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.counter {
    color: $black;
    background: $light;
    padding: 2px 4px;
    border-radius: 50%;
    font-size: 80%;
    font-family: "Lora", serif;
}

@media (min-width: 768px) {
    .theGoodStuff__main {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 1em;
        place-items: baseline;
    }
}

@media (min-width: 1100px) {
    .theGoodStuff {
        display: flex;
        flex-direction: row-reverse;
        align-items: baseline;
        justify-content: space-evenly;
        width: 99%;
        padding: 0;
    }
}
</style>
