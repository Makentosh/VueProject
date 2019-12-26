// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    fb.initializeApp({
      apiKey: 'AIzaSyAte_uqrKfclV-CqsiP-dk-l4RFOFPSvfo',
      authDomain: 'vueproject-5f321.firebaseapp.com',
      databaseURL: 'https://vueproject-5f321.firebaseio.com',
      projectId: 'vueproject-5f321',
      messagingSenderId: '1021477827930',
      storageBucket: 'vueproject-5f321.appspot.com',
      appId: '1:1021477827930:web:6e9b8ba6c7b7329c022f63'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
