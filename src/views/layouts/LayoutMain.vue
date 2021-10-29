<template>
  <div>
    <vcube-header></vcube-header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import vcube_header from '../../components/include/header.vue'

export default {
    components:{
        'vcube-header' : vcube_header
    }
}
</script>

<style scoped>

</style>