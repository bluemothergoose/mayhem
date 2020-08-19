
<template>
  <div id="app">
    <Navbar :app="app"/>
    <main class="container-fluid">
      <router-view :app="app"></router-view>
    </main>
    <UpdateNotice v-if="app.appUpdateAvailable && this.$route.path != '/updates'"/>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Navbar from './Navbar.vue';
import SpellsPage from '../spells/SpellsPage.vue';
import StatsPage from './StatsPage.vue';
import ImportPage from './ImportPage.vue';
import SettingsPage from './SettingsPage.vue';
import OGLPage from './OGLPage.vue';
import TipsPage from './TipsPage.vue';
import AreasPage from './AreasPage.vue';
import AboutPage from './AboutPage.vue';
import ComingSoon from './ComingSoon.vue';
import RulesPage from './Rules.vue';
import AngelPage from '../races/Angel.vue';
import DerathianPage from '../races/Derathian.vue';
import EvolutionPage from '../races/Evolution.vue';
import HellPage from '../races/Hell.vue';
import HumanPage from '../races/Human.vue';
import LycanPage from '../races/Lycan.vue';
import MutationPage from '../races/Mutation.vue';
import SaitorianPage from '../races/Saitorian.vue';
import VampirePage from '../races/Vampire.vue';
import KnowledgesPage from './Knowledges.vue';
import TestPage from './TestPage.vue';
import NotFound from './NotFound.vue';
import FeatsPage from '../feats/FeatsPage.vue';
import AbilitiesPage from '../abilities/AbilitiesPage.vue';
import UpdatesPage from './UpdatesPage.vue';
import UpdateNotice from './UpdateNotice.vue';

import ContentDatabase from '@/util/contentDatabase.js';
import SettingsDatabase from '@/util/settingsDatabase.js';

const timeBetweenAppUpdateChecksInMs = 1000 * 60 * 60 * 1; // 1 hour
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SpellsPage },
    { path: '/spells/:urlSpellName', component: SpellsPage, props: true },
    { path: '/spells', component: SpellsPage },
    { path: '/rules', component: RulesPage },
    { path: '/races/angel', component: AngelPage },
    { path: '/races/derathian', component: DerathianPage },
    { path: '/races/evolution', component: EvolutionPage },
    { path: '/races/hell', component: HellPage },
    { path: '/races/human', component: HumanPage },
    { path: '/races/lycan', component: LycanPage },
    { path: '/races/mutation', component: MutationPage },
    { path: '/races/saitorian', component: SaitorianPage },
    { path: '/races/vampire', component: VampirePage },
    { path: '/knowledges', component: KnowledgesPage },
    { path: '/import', component: ImportPage },
    { path: '/stats', component: StatsPage },
    { path: '/settings', component: SettingsPage },
    { path: '/tips', component: TipsPage },
    { path: '/areas', component: AreasPage },
    { path: '/about', component: AboutPage },
    { path: '/ogl', component: OGLPage },
    { path: '/test', component: TestPage },
    { path: '/feats/:urlFeatName', component: FeatsPage, props: true },
    { path: '/feats', component: FeatsPage },
    { path: '/abilities/:urlAbilityName', component: AbilitiesPage, props: true },
    { path: '/abilities', component: AbilitiesPage },
    { path: '/updates', component: UpdatesPage },
    { path: '*', component: NotFound }
  ]
})

export default {
  name: 'app',
  router,
  components: {
    Navbar,
    UpdateNotice
  },
  data: () => {
    const contentDatabase = ContentDatabase.getFromStorageOrDefault();
    const settingsDatabase = SettingsDatabase.getFromStorageOrDefault();
    return {
      app: {
        version: '0.3.1',
        srdVersion: 11,
        contentDatabase,
        settingsDatabase,
        spells: contentDatabase.getSpells(),
        feats: contentDatabase.getFeats(),
        abilities: contentDatabase.getAbilities(),
        settings: settingsDatabase.getSettings(),
        classes: ['hell', 'summoner', 'elemental', 'holy', 'derathian', 'sorcerer', 'angelic', 'vampire', 'mutation', 'evolution', 'dragon', 'spiritual', 'lycan', 'fury', 'all'],
        schools: ['arcane', 'black earth', 'black fire', 'black ice', 'black lightning', 'black water', 'black wind', 'blood', 'bluefire', 'celestial', 'cyclone', 'dragonfire', 'earth', 'fire', 'frost', 'hellfire', 'hybrid', 'hydro', 'ice', 'immolation', 'lava', 'lightning', 'magic', 'neg energy', 'nightmare', 'nova', 'shadow', 'shadowfire', 'shadowfrost', 'sonic', 'spiritual', 'summon', 'tectonic', 'water', 'wind'],
        categories: ['combat', 'adventuring', 'proficiency', 'mastery', 'natural'],
        appUpdateAvailable: false // Whether an updated version of the app is awaiting activation
      },
      lastAppUpdateCheck: new Date()
  }},
  methods: {
    // Let the app know that there's a new app version available
    notifyUpdate(registration) {
      this.app.appUpdateAvailable = true;
    }
  },
  watch: {
    '$route': function() {
      /* Normally the browser would check for ServiceWorker updates every time the user
      navigates to a different page. But since this is a SPA, it only checks on application
      startup, so on the PWA it could take days to update. To fix that, we manually check
      every time the route changes. Limited to once every 1 hour since that's good enough. */
      if (new Date() - this.lastAppUpdateCheck > timeBetweenAppUpdateChecksInMs) {
        this.lastAppUpdateCheck = new Date();
        navigator.serviceWorker.getRegistration().then(reg => {
          if (reg) {
            reg.update();
          }
        });
      }
    }
  }
}
Vue.directive('focus', {
  inserted: function (el) {
    el.focus();
  }
})
</script>

<style>
  body {
    background-color: #1b1b1b !important;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background-color: #1b1b1b !important;
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif !important;
  }
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'), url(/fonts/ubuntu.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
</style>
