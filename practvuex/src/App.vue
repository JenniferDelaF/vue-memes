<template>
  <div class="container">
    <ListPokemons/>
  </div>
  <!--<router-view/>-->
</template>

<script>
//import { RouterView } from 'vue-router'
import ListPokemons from './components/ListPokemons.vue';

export default {
  name: 'App',
  components: {
    ListPokemons,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
