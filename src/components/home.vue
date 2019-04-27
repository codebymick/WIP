<template>
  <div class='hello'>
    <div class="title bigger">{{ title }}</div>
    <div class="title">{{ subline }}</div>
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
<style lang="scss">
  body{
    margin: 0;
    overflow: hidden;
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
    .title{
      font-weight: normal;
      &.bigger{
        margin-bottom: 25px;
        font-size: 1.5em;
         }
      }
  }
</style>
