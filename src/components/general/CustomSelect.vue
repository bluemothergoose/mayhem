
<template>
  <div class="cs" v-on-clickaway="close">
    <div class="cs-field" @click="open = !open">
      <img v-if="selectedOption.image" v-show="value != ''" class="cs-field-icon" :src="selectedOption.image"/> {{ selectedOption.text || selectedOption.value }}
    </div>
    <div :class="`cs-options ${ align == 'right' ? 'cs-right' : ''}`" v-show="open">
      <div v-for="option in options" @click="choose(option.value)" class="cs-option">
        <img v-if="selectedOption.image" class="cs-option-icon" :src="option.image"/> {{ option.text || option.value }}
      </div>
    </div>
  </div>
</template>
<style>
  .cs {
    position: relative;
    user-select: none;
  }
  .cs-field {
    height: 40px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    transition: border-color 0.5s;
    text-transform: capitalize;
    overflow-x: hidden;
    white-space: nowrap;
  }
  .cs-field:hover {
    border-color: #ddd;
  }
  .cs-options {
    background-color: #2b2b2b;
    border: 2px solid #313131;
    border-radius: 3px;
    position: absolute;
    width: 100%;
    text-transform: capitalize;
    z-index: 100;
    min-width: 200px;
    max-height: 600px;
    overflow-x: scroll;
  }
  .cs-right {
    right: 0;
  }
  .cs-option {
    padding: 4px 5px;
    border-bottom: 1px solid #444;
    cursor: pointer;
    min-height: 38px;
    line-height: 29px;
  }
  .cs-option:hover {
    background-color: #2f2f2f;
  }
  .cs-field-icon {
    width: 22px;
  }
  .cs-option-icon {
    width: 24px;
  }
</style>
<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'CustomSelect',
  props: {
    value: String,
    options: Array,
    align: String
  },
  data: () => { return {
    open: false
  }},
  computed: {
    selectedOption() {
      return this.options.find(o => o.value == this.value) || this.options.find(o => !o.value);
    }
  },
  methods: {
    choose(value) {
      this.$emit('input', value);
      this.open = false;
    },
    close() {
      this.open = false;
    }
  },
  mixins: [ clickaway ]
}
</script>
