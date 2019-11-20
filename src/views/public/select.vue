<template>
  <div class="select-box" v-if="!loading">
    <img src="https://d.devnow.cn/travelclub2019/images/ic-arrow-down.png" class="ic-down" v-if="!sel_data.disabled"/>
    <div class="val-show" @click="seltrigger">
    	{{ val.name || tips }}
    </div>
    <div class="val-options" :id="'albox' + name">
    	<a @click="setrigger(sel)" v-bind:class="{'on': (sel.val === val.val)}" v-for="sel in selections">{{ sel.name }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['sel_data'],
    data() {
      return {
        selections: [
        ],
        val: {
          name: '',
          val: ''
        },
        tips: '请选择',
        name: '',
        loading: false
      }
    },
    methods: {
      seltrigger() {
        if(this.sel_data.disabled) return;
        this.sel_el.toggle();
      },
      setrigger(_sel) {
        this.val.name = _sel.name;
        this.val.val = _sel.val;
        this.sel_data.val = _sel.val;
        this.sel_el.toggle();
      }
    },
    mounted() {
      this.selections = this.sel_data.selections;
      this.sel_data.selections && this.sel_data.selections.forEach((_sel) => {
        if(_sel.val === this.sel_data.val) {
          this.val = _sel;
        }
      });
      this.tips = this.sel_data.tips;
      this.name = this.sel_data.name;
      this.loading = false;
      setTimeout(() => {
        this.sel_el = $('#albox' + this.name);
      })
    }
  }
</script>

<style scoped>
  
</style>


// WEBPACK FOOTER //
// src/views/public/select.vue