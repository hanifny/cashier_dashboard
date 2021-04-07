<template>
  <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true" data-img="images/backgrounds/04.jpg">
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="~/static/images/logo/logo.png" />
            <h3 class="brand-text">Chameleon</h3>
          </a></li>
        <li class="nav-item d-md-none"><a class="nav-link close-navbar"><i class="ft-x"></i></a></li>
      </ul>
    </div>
    <div class="navigation-background"></div>
    <div class="main-menu-content">
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li :class="{'hover': path == 'index'}" class="nav-item"><b-link href="/"><i class="ft-home"></i><span class="menu-title" data-i18n="">Dashboard</span></b-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        path: this.$route.name
      }
    },
  }

</script>

<style>

</style>
