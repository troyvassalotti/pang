<template>
<transition name="bounce">
  <div class="overlay" v-show="visible">
    <aside class="popup" :id="scoreType">
      <h2>{{ scoreMessage }}</h2>
      <button class="close-pop" @click="closeOverlay()" aria-label="Close This Popup Window">
        <svg width="30" height="30">
          <path d="M5,5 25,25" />
          <path d="M5,25 25,5" />
        </svg>
      </button>
    </aside>
  </div>
</transition>
</template>

<script>
export default {
  props: ["scoreType", "scoreMessage"],
  data() {
    return {
      visible: true
    }
  },
  methods: {
    closeOverlay() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/_globals.scss";
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
    padding: 2rem 1rem;
    border-radius: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        background: transparent;
        border: none;

        > svg {
            stroke-width: 3;
            stroke: $rich-black-fogra-29;
        }
    }
}

#lowscore {
    background: $french-bistre;
    color: $alice-blue;
}

#highscore {
    background: $star-command-blue;
    color: $eggshell;
}

#higherscore {
    background: orangered;
    color: whitesmoke;
}

#highestscore {
    background: gold;
    color: $rich-black-fogra-29;
}
</style>
