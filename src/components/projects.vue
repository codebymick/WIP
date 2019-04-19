<template>
  <div class='projects'>
    <h1>{{msg}}</h1>
    Hello {{ $route.params.name }}
    <div class="site-holder" :class="$route.params.name"></div>
  </div>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      msg: 'hello again'
    }
  }
}
</script>

<style>
  .site-holder{
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    }
  /*.r3fresh{*/
    /*background:url('src/assets/logo.png');*/
    /*}*/
</style>
