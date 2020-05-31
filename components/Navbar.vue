<!-- 2. The newsfeed button should link to the homepage if it currently isn't the homepage. Otherwise, it should scroll up to the top if it is the homepage. -->

<template>
<header class="header">
  <div class="nav__main">
    <div id="logo">
      <img src="~/assets/img/pang_57x57.png" width="44" height="44">
    </div>
    <nav class="nav__primary">
      <ul>
        <li>
          <button class="non-button">
            <font-awesome-icon :icon="['far', 'newspaper']" class="fa-2x" />
          </button>
        </li>
        <nuxt-link to="/games/">
          <li>
            <button class="non-button">
              <font-awesome-icon :icon="['fas', 'gamepad']" class="fa-2x" />
            </button>
          </li>
        </nuxt-link>
        <nuxt-link to="/messages/">
          <li>
            <button class="non-button">
              <font-awesome-icon :icon="['far', 'comments']" class="fa-2x" />
            </button>
          </li>
        </nuxt-link>
      </ul>
    </nav>
    <nav class="nav__secondary">
      <ul>
        <nuxt-link to="/account/">
          <li>
            <button class="non-button">
              <font-awesome-icon :icon="['far', 'user']" class="fa-2x" />
            </button>
          </li>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/_globals";

#logo {
    justify-self: start;

    img {
        max-width: 44px;
    }
}

.header {
    width: 100%;
    border-bottom: 2px solid $black;
    background: $light;
    position: sticky;
    top: 0;

    ul {
        list-style: none;
    }
}

.nav__main {
    padding: {
        top: 0.5em;
        bottom: 0.5em;
    }
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    place-items: center;
    width: 95%;
    margin: auto;

    ul {
        padding: 0;
        margin: 0;
    }
}

.nav__primary {
    width: 50%;
    max-width: 400px;
    min-width: 200px;

    ul {
        display: flex;
        justify-content: space-evenly;
        align-content: center;
        width: 100%;
    }
}

.nav__secondary {
    justify-self: end;
}
</style>
