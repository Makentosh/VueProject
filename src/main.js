import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import BuyModalComponent from '@/components/Shared/BuyModal'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
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
    this.$store.dispatch('fetchAds')
  }
})
