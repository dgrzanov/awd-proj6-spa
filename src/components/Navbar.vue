<template>
  <nav>
    <router-link to="/">Page One</router-link> |
    <router-link to="/stranica2">Page Two</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}

router-link {
  text-decoration: none;
  color: #333;
}
</style>
