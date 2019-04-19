<template>
  <div class='contact'>
    <h1>{{ msg }}</h1>
    Hello {{ $route.params.name }}</div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Contact'
    }
  }
}
</script>

<style scoped>

</style>
