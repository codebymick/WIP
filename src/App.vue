<template>
  <div id='app'>
    <div class="navbar">
      <div class="left-side">
        <router-link to='/'>
          <div class='brand'></div>
        </router-link>
      </div>
      <div class="right-side">
        <ul>
          <li>
            <router-link to='/projects'>Themes</router-link>
            <ul>
              <li>
                <router-link to='/mikipedia'>mikipedia</router-link>
              </li>
              <li>
                <router-link to='/google'>google</router-link>
              </li>
              <li>
                <router-link to='/atari'>atari</router-link>
              </li>
              <li>
                <router-link to='/ebay'>ebay</router-link>
              </li>
              <li>
                <router-link to='/amazon'>amazon</router-link>
              </li>
              <li>
                <router-link to='/twitter'>twitter</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link class='' to='/about'>about</router-link>
          </li>
          <li>
            <router-link class='' to='/now'>now</router-link>
          </li>
          <li>
            <router-link class='' to='/contact'>contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // something here
  }
}
</script>

<style lang="scss">
  .full-height{
    height: 100%;
  }
  .border-red {
    border: 1px solid red;
  }

  .border-black {
    border: 1px solid black;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 70px;
  }

  .navbar {
    position: fixed;
    width: 100vw;
    z-index: 999;
    background-color: white;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    padding: 5px 40px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: white;
      z-index: 999;

      li {
        display: block;
        position: relative;
        float: left;
        font-weight: 700;

        a {
          display: block;
          padding: 1em;
          text-decoration: none;
          white-space: nowrap;
          border: 2px solid transparent;
          border-radius: 15px;

          &:hover {
            background: #F26421;
            color: whitesmoke
          }
        }

        ul {
          display: none;
        }
      }
    }

    li:hover > ul {
      display: block;
      position: absolute;
    }

    li:hover li {
      float: none;
    }

    li:hover li a:hover {
      border-color: #F26421;
    }

    a.no-link {
      pointer-events: none !important;
    }

    .main-navigation li ul li {
      border-top: 0;
    }

    ul ul ul {
      left: 100%;
      top: 0;
    }

    ul:before,
    ul:after {
      content: " "; /* 1 */
      display: table; /* 2 */
    }

    ul:after {
      clear: both;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .brand {
      background: url('./assets/logo.png') no-repeat center center/cover;
      height: 40px;
      width: 40px;
      content: '';
    }
  }

</style>
