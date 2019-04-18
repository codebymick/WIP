<template>
  <div class='hello'>
    <h1>{{ title }}</h1>
    <h3>{{ subline }}</h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Mick White',
      subline: 'Web Developer'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  body{
    margin: 0;
    overflow: hidden;
    }
  h1, h3 {
    font-weight: normal;
    margin: 0 auto;
    }
  h3{
    margin-top: 25px;
    font-size: 1.35em;
    }
  .hello{
    display: flex;
    pointer-events: none;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    margin: 0 auto;
    font-size: 7vw;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    }

</style>
