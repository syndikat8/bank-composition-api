<template>
  <nav class="navbar">
    <h3>Online Bank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Applications</router-link>
      </li>
      <li>
        <router-link to="/">Help</router-link>
      </li>
      <li>
        <a href="#">Messages</a>
      </li>
      <li>
        <a href="#">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>