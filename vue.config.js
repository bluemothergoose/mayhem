module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      exclude: /mayhem_v4\.json$/
    }
  }
} 