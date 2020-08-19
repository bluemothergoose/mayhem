
<template>
  <div class="feat-details">
    <div class="feat-head">
      <img :src="icons.categoryIcon(feat)" class="feat-category" @click="helpFor('categories')" title="Category (click for more)"/>
      <div class="feat-title">
        <div class="feat-name">{{ feat.name }}</div>
        <div class="feat-type">{{ prettyLevel }} {{ feat.category }}</div>
      </div>
      <div class="feat-actions">
        <div class="feat-close d-none d-md-block" @click="$emit('clear-feat')">
          <img :src="require('@/assets/images/icons/misc/close.png')"/>
        </div>
        <div :class="`feat-favorite ${favorited() ? 'favorited' : ''}`" @click="favoriteFeat">
          <img :src="require('@/assets/images/icons/misc/favorite.png')"/>
        </div>
      </div>
    </div>
    <div class="row feat-features">
      <div class="col-6 col-lg-4 col-xl-3">
        <div @click="helpFor('classes')" title="Classes (click for more)">
          <img v-for="icon in icons.classIcons(feat)" :src="`${icon}`" :key="icon"/>
        </div>
        <template v-if="feat.concentration"><img :src="require('@/assets/images/icons/spell_features/concentration.png')" title="Feat requires concentration"/> Concentration<br/></template>
        <template v-if="feat.ritual" title="Feat can be cast as ritual"><img :src="require('@/assets/images/icons/spell_features/ritual.png')"/> Ritual</template>
      </div>
      <div class="col-6 col-lg-4 col-xl-3">
        <div title="Which book/source this feat originates from">
          <img :src="require('@/assets/images/icons/spell_features/source.png')"/> {{ feat.source }}
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-4 col-xl-6">
        <div v-if="feat.material > 0" title="Materials" v-html="feat.materials"></div>
      </div>
    </div>
    <div class="feat-description" v-html="prettyDescription"></div>
    <div v-if="feat.cost" v-html="prettyCost" class="feat-description">
    </div>
    <div v-if="feat.damage" v-html="prettyDamage" class="feat-description">
    </div>
    <div class="feat-description" v-if="feat.effect" v-html="prettyEffect"></div>
    <div v-if="feat.atHigherLevel" v-html="prettyHigherLevel" class="feat-higher">
    </div>
    <div class="d-block d-lg-none mobile-foot">
      <img :src="require('@/assets/images/icons/spell_features/source.png')" title="Which book/source this feat originates from"/> {{ feat.source }}<br/>
      <div v-if="feat.material > 0" title="Materials" v-html="prettyMaterials"></div>
    </div>
    <HelpModal :app="app" :topic="helpTopic"/>
  </div>
</template>

<script>
import HelpModal from './HelpModal.vue'
import Icons from '@/util/icons.js'
import TextBeautifier from '@/util/textBeautifier.js'

export default {
  name: 'FeatView',
  components: {
    HelpModal
  },
  data: () => { return {
    helpTopic: null
  }},
  props: {
    app: Object,
    feat: Object
  },
  computed: {
    prettyLevel: function() {
      var pretty;
      switch(this.feat.level) {
        case 0:
          pretty = "Basic"
          break;
        case 1:
          pretty = "1st level";
          break;
        case 2:
          pretty = "2nd level"
          break;
        case 3:
          pretty = "3rd level"
          break;
        default:
          pretty = this.feat.level + "th level"
      }
      return pretty;
    },
    icons: function() {
      return Icons;
    },
    prettyDescription() {
      return TextBeautifier.beautify(this.feat.description);
    },
    prettyEffect() {
      return TextBeautifier.beautify(this.feat.effect);
    },
    prettyHigherLevel() {
      return TextBeautifier.colorize(this.feat.atHigherLevel).replace('<p>', `<p><img src="${require('@/assets/images/icons/spell_features/scalable.png')}"> `);
    }
  },
  methods: {
    favorited() {
      return this.app.settings.favorites.has(this.feat.codename);
    },
    helpFor(topic) {
      this.helpTopic = topic;
      this.$bvModal.show("helpModal");
    },
    favoriteFeat() {
      if (this.favorited()) {
        this.app.settings.favorites.delete(this.feat.codename);
      } else {
        this.app.settings.favorites.add(this.feat.codename);
      }
      this.$forceUpdate(); // OPTIMIZE: Vue does not react to changes within the Set, so this was required. Look for a more elegant way?
      this.app.settingsDatabase.saveToStorage();
    }
  }
}
</script>

<style>
.feat-details {
  padding-top: 10px;
  text-align: left;
  font-size: 16px;
}
.feat-head {
  display: flex;
  justify-content: space-between;
}
.feat-title {
  padding-left: 10px;
  width: 100%;
}
.feat-actions img {
  width: 24px;
  transition: filter 0.3s, opacity 0.3s;
  opacity: 0.3;
  filter: saturate(0%);
}
.favorited > img {
  filter: saturate(100%);
  opacity: 1;
}
.feat-actions > div {
  cursor: pointer;
  padding: 3px;
}
.feat-name {
  font-size: 22px;
  font-weight: bold;
}
.feat-type {
  font-size: 16px;
  font-style: italic;
}
.feat-category {
  flex-grow: 0;
  height: 64px;
}
.feat-features {
  margin: 5px 0px !important; /* It shows an unnecessary vertical scrollbar if margin-right is left inherited */
  padding: 8px 0px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}
.feat-features img, .mobile-foot img {
  height: 26px;
}
.feat-description {
  text-align: justify;
  margin-bottom: -15px;
}
.sx-die rt {
  margin-bottom: -3px;
  opacity: 0.3;
}
.feat-higher {
  border: 1px dashed #686666;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  border-radius: 8px;
}
.feat-higher img {
  height: 22px;
  margin-right: 4px;
}
.feat-higher p {
  margin-bottom: 0;
}
.feat-damage {
  border: 1px dashed #98cfcf;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.feat-damage img {
  height: 22px;
  margin-right: 4px;
}
.feat-damage p {
  margin-bottom: 0;
}
.sx-distance { color: #b3d0ff; }
.sx-time { color: #d3b3ff; }
.sx-weight { color: #ffb3b3; }
.sx-sthrow { color: #fff7b3; }
.sx-advantage { color: #b3ffb8; }
.sx-disadvantage { color: #ffb3b3; }
.sx-life { color: #ffb3b3; }
.sx-blue { color: #0000FF; }
.sx-focus { color: #32a8a6; }
.sx-attack { color: #ffcab3; }
.sx-die { color: #ffeab3; }
.sx-description { color: #7DD962; }

/* Make favorite hover effect work only on non-touch devices, because otherwise it looks favorited after un-favoriting */
@media (pointer: fine) {
  .feat-close:hover img, .feat-favorite:hover img {
    filter: saturate(100%);
    opacity: 1;
  }
}
/* Make favorite button easier to touch on mobile */
@media (max-width: 767px) {
  .feat-favorite {
    padding: 15px !important;
  }
  .feat-favorite > img {
    width: 32px;
  }
}
</style>
