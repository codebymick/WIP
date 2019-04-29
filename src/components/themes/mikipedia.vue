<template>
  <div class='mikipedia container'>
    <div class="row">
      <div class="col-md-2">
        <div id="aside">
          <div id="p-logo">
            <a class="miki-logo spin" href=""></a>
          </div>
          <div>
            <div class="body">
              <ul>
                <li><a href="">Main page</a></li>
                <li><a href="">Contents</a></li>
                <li><a href="">Featured content</a></li>
                <li><a href="">Current events</a></li>
                <li><a href="">Random article</a></li>
                <li><a href="">Donate to Wikipedia</a></li>
                <li><a href="">Wikipedia store</a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li class="subtitle">Interaction</li>
            </ul>
            <div class="body">
              <ul>
                <li><a href="">Help</a></li>
                <li><a href="">About Wikipedia</a></li>
                <li><a href="">Community portal</a></li>
                <li><a href="">Recent changes</a></li>
                <li><a href="">Contact page</a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li class="subtitle">Tools</li>
            </ul>
            <div class="body">
              <ul>
                <li><a href="">What links here</a></li>
                <li><a href="">Related changes</a></li>
                <li><a href="">Upload file</a></li>
                <li><a href="">Special pages</a></li>
                <li><a href="">Permanent link</a></li>
                <li><a href="">Page information</a></li>
                <li><a href="">Wikidata item</a></li>
                <li><a href="">Cite this page</a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li class="subtitle">Print/export</li>
            </ul>
            <div class="body">
              <ul>
                <li><a href="">Create a book</a></li>
                <li><a href="">Download as PDF</a></li>
                <li><a href="">Printable version</a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li class="subtitle">In other projects</li>
            </ul>
            <div class="body">
              <ul>
                <li><a href="">Wikimedia Commons</a></li>
                <li><a href="">Wikinews</a></li>
                <li><a href="">Wikiquote</a></li>
                <li><a href="">Wikisource</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content" class="col-md-10">
        <div id="tab-row">
          <ul class="left-tabs">
            <li @click="active = 'article'" class="file-tab" :class="{active:active === 'article'}">article</li>
            <li @click="active = 'talk'" class="file-tab" :class="{active:active === 'talk'}">talk</li>
          </ul>
          <ul class="right-tabs">
            <li @click="active = 'read'" class="file-tab" :class="{active:active === 'read' || active === 'article'}">read</li>
            <li @click="active = 'view-source'" class="file-tab" :class="{active:active === 'view-source'}">view-source</li>
            <li @click="active = 'view-history'" class="file-tab" :class="{active:active === 'view-history'}">view-history</li>
            <li><a href="">search Mikipedia</a></li>
          </ul>
        </div>
        <div class="row content-body">
          <div class="col-md-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="col-md-3">
            <img class="auto-size" src="https://via.placeholder.com/150x350" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mikipedia',
  data () {
    return { active: 'article' }
  }
}
</script>

<style scoped lang="scss">
  .container {
    background-color: #F6F6F6;
    margin: 0;
    padding: 0 1.35em;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: sans-serif;
  }

  #main-content {
    border-left: 1px solid #a7d7f9;
    background-color: white;
    padding-left: 0;

    #tab-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .left-tabs, .right-tabs {
        display: flex;
        flex-direction: row;
      }
      .left-tabs{
        li{
          &:first-of-type{
            border-left: 1px solid transparent;}
        }
      }
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        border: 1px solid #a7d7f9;
        padding-left: 0.615em;
        padding-right: 0.615em;
        color: #0645ad;
        cursor: pointer;
        font-size: 0.8125em;
        &.active{
          border-bottom: none;
        }
      }
    }
    .content-body{
      padding-left: 15px;
      text-align: left;
    }
  }

  #aside {
    line-height: 1.125em;
    font-size: 0.75em;
    overflow-wrap: break-word;
    margin: 0 0.6em 0 0.7em;
    padding: 0.25em 0;

    .miki-logo {
      background: url('../../assets/miki/mikilogo.png') no-repeat top left/contain;
      height: 155px;
      width: auto;
      display: block;
    }

    .body {
      margin-left: 0.5em;
      padding-top: 0;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAABCAAAAAAphRnkAAAAJ0lEQVQIW7XFsQEAIAyAMPD/b7uLWz8wS5youFW1UREfiIpH1Q2VBz7fGPS1dOGeAAAAAElFTkSuQmCC);
      background-repeat: no-repeat;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;

      li {
        text-align: left;
        line-height: 1.125em;
        margin: 0;
        padding: 0.25em 0;
        /*font-size: 0.75em;*/
        word-wrap: break-word;

        &.subtitle {
          color: #444444;
        }

        a {
          color: #0645ad;

          &:visited {
            color: #0b0080;
          }
        }
      }
    }

  }
</style>
