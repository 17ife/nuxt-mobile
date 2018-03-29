<template>
	<div class="container">
		<div>form</div>
		<button @click="btn">click me</button>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  mounted(){
    this.init()
  },
  computed:{
    ...mapGetters([
      'urlGetter',
    ])
  },
  methods: {
    init: function() {

    },
    btn: function() {
      this.$toast("Hello world!");
    }
  }
};

</script>
