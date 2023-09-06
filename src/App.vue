<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/oprojektu" class="nav-link">O projektu</router-link>
      <router-link to="/chuck-norris" class="nav-link">Chuck Norris</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  background-color: #007bff;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
