<template>
  <div id="app">
    <div class="wrapper">
      <div id="aside">
        <img
          class="avatar"
          alt="Avatar"
          src="./assets/img/avatar.jpg"
          width="200px"
        />
        <br />
        <h2>Josh-Cena</h2>
        <div id="nav">
          <ul>
            <!-- <li>
              <router-link to="/">Home</router-link>
            </li> -->
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/editor">Math editor</router-link>
            </li>
            <li>
              <router-link to="/music">Playlist</router-link>
            </li>
            <li>
              <router-link to="/blog">Blogs</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="section">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.avatar {
  border-radius: 50%;
}
#aside {
  float: left;
  background-color: white;
  padding: 30px;
  height: 100%;
  width: 260px;
  box-sizing: border-box;
  position: fixed;
}
#nav li {
  margin-top: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#section {
  margin-left: 340px;
  height: 100%;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
