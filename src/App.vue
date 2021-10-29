<template>
  <div id="app">
      <div class="app-contents">
        <router-view></router-view>
		  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons )
export default {
}
</script>

<style lang="scss">
</style>
