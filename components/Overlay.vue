<!-- 1. might need to update the color styles to not be SASS variables
2. will need the classes to be conditional

<template>
<transition name="bounce">
  <div class="overlay" v-show="article.highscore">
    <div class="popup highscore">
      You just reached the high score! Keep Going!
      <button class="close-pop" @click="closeHighscore(article)">
        <svg width="30" height="30">
          <path d="M5,5 25,25" />
          <path d="M5,25 25,5" />
        </svg>
      </button>
    </div>
  </div>
</transition>
</template>

<template>
<transition name="bounce">
  <div class="overlay" v-show="article.lowscore">
    <div class="popup lowscore">
      Wow... you really don't like this one, huh? I'm sorry 😢
      <button class="close-pop" @click="closeLowscore(article)">
        <svg width="30" height="30">
          <path d="M5,5 25,25" />
          <path d="M5,25 25,5" />
        </svg>
      </button>
    </div>
  </div>
</transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(50, 50, 50, .5);
    display: grid;
    place-items: center;
}

.popup {
    padding: 2em 1em;
    border-radius: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150%;

    button {
        background: transparent;
        border: none;

        > svg {
            stroke-width: 3;
            stroke: $light;
        }
    }
}

.highscore {
    background: $red;
    color: $light;
}

.lowscore {
    background: $blue;
    color: $light;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}
</style> -->
