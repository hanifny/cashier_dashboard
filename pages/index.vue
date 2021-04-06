<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-wrapper-before"></div>
      <div class="content-header row">
      </div>
      <div class="content-body">
        <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        <div class="text-center mb-3 d-flex justify-content-between">
          <b-spinner v-for="variant in variants" :variant="variant" :key="variant"></b-spinner>
        </div>

        <div class="text-center d-flex justify-content-between">
          <b-spinner v-for="variant in variants" :variant="variant" :key="variant" type="grow"></b-spinner>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']
      }
    }
  }

</script>

<style>

</style>
