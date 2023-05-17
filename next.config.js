const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  register: 'true',
  sw: 'service-worker.js'
})