<template>
<header>
  <img src="~/assets/img/pang_57x57.png" width="44" height="44">
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          <font-awesome-icon :icon="['far', 'newspaper']" class="fa-2x" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/games/">
          <font-awesome-icon :icon="['fas', 'gamepad']" class="fa-2x" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/messages/">
          <font-awesome-icon :icon="['far', 'comments']" class="fa-2x" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/account/">
          <font-awesome-icon :icon="['far', 'user']" class="fa-2x" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</header>
</template>

<style lang="scss" scoped>
// @import "~/assets/css/_globals";
</style>
