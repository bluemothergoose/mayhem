
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8">
      <h1 class="my-4">Stats<img :src="require('@/assets/images/icons/menu/stats.png')"/></h1>
      <p>Total spells: <b>{{ app.spells.length }}</b> ({{ app.settings.favorites.size }} favorites)</p>
      <p>Sources:
        <ul>
          <li v-for="source of app.contentDatabase.data.sources">
            <b>{{ source.name }}</b> <span class="source-version">(v{{ source.version }})</span>: {{ source.spells.length }} spells
          </li>
        </ul>
      </p>
      <div class="row">
        <div class="col-12 col-sm-4">
          <p><b>By school</b></p>
          <p v-for="school in app.schools">
            <img class="stats-icon" :src="icons.schoolIcon({school})"/> {{ stats.schools[school] }} {{ school }}
          </p>
        </div>
        <div class="col-12 col-sm-4">
          <p><b>By level</b></p>
          <p v-for="level in [0,1,2,3,4,5,6,7,8,9,10]">
            <span class="level">{{ level }}</span>  {{ stats.levels[level] }} spells
          </p>
        </div>
        <div class="col-12 col-sm-4">
          <p><b>By class</b></p>
          <p v-for="className in app.classes">
            <img class="stats-icon" :src="icons.classIcon(className)"/>  {{ stats.classes[className] }} {{ className }} spells
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .stats-icon {
    height: 26px;
  }
  .source-version {
    color: #aaa;
    font-size: 70%;
  }
</style>
<script>
import Icons from '@/util/icons.js'

export default {
  name: 'StatsPage',
  props: {
    app: Object
  },
  computed: {
    stats: function() {
      var schools = { 'arcane': 0, 'black earth': 0, 'black fire': 0, 'black ice': 0, 'black lightning': 0, 'black water': 0, 'black wind': 0, 'blood': 0, 'bluefire': 0, 'celestial': 0, 'cyclone': 0, 'dragonfire': 0, 'earth': 0, 'fire': 0, 'frost': 0, 'hellfire': 0, 'hybrid': 0, 'hydro': 0, 'ice': 0, 'immolation': 0, 'lava': 0, 'lightning': 0, 'magic': 0, 'neg energy': 0, 'nightmare': 0, 'nova': 0, 'shadow': 0, 'shadowfire': 0, 'shadowfrost': 0, 'sonic': 0, 'spiritual': 0, 'summon': 0, 'tectonic': 0, 'water': 0, 'wind': 0 };
      var levels = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
      var classes = { hell: 0, summoner: 0, elemental: 0, holy: 0, derathian: 0, sorcerer: 0, angelic: 0, vampire: 0, mutation: 0, evolution: 0, dragon: 0, spiritual: 0, lycan: 0, fury: 0, all: 0 };
      var categories = {combat: 0, adventuring: 0, proficiency: 0, mastery: 0, natural: 0};
      for (var s of this.app.spells) {
        schools[s.school]++;
        categories[s.category]++;
        levels[s.level]++;
        s.classes.forEach(c => classes[c]++);
      }
      return { schools, categories, levels, classes };
    },
    icons: function() {
      return Icons;
    }
  }
}
</script>
