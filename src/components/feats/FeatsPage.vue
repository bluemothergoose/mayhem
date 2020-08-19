
<template>
  <div>
    <FeatSearcher :app="app" :class="panelIsOpen ? 'd-none d-md-flex' : ''" :query="query" :detailedModeOn="detailedModeOn" @toggleDetailedView="toggleDetailedView"/>
    <div class="row results">
      <div :class="detailedModeOn ? (panelIsOpen ? 'd-none' : 'd-block col-12') : (panelIsOpen ? 'col-md-6 col-lg-4 d-none d-md-block' : 'col-12')">
        <FeatList :app="app" :query="query" :panelIsOpen="panelIsOpen" :selectedFeat="selectedFeat" :detailedModeOn="detailedModeOn" @feat-clicked="openFeat" class="scrollable-panel feat-list"/>
      </div>
      <FeatView :app="app" v-if="panelIsOpen" :feat="selectedFeat" @clear-feat="clearFeat" :class="`${detailedModeOn ? 'col-12' : 'col-md-6 col-lg-8'} scrollable-panel feat-view`"/>
    </div>
    <div v-if="updateAvailable" class="update-notice" @click="$router.push('/import?action=updateSRD')">
      <img :src="require('@/assets/images/icons/misc/sync.png')" style="width: 18px"/> Updated content is available. Click here to load.
    </div>
  </div>
</template>

<script>
import FeatList from './FeatList.vue'
import FeatSearcher from './FeatSearcher.vue'
import FeatView from './FeatView.vue'

export default {
  name: 'FeatsPage',
  components: {
    FeatList,
    FeatSearcher,
    FeatView
  },
  props: {
    app: Object,
    urlFeatName: String
  },
  data: function() { return {
    query: { text: '', level: "", class: "", category: "", includeDescription: false, favorites: false },
    selectedFeat: null,
    detailedModeOn: false
  }},
  computed: {
    // True if a feat's detailed view is open
    panelIsOpen: function() {
      return this.selectedFeat != null;
    },
    // Determines whether the user's content database contains an outdated version of the SRD database
    updateAvailable: function() {
      return this.app.contentDatabase.data.sources.some(s =>
        s.name == 'SRD 5.1' && (s.version < this.app.srdVersion || typeof(s.version) != "number")
      );
    }
  },
  methods: {
    openFeat: function(key) {
      // Save the currently opened feat in the URL. This has two benefits:
      // - Each feat can be directly accessed by its own URL
      // - Going back in history takes us back to the feat we were before, or to the list if none. This is essential in mobile so that the back button doesn't make us leave the feats page, but return to the list.
      this.$router.push('/feats/' + key);
    },
    clearFeat: function() {
      this.$router.push('/feats');
    },
    toggleDetailedView: function() {
      this.detailedModeOn = !this.detailedModeOn;
    },
    loadFeatInURL() {
      if (this.urlFeatName) {
        this.selectedFeat = this.app.feats.find(s => s.codename == this.urlFeatName);
      } else {
        this.selectedFeat = null;
      }
    }
  },
  created: function() {
    // Redirect to import page if there is no database loaded
    if (this.app.feats.length == 0) {
      this.$router.push('/import');
    }
    this.loadFeatInURL();
  },
  watch: {
    '$route': function() {
      this.loadFeatInURL();
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
    /* On mobile, the feat list is further down because the search filters take up two rows instead of one */
    .feat-list {
      max-height: calc(100vh - 130px);
    }
    /* On mobile, the feat view takes up the whole screen (except navbar), without having the search bar above */
    .feat-view {
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
