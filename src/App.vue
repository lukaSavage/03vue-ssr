<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/abort">其他页面</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  display: flex;
  width: 600px;
  justify-content: space-between;
}
</style>
