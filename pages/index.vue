<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-wrapper-before"></div>
      <div class="content-header row">
      </div>
      <div class="content-body">
        <b-card class="bg-black">
          <div ref="tableau"></div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [{
            src: 'https://online.tableau.com/javascripts/api/tableau-2.7.0.min.js',
            defer: true
          },
          {
            src: 'https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js',
            defer: true
          }
        ]
      }
    },
    data() {
      return {
        url: "https://public.tableau.com/views/RealData-Maps/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link",
        options: {
          hideTabs: true,
          width: '100%',
          height: "700px",
        }
      }
    },
    methods: {
      initViz: function () {
        let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);
      }
    },
    mounted: function () {
      this.initViz()
    }
  }

</script>
<style>

</style>
