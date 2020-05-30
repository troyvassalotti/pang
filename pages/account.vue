<!-- <template>
<transition name="fade">
  <div class="overlay" v-show="account">
    <div class="popup account">
      <div class="account__options">
        <h2>Account Options</h2>
        <ol>
          <li><button class="non-button" @click="closeAccount">Close Account</button></li>
        </ol>
      </div>
      <button class="close-pop" @click="toggleAccount">
        <svg width="30" height="30">
          <path d="M5,5 25,25" />
          <path d="M5,25 25,5" />
        </svg>
      </button>
    </div>
  </div>
</transition>
</template>

// Keep this one a popup
<template>
<transition name="bounce">
  <div class="overlay closed" v-show="closed">
    <div class="account__closed">
      <h2>Thank you for closing your account!</h2>
      <p>We appreciate your time.</p>
      <p>If you would like to reopen your account, you can click the button below...</p>
      <p>But only if you <em>really, really</em> have to.</p>
      <button class="openAccount" @click="openAccount">
        Open Account
      </button>
    </div>
  </div>
</transition>
</template>

<script>
import Overlay from '~/components/Overlay.vue';

export default {
  components: {
    Overlay
  };
</script>

<style lang="scss" scoped>
.account {
    background: $red;
    color: $light;
}

.account__options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .non-button {
        color: $light;

        &:hover {
            color: $gold;
        }
    }

    h2 {
        margin: 0;
        font-size: inherit;
    }

    ol {
        margin: 0;
        padding: 0;
        list-style-position: inside;
    }
}

.closed {
    background: $black;
    color: $light;
}

.account__closed {
    padding: 1em;
}

.openAccount {
    border: none;
    background: $light;
    padding: 1em;
    font: {
        weight: bold;
        family: "Lora", serif;
    }
    color: $black;

    &:hover {
        background: $cobalt;
        color: $light;
    }
}
</style> -->
