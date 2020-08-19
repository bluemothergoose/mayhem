<!-- Page where users can view and install app updates, if available. -->
<template>
  <div class="row text-left justify-content-center">
    <div class="col-12 col-md-10 col-xl-8">
      <h1 class="my-4">Updates<img :src="require('@/assets/images/icons/misc/update.png')" style="filter: brightness(0.5);"></h1>
      <div v-if="app.appUpdateAvailable">
        <div>
          <p>A new version of the app is ready to be installed!</p>
        </div>
      </div>
      <div v-else>
        <p><span style="color:#5fc611">✓</span> No application updates are awaiting installation.</p>
      </div>
      <p>Current version: <b>{{ app.version }}</b></p>
      <button v-if="app.appUpdateAvailable" @click="updateNow()" :disabled="applyingNewVersion" class="btn btn-primary">
        <img :src="require('@/assets/images/icons/misc/sync.png')" style="width: 20px; opacity: 0.5"/> Update now
      </button>
    </div>
  </div>
</template>
<style>
</style>
<script>

export default {
  name: 'UpdatesPage',
  props: {
    app: Object
  },
  data() {
    return {
      applyingNewVersion: false
    }
  },
  methods: {
    updateNow() {
      this.applyingNewVersion = true;
      navigator.serviceWorker.getRegistration().then(reg => {
        try {
          reg.waiting.postMessage('skipWaiting');
          window.location.reload();
        } catch(e) {
          this.app.alert("Sorry, we couldn't apply the update. Please try restarting the app.");
          console.error("Couldn't load the updated service worker: " + e);
          this.applyingNewVersion = false;
        }
      });
    }
  }
}
</script> 