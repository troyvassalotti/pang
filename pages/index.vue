<template>
<div class="home">
  <main>
    <section class="wrapper" data-constrain="most" id="feed">
      <h1>Your Feed</h1>
      <div class="feed flex col">
        <article class="grid post" v-for="post in pang" :key="pang.indexOf(post)">
          <header class="post__message">
            <div class="flex post__details">
              <p>{{ post.author }}</p>
              <p>Likes <span>{{ post.likes }}</span> | Dislikes <span>{{ post.dislikes }}</span></p>
            </div>
            <p>{{ post.body }}</p>
          </header>
          <div class="post__content">
            <img :src="require(`~/assets/img/${post.img}.jpg`)" :alt="post.title" />
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
          </div>
          <section class="comments">
            <div class="actions" data-buttons="4">
              <button @click="like(post)">Like</button>
              <button @click="dislike(post)">Dislike</button>
              <button @click="showComment(post)">Comment</button>
              <button @click="share(post)">Share</button>
            </div>
            <p class="share">
              <a :href="tweet" target="_blank" rel="noopener" v-show="post.share">Tweet This Bad Boy</a>
            </p>
            <div v-show="post.comment">
              <form @submit.prevent>
                <label for="name">Your name:</label>
                <input id="name" type="text" maxlength="100" v-model="post.newName" @keypress.enter="postComment(post)">
                <label for="comment">Write your comment below:</label>
                <textarea id="comment" maxlength="300" v-model="post.newMessage" @keypress.enter="postComment(post)"></textarea>
                <button type="submit" @click="postComment(post)">Post Comment</button>
              </form>
              <p class="error" v-show="post.error">
                Oops! Please write a name (any name) and a comment.</p>
            </div>
            <h3 v-show="post.comments.length > 0 || post.api && comments.length > 0">Comments</h3>
            <article class="comment" v-for="comment in comments" v-show="post.api">
              <p class="small-text"><b>{{ comment.email }}</b></p>
              <p>{{ comment.name }}</p>
            </article>
            <article class="comment" v-for="comment in post.comments">
              <p class="small-text"><b>{{ comment.name }}</b></p>
              <p>{{ comment.message }}</p>
              <p class="small-text">{{ comment.time }}</p>
            </article>
          </section>
        </article>
      </div>
    </section>
    <section class="wrapper" data-constrain="most" id="tweets">
      <h1>Tweets Around NotSocial</h1>
      <FakeTwitter />
    </section>
    <Friends />
  </main>
  <div class="overlays">
    <Overlay :scoreType="'lowscore'" :scoreMessage="`Wow... you really don't like my app? I'm sorry 😢`" v-show="lowscore === 25" />
    <Overlay :scoreType="'highscore'" :scoreMessage="`You just reached the high score! Keep Going!`" v-show="highscore === 50" />
    <Overlay :scoreType="'higherscore'" :scoreMessage="`Oh, okay! Haha, you're having fun! Awesome... Stop.`" v-show="highscore === 250" />
    <Overlay :scoreType="'highestscore'" :scoreMessage="`Please stop. I didn't code any more surprises. I'm serious.`" v-show="highscore === 500" />
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      pang: [{
          author: "The Onion",
          body: '“We want users to see accurate information on our platform, so we’re flagging disreputable sites like Facebook that often traffic in political propaganda for financial incentive.”',
          img: "feed1",
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
          img: "feed2",
          title: "People All Around The World Are Doing Stuff!",
          description: "To everyone's surprise, lots of stuff is happening. In this economy? Yes, even in this economy.",
          likes: 0,
          dislikes: 0,
          comment: false,
          share: false,
          error: false,
          newName: '',
          newMessage: '',
          comments: [],
          api: true
        },
        {
          author: "Former Classmate",
          body: "Beautiful! This man is a work of art!!",
          img: "feed3",
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
    const comments = await $axios.$get("comments?postId=1");
    return {
      comments: comments,
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
          message: post.newMessage,
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
      this.highscore += 1;
    },
    dislike(post) {
      post.dislikes += 1;
      this.lowscore += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";
main {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
}

#feed {
    grid-area: feed;
}

#tweets {
    grid-area: tweets;
}

@media only screen and (min-width: 1000px) {
    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "feed tweets" "friends tweets";

        section.wrapper {
            margin-top: 0;
        }
    }
}

@media only screen and (min-width: 1400px) {
    main {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "feed tweets friends";
    }
}
</style>
