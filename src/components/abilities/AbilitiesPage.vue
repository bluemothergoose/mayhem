
<template>
  <div>
    <AbilitySearcher :app="app" :class="panelIsOpen ? 'd-none d-md-flex' : ''" :query="query" :detailedModeOn="detailedModeOn" @toggleDetailedView="toggleDetailedView"/>
    <div class="row results">
      <div :class="detailedModeOn ? (panelIsOpen ? 'd-none' : 'd-block col-12') : (panelIsOpen ? 'col-md-6 col-lg-4 d-none d-md-block' : 'col-12')">
        <AbilityList :app="app" :query="query" :panelIsOpen="panelIsOpen" :selectedAbility="selectedAbility" :detailedModeOn="detailedModeOn" @ability-clicked="openAbility" class="scrollable-panel ability-list"/>
      </div>
      <AbilityView :app="app" v-if="panelIsOpen" :ability="selectedAbility" @clear-ability="clearAbility" :class="`${detailedModeOn ? 'col-12' : 'col-md-6 col-lg-8'} scrollable-panel ability-view`"/>
    </div>
    <div v-if="updateAvailable" class="update-notice" @click="$router.push('/import?action=updateSRD')">
      <img :src="require('@/assets/images/icons/misc/sync.png')" style="width: 18px"/> Updated content is available. Click here to load.
    </div>
  </div>
</template>

<script>
import AbilityList from './AbilityList.vue'
import AbilitySearcher from './AbilitySearcher.vue'
import AbilityView from './AbilityView.vue'

export default {
  name: 'AbilitiesPage',
  components: {
    AbilityList,
    AbilitySearcher,
    AbilityView
  },
  props: {
    app: Object,
    urlAbilityName: String
  },
  data: function() { return {
    query: { text: '', level: "", class: "", category: "", includeDescription: false, favorites: false },
    selectedAbility: null,
    detailedModeOn: false
  }},
  computed: {
    // True if a ability's detailed view is open
    panelIsOpen: function() {
      return this.selectedAbility != null;
    },
    // Determines whether the user's content database contains an outdated version of the SRD database
    updateAvailable: function() {
      return this.app.contentDatabase.data.sources.some(s =>
        s.name == 'SRD 5.1' && (s.version < this.app.srdVersion || typeof(s.version) != "number")
      );
    }
  },
  methods: {
    openAbility: function(key) {
      // Save the currently opened ability in the URL. This has two benefits:
      // - Each ability can be directly accessed by its own URL
      // - Going back in history takes us back to the ability we were before, or to the list if none. This is essential in mobile so that the back button doesn't make us leave the abilities page, but return to the list.
      this.$router.push('/abilities/' + key);
    },
    clearAbility: function() {
      this.$router.push('/abilities');
    },
    toggleDetailedView: function() {
      this.detailedModeOn = !this.detailedModeOn;
    },
    loadAbilityInURL() {
      if (this.urlAbilityName) {
        this.selectedAbility = this.app.abilities.find(s => s.codename == this.urlAbilityName);
      } else {
        this.selectedAbility = null;
      }
    }
  },
  created: function() {
    // Redirect to import page if there is no database loaded
    if (this.app.abilities.length == 0) {
      this.$router.push('/import');
    }
    this.loadAbilityInURL();
  },
  watch: {
    '$route': function() {
      this.loadAbilityInURL();
    }
  }
}
</script>

<style>
  .scrollable-panel {
    max-height: calc(100vh - 90px);
    overflow-y: scroll;
    scrollbar-color: #282828 #1b1b1b;
  }
  @media(max-width: 768px) {
    /* On mobile, the ability list is further down because the search filters take up two rows instead of one */
    .ability-list {
      max-height: calc(100vh - 130px);
    }
    /* On mobile, the ability view takes up the whole screen (except navbar), without having the search bar above */
    .ability-view {
      max-height: calc(100vh - 50px);
    }
  }
  .update-notice {
    position: fixed;
    bottom: 0;
    background-color: #264c66;
    width: 100%;
    margin-left: -15px;
    padding: 5px;
    border-top: 3px solid #3877a2;
    text-align: center;
    cursor: pointer;
  }
</style>
