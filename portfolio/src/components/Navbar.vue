<template>
  <header class="navbar">
    <div class="navbar-left">
      <span class="name"> Mariana </span>
    </div>
    <div class="navbar-right">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/contact">Contact Me</router-link>
    </div>
  </header>
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

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.name {
  font-size: 1.5rem;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right router-link {
  color: white;
  text-decoration: none;
  margin-left: 10px;
}
</style>
