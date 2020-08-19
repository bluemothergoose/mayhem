
<template>
  <b-modal id="helpModal" :title="topic">

    <div v-if="topic == 'classes'" class="row">
      <div v-for="c in app.classes" class="col-4 col-sm-4 capitalize">
        <img :src="icons.classIcon(c)"> {{ c }}
      </div>
    </div>

    <div v-if="topic == 'schools'" class="row">
      <div v-for="s in app.schools" class="col-4 capitalize">
        <img :src="icons.schoolIcon({school:s})"> {{ s }}
      </div>
    </div>

    <div slot="modal-footer" class="w-100">
      <b-button variant="primary" size="sm" class="float-right" @click="$bvModal.hide('helpModal')">Close</b-button>
    </div>
  </b-modal>
</template>
<script>
import Icons from '@/util/icons.js'

export default {
  name: 'HelpModal',
  props: {
    app: Object,
    topic: String
  },
  computed: {
    icons: function() {
      return Icons;
    }
  }
}
</script>
<style>
  #helpModal img {
    width: 30px;
  }
  #helpModal .modal-title {
    text-transform: capitalize;
  }
  #helpModal .capitalize {
    text-transform: capitalize;
    padding-top: 5px;
    padding-right: 5px;
  }
</style>
