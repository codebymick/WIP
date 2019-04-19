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
          <li><router-link to='/projects'>Projects</router-link>
            <ul>
              <li><a class="no-link" href="">javascript</a>
                <ul>
                  <li>
                    <router-link to='/projects/r3fresh'>r3fresh</router-link>
                  </li>
                  <li>
                    <router-link to='/projects/magicSwitcher'>magic switcher</router-link>
                  </li>
                  <li>
                    <router-link to='/projects/spaceInvaders'>space invaders</router-link>
                  </li>
                </ul>
              </li>
              <li><a class="no-link" href="">wordpress</a>
                <ul class='sub-sub-list'>
                  <li>
                    <router-link to='/projects/tansomStudios'>tansom studios</router-link>
                  </li>
                  <li>
                    <router-link to='/projects/horaserwegInnitiativ'>horaserweg innitiativ</router-link>
                  </li>
                  <li>
                    <router-link to='/projects/agmicom'>agmicom design house</router-link>
                  </li>
                </ul>
              </li>
              <li><a class="no-link" href="">vue</a>
                <ul class='sub-sub-list'>

                  <li>
                    <router-link to='/projects/agmicom'>agmicom design house</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><router-link class='' to='/about'>about</router-link>
          </li>
          <li><router-link class='' to='/contact'>contact</router-link></li>
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    padding: 10px 40px;
    }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;
    z-index:999;
    }

  ul li {
    display: block;
    position: relative;
    float: left;
    font-weight: 700;
    }

  li ul { display: none; }

  ul li a {
    display: block;
    padding: 1em;
    text-decoration: none;
    white-space: nowrap;
    border:2px solid transparent;
    border-radius:15px;
    }

  ul li a:hover {
    background: #2c3e50;
    color:whitesmoke}

  li:hover > ul {
    display: block;
    position: absolute;
    }

  li:hover li {
    float: none;
    }

  li:hover li a:hover { border-color: #2c3e50; }
a.no-link{
  pointer-events: none!important;
  }
  .main-navigation li ul li { border-top: 0; }
  ul ul ul {
    left: 100%;
    top: 0;
    }
  ul:before,
  ul:after {
    content: " "; /* 1 */
    display: table; /* 2 */
    }

  ul:after { clear: both; }

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
</style>
