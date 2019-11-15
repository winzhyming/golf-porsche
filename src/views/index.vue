<template>
  <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
    <router-view></router-view>
  </transition>
  <!-- <transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <router-view></router-view>
  </transition> -->
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    data() {
      return {
        transitionName: ''
      }
    },
    computed:{
      ...mapState({
        direction: state => state.mutations.direction,
      })
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/index.vue