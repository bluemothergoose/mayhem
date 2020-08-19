
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 about">
      <h1 class="my-4">About<img :src="require('@/assets/images/logo/logo64.png')" style="filter: contrast(0) brightness(0.8)"/></h1>
      <div class="row">
        <div class="col-12 col-md-4 about-image" :style="{ backgroundImage: `url(${require('@/assets/images/logo/logo_large.png')})`}">
        </div>
        <div class="col-12 col-md-8">
          <h2>MayhemSpells {{ app.version }}</h2>
          <p>This project is open-source and released under <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank">GNU AGPL v3</a>. </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .about-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 256px;
  }
</style>
<script>

export default {
  name: 'AboutPage',
  props: {
    app: Object
  }
}
</script>
