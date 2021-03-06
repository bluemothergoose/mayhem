
<template>
  <div class="row spells" v-if="query.text != null || query.class || query.level || query.school">
    <template v-if="!detailedModeOn">
      <div v-for="s in app.spells" v-show="visible(s)" :key="s.codename" :class="`spell col-12 ${panelIsOpen ? (s.codename == selectedSpell.codename ? 'selected' : '') : 'col-md-6 col-lg-4 col-xl-3'}`" @click="spellClicked($event, s.codename)">
        <span class="level">{{ s.level }}</span>
        <img :src="icons.schoolIcon(s)" class="school"/> {{ s.name }}
      </div>
    </template>
    <template v-else>
      <div v-for="s in app.spells" v-show="visible(s)" :key="s.codename" class="spell col-12" @click="spellClicked($event, s.codename)">

        <img v-for="c in ['hell', 'summoner', 'elemental', 'holy', 'derathian', 'sorcerer', 'angelic', 'vampire', 'mutation', 'evolution', 'dragon', 'spiritual', 'fury', 'all']" :src="icons.classIcon(c)" :class="s.classes.includes(c) ? '' : 'absent'"/>
        <img :src="icons.aoeIcon(s)" :class="s.aoe ? '' : 'absent'"/>
        <img :src="icons.rangeIcon(s)"/>
        <img :src="icons.durationIcon(s)"/>
        <img :src="require('@/assets/images/icons/spell_features/concentration.png')" :class="s.concentration ? '' : 'absent'"/>
        <img :src="icons.castingIcon(s)"/>
        <img :src="require('@/assets/images/icons/spell_features/ritual.png')" :class="s.ritual ? '' : 'absent'"/>
        <img :src="require('@/assets/images/icons/spell_features/scalable.png')" :class="s.atHigherLevel ? '' : 'absent'"/>
        <img :src="require('@/assets/images/icons/misc/favorite.png')" :class="app.settings.favorites.has(s.codename) ? '' : 'absent'"/>
        <span class="level">{{ s.level }}</span>
        <img :src="icons.schoolIcon(s)" class="school"/>
        {{ s.name }}
      </div>
    </template>
  </div>
  <div v-else></div>
</template>

<script>
import Icons from '@/util/icons.js'
export default {
  name: 'SpellList',
  props: {
    app: Object,
    query: Object,
    panelIsOpen: Boolean,
    selectedSpell: Object,
    detailedModeOn: Boolean
  },
  computed: {
    icons: function() {
      return Icons;
    }
  },
  methods: {
    visible: function(spell) {
      if (this.query.class || this.query.level || this.query.school || this.query.favorites) {
        // Composite search (with filters)
        return (spell.codename.includes(this.query.text) || (this.query.includeDescription && spell.description.includes(this.query.text))) &&
          (!this.query.class || spell.classes.includes(this.query.class)) &&
          (!this.query.level || spell.level == this.query.level) &&
          (!this.query.school || spell.school == this.query.school) &&
          (!this.query.favorites || this.app.settings.favorites.has(spell.codename));
      } else {
        // Simple search (no filters)
        return this.query.text.length >= this.app.settings.minimumQueryLength && (spell.downcasedName.includes(this.query.text) || (this.query.includeDescription && spell.description.toLowerCase().includes(this.query.text)));
      }
    },
    spellClicked: function(event, key) {
      if (!this.selectedSpell) {
        const div = event.currentTarget;
        setTimeout(() => div.scrollIntoView({behavior: "smooth", block: "center"}), 100);
      }
      this.$emit("spell-clicked", key);
    }
  }
}
</script>

<style>
  .spells {
    padding: 3px;
    font-size: 16px;
    line-height: 1;
    color: #eee;
  }
  .spell {
    text-align: left;
    background-color: #212020;
    border: 2px solid #1b1b1b;
    border-radius: 4px;
    padding: 2px 6px !important;
    cursor: pointer;
    overflow-y: hidden;
    height: 34px;
  }
  .spell:hover, .spell.selected {
    background-color: #272727;
    border-color: #212121;
  }
  .spell:hover .school, .spell.selected .school {
    transform: scale(1.05);
    filter: brightness(1.4);
  }
  .spell img {
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
    .spells { font-size: 20px; }
  }
</style>
