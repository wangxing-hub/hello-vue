<template>
  <div class="home">
    <h1>hello</h1>
    
    <router-link to="/todoList">跳转到todoList</router-link><br>
    
    <!-- <el-button type="primary">Primary</el-button><br> -->
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'homePage',
  components: {
  }
}
</script>

<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
