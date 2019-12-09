<template>
  <div id="app1 sub_app">
    this is app1 page
    <br />
    <!-- rootCount: {{ rootCount }} -->
    <!-- store: {{count}}
    <button @click="increment">add count</button> -->
    <br />
    <router-link to="/app1/about">about</router-link>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'App',
  computed: {
    // ...mapState({
    //   rootCount: state => state.rootModule.rootCount
    // })
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
