<template>
<main>
  <section class="wrapper" data-constrain="most">
    <h1>Your Feed</h1>
    <div class="feed flex col">
      <article class="grid post" v-for="post in pang" key="post.id">
        <header class="post__message">
          <div class="flex post__details">
            <p>{{ post.author }}</p>
            <p>Likes <span>{{ post.likes }}</span> | Dislikes <span>{{ post.dislikes }}</span></p>
          </div>
          <p>{{ post.body }}</p>
        </header>
        <div class="post__content">
          <img :src="post.img" :alt="post.title" />
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </div>
        <section class="comments">
          <div class="actions">
            <button @click="like(post)">Like</button>
            <button @click="dislike(post)">Dislike</button>
            <button @click="showComment(post)">Comment</button>
            <button @click="share(post)">Share</button>
          </div>
          <p class="share">
            <a :href="tweet" target="_blank" rel="noopener">Tweet This Bad Boy</a>
          </p>
          <div v-show="comment">
            <form>
              <label for="name">Your name:</label>
              <input id="name" type="text" maxlength="100">
              <label for="comment">Write your comment below:</label>
              <textarea id="comment" maxlength="300"></textarea>
              <button type="submit">Post Comment</button>
            </form>
            <p class="error" v-show="error">Oops! Please write a name (any name) and a comment.</p>
          </div>
          <article class="comment">
            <p class="small-text">New Name</p>
            <p>New Comment</p>
            <p class="small-text">New Time</p>
          </article>
        </section>
      </article>
      <FakeTwitter />
    </div>
  </section>
  <Friends />
</main>
</template>

<script>
export default {
  data() {
    return {
      pang: [{
          author: "The Onion",
          body: '“We want users to see accurate information on our platform, so we’re flagging disreputable sites like Facebook that often traffic in political propaganda for financial incentive.”',
          img: "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,q_80,w_1600/bm6u5slrzwlkoknftrty.jpg",
          title: "Facebook Cracking Down On Misinformation By Warning Users Who Share Links From Facebook",
          description: "MENLO PARK, CA—In an effort to slow the proliferation of fake news, tech giant Facebook announced plans Wednesday to crack down on misinformation by warning users who share links from Facebook.",
          likes: 0,
          dislikes: 0,
          comment: false,
          share: false,
          error: false,
          newName: '',
          newMessage: '',
          comments: []
        },
        {
          author: "Susan, Your Crazy Cousin",
          body: "Can you all smell the FAKE NEWS on this one?? I can!! Very bad!",
          img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          title: "People All Around The World Are Doing Stuff!",
          description: "To everyone's surprise, lots of stuff is happening. In this economy? Yes, even in this economy.",
          likes: 0,
          dislikes: 0,
          comment: false,
          share: false,
          error: false,
          newName: '',
          newMessage: '',
          comments: []
        },
        {
          author: "Former Classmate",
          body: "Beautiful! This man is a work of art!!",
          img: "https://images.unsplash.com/photo-1572609141402-a5538142051f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          title: "DJ Khaled Said Something You Won't Believe",
          description: "To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Learning is cool, but knowing is better, and I know the key to success. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. I’m up to something. Wraith talk. Fan luv. Fan luv. You smart, you loyal, you a genius.",
          likes: 0,
          dislikes: 0,
          comment: false,
          share: false,
          error: false,
          newName: '',
          newMessage: '',
          comments: []
        }
      ],
      highscore: 0,
      lowscore: 0,
      tweet: `https://twitter.com/compose/tweet?text=${encodeURIComponent(`Check out a new social media site made by @validcharacters https://pang.netlify.app`)}`
    }
  },
  async asyncData({
    $axios
  }) {
    const photos = await $axios.$get("photos?albumId=1");
    return {
      photos: photos,
    }
  },
  methods: {
    showComment(post) {
      post.comment = !post.comment;
    },
    postComment(post) {
      if (!post.newName || !post.newMessage) {
        post.error = true;
      } else {
        let currentTime = new Date();
        let amp = 'a.m.';
        let hours = currentTime.getHours();
        if (hours >= 12) {
          amp = "p.m."
        };
        if (hours > 12) {
          hours = hours - 12;
        };
        let minutes = currentTime.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        };
        post.comments.push({
          name: post.newName,
          comment: post.newMessage,
          time: `${hours}:${minutes} ${amp}`
        });
        post.newName = '';
        post.newMessage = '';
        post.error = false;
        post.comment = false;
      };
    },
    share(post) {
      post.share = !post.share;
    },
    like(post) {
      post.likes += 1;
    },
    dislike(post) {
      post.dislikes += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";

@media only screen and (min-width: 968px) {
    main {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
</style>
