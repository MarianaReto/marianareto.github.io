<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/skills">Skills</router-link>
      </li>
      <li>
        <router-link to="/works">Works</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact Me</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 10px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

li {
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>
