<template>
<p>{{ username }}</p>
</template>

<script>
export default {
  props: ["username"]
}
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: 85%;
}
</style>
