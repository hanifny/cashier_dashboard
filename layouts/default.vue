<template>
  <div>
    <Header v-if="$auth.loggedIn" />
    <Sidebar v-if="$auth.loggedIn" />
    <Nuxt />
    <Footer v-if="$auth.loggedIn" />
  </div>
</template>

<style>

</style>

<script>
  export default {
    middleware: 'auth',
    head() {
      if (this.$auth.loggedIn) {
        return {
          bodyAttrs: {
            class: 'vertical-layout vertical-menu 2-columns fixed-navbar',
            'data-open': 'click',
            'data-menu': 'vertical-menu',
            'data-color': 'bg-gradient-x-purple-blue',
            'data-col': '2-columns'
          },
          link: [{
            href: 'https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i%7CComfortaa:300,400,700',
            rel: 'stylesheet'
          }],
          script: [
            {
              src: 'https://code.jquery.com/jquery-3.6.0.min.js',
              defer: true
            },
            {
              src: 'js/vendors/vendors.min.js',
              defer: true,
            },
            {
              src: 'js/core/app-menu.min.js',
              defer: true,
            },
            {
              src: 'js/core/app.min.js',
              defer: true,
            },
          ]
        }
      }
    },
  }
</script>