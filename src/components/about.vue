<template>
  <div class='about'>
    <h1>{{ msg }}</h1>
    Hello {{ $route.params.name }}</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped>

</style>
