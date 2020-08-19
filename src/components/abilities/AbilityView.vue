
<template>
  <div class="ability-details">
    <div class="ability-head">
      <img :src="icons.categoryIcon(ability)" class="ability-category" @click="helpFor('categories')" title="Category (click for more)"/>
      <div class="ability-title">
        <div class="ability-name">{{ ability.name }}</div>
        <div class="ability-type">{{ prettyLevel }} {{ ability.category }}</div>
      </div>
      <div class="ability-actions">
        <div class="ability-close d-none d-md-block" @click="$emit('clear-ability')">
          <img :src="require('@/assets/images/icons/misc/close.png')"/>
        </div>
        <div :class="`ability-favorite ${favorited() ? 'favorited' : ''}`" @click="favoriteAbility">
          <img :src="require('@/assets/images/icons/misc/favorite.png')"/>
        </div>
      </div>
    </div>
    <div class="row ability-features">
      <div class="col-6 col-lg-4 col-xl-3">
        <img :src="icons.rangeIcon(ability)" title="Range"/> {{ ability.range }}<br/>
        <img :src="icons.durationIcon(ability)" title="Duration"/> {{ ability.duration }}<br/>
        <img :src="icons.castingIcon(ability)" title="Casting time"/> {{ ability.casting }}<br/>
        <div @click="helpFor('classes')" title="Classes (click for more)">
          <img v-for="icon in icons.classIcons(ability)" :src="`${icon}`" :key="icon"/>
        </div>
        <template v-if="ability.concentration"><img :src="require('@/assets/images/icons/spell_features/concentration.png')" title="Ability requires concentration"/> Concentration<br/></template>
        <template v-if="ability.ritual" title="Ability can be cast as ritual"><img :src="require('@/assets/images/icons/spell_features/ritual.png')"/> Ritual</template>
      </div>
      <div class="col-6 col-lg-4 col-xl-3">
        <div title="Which book/source this ability originates from">
          <img :src="require('@/assets/images/icons/spell_features/source.png')"/> {{ ability.source }}
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-4 col-xl-6">
        <div v-if="ability.material > 0" title="Materials" v-html="ability.materials"></div>
      </div>
    </div>
    <div class="ability-description" v-html="prettyDescription"></div>
    <div v-if="ability.cost" v-html="prettyCost" class="ability-description">
    </div>
    <div v-if="ability.damage" v-html="prettyDamage" class="ability-description">
    </div>
    <div class="ability-description" v-if="ability.effect" v-html="prettyEffect"></div>
    <div v-if="ability.atHigherLevel" v-html="prettyHigherLevel" class="ability-higher">
    </div>
    <Diagram :range="numericRange" :aoe="ability.aoe" title="Range visualization"/>
    <div class="d-block d-lg-none mobile-foot">
      <img :src="require('@/assets/images/icons/spell_features/source.png')" title="Which book/source this ability originates from"/> {{ ability.source }}<br/>
      <div v-if="ability.material > 0" title="Materials" v-html="prettyMaterials"></div>
    </div>
    <HelpModal :app="app" :topic="helpTopic"/>
  </div>
</template>

<script>
import HelpModal from './HelpModal.vue'
import Diagram from './Diagram.vue'
import Icons from '@/util/icons.js'
import TextBeautifier from '@/util/textBeautifier.js'

export default {
  name: 'AbilityView',
  components: {
    HelpModal,
    Diagram
  },
  data: () => { return {
    helpTopic: null
  }},
  props: {
    app: Object,
    ability: Object
  },
  computed: {
    prettyLevel: function() {
      var pretty;
      switch(this.ability.level) {
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
          pretty = this.ability.level + "th level"
      }
      return pretty;
    },
    icons: function() {
      return Icons;
    },
    prettyDescription() {
      return TextBeautifier.beautify(this.ability.description);
    },
    prettyEffect() {
      return TextBeautifier.beautify(this.ability.effect);
    },
    prettyCost() {
      return TextBeautifier.beautify(this.ability.cost);
    },
    prettyHigherLevel() {
      return TextBeautifier.colorize(this.ability.atHigherLevel).replace('<p>', `<p><img src="${require('@/assets/images/icons/spell_features/scalable.png')}"> `);
    },
    // Returns an integer corresponding to the spell's range in feet, or 0 if it's Self/Touch/unrecognized
    numericRange() {
      const match = this.ability.range.match(/(\d+) feet/);
      return match ? parseInt(match[1]) : 0;
    }
  },
  methods: {
    favorited() {
      return this.app.settings.favorites.has(this.ability.codename);
    },
    helpFor(topic) {
      this.helpTopic = topic;
      this.$bvModal.show("helpModal");
    },
    favoriteAbility() {
      if (this.favorited()) {
        this.app.settings.favorites.delete(this.ability.codename);
      } else {
        this.app.settings.favorites.add(this.ability.codename);
      }
      this.$forceUpdate(); // OPTIMIZE: Vue does not react to changes within the Set, so this was required. Look for a more elegant way?
      this.app.settingsDatabase.saveToStorage();
    }
  }
}
</script>

<style>
.ability-details {
  padding-top: 10px;
  text-align: left;
  font-size: 16px;
}
.ability-head {
  display: flex;
  justify-content: space-between;
}
.ability-title {
  padding-left: 10px;
  width: 100%;
}
.ability-actions img {
  width: 24px;
  transition: filter 0.3s, opacity 0.3s;
  opacity: 0.3;
  filter: saturate(0%);
}
.favorited > img {
  filter: saturate(100%);
  opacity: 1;
}
.ability-actions > div {
  cursor: pointer;
  padding: 3px;
}
.ability-name {
  font-size: 22px;
  font-weight: bold;
}
.ability-type {
  font-size: 16px;
  font-style: italic;
  text-transform: capitalize;
}
.ability-category {
  flex-grow: 0;
  height: 64px;
}
.ability-features {
  margin: 5px 0px !important; /* It shows an unnecessary vertical scrollbar if margin-right is left inherited */
  padding: 8px 0px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}
.ability-features img, .mobile-foot img {
  height: 26px;
}
.ability-description {
  text-align: justify;
  margin-bottom: -15px;
}
.sx-die rt {
  margin-bottom: -3px;
  opacity: 0.3;
}
.ability-higher {
  border: 1px dashed #686666;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 25px;
  border-radius: 8px;
}
.ability-higher img {
  height: 22px;
  margin-right: 4px;
}
.ability-higher p {
  margin-bottom: 0;
}
.ability-damage {
  border: 1px dashed #98cfcf;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.ability-damage img {
  height: 22px;
  margin-right: 4px;
}
.ability-damage p {
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
  .ability-close:hover img, .ability-favorite:hover img {
    filter: saturate(100%);
    opacity: 1;
  }
}
/* Make favorite button easier to touch on mobile */
@media (max-width: 767px) {
  .ability-favorite {
    padding: 15px !important;
  }
  .ability-favorite > img {
    width: 32px;
  }
}
</style>
