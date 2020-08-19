
<template>
  <div class="row feats" v-if="query.text != null || query.class || query.level || query.category">
    <template v-if="!detailedModeOn">
      <div v-for="s in app.feats" v-show="visible(s)" :key="s.codename" :class="`feat col-12 ${panelIsOpen ? (s.codename == selectedFeat.codename ? 'selected' : '') : 'col-md-6 col-lg-4 col-xl-3'}`" @click="featClicked($event, s.codename)">
        <span class="level">{{ s.level }}</span>
        <img :src="icons.categoryIcon(s)" class="category"/> {{ s.name }}
      </div>
    </template>
    <template v-else>
      <div v-for="s in app.feats" v-show="visible(s)" :key="s.codename" class="feat col-12" @click="featClicked($event, s.codename)">
        <img v-for="c in ['hell', 'summoner', 'elemental', 'holy', 'derathian', 'sorcerer', 'angelic', 'vampire', 'mutation', 'evolution', 'dragon', 'spiritual', 'fury', 'all']" :src="icons.classIcon(c)" :class="s.classes.includes(c) ? '' : 'absent'"/>
        <img :src="require('@/assets/images/icons/misc/favorite.png')" :class="app.settings.favorites.has(s.codename) ? '' : 'absent'"/>
        <span class="level">{{ s.level }}</span>
        <img :src="icons.categoryIcon(s)" class="category"/>
        {{ s.name }}
      </div>
    </template>
  </div>
  <div v-else></div>
</template>

<script>
import Icons from '@/util/icons.js'
export default {
  name: 'FeatList',
  props: {
    app: Object,
    query: Object,
    panelIsOpen: Boolean,
    selectedFeat: Object,
    detailedModeOn: Boolean
  },
  computed: {
    icons: function() {
      return Icons;
    }
  },
  methods: {
    visible: function(feat) {
      if (this.query.class || this.query.level || this.query.category || this.query.favorites) {
        // Composite search (with filters)
        return (feat.codename.includes(this.query.text) || (this.query.includeDescription && feat.description.includes(this.query.text))) &&
          (!this.query.class || feat.classes.includes(this.query.class)) &&
          (!this.query.level || feat.level == this.query.level) &&
          (!this.query.category || feat.category == this.query.category) &&
          (!this.query.favorites || this.app.settings.favorites.has(feat.codename));
      } else {
        // Simple search (no filters)
        return this.query.text.length >= this.app.settings.minimumQueryLength && (feat.downcasedName.includes(this.query.text) || (this.query.includeDescription && feat.description.toLowerCase().includes(this.query.text)));
      }
    },
    featClicked: function(event, key) {
      if (!this.selectedFeat) {
        const div = event.currentTarget;
        setTimeout(() => div.scrollIntoView({behavior: "smooth", block: "center"}), 100);
      }
      this.$emit("feat-clicked", key);
    }
  }
}
</script>

<style>
  .feats {
    padding: 3px;
    font-size: 16px;
    line-height: 1;
    color: #eee;
  }
  .feat {
    text-align: left;
    background-color: #212020;
    border: 2px solid #1b1b1b;
    border-radius: 4px;
    padding: 2px 6px !important;
    cursor: pointer;
    overflow-y: hidden;
    height: 34px;
  }
  .feat:hover, .feat.selected {
    background-color: #272727;
    border-color: #212121;
  }
  .feat:hover .category, .feat.selected .category {
    transform: scale(1.05);
    filter: brightness(1.4);
  }
  .feat img {
    height: 26px;
    /*transition: transform 0.5s, filter 0.5s;*/
  }
  .level {
    font-size: 20px;
    width: 20px;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    color: #5a5a5a;
  }
  .scalable {

  }
  .absent {
    opacity: 0.1;
  }
  @media(max-width: 767px) {
    .feats { font-size: 20px; }
  }
</style>
