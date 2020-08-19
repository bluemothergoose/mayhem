
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8 tips">
      <h1 class="my-4">Tips and tricks<img :src="require('@/assets/images/icons/menu/tips.png')"/></h1>
      <h2>Search syntax</h2>
      If you add a period to the start of your query, the text will be searched in spell descriptions in addition to their names.
    </div>
  </div>
</template>
<style>
.tips > h2 {
  margin-top: 20px;
}
</style>
<script>

export default {
  name: 'TipsPage',
  props: {
    app: Object
  },
  computed: {
  }
}
</script>
