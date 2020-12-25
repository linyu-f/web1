<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <My/> -->
    <student/>
  </div>
</template>

<script>
// import My from './components/My'
import student from './components/student'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // My
    student
  }
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
