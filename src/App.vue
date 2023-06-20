<template>
  <div class="app">
    <div class="navbar">
      <div class="logo">Note App</div>
      <div class="links">
        <router-link to="/" class="links_item">Home</router-link>
        <router-link to="/notes" class="links_item">Notes</router-link>
      </div>
    </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=DM+Sans&family=Montserrat&family=Merriweather+Sans&family=Poppins:wght@600;700&display=swap);
body {
  overflow-y: scroll;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
  text-decoration: none;
}

button,
svg {
  cursor: pointer;
}
</style>

<style lang="scss" scope>
.app {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 15px 150px;
    box-shadow: 0 0 5px rgb(175, 175, 185);
    background: #fff;
    margin-bottom: 25px;
  
    .logo {
      font-size: 20px;
      font-weight: 600;
    }
  
    .links {
      display: flex;
      justify-content: space-between;
      min-width: 200px;
  
      &_item {
        font-size: 16px;
        color: rgb(50, 50, 225);
      }
    }
  }
}
</style>
