<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/skills">Skills</router-link></li>
      <li><router-link to="/experience">Experience</router-link></li>
      <li><router-link to="/contacts">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// No logic needed right now
</script>
<style scoped>
.navbar {
  background-color: #153e6b;
  padding: 15px;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-list a {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.nav-list a.router-link-exact-active {
  text-decoration: underline;
}
</style>

